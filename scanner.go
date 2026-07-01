package unwarc

import (
	"bytes"
	"encoding/binary"
	"errors"
	"fmt"
	"io"
	"strings"
)

// ScannerOptions configures stream decompression and validation.
type ScannerOptions struct {
	// Compression selects the input envelope. Use CompressionUnknown to detect
	// gzip, zstd, bzip2, xz, or plain input from the stream or source name.
	Compression Compression

	// Strict upgrades malformed record trailers and WARC-zstd layout
	// violations to fatal scanner errors.
	Strict bool

	// MaxBufferedZstdFrameSize bounds the per-frame fast-path buffer used while
	// scanning WARC-zstd. Frames without Frame_Content_Size, frames whose
	// declared content size exceeds this value, or frames whose compressed bytes
	// cross this value are decoded as streams instead. The default is
	// 16 MiB. Set a negative value to force streaming for all zstd frames.
	MaxBufferedZstdFrameSize int64
}

// Scanner incrementally reads WARC records from a stream.
type Scanner struct {
	source RandomAccessSource
	rc     io.ReadCloser
	stream segmentStream
	opts   ScannerOptions

	err error
	ref *RecordRef

	activePayload *streamPayloadReader
}

// NewScanner creates a scanner over r. Lazy reopening is unavailable because
// plain readers do not provide random access.
func NewScanner(r io.Reader, opts ScannerOptions) (*Scanner, error) {
	compression := opts.Compression
	if compression == CompressionUnknown {
		var err error
		r, compression, err = detectCompressionFromStream(r)
		if err != nil {
			return nil, err
		}
	}
	stream, err := newSegmentStream(r, compression, opts.maxBufferedZstdFrameSize(), opts.Strict)
	if err != nil {
		return nil, err
	}
	return &Scanner{stream: stream, opts: opts}, nil
}

// NewScannerFromSource creates a scanner over source. Finalized RecordRef
// values can reopen record bytes lazily when their Access mode permits it.
func NewScannerFromSource(source RandomAccessSource, opts ScannerOptions) (*Scanner, error) {
	rc, err := source.Open()
	if err != nil {
		return nil, err
	}
	compression := opts.Compression
	if compression == CompressionUnknown {
		compression = detectCompressionFromName(source)
	}
	if compression == CompressionUnknown {
		var r io.Reader
		var err error
		r, compression, err = detectCompressionFromStream(rc)
		if err != nil {
			_ = rc.Close()
			return nil, err
		}
		rc = &readCloser{Reader: r, close: rc.Close}
	}
	stream, err := newSegmentStream(rc, compression, opts.maxBufferedZstdFrameSize(), opts.Strict)
	if err != nil {
		_ = rc.Close()
		return nil, err
	}
	return &Scanner{
		source: source,
		rc:     rc,
		stream: stream,
		opts:   opts,
	}, nil
}

const defaultMaxBufferedZstdFrameSize int64 = 16 << 20

func (o ScannerOptions) maxBufferedZstdFrameSize() int64 {
	if o.MaxBufferedZstdFrameSize < 0 {
		return 0
	}
	if o.MaxBufferedZstdFrameSize == 0 {
		return defaultMaxBufferedZstdFrameSize
	}
	return o.MaxBufferedZstdFrameSize
}

// Close closes the underlying source reader when the scanner owns one.
func (s *Scanner) Close() error {
	var err error
	if closer, ok := s.stream.(io.Closer); ok {
		err = closer.Close()
	}
	if s.rc != nil {
		if closeErr := s.rc.Close(); err == nil {
			err = closeErr
		}
	}
	return err
}

// Next advances to the next record. It returns false on EOF or error; Err
// reports the final error.
func (s *Scanner) Next() bool {
	if s.err != nil {
		return false
	}
	if err := s.closeActivePayload(); err != nil {
		s.err = err
		return false
	}
	ref, err := s.readRecord()
	if err != nil {
		if errors.Is(err, io.EOF) {
			return false
		}
		s.err = err
		return false
	}
	s.ref = ref
	return true
}

// NextPayload advances to the next record and returns a streaming reader for
// its content block. Callers must read the returned payload to EOF or close it
// before advancing again. The current RecordRef's trailer length, location, and
// non-fatal issues are finalized when the payload is exhausted or closed.
//
// It returns io.EOF when no more records are available.
func (s *Scanner) NextPayload() (*RecordRef, io.ReadCloser, error) {
	if s.err != nil {
		return nil, nil, s.err
	}
	if err := s.closeActivePayload(); err != nil {
		s.err = err
		return nil, nil, err
	}

	ref, start, err := s.readRecordStart()
	if err != nil {
		if !errors.Is(err, io.EOF) {
			s.err = err
		}
		return nil, nil, err
	}

	payload := &streamPayloadReader{
		scanner:   s,
		ref:       ref,
		start:     start,
		remaining: ref.ContentLength,
	}
	s.ref = ref
	s.activePayload = payload
	return ref, payload, nil
}

