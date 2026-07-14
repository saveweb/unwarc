package unwarc

import (
	"bytes"
	"compress/bzip2"
	"errors"
	"fmt"
	"io"

	"github.com/klauspost/compress/gzip"
	"github.com/klauspost/compress/zstd"
	"github.com/ulikunitz/xz"
)

// RecordRef describes a scanned WARC record and how to reopen it after its
// location has been finalized.
type RecordRef struct {
	// Header is the parsed WARC record header: version plus named fields.
	Header RecordHeader
	// RawHeader preserves the serialized record-header bytes through the
	// terminating empty CRLF line.
	RawHeader []byte

	// ContentLength is the record-block length declared by Content-Length.
	ContentLength int64
	// HeaderLen is the byte length of RawHeader in the uncompressed record.
	HeaderLen int64
	// TrailerLen is the number of trailer bytes consumed after the record block.
	TrailerLen int64

	decode *recordDecodeContext

	location   RecordLocation
	rawPlan    *decodePlan
	blockIndex *blockIndex
	issues     []Issue
	finalized  bool
}

// recordDecodeContext contains immutable input-level state shared by every
// RecordRef produced from the same scanner or seek index.
type recordDecodeContext struct {
	source      RandomAccessSource
	compression Compression
	zstdOptions []zstd.DOption
}

func newRecordDecodeContext(source RandomAccessSource, compression Compression, zstdDicts [][]byte) *recordDecodeContext {
	context := &recordDecodeContext{
		source:      source,
		compression: compression,
	}
	if compression == CompressionZstd {
		context.zstdOptions = zstdDecoderOptions(zstdDicts)
	}
	return context
}

// Finalized reports whether the record location is complete. References
// returned by Scanner.Next are finalized before they are exposed; references
// exposed by RecordReader.Ref are finalized only after the record block reaches
// EOF or the RecordReader is closed.
func (r *RecordRef) Finalized() bool {
	return r != nil && r.finalized
}

// Location returns the finalized record location. The second result is false
// while a streaming RecordReader is still active.
func (r *RecordRef) Location() (RecordLocation, bool) {
	if !r.Finalized() {
		return RecordLocation{}, false
	}
	return r.location, true
}

// Issues returns non-fatal diagnostics discovered while scanning the record.
func (r *RecordRef) Issues() []Issue {
	if !r.Finalized() {
		return nil
	}
	return append([]Issue(nil), r.issues...)
}

// BlockIndex returns optional frame-level block mappings. The returned slice is
// independent of the RecordRef and may be modified by the caller.
func (r *RecordRef) BlockIndex() (BlockIndex, bool) {
	if !r.Finalized() {
		return BlockIndex{}, false
	}
	return r.blockIndex.snapshot()
}

func (r *RecordRef) finalize(resolution recordResolution) {
	r.location = resolution.location
	r.rawPlan = resolution.raw
	r.blockIndex = resolution.block
	r.issues = append(r.issues[:0], resolution.issues...)
	r.finalized = true
}

// OpenRaw opens the complete uncompressed record bytes, including the WARC
// record header, record block, and trailer.
func (r *RecordRef) OpenRaw() (io.ReadCloser, error) {
	if !r.Finalized() {
		return nil, ErrRecordLocationPending
	}
	return r.openDecodePlan(r.rawPlan)
}

// OpenBlock opens the WARC record block declared by Content-Length.
func (r *RecordRef) OpenBlock() (io.ReadCloser, error) {
	if !r.Finalized() {
		return nil, ErrRecordLocationPending
	}
	if r.ContentLength == 0 {
		return io.NopCloser(bytes.NewReader(nil)), nil
	}
	if plan, ok := r.blockIndex.plan(0, r.ContentLength); ok {
		return r.openDecodePlan(plan)
	}
	return r.openDecodePlan(r.rawPlan.subrange(r.HeaderLen, r.ContentLength))
}

// OpenBlockRange opens a byte range within the WARC record block.
// When block-frame metadata is available, it reopens only the compressed
// frames overlapping the requested block range; otherwise it falls back to
// OpenBlock and discards bytes before off.
func (r *RecordRef) OpenBlockRange(off, size int64) (io.ReadCloser, error) {
	if off < 0 || size < 0 {
		return nil, fmt.Errorf("invalid block range off=%d size=%d", off, size)
	}
	if !r.Finalized() {
		return nil, ErrRecordLocationPending
	}
	if off >= r.ContentLength || size == 0 {
		return io.NopCloser(bytes.NewReader(nil)), nil
	}
	if end := off + size; end < off || end > r.ContentLength {
		size = r.ContentLength - off
	}

	if plan, ok := r.blockIndex.plan(off, size); ok {
		return r.openDecodePlan(plan)
	}
	return r.openDecodePlan(r.rawPlan.subrange(r.HeaderLen+off, size))
}

