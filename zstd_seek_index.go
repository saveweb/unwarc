package unwarc

import (
	"encoding/binary"
	"fmt"
	"io"
	"os"
)

// WARCZstdSeekIndex is a reverse-built index for the record-local WARC-zstd
// seek profile. Each indexed record is encoded as a zstd frame for the WARC
// header, one or more zstd frames for payload bytes plus the record trailer,
// and a zstd seekable-table skippable frame describing those data frames. Empty
// records may instead use a single zstd frame containing the WARC header and
// trailer.
type WARCZstdSeekIndex struct {
	records []*RecordRef
}

// OpenWARCZstdSeekIndex opens a WARC-zstd input that is fully composed of
// record-local seekable streams and returns finalized record references without
// decoding payload frames. If any suffix does not match the profile, it returns
// ErrNotSeekIndexed so callers can choose a normal forward scan instead.
func OpenWARCZstdSeekIndex(source RandomAccessSource) (*WARCZstdSeekIndex, error) {
	size, err := source.Size()
	if err != nil {
		return nil, err
	}
	if size == 0 {
		return &WARCZstdSeekIndex{}, nil
	}
	indexSource, closeIndexSource, err := seekIndexSource(source, size)
	if err != nil {
		return nil, err
	}
	defer closeIndexSource()

	var reversed []seekIndexedRecord
	for end := size; end > 0; {
		record, err := readSeekIndexedRecord(indexSource, source, end)
		if err != nil {
			return nil, err
		}
		reversed = append(reversed, record)
		end = record.comp.Off
	}

	records := make([]*RecordRef, 0, len(reversed))
	var uncompOff int64
	for i := len(reversed) - 1; i >= 0; i-- {
		record := reversed[i]
		ref := record.ref
		ref.Location.Uncomp = Range{Off: uncompOff, Size: record.uncompSize}
		uncompOff += record.uncompSize
		records = append(records, ref)
	}
	return &WARCZstdSeekIndex{records: records}, nil
}

func seekIndexSource(source RandomAccessSource, size int64) (RandomAccessSource, func(), error) {
	if fs, ok := source.(FileSource); ok {
		f, err := os.Open(fs.Path)
		if err != nil {
			return nil, nil, err
		}
		indexSource := NewReaderAtSource(f, size, nil)
		return indexSource, func() { _ = f.Close() }, nil
	}
	return source, func() {}, nil
}

// Records returns a copy of the indexed record references in file order.
func (i *WARCZstdSeekIndex) Records() []*RecordRef {
	if i == nil || len(i.records) == 0 {
		return nil
	}
	records := make([]*RecordRef, len(i.records))
	copy(records, i.records)
	return records
}

type seekIndexedRecord struct {
	ref        *RecordRef
	comp       Range
	uncompSize int64
}

type zstdSeekEntry struct {
	compSize   uint32
	uncompSize uint32
}

