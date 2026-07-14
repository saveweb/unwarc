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
	// gzip, zstd, or plain input from the stream or source name.
	Compression Compression

	// RequireRecordTrailer makes a missing, partial, or invalid WARC record
	// trailer fatal instead of recording IssueMissingRecordTrailer.
	RequireRecordTrailer bool

	// RequireZstdFrameContentSize rejects zstd frames without
	// Frame_Content_Size.
	RequireZstdFrameContentSize bool

	// RequireZstdFrameChecksum rejects zstd frames without Content_Checksum.
	RequireZstdFrameChecksum bool

	// RequireZstdRecordIsolation rejects a zstd frame that contributes bytes to
	// more than one WARC record. A single record may still span multiple frames.
	RequireZstdRecordIsolation bool

	// FoldedFields controls named-field continuation lines within the WARC
	// record header. The zero value accepts and unfolds them for WARC 1.0/1.1
	// compatibility. Rejecting them returns ErrFoldedWARCField.
	FoldedFields FoldedFieldPolicy

	// Resynchronize permits extra CRLF lines at record boundaries. The default
	// is false. It does not skip arbitrary bytes or relax header parsing.
	Resynchronize bool

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
	stream compressionStream
	opts   ScannerOptions
	decode *recordDecodeContext

	err error
	ref *RecordRef

	activeRecord *RecordReader
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
	stream, err := newCompressionStream(r, compression, opts.maxBufferedZstdFrameSize(), opts.zstdFrameRequirements())
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
	stream, err := newCompressionStream(rc, compression, opts.maxBufferedZstdFrameSize(), opts.zstdFrameRequirements())
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

const defaultMaxBufferedZstdFrameSize int64 = 16 << 20 // 16 MiB

func (o ScannerOptions) maxBufferedZstdFrameSize() int64 {
	if o.MaxBufferedZstdFrameSize < 0 {
		return 0
	}
	if o.MaxBufferedZstdFrameSize == 0 {
		return defaultMaxBufferedZstdFrameSize
	}
	return o.MaxBufferedZstdFrameSize
}

func (o ScannerOptions) zstdFrameRequirements() zstdFrameRequirements {
	return zstdFrameRequirements{
		contentSize: o.RequireZstdFrameContentSize,
		checksum:    o.RequireZstdFrameChecksum,
	}
}

// Close finalizes any active record and closes the underlying readers.
func (s *Scanner) Close() error {
	err := s.closeActiveRecord()
	if closer, ok := s.stream.(io.Closer); ok {
		err = errors.Join(err, closer.Close())
	}
	if s.rc != nil {
		err = errors.Join(err, s.rc.Close())
	}
	return err
}