// RecordRef returns the current finalized record reference. It returns nil
// before the first record and while a NextPayload payload reader is still
// active. Use the reference returned by NextPayload to inspect header fields
// before the payload is exhausted or closed.
func (s *Scanner) RecordRef() *RecordRef {
	if s.ref == nil || !s.ref.Finalized() {
		return nil
	}
	return s.ref
}

// Err returns the first non-EOF error encountered by the scanner.
func (s *Scanner) Err() error {
	if s.err == nil && s.activePayload != nil {
		s.err = s.closeActivePayload()
	}
	return s.err
}

func (s *Scanner) readRecord() (*RecordRef, error) {
	ref, start, err := s.readRecordStart()
	if err != nil {
		return nil, err
	}
	if ref.ContentLength > 0 {
		if _, err := io.CopyN(io.Discard, s.stream, ref.ContentLength); err != nil {
			return nil, err
		}
	}
	if err := s.finishRecord(ref, start); err != nil {
		return nil, err
	}
	return ref, nil
}

func (s *Scanner) readRecordStart() (*RecordRef, int64, error) {
	start := s.stream.UncompOffset()
	rawHeader, err := readWARCHeader(s.stream)
	if err != nil {
		return nil, 0, err
	}
	header, contentLength, err := parseHeaderBlock(rawHeader)
	if err != nil {
		return nil, 0, err
	}

	return &RecordRef{
		Header:        header,
		RawHeader:     rawHeader,
		ContentLength: contentLength,
		HeaderLen:     int64(len(rawHeader)),
		Location: RecordLocation{
			Uncomp: Range{Off: start, Size: -1},
			Access: AccessPending,
		},
		source:      s.source,
		compression: s.stream.Compression(),
		zstdDicts:   streamZstdDictionaries(s.stream),
	}, start, nil
}

func (s *Scanner) finishRecord(ref *RecordRef, start int64) error {
	issues := make([]Issue, 0)
	trailer, trailerIssues, err := readRecordTrailer(s.stream)
	if err != nil {
		if s.opts.Strict {
			return fmt.Errorf("%w: %v", ErrMissingRecordTrailer, err)
		}
		issues = append(issues, Issue{Code: IssueMissingRecordTrailer, Message: err.Error()})
	} else {
		if len(trailerIssues) > 0 && s.opts.Strict {
			return fmt.Errorf("%w: %s", ErrMissingRecordTrailer, trailerIssues[0].Message)
		}
		issues = append(issues, trailerIssues...)
	}

	end := s.stream.UncompOffset()
	if err := s.stream.Sync(); err != nil {
		return err
	}
	loc := s.resolveLocation(Range{Off: start, Size: end - start})
	loc.Issues = append(loc.Issues, issues...)
	if err := s.strictIssueError(loc); err != nil {
		return err
	}

	ref.TrailerLen = int64(len(trailer))
	ref.Location = loc
	if pruner, ok := s.stream.(interface{ PruneCompletedBefore(int64) }); ok {
		pruner.PruneCompletedBefore(loc.Uncomp.End())
	}
	return nil
}

func (s *Scanner) closeActivePayload() error {
	if s.activePayload == nil {
		return nil
	}
	return s.activePayload.Close()
}

type streamPayloadReader struct {
	scanner   *Scanner
	ref       *RecordRef
	start     int64
	remaining int64
	closed    bool
}

func (r *streamPayloadReader) Read(p []byte) (int, error) {
	if r.closed {
		return 0, io.EOF
	}
	if r.remaining == 0 {
		if err := r.finish(); err != nil {
			return 0, err
		}
		return 0, io.EOF
	}
	if int64(len(p)) > r.remaining {
		p = p[:r.remaining]
	}
	n, err := r.scanner.stream.Read(p)
	if n > 0 {
		r.remaining -= int64(n)
	}
	if err != nil {
		r.fail(err)
		return n, err
	}
	if r.remaining == 0 {
		if err := r.finish(); err != nil {
			return n, err
		}
		return n, io.EOF
	}
	return n, nil
}

func (r *streamPayloadReader) Close() error {
	if r.closed {
		return nil
	}
	if r.remaining > 0 {
		if _, err := io.CopyN(io.Discard, r.scanner.stream, r.remaining); err != nil {
			r.fail(err)
			return err
		}
		r.remaining = 0
	}
	return r.finish()
}

func (r *streamPayloadReader) finish() error {
	if r.closed {
		return nil
	}
	r.closed = true
	if r.scanner.activePayload == r {
		r.scanner.activePayload = nil
	}
	if err := r.scanner.finishRecord(r.ref, r.start); err != nil {
		r.scanner.err = err
		return err
	}
	return nil
}

func (r *streamPayloadReader) fail(err error) {
	r.closed = true
	if r.scanner.activePayload == r {
		r.scanner.activePayload = nil
	}
	r.scanner.err = err
}