func readSeekIndexedRecord(indexSource, refSource RandomAccessSource, end int64) (seekIndexedRecord, error) {
	entries, table, err := readRecordLocalSeekTable(indexSource, end)
	if err != nil {
		return seekIndexedRecord{}, err
	}
	if len(entries) == 1 {
		return readSeekIndexedEmptyRecord(indexSource, refSource, entries[0], table)
	}
	headerEntry := entries[0]
	if headerEntry.compSize == 0 || headerEntry.uncompSize == 0 {
		return seekIndexedRecord{}, fmt.Errorf("%w at offset %d: empty seek table entry", ErrNotSeekIndexed, table.Off)
	}

	var payloadCompSize int64
	var payloadUncompSize int64
	for _, entry := range entries[1:] {
		if entry.compSize == 0 {
			return seekIndexedRecord{}, fmt.Errorf("%w at offset %d: empty payload seek table entry", ErrNotSeekIndexed, table.Off)
		}
		payloadCompSize += int64(entry.compSize)
		payloadUncompSize += int64(entry.uncompSize)
	}

	payloadStart := table.Off - payloadCompSize
	headerComp := Range{
		Off:  payloadStart - int64(headerEntry.compSize),
		Size: int64(headerEntry.compSize),
	}
	if headerComp.Off < 0 || payloadStart < 0 {
		return seekIndexedRecord{}, fmt.Errorf("%w at offset %d: seek table ranges before file start", ErrNotSeekIndexed, table.Off)
	}

	rawHeader, err := decodeSeekIndexedHeader(indexSource, headerComp, int64(headerEntry.uncompSize))
	if err != nil {
		return seekIndexedRecord{}, err
	}
	header, contentLength, err := parseHeaderBlock(rawHeader)
	if err != nil {
		return seekIndexedRecord{}, fmt.Errorf("%w at offset %d: invalid WARC header: %v", ErrNotSeekIndexed, headerComp.Off, err)
	}
	payloadRanges, payloadFrames := indexedPayloadRanges(entries[1:], payloadStart, contentLength)
	trailerLen := payloadUncompSize - contentLength
	if trailerLen < 0 {
		return seekIndexedRecord{}, fmt.Errorf("%w at offset %d: payload frames are shorter than Content-Length", ErrNotSeekIndexed, payloadStart)
	}

	recordComp := Range{Off: headerComp.Off, Size: table.End() - headerComp.Off}
	recordUncompSize := int64(headerEntry.uncompSize) + payloadUncompSize
	compRanges := make([]Range, 0, len(payloadRanges)+1)
	compRanges = append(compRanges, headerComp)
	compRanges = append(compRanges, payloadRanges...)
	ref := &RecordRef{
		Header:        header,
		RawHeader:     rawHeader,
		ContentLength: contentLength,
		HeaderLen:     int64(len(rawHeader)),
		TrailerLen:    trailerLen,
		Location: RecordLocation{
			Uncomp:            Range{Off: 0, Size: recordUncompSize},
			CompRanges:        compRanges,
			PayloadCompRanges: payloadRanges,
			PayloadFrames:     payloadFrames,
			Access:            AccessExact,
			Final:             true,
		},
		source:      refSource,
		compression: CompressionZstd,
	}
	return seekIndexedRecord{
		ref:        ref,
		comp:       recordComp,
		uncompSize: recordUncompSize,
	}, nil
}

func readSeekIndexedEmptyRecord(indexSource, refSource RandomAccessSource, entry zstdSeekEntry, table Range) (seekIndexedRecord, error) {
	if entry.compSize == 0 || entry.uncompSize == 0 {
		return seekIndexedRecord{}, fmt.Errorf("%w at offset %d: empty seek table entry", ErrNotSeekIndexed, table.Off)
	}
	recordComp := Range{
		Off:  table.Off - int64(entry.compSize),
		Size: int64(entry.compSize),
	}
	if recordComp.Off < 0 {
		return seekIndexedRecord{}, fmt.Errorf("%w at offset %d: seek table ranges before file start", ErrNotSeekIndexed, table.Off)
	}

	rawHeader, trailerLen, err := decodeSeekIndexedEmptyRecord(indexSource, recordComp, int64(entry.uncompSize))
	if err != nil {
		return seekIndexedRecord{}, err
	}
	header, contentLength, err := parseHeaderBlock(rawHeader)
	if err != nil {
		return seekIndexedRecord{}, fmt.Errorf("%w at offset %d: invalid WARC header: %v", ErrNotSeekIndexed, recordComp.Off, err)
	}
	if contentLength != 0 {
		return seekIndexedRecord{}, fmt.Errorf("%w at offset %d: single-frame seek record has Content-Length %d", ErrNotSeekIndexed, recordComp.Off, contentLength)
	}

	ref := &RecordRef{
		Header:        header,
		RawHeader:     rawHeader,
		ContentLength: 0,
		HeaderLen:     int64(len(rawHeader)),
		TrailerLen:    trailerLen,
		Location: RecordLocation{
			Uncomp:     Range{Off: 0, Size: int64(entry.uncompSize)},
			CompRanges: []Range{recordComp},
			Access:     AccessExact,
			Final:      true,
		},
		source:      refSource,
		compression: CompressionZstd,
	}
	return seekIndexedRecord{
		ref:        ref,
		comp:       Range{Off: recordComp.Off, Size: table.End() - recordComp.Off},
		uncompSize: int64(entry.uncompSize),
	}, nil
}

