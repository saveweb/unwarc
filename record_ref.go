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
	HeaderLen  int64
	TrailerLen int64

	Location RecordLocation

	source      RandomAccessSource
	compression Compression
	zstdDicts   [][]byte
}

// Finalized reports whether the record location is complete. References
// returned by Scanner.Next are finalized before they are exposed; references
// exposed by RecordReader.Ref are finalized only after the record block reaches
// EOF or the RecordReader is closed.
func (r *RecordRef) Finalized() bool {
	return r != nil && r.Location.Final
}

// OpenRaw opens the complete uncompressed record bytes, including the WARC
// record header, record block, and trailer.
func (r *RecordRef) OpenRaw() (io.ReadCloser, error) {
	if !r.Location.Final {
		return nil, ErrRecordLocationPending
	}
	if r.source == nil {
		return nil, fmt.Errorf("record has no random access source")
	}

	switch r.Location.Access {
	case AccessExact:
		return r.openExactRaw()
	case AccessFromCompressionUnitStart:
		return r.openFromRestart()
	case AccessFromFileStart:
		return r.openFromFileStart()
	default:
		return nil, fmt.Errorf("record is not lazy-loadable: %s", r.Location.Access)
	}
}

// OpenBlock opens the WARC record block declared by Content-Length.
func (r *RecordRef) OpenBlock() (io.ReadCloser, error) {
	if !r.Location.Final {
		return nil, ErrRecordLocationPending
	}
	if r.ContentLength == 0 {
		return io.NopCloser(bytes.NewReader(nil)), nil
	}
	if len(r.Location.BlockDecodeRanges) > 0 {
		return r.openExactBlock()
	}
	raw, err := r.OpenRaw()
	if err != nil {
		return nil, err
	}
	if _, err := io.CopyN(io.Discard, raw, r.HeaderLen); err != nil {
		_ = raw.Close()
		return nil, err
	}
	return &readCloser{
		Reader: io.LimitReader(raw, r.ContentLength),
		close:  raw.Close,
	}, nil
}

// OpenBlockRange opens a byte range within the WARC record block.
// When block-frame metadata is available, it reopens only the compressed
// frames overlapping the requested block range; otherwise it falls back to
// OpenBlock and discards bytes before off.
func (r *RecordRef) OpenBlockRange(off, size int64) (io.ReadCloser, error) {
	if off < 0 || size < 0 {
		return nil, fmt.Errorf("invalid block range off=%d size=%d", off, size)
	}
	if !r.Location.Final {
		return nil, ErrRecordLocationPending
	}
	if off >= r.ContentLength || size == 0 {
		return io.NopCloser(bytes.NewReader(nil)), nil
	}
	if end := off + size; end < off || end > r.ContentLength {
		size = r.ContentLength - off
	}

	if len(r.Location.BlockFrameMappings) == 0 {
		block, err := r.OpenBlock()
		if err != nil {
			return nil, err
		}
		if _, err := io.CopyN(io.Discard, block, off); err != nil {
			_ = block.Close()
			return nil, err
		}
		return &readCloser{
			Reader: io.LimitReader(block, size),
			close:  block.Close,
		}, nil
	}
	return r.openIndexedBlockRange(off, size)
}

func (r *RecordRef) openExactBlock() (io.ReadCloser, error) {
	raw, err := r.openBlockCompressedRanges(r.Location.BlockDecodeRanges)
	if err != nil {
		return nil, err
	}
	return &readCloser{
		Reader: io.LimitReader(raw, r.ContentLength),
		close:  raw.Close,
	}, nil
}

func (r *RecordRef) openIndexedBlockRange(off, size int64) (io.ReadCloser, error) {
	want := Range{Off: off, Size: size}
	var ranges []Range
	var first *BlockFrameMapping
	for i := range r.Location.BlockFrameMappings {
		frame := r.Location.BlockFrameMappings[i]
		if !rangesOverlap(frame.Block, want) {
			continue
		}
		if first == nil {
			first = &frame
		}
		ranges = append(ranges, frame.Comp)
	}
	if len(ranges) == 0 || first == nil {
		return io.NopCloser(bytes.NewReader(nil)), nil
	}

	reader, err := r.openBlockCompressedRanges(ranges)
	if err != nil {
		return nil, err
	}
	skip := off - first.Block.Off
	if skip > 0 {
		if _, err := io.CopyN(io.Discard, reader, skip); err != nil {
			_ = reader.Close()
			return nil, err
		}
	}
	return &readCloser{
		Reader: io.LimitReader(reader, size),
		close:  reader.Close,
	}, nil
}