func (s *Scanner) strictIssueError(loc RecordLocation) error {
	if !s.opts.Strict || s.stream.Compression() != CompressionZstd {
		return nil
	}
	for _, issue := range loc.Issues {
		switch issue.Code {
		case IssueFrameContainsMultipleRecords, IssueZstdFrameMissingContentSize, IssueZstdFrameMissingChecksum:
			return fmt.Errorf("%w: %s", ErrInvalidWARCZstd, issue.Message)
		}
	}
	return nil
}

func streamZstdDictionaries(stream segmentStream) [][]byte {
	zs, ok := stream.(interface{ PrefixDictionaries() [][]byte })
	if !ok {
		return nil
	}
	return zs.PrefixDictionaries()
}

func readWARCHeader(r io.Reader) ([]byte, error) {
	var raw bytes.Buffer
	for {
		line, err := readLine(r, 1024*1024)
		if err != nil {
			if errors.Is(err, io.EOF) && raw.Len() == 0 {
				return nil, io.EOF
			}
			return nil, err
		}
		if len(line) == 0 {
			continue
		}
		trimmed := bytes.TrimRight(line, "\r\n")
		if len(trimmed) == 0 {
			continue
		}
		if !bytes.Equal(trimmed, []byte("WARC/1.0")) && !bytes.Equal(trimmed, []byte("WARC/1.1")) {
			return nil, ErrInvalidWARCHeader
		}
		raw.Write(line)
		break
	}

	for {
		line, err := readLine(r, 1024*1024)
		if err != nil {
			return nil, err
		}
		raw.Write(line)
		trimmed := bytes.TrimRight(line, "\r\n")
		if len(trimmed) == 0 {
			return raw.Bytes(), nil
		}
	}
}

func readLine(r io.Reader, max int) ([]byte, error) {
	var out bytes.Buffer
	var b [1]byte
	for out.Len() < max {
		n, err := r.Read(b[:])
		if n > 0 {
			out.WriteByte(b[0])
			if b[0] == '\n' {
				return out.Bytes(), nil
			}
		}
		if err != nil {
			if errors.Is(err, io.EOF) && out.Len() > 0 {
				return out.Bytes(), nil
			}
			return nil, err
		}
	}
	return nil, fmt.Errorf("line exceeds %d bytes", max)
}

func readRecordTrailer(r io.Reader) ([]byte, []Issue, error) {
	trailer := make([]byte, 4)
	n, err := io.ReadFull(r, trailer)
	if err != nil {
		return trailer[:n], nil, err
	}
	if bytes.Equal(trailer, []byte("\r\n\r\n")) {
		return trailer, nil, nil
	}
	return trailer, []Issue{{Code: IssueMissingRecordTrailer, Message: "record trailer is not CRLFCRLF"}}, nil
}

func detectCompressionFromName(source RandomAccessSource) Compression {
	if fs, ok := source.(FileSource); ok {
		path := strings.ToLower(fs.Path)
		switch {
		case strings.HasSuffix(path, ".warc.gz") || strings.HasSuffix(path, ".gz"):
			return CompressionGzip
		case strings.HasSuffix(path, ".warc.zst") || strings.HasSuffix(path, ".zst") ||
			strings.HasSuffix(path, ".warc.zstd") || strings.HasSuffix(path, ".zstd"):
			return CompressionZstd
		case strings.HasSuffix(path, ".bz2"):
			return CompressionBzip2
		case strings.HasSuffix(path, ".xz"):
			return CompressionXZ
		}
	}
	return CompressionUnknown
}

func detectCompressionFromStream(r io.Reader) (io.Reader, Compression, error) {
	prefix := make([]byte, 6)
	n, err := io.ReadFull(r, prefix)
	if err != nil && !errors.Is(err, io.EOF) && !errors.Is(err, io.ErrUnexpectedEOF) {
		return nil, CompressionUnknown, err
	}
	prefix = prefix[:n]
	compression := detectCompressionFromPrefix(prefix)
	return io.MultiReader(bytes.NewReader(prefix), r), compression, nil
}

func detectCompressionFromPrefix(prefix []byte) Compression {
	if len(prefix) >= 3 && prefix[0] == 0x1f && prefix[1] == 0x8b && prefix[2] == 0x08 {
		return CompressionGzip
	}
	if len(prefix) >= 4 {
		magic := binary.LittleEndian.Uint32(prefix[:4])
		switch magic {
		case zstdFrameMagic, zstdDictFrameMagic:
			return CompressionZstd
		}
	}
	if len(prefix) >= 4 && prefix[0] == 'B' && prefix[1] == 'Z' && prefix[2] == 'h' && prefix[3] >= '1' && prefix[3] <= '9' {
		return CompressionBzip2
	}
	if len(prefix) >= 6 && bytes.Equal(prefix[:6], []byte{0xFD, '7', 'z', 'X', 'Z', 0x00}) {
		return CompressionXZ
	}
	return CompressionPlain
}