func decodeSeekIndexedHeader(source RandomAccessSource, rr Range, wantSize int64) ([]byte, error) {
	rc, err := source.OpenRange(rr.Off, rr.Size)
	if err != nil {
		return nil, err
	}
	decoded, err := decodeCompressed(CompressionZstd, rc, nil)
	if err != nil {
		_ = rc.Close()
		return nil, err
	}
	defer decoded.Close()

	rawHeader, err := readWARCHeader(decoded)
	if err != nil {
		return nil, fmt.Errorf("%w at offset %d: header frame does not contain a complete WARC header: %v", ErrNotSeekIndexed, rr.Off, err)
	}
	if int64(len(rawHeader)) != wantSize {
		return nil, fmt.Errorf("%w at offset %d: header frame is not exactly the WARC header boundary; decoded header is %d bytes, frame is %d bytes", ErrNotSeekIndexed, rr.Off, len(rawHeader), wantSize)
	}
	var extra [1]byte
	n, err := decoded.Read(extra[:])
	if n > 0 {
		return nil, fmt.Errorf("%w at offset %d: header frame contains bytes after the WARC header", ErrNotSeekIndexed, rr.Off)
	}
	if err != nil && err != io.EOF {
		return nil, err
	}
	return rawHeader, nil
}

func decodeSeekIndexedEmptyRecord(source RandomAccessSource, rr Range, wantSize int64) ([]byte, int64, error) {
	rc, err := source.OpenRange(rr.Off, rr.Size)
	if err != nil {
		return nil, 0, err
	}
	decoded, err := decodeCompressed(CompressionZstd, rc, nil)
	if err != nil {
		_ = rc.Close()
		return nil, 0, err
	}
	defer decoded.Close()

	rawHeader, err := readWARCHeader(decoded)
	if err != nil {
		return nil, 0, fmt.Errorf("%w at offset %d: single-frame empty record does not contain a complete WARC header: %v", ErrNotSeekIndexed, rr.Off, err)
	}
	trailer, trailerIssues, err := readRecordTrailer(decoded)
	if err != nil {
		return nil, 0, err
	}
	if len(trailerIssues) > 0 {
		return nil, 0, fmt.Errorf("%w at offset %d: %s", ErrNotSeekIndexed, rr.Off, trailerIssues[0].Message)
	}
	var extra [1]byte
	n, err := decoded.Read(extra[:])
	if n > 0 {
		return nil, 0, fmt.Errorf("%w at offset %d: single-frame empty record contains extra bytes", ErrNotSeekIndexed, rr.Off)
	}
	if err != nil && err != io.EOF {
		return nil, 0, err
	}
	if got := int64(len(rawHeader) + len(trailer)); got != wantSize {
		return nil, 0, fmt.Errorf("%w at offset %d: record frame decoded %d bytes, seek table says %d", ErrNotSeekIndexed, rr.Off, got, wantSize)
	}
	return rawHeader, int64(len(trailer)), nil
}

func indexedPayloadRanges(entries []zstdSeekEntry, compStart, contentLength int64) ([]Range, []RecordPayloadFrame) {
	ranges := make([]Range, 0, len(entries))
	frames := make([]RecordPayloadFrame, 0, len(entries))
	var compOff int64 = compStart
	var payloadOff int64
	for _, entry := range entries {
		comp := Range{Off: compOff, Size: int64(entry.compSize)}
		ranges = append(ranges, comp)
		if payloadOff < contentLength {
			payloadSize := int64(entry.uncompSize)
			if payloadOff+payloadSize > contentLength {
				payloadSize = contentLength - payloadOff
			}
			if payloadSize > 0 {
				frames = append(frames, RecordPayloadFrame{
					Comp:    comp,
					Payload: Range{Off: payloadOff, Size: payloadSize},
				})
			}
		}
		compOff += int64(entry.compSize)
		payloadOff += int64(entry.uncompSize)
	}
	return ranges, frames
}