func (r *RecordRef) openBlockCompressedRanges(ranges []Range) (io.ReadCloser, error) {
	if r.source == nil {
		return nil, fmt.Errorf("record has no random access source")
	}
	if r.compression == CompressionBzip2 || r.compression == CompressionXZ {
		return nil, fmt.Errorf("%w: %s", ErrCompressionUnitAccessNotImplemented, r.compression)
	}
	rc := &multiReadCloser{
		source: r.source,
		ranges: ranges,
	}
	raw, err := decodeCompressed(r.compression, rc, r.zstdDicts)
	if err != nil {
		_ = rc.Close()
		return nil, err
	}
	return raw, nil
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

func (r *RecordRef) openExactRaw() (io.ReadCloser, error) {
	if r.compression == CompressionPlain {
		if len(r.Location.CompRanges) != 1 {
			return nil, fmt.Errorf("plain record has %d compressed ranges", len(r.Location.CompRanges))
		}
		rr := r.Location.CompRanges[0]
		return r.source.OpenRange(rr.Off, rr.Size)
	}
	if r.compression == CompressionBzip2 || r.compression == CompressionXZ {
		return nil, fmt.Errorf("%w: %s", ErrCompressionUnitAccessNotImplemented, r.compression)
	}

	ranges := &multiReadCloser{
		source: r.source,
		ranges: r.Location.CompRanges,
	}
	raw, err := decodeCompressed(r.compression, ranges, r.zstdDicts)
	if err != nil {
		_ = ranges.Close()
		return nil, err
	}
	return raw, nil
}

func (r *RecordRef) openFromRestart() (io.ReadCloser, error) {
	if r.Location.RestartRange == nil {
		return nil, fmt.Errorf("record has no restart range")
	}
	rc, err := r.source.OpenAt(r.Location.RestartRange.Off)
	if err != nil {
		return nil, err
	}
	decoded, err := decodeCompressed(r.compression, rc, r.zstdDicts)
	if err != nil {
		_ = rc.Close()
		return nil, err
	}
	// RestartRange.Off is in compressed-file coordinates, but Uncomp.Off is in
	// global decoded-stream coordinates. RestartUncompOff bridges them so we can
	// discard bytes decoded before this record begins.
	skip := r.Location.Uncomp.Off - r.Location.RestartUncompOff
	if _, err := io.CopyN(io.Discard, decoded, skip); err != nil {
		_ = decoded.Close()
		return nil, err
	}
	return &readCloser{
		Reader: io.LimitReader(decoded, r.Location.Uncomp.Size),
		close:  decoded.Close,
	}, nil
}

func (r *RecordRef) openFromFileStart() (io.ReadCloser, error) {
	rc, err := r.source.Open()
	if err != nil {
		return nil, err
	}
	decoded, err := decodeCompressed(r.compression, rc, r.zstdDicts)
	if err != nil {
		_ = rc.Close()
		return nil, err
	}
	if _, err := io.CopyN(io.Discard, decoded, r.Location.Uncomp.Off); err != nil {
		_ = decoded.Close()
		return nil, err
	}
	return &readCloser{
		Reader: io.LimitReader(decoded, r.Location.Uncomp.Size),
		close:  decoded.Close,
	}, nil
}

func decodeCompressed(compression Compression, rc io.ReadCloser, zstdDicts [][]byte) (io.ReadCloser, error) {
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
		opts := []zstd.DOption{zstd.WithDecoderConcurrency(1)}
		for _, d := range zstdDicts {
			opts = append(opts, zstd.WithDecoderDicts(d))
		}
		zr, err := zstd.NewReader(rc, opts...)
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
func NewRecordFromBytes(data []byte) (*Record, error) {
	scanner, err := NewScanner(bytes.NewReader(data), ScannerOptions{Compression: CompressionPlain})
	if err != nil {
		return nil, err
	}
	if !scanner.Next() {
		if scanner.Err() != nil {
			return nil, scanner.Err()
		}
		return nil, io.EOF
	}
	ref := scanner.RecordRef()
	rawSize := ref.Location.Uncomp.Size
	if rawSize < 0 || rawSize > int64(len(data)) {
		return nil, fmt.Errorf("record range outside input")
	}
	return &Record{Ref: ref, Data: data[:rawSize]}, nil
}