func (r *RecordRef) openDecodePlan(plan *decodePlan) (io.ReadCloser, error) {
	if plan == nil {
		return nil, fmt.Errorf("record is not lazy-loadable: %s", r.location.Access)
	}
	if r.decode == nil || r.decode.source == nil {
		return nil, fmt.Errorf("record has no random access source")
	}
	if !plan.decoded.Valid() {
		return nil, fmt.Errorf("invalid decoded range: %+v", plan.decoded)
	}

	input, err := openCompressedRanges(r.decode.source, plan.compressed)
	if err != nil {
		return nil, err
	}
	decoded, err := decodeCompressed(r.decode.compression, input, r.decode.zstdOptions)
	if err != nil {
		_ = input.Close()
		return nil, err
	}
	if plan.decoded.Off > 0 {
		if _, err := io.CopyN(io.Discard, decoded, plan.decoded.Off); err != nil {
			_ = decoded.Close()
			return nil, err
		}
	}
	return &readCloser{
		Reader: io.LimitReader(decoded, plan.decoded.Size),
		close:  decoded.Close,
	}, nil
}

func openCompressedRanges(source RandomAccessSource, ranges []Range) (io.ReadCloser, error) {
	if len(ranges) == 0 {
		return nil, fmt.Errorf("decode plan has no compressed ranges")
	}
	if len(ranges) == 1 {
		rr := ranges[0]
		if rr.Off < 0 {
			return nil, fmt.Errorf("invalid compressed range: %+v", rr)
		}
		if rr.Size < 0 {
			return source.OpenAt(rr.Off)
		}
		return source.OpenRange(rr.Off, rr.Size)
	}
	for _, rr := range ranges {
		if !rr.Valid() {
			return nil, fmt.Errorf("invalid compressed range: %+v", rr)
		}
	}
	return &multiReadCloser{
		source: source,
		ranges: append([]Range(nil), ranges...),
	}, nil
}

// Materialize reads the complete raw record into memory.
func (r *RecordRef) Materialize() (*Record, error) {
	raw, err := r.OpenRaw()
	if err != nil {
		return nil, err
	}
	data, readErr := io.ReadAll(raw)
	if err := errors.Join(readErr, raw.Close()); err != nil {
		return nil, err
	}
	return &Record{
		Ref:  r,
		Data: data,
	}, nil
}

// Record is a materialized WARC record.
type Record struct {
	Ref  *RecordRef
	Data []byte
}

func decodeCompressed(compression Compression, rc io.ReadCloser, zstdOptions []zstd.DOption) (io.ReadCloser, error) {
	switch compression {
	case CompressionPlain:
		return rc, nil
	case CompressionGzip:
		gr, err := gzip.NewReader(rc)
		if err != nil {
			return nil, err
		}
		return &readCloser{
			Reader: gr,
			close: func() error {
				err1 := gr.Close()
				err2 := rc.Close()
				if err1 != nil {
					return err1
				}
				return err2
			},
		}, nil
	case CompressionZstd:
		if len(zstdOptions) == 0 {
			zstdOptions = zstdDecoderOptions(nil)
		}
		zr, err := zstd.NewReader(rc, zstdOptions...)
		if err != nil {
			return nil, err
		}
		return &readCloser{
			Reader: zr,
			close: func() error {
				zr.Close()
				return rc.Close()
			},
		}, nil
	case CompressionBzip2:
		return &readCloser{
			Reader: bzip2.NewReader(rc),
			close:  rc.Close,
		}, nil
	case CompressionXZ:
		xr, err := xz.NewReader(rc)
		if err != nil {
			return nil, err
		}
		return &readCloser{
			Reader: xr,
			close:  rc.Close,
		}, nil
	default:
		return nil, fmt.Errorf("lazy decode unsupported for %s", compression)
	}
}

type multiReadCloser struct {
	source  RandomAccessSource
	ranges  []Range
	current io.ReadCloser
}

func (m *multiReadCloser) Read(p []byte) (int, error) {
	for {
		if m.current == nil {
			if len(m.ranges) == 0 {
				return 0, io.EOF
			}
			rr := m.ranges[0]
			m.ranges = m.ranges[1:]
			rc, err := m.source.OpenRange(rr.Off, rr.Size)
			if err != nil {
				return 0, err
			}
			m.current = rc
		}
		n, err := m.current.Read(p)
		if err == io.EOF {
			_ = m.current.Close()
			m.current = nil
			if n > 0 {
				return n, nil
			}
			continue
		}
		return n, err
	}
}

func (m *multiReadCloser) Close() error {
	if m.current != nil {
		err := m.current.Close()
		m.current = nil
		m.ranges = nil
		return err
	}
	m.ranges = nil
	return nil
}

// NewRecordFromBytes parses a single uncompressed WARC record from data.
func NewRecordFromBytes(data []byte) (_ *Record, err error) {
	source := NewReaderAtSource(bytes.NewReader(data), int64(len(data)), nil)
	scanner, err := NewScannerFromSource(source, ScannerOptions{Compression: CompressionPlain})
	if err != nil {
		return nil, err
	}
	defer func() {
		err = errors.Join(err, scanner.Close())
	}()
	if !scanner.Next() {
		if scanner.Err() != nil {
			return nil, scanner.Err()
		}
		return nil, io.EOF
	}
	ref := scanner.RecordRef()
	location, ok := ref.Location()
	if !ok {
		return nil, ErrRecordLocationPending
	}
	rawSize := location.Uncompressed.Size
	if rawSize < 0 || rawSize > int64(len(data)) {
		return nil, fmt.Errorf("record range outside input")
	}
	return &Record{Ref: ref, Data: data[:rawSize]}, nil
}