func readRecordLocalSeekTable(source RandomAccessSource, end int64) ([]zstdSeekEntry, Range, error) {
	if end < zstdSeekTableFooterSize+8 {
		return nil, Range{}, fmt.Errorf("%w at offset %d: too small for seek table", ErrNotSeekIndexed, end)
	}
	footer, err := readSourceRange(source, end-zstdSeekTableFooterSize, zstdSeekTableFooterSize)
	if err != nil {
		return nil, Range{}, err
	}
	if binary.LittleEndian.Uint32(footer[5:9]) != zstdSeekableMagicNumber {
		return nil, Range{}, fmt.Errorf("%w at offset %d: missing seekable magic", ErrNotSeekIndexed, end-zstdSeekTableFooterSize+5)
	}

	numFrames := binary.LittleEndian.Uint32(footer[0:4])
	descriptor := footer[4]
	hasChecksum := descriptor&0x80 != 0
	if descriptor&0x7f != 0 {
		return nil, Range{}, fmt.Errorf("%w at offset %d: unsupported seek table descriptor 0x%02x", ErrNotSeekIndexed, end-5, descriptor)
	}
	entrySize := int64(8)
	if hasChecksum {
		entrySize = 12
	}
	if numFrames == 0 || numFrames > maxRecordLocalSeekFrames {
		return nil, Range{}, fmt.Errorf("%w at offset %d: unsupported seek table frame count %d", ErrNotSeekIndexed, end-zstdSeekTableFooterSize, numFrames)
	}

	entriesSize := int64(numFrames) * entrySize
	payloadSize := entriesSize + zstdSeekTableFooterSize
	tableStart := end - 8 - payloadSize
	if tableStart < 0 {
		return nil, Range{}, fmt.Errorf("%w at offset %d: seek table starts before file", ErrNotSeekIndexed, end)
	}
	header, err := readSourceRange(source, tableStart, 8)
	if err != nil {
		return nil, Range{}, err
	}
	if binary.LittleEndian.Uint32(header[:4]) != zstdSeekableFrameMagic {
		return nil, Range{}, fmt.Errorf("%w at offset %d: missing seekable skippable frame", ErrNotSeekIndexed, tableStart)
	}
	if got := binary.LittleEndian.Uint32(header[4:8]); got != uint32(payloadSize) {
		return nil, Range{}, fmt.Errorf("%w at offset %d: seek table payload size %d, footer implies %d", ErrNotSeekIndexed, tableStart, got, payloadSize)
	}

	payload, err := readSourceRange(source, tableStart+8, entriesSize)
	if err != nil {
		return nil, Range{}, err
	}
	entries := make([]zstdSeekEntry, numFrames)
	for i := range entries {
		pos := int64(i) * entrySize
		entries[i] = zstdSeekEntry{
			compSize:   binary.LittleEndian.Uint32(payload[pos : pos+4]),
			uncompSize: binary.LittleEndian.Uint32(payload[pos+4 : pos+8]),
		}
	}
	return entries, Range{Off: tableStart, Size: 8 + payloadSize}, nil
}

func readSourceRange(source RandomAccessSource, off, size int64) ([]byte, error) {
	rc, err := source.OpenRange(off, size)
	if err != nil {
		return nil, err
	}
	defer rc.Close()
	data, err := io.ReadAll(rc)
	if err != nil {
		return nil, err
	}
	if int64(len(data)) != size {
		return nil, io.ErrUnexpectedEOF
	}
	return data, nil
}

const (
	// Zstandard seekable format uses skippable frame 0x184D2A5E and stores
	// 0x8F92EAB1 at the end of the seek table payload.
	zstdSeekableFrameMagic  uint32 = 0x184D2A5E
	zstdSeekableMagicNumber uint32 = 0x8F92EAB1

	zstdSeekTableFooterSize  = 9
	maxRecordLocalSeekFrames = 1 << 20
)