// Next advances to the next record. It returns false on EOF or error; Err
// reports the final error.
func (s *Scanner) Next() bool {
	if s.err != nil {
		return false
	}
	if err := s.closeActiveRecord(); err != nil {
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

// NextRecord advances to the next WARC record and returns its streaming record
// reader. The reader exposes the parsed header and streams the record block.
// Trailer validation, location resolution, and non-fatal diagnostics are
// finalized when the block is exhausted or the record is closed. Advancing
// automatically closes and drains the previous record, returning any error
// produced while finalizing it.
//
// It returns io.EOF when no more records are available.
func (s *Scanner) NextRecord() (*RecordReader, error) {
	if s.err != nil {
		return nil, s.err
	}
	if err := s.closeActiveRecord(); err != nil {
		s.err = err
		return nil, err
	}

	ref, start, err := s.readRecordStart()
	if err != nil {
		if !errors.Is(err, io.EOF) {
			s.err = err
		}
		return nil, err
	}

	record := &RecordReader{
		scanner:   s,
		ref:       ref,
		start:     start,
		remaining: ref.ContentLength,
	}
	s.ref = ref
	s.activeRecord = record
	return record, nil
}

// RecordRef returns the current finalized record reference. It returns nil
// before the first record and while a NextRecord reader is still active. Use
// RecordReader.Ref to inspect header fields before the record is finalized.
func (s *Scanner) RecordRef() *RecordRef {
	if s.ref == nil || !s.ref.Finalized() {
		return nil
	}
	return s.ref
}

// Err returns the first non-EOF error encountered by the scanner.
func (s *Scanner) Err() error {
	if s.err == nil && s.activeRecord != nil {
		s.err = s.closeActiveRecord()
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
	rawHeader, err := readRecordHeader(s.stream, s.opts.Resynchronize)
	if err != nil {
		return nil, 0, err
	}
	start := s.stream.UncompOffset() - int64(len(rawHeader))
	header, contentLength, err := parseRecordHeaderWithOptions(rawHeader, s.opts.FoldedFields)
	if err != nil {
		return nil, 0, err
	}

	return &RecordRef{
		Header:        header,
		RawHeader:     rawHeader,
		ContentLength: contentLength,
		HeaderLen:     int64(len(rawHeader)),
		decode:        s.recordDecodeContext(),
	}, start, nil
}

func (s *Scanner) finishRecord(ref *RecordRef, start int64) error {
	issues := make([]Issue, 0)
	trailer, trailerIssues, err := readRecordTrailer(s.stream)
	if err != nil {
		if s.opts.RequireRecordTrailer {
			return fmt.Errorf("%w: %v", ErrMissingRecordTrailer, err)
		}
		issues = append(issues, Issue{Code: IssueMissingRecordTrailer, Message: err.Error()})
	} else {
		if len(trailerIssues) > 0 && s.opts.RequireRecordTrailer {
			return fmt.Errorf("%w: %s", ErrMissingRecordTrailer, trailerIssues[0].Message)
		}
		issues = append(issues, trailerIssues...)
	}

	end := s.stream.UncompOffset()
	if err := s.stream.Sync(); err != nil {
		return err
	}
	resolution := s.resolveRecord(Range{Off: start, Size: end - start})
	resolution.issues = append(resolution.issues, issues...)
	if err := s.recordIsolationError(resolution.issues); err != nil {
		return err
	}

	ref.TrailerLen = int64(len(trailer))
	ref.finalize(resolution)
	if pruner, ok := s.stream.(interface{ PruneCompletedBefore(int64) }); ok {
		pruner.PruneCompletedBefore(resolution.location.Uncompressed.End())
	}
	return nil
}

func (s *Scanner) closeActiveRecord() error {
	if s.activeRecord == nil {
		return nil
	}
	return s.activeRecord.Close()
}

// RecordReader is the active streaming view of one WARC record. Ref is
// available immediately after the record header is parsed, but its location is
// finalized only after Block reaches EOF or Close completes.
type RecordReader struct {
	scanner   *Scanner
	ref       *RecordRef
	start     int64
	remaining int64
	closed    bool
}

var _ io.ReadCloser = (*RecordReader)(nil)

// Ref returns the record reference associated with this reader. Header fields
// and ContentLength are available immediately; location-dependent operations
// require Ref().Finalized() to report true.
func (r *RecordReader) Ref() *RecordRef {
	if r == nil {
		return nil
	}
	return r.ref
}

// Block returns a reader for the WARC record block declared by Content-Length.
// The returned reader is owned by the RecordReader and must not be used after
// Close. Reading it to EOF finalizes the record.
func (r *RecordReader) Block() io.Reader {
	return r
}

// Read reads bytes from the WARC record block.
func (r *RecordReader) Read(p []byte) (int, error) {
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

// Close drains any unread block bytes, validates the record trailer, and
// finalizes the record reference and compression mapping.
func (r *RecordReader) Close() error {
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

func (r *RecordReader) finish() error {
	if r.closed {
		return nil
	}
	r.closed = true
	if r.scanner.activeRecord == r {
		r.scanner.activeRecord = nil
	}
	if err := r.scanner.finishRecord(r.ref, r.start); err != nil {
		r.scanner.err = err
		return err
	}
	return nil
}

func (r *RecordReader) fail(err error) {
	r.closed = true
	if r.scanner.activeRecord == r {
		r.scanner.activeRecord = nil
	}
	r.scanner.err = err
}

func (s *Scanner) recordIsolationError(issues []Issue) error {
	if !s.opts.RequireZstdRecordIsolation {
		return nil
	}
	for _, issue := range issues {
		if issue.Code == IssueFrameContainsMultipleRecords {
			return fmt.Errorf("%w: %s", ErrInvalidWARCZstd, issue.Message)
		}
	}
	return nil
}

func streamZstdDictionaries(stream compressionStream) [][]byte {
	zs, ok := stream.(interface{ PrefixDictionaries() [][]byte })
	if !ok {
		return nil
	}
	return zs.PrefixDictionaries()
}

func (s *Scanner) recordDecodeContext() *recordDecodeContext {
	if s.decode != nil {
		return s.decode
	}
	var zstdDicts [][]byte
	if s.source != nil {
		zstdDicts = streamZstdDictionaries(s.stream)
	}
	s.decode = newRecordDecodeContext(s.source, s.stream.Compression(), zstdDicts)
	return s.decode
}

func readRecordHeader(r io.Reader, resynchronize bool) ([]byte, error) {
	var raw bytes.Buffer
	for {
		// Here, I chose to read 1024 KB of data rather than reading until a CRLF
		// This prevents OOM from being hit when the user provides a massive non-WARC file.
		line, err := readLine(r, 1024*1024)
		if err != nil {
			return nil, err
		}
		if resynchronize && bytes.Equal(line, []byte("\r\n")) {
			continue
		}
		if !bytes.Equal(line, []byte("WARC/1.0\r\n")) && !bytes.Equal(line, []byte("WARC/1.1\r\n")) {
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
		if !bytes.HasSuffix(line, []byte("\r\n")) {
			return nil, ErrInvalidWARCHeader
		}
		if bytes.ContainsRune(line[:len(line)-2], '\r') {
			return nil, ErrInvalidWARCHeader
		}
		raw.Write(line)
		if bytes.Equal(line, []byte("\r\n")) {
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
	return CompressionPlain
}
