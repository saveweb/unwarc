package unwarc

import (
	"bytes"
	"encoding/binary"
	"errors"
	"fmt"
	"io"
	"testing"
)

func TestWARCZstdSeekIndexBuildsRefsWithoutDecodingBlockFrames(t *testing.T) {
	fixture := newSeekIndexedWARCZstdFixture(t,
		seekIndexedFixtureRecord{
			recordType: "warcinfo",
			id:         "<urn:uuid:seek-indexed-1>",
			block:      bytes.Repeat([]byte("alpha"), 256),
		},
		seekIndexedFixtureRecord{
			recordType: "response",
			id:         "<urn:uuid:seek-indexed-2>",
			block:      bytes.Repeat([]byte("omega"), 512),
		},
	)
	source := &trackingRangeSource{data: fixture.data}

	index, err := OpenWARCZstdSeekIndex(source)
	if err != nil {
		t.Fatal(err)
	}
	for i, record := range fixture.records {
		if rangeWasOpened(source.opened, record.blockRange) {
			t.Fatalf("block frame %d was opened while building index: opened=%+v", i, source.opened)
		}
	}

	refs := index.Records()
	if len(refs) != len(fixture.records) {
		t.Fatalf("records = %d, want %d", len(refs), len(fixture.records))
	}
	var uncompOff int64
	for i, ref := range refs {
		want := fixture.records[i]
		if ref.Location.Uncomp != (Range{Off: uncompOff, Size: int64(len(want.rawHeader) + len(want.blockWithTrailer))}) {
			t.Fatalf("record %d uncomp = %+v, want off=%d size=%d", i, ref.Location.Uncomp, uncompOff, len(want.rawHeader)+len(want.blockWithTrailer))
		}
		uncompOff += ref.Location.Uncomp.Size
		assertExactRanges(t, ref, want.headerRange, want.blockRange)
		if len(ref.Location.BlockDecodeRanges) != 1 || ref.Location.BlockDecodeRanges[0] != want.blockRange {
			t.Fatalf("record %d block ranges = %+v, want %+v", i, ref.Location.BlockDecodeRanges, []Range{want.blockRange})
		}
		if len(ref.Location.BlockFrameMappings) != 1 || ref.Location.BlockFrameMappings[0].Block != (Range{Off: 0, Size: int64(len(want.block))}) {
			t.Fatalf("record %d block frames = %+v, want single full-block frame", i, ref.Location.BlockFrameMappings)
		}
		if ref.ContentLength != int64(len(want.block)) {
			t.Fatalf("record %d ContentLength = %d, want %d", i, ref.ContentLength, len(want.block))
		}
		if ref.TrailerLen != int64(len(warcRecordTrailer)) {
			t.Fatalf("record %d TrailerLen = %d, want %d", i, ref.TrailerLen, len(warcRecordTrailer))
		}
	}

	source.opened = nil
	gotBlock := readAllFrom(t, refs[1].OpenBlock)
	if !bytes.Equal(gotBlock, fixture.records[1].block) {
		t.Fatalf("block = %q, want %q", gotBlock, fixture.records[1].block)
	}
	if !rangeWasOpened(source.opened, fixture.records[1].blockRange) {
		t.Fatalf("OpenBlock opened %+v, want block range %+v", source.opened, fixture.records[1].blockRange)
	}
	if rangeWasOpened(source.opened, fixture.records[1].headerRange) {
		t.Fatalf("OpenBlock reopened header range: %+v", source.opened)
	}

	gotRaw := readAllFrom(t, refs[0].OpenRaw)
	wantRaw := append(append([]byte{}, fixture.records[0].rawHeader...), fixture.records[0].blockWithTrailer...)
	if !bytes.Equal(gotRaw, wantRaw) {
		t.Fatalf("raw record = %q, want %q", gotRaw, wantRaw)
	}
}

func TestWARCZstdSeekIndexFoldedFieldPolicy(t *testing.T) {
	rawHeader := []byte(
		"WARC/1.1\r\n" +
			"X-Archive-Note: first\r\n" +
			" second:with:colons\r\n" +
			"Content-Length: 0\r\n" +
			"\r\n",
	)
	data := seekIndexedRecordBytesForTest(t, rawHeader, warcRecordTrailer)

	t.Run("accept by default", func(t *testing.T) {
		index, err := OpenWARCZstdSeekIndex(newBytesSource(data))
		if err != nil {
			t.Fatal(err)
		}
		field := findWARCFieldInHeader(t, index.Records()[0].Header, "X-Archive-Note")
		if field.Value != "first second:with:colons" || !field.Folded {
			t.Fatalf("field = %+v", field)
		}
	})

	t.Run("reject", func(t *testing.T) {
		_, err := OpenWARCZstdSeekIndexWithOptions(newBytesSource(data), WARCZstdSeekIndexOptions{
			FoldedFields: FoldedFieldReject,
		})
		if !errors.Is(err, ErrNotSeekIndexed) {
			t.Fatalf("error = %v, want %v", err, ErrNotSeekIndexed)
		}
		if !errors.Is(err, ErrFoldedWARCField) {
			t.Fatalf("error = %v, want %v", err, ErrFoldedWARCField)
		}
	})
}

func TestWARCZstdSeekIndexSupportsChunkedBlockFrames(t *testing.T) {
	block := []byte("AAAAABBBBBCCCCCDDDDDEEEEEFFFFF")
	fixture := newSeekIndexedWARCZstdFixture(t,
		seekIndexedFixtureRecord{
			recordType:  "response",
			id:          "<urn:uuid:seek-chunked>",
			block:       block,
			blockChunks: []int{5, 5, 5, 5, 5, 5},
		},
	)
	source := &trackingRangeSource{data: fixture.data}

	index, err := OpenWARCZstdSeekIndex(source)
	if err != nil {
		t.Fatal(err)
	}
	ref := index.Records()[0]
	if len(ref.Location.BlockDecodeRanges) != len(fixture.records[0].blockRanges) {
		t.Fatalf("block compressed ranges = %+v, want %+v", ref.Location.BlockDecodeRanges, fixture.records[0].blockRanges)
	}
	if len(ref.Location.BlockFrameMappings) != len(fixture.records[0].blockChunks) {
		t.Fatalf("block frames = %+v", ref.Location.BlockFrameMappings)
	}
	for i, frame := range ref.Location.BlockFrameMappings {
		if frame.Comp != fixture.records[0].blockRanges[i] {
			t.Fatalf("block frame %d comp = %+v, want %+v", i, frame.Comp, fixture.records[0].blockRanges[i])
		}
		if frame.Block != (Range{Off: int64(i * 5), Size: 5}) {
			t.Fatalf("block frame %d block = %+v, want off=%d size=5", i, frame.Block, i*5)
		}
	}

	source.opened = nil
	gotRange := readAllFrom(t, func() (io.ReadCloser, error) {
		return ref.OpenBlockRange(12, 10)
	})
	if !bytes.Equal(gotRange, block[12:22]) {
		t.Fatalf("block range = %q, want %q", gotRange, block[12:22])
	}
	if rangeWasOpened(source.opened, fixture.records[0].headerRange) {
		t.Fatalf("OpenBlockRange reopened header range: %+v", source.opened)
	}
	if !rangeWasOpened(source.opened, fixture.records[0].blockRanges[2]) || !rangeWasOpened(source.opened, fixture.records[0].blockRanges[3]) || !rangeWasOpened(source.opened, fixture.records[0].blockRanges[4]) {
		t.Fatalf("OpenBlockRange opened %+v, want overlapping chunks 2,3,4", source.opened)
	}
	if rangeWasOpened(source.opened, fixture.records[0].blockRanges[0]) || rangeWasOpened(source.opened, fixture.records[0].blockRanges[1]) || rangeWasOpened(source.opened, fixture.records[0].blockRanges[5]) {
		t.Fatalf("OpenBlockRange opened non-overlapping chunks: %+v", source.opened)
	}
}

func TestWARCZstdSeekIndexSupportsSingleFrameEmptyRecord(t *testing.T) {
	fixture := newSeekIndexedWARCZstdFixture(t,
		seekIndexedFixtureRecord{
			recordType:       "metadata",
			id:               "<urn:uuid:seek-empty-single>",
			singleFrameEmpty: true,
		},
	)
	source := &trackingRangeSource{data: fixture.data}

	index, err := OpenWARCZstdSeekIndex(source)
	if err != nil {
		t.Fatal(err)
	}
	refs := index.Records()
	if len(refs) != 1 {
		t.Fatalf("records = %d, want 1", len(refs))
	}
	ref := refs[0]
	if ref.ContentLength != 0 {
		t.Fatalf("ContentLength = %d, want 0", ref.ContentLength)
	}
	if len(ref.Location.BlockDecodeRanges) != 0 || len(ref.Location.BlockFrameMappings) != 0 {
		t.Fatalf("block ranges = %+v frames = %+v, want none", ref.Location.BlockDecodeRanges, ref.Location.BlockFrameMappings)
	}
	assertExactRanges(t, ref, fixture.records[0].recordRange)

	source.opened = nil
	block := readAllFrom(t, ref.OpenBlock)
	if len(block) != 0 {
		t.Fatalf("block = %q, want empty", block)
	}
	if len(source.opened) != 0 {
		t.Fatalf("empty OpenBlock opened ranges %+v, want none", source.opened)
	}

	raw := readAllFrom(t, ref.OpenRaw)
	wantRaw := append(append([]byte{}, fixture.records[0].rawHeader...), warcRecordTrailer...)
	if !bytes.Equal(raw, wantRaw) {
		t.Fatalf("raw = %q, want %q", raw, wantRaw)
	}
}

func TestWARCZstdSeekIndexSupportsTwoFrameEmptyRecord(t *testing.T) {
	fixture := newSeekIndexedWARCZstdFixture(t,
		seekIndexedFixtureRecord{
			recordType: "metadata",
			id:         "<urn:uuid:seek-empty-two-frame>",
		},
	)
	index, err := OpenWARCZstdSeekIndex(newBytesSource(fixture.data))
	if err != nil {
		t.Fatal(err)
	}
	ref := index.Records()[0]
	if ref.ContentLength != 0 {
		t.Fatalf("ContentLength = %d, want 0", ref.ContentLength)
	}
	if len(ref.Location.BlockDecodeRanges) != 1 {
		t.Fatalf("block comp ranges = %+v, want trailer-only frame", ref.Location.BlockDecodeRanges)
	}
	if len(ref.Location.BlockFrameMappings) != 0 {
		t.Fatalf("block frames = %+v, want none for zero block", ref.Location.BlockFrameMappings)
	}
	block := readAllFrom(t, ref.OpenBlock)
	if len(block) != 0 {
		t.Fatalf("block = %q, want empty", block)
	}
}

func TestWARCZstdSeekIndexRejectsRecordHeaderFramePastBoundary(t *testing.T) {
	record := seekIndexedFixtureRecord{
		recordType: "response",
		id:         "<urn:uuid:seek-header-too-long>",
		block:      []byte("block"),
	}
	record.rawHeader = makeRecordHeader(record.recordType, record.id, record.block)
	recordHeaderFrameBytes := append(append([]byte{}, record.rawHeader...), record.block[:2]...)
	blockFrameBytes := append(append([]byte{}, record.block[2:]...), warcRecordTrailer...)

	data := seekIndexedRecordBytesForTest(t, recordHeaderFrameBytes, blockFrameBytes)
	_, err := OpenWARCZstdSeekIndex(newBytesSource(data))
	if !errors.Is(err, ErrNotSeekIndexed) {
		t.Fatalf("OpenWARCZstdSeekIndex error = %v, want %v", err, ErrNotSeekIndexed)
	}
	if !containsErrorText(err, "does not end at the WARC record-header boundary") {
		t.Fatalf("error = %v, want record-header boundary message", err)
	}
}

func TestWARCZstdSeekIndexRejectsRecordHeaderFrameBeforeBoundary(t *testing.T) {
	rawHeader := makeRecordHeader("response", "<urn:uuid:seek-header-too-short>", []byte("block"))
	data := seekIndexedRecordBytesForTest(t, rawHeader[:len(rawHeader)-3], append([]byte("block"), warcRecordTrailer...))

	_, err := OpenWARCZstdSeekIndex(newBytesSource(data))
	if !errors.Is(err, ErrNotSeekIndexed) {
		t.Fatalf("OpenWARCZstdSeekIndex error = %v, want %v", err, ErrNotSeekIndexed)
	}
	if !containsErrorText(err, "does not contain a complete WARC record header") {
		t.Fatalf("error = %v, want incomplete record-header message", err)
	}
}

func TestWARCZstdSeekIndexedStreamRemainsForwardScannable(t *testing.T) {
	fixture := newSeekIndexedWARCZstdFixture(t,
		seekIndexedFixtureRecord{
			recordType: "warcinfo",
			id:         "<urn:uuid:seek-forward-1>",
			block:      []byte("ABC"),
		},
		seekIndexedFixtureRecord{
			recordType: "response",
			id:         "<urn:uuid:seek-forward-2>",
			block:      []byte("DEFG"),
		},
	)

	refs := scanZstdSource(t, fixture.data)
	if len(refs) != 2 {
		t.Fatalf("records = %d, want 2", len(refs))
	}
	assertZstdOpenBlock(t, refs[0], fixture.records[0].block)
	assertZstdOpenBlock(t, refs[1], fixture.records[1].block)
}

func TestWARCZstdSeekIndexRejectsNonIndexedSuffix(t *testing.T) {
	record := makeRecord("response", "<urn:uuid:not-seek-indexed>", []byte("plain zstd frame"))
	_, err := OpenWARCZstdSeekIndex(newBytesSource(zstdFrame(t, record)))
	if !errors.Is(err, ErrNotSeekIndexed) {
		t.Fatalf("OpenWARCZstdSeekIndex error = %v, want %v", err, ErrNotSeekIndexed)
	}
}

func TestWARCZstdSeekIndexEmptyFile(t *testing.T) {
	index, err := OpenWARCZstdSeekIndex(newBytesSource(nil))
	if err != nil {
		t.Fatal(err)
	}
	if got := index.Records(); len(got) != 0 {
		t.Fatalf("records = %+v, want none", got)
	}
}

type seekIndexedFixtureRecord struct {
	recordType       string
	id               string
	block            []byte
	blockChunks      []int
	singleFrameEmpty bool

	rawHeader        []byte
	blockWithTrailer []byte
	headerRange      Range
	blockRange       Range
	blockRanges      []Range
	recordRange      Range
}

type seekIndexedWARCZstdFixture struct {
	data    []byte
	records []seekIndexedFixtureRecord
}

func newSeekIndexedWARCZstdFixture(t *testing.T, records ...seekIndexedFixtureRecord) seekIndexedWARCZstdFixture {
	t.Helper()
	var out bytes.Buffer
	for i := range records {
		record := &records[i]
		record.rawHeader = makeRecordHeader(record.recordType, record.id, record.block)
		record.blockWithTrailer = append(append([]byte{}, record.block...), warcRecordTrailer...)
		if record.singleFrameEmpty {
			if len(record.block) != 0 {
				t.Fatalf("single-frame empty fixture %d has block", i)
			}
			raw := append(append([]byte{}, record.rawHeader...), warcRecordTrailer...)
			frame := zstdFrame(t, raw)
			record.recordRange = Range{Off: int64(out.Len()), Size: int64(len(frame))}
			out.Write(frame)
			out.Write(recordLocalSeekTableForTest(
				zstdSeekEntry{compSize: uint32(len(frame)), uncompSize: uint32(len(raw))},
			))
			continue
		}

		headerFrame := zstdFrame(t, record.rawHeader)
		blockFrames := blockFramesForFixture(t, record.blockWithTrailer, record.blockChunks)
		record.headerRange = Range{Off: int64(out.Len()), Size: int64(len(headerFrame))}
		out.Write(headerFrame)
		entries := []zstdSeekEntry{
			{compSize: uint32(len(headerFrame)), uncompSize: uint32(len(record.rawHeader))},
		}
		for _, frame := range blockFrames {
			rr := Range{Off: int64(out.Len()), Size: int64(len(frame.comp))}
			if record.blockRange.Size == 0 {
				record.blockRange = rr
			}
			record.blockRanges = append(record.blockRanges, rr)
			out.Write(frame.comp)
			entries = append(entries, zstdSeekEntry{
				compSize:   uint32(len(frame.comp)),
				uncompSize: uint32(len(frame.raw)),
			})
		}
		if len(record.blockRanges) == 1 {
			record.blockRange = record.blockRanges[0]
		}
		record.recordRange = Range{Off: record.headerRange.Off, Size: int64(out.Len()) - record.headerRange.Off}
		out.Write(recordLocalSeekTableForTest(
			entries...,
		))
	}
	return seekIndexedWARCZstdFixture{data: out.Bytes(), records: records}
}

type blockFrameFixture struct {
	raw  []byte
	comp []byte
}

func blockFramesForFixture(t *testing.T, blockWithTrailer []byte, chunkSizes []int) []blockFrameFixture {
	t.Helper()
	if len(chunkSizes) == 0 {
		return []blockFrameFixture{{
			raw:  blockWithTrailer,
			comp: zstdFrame(t, blockWithTrailer),
		}}
	}
	var frames []blockFrameFixture
	off := 0
	for _, size := range chunkSizes {
		if off >= len(blockWithTrailer) {
			break
		}
		end := off + size
		if end > len(blockWithTrailer) {
			end = len(blockWithTrailer)
		}
		raw := blockWithTrailer[off:end]
		frames = append(frames, blockFrameFixture{
			raw:  raw,
			comp: zstdFrame(t, raw),
		})
		off = end
	}
	if off < len(blockWithTrailer) {
		raw := blockWithTrailer[off:]
		frames = append(frames, blockFrameFixture{
			raw:  raw,
			comp: zstdFrame(t, raw),
		})
	}
	return frames
}

func seekIndexedRecordBytesForTest(t *testing.T, frameBytes ...[]byte) []byte {
	t.Helper()
	var out bytes.Buffer
	entries := make([]zstdSeekEntry, 0, len(frameBytes))
	for _, raw := range frameBytes {
		frame := zstdFrame(t, raw)
		out.Write(frame)
		entries = append(entries, zstdSeekEntry{
			compSize:   uint32(len(frame)),
			uncompSize: uint32(len(raw)),
		})
	}
	out.Write(recordLocalSeekTableForTest(entries...))
	return out.Bytes()
}

func makeRecordHeader(recordType, id string, block []byte) []byte {
	return []byte(fmt.Sprintf(
		"WARC/1.1\r\n"+
			"WARC-Type: %s\r\n"+
			"WARC-Record-ID: %s\r\n"+
			"Content-Length: %d\r\n"+
			"\r\n",
		recordType,
		id,
		len(block),
	))
}

func recordLocalSeekTableForTest(entries ...zstdSeekEntry) []byte {
	var tablePayload bytes.Buffer
	for _, entry := range entries {
		_ = binary.Write(&tablePayload, binary.LittleEndian, entry.compSize)
		_ = binary.Write(&tablePayload, binary.LittleEndian, entry.uncompSize)
	}
	_ = binary.Write(&tablePayload, binary.LittleEndian, uint32(len(entries)))
	_ = tablePayload.WriteByte(0)
	_ = binary.Write(&tablePayload, binary.LittleEndian, zstdSeekableMagicNumber)

	var out bytes.Buffer
	_ = binary.Write(&out, binary.LittleEndian, zstdSeekableFrameMagic)
	_ = binary.Write(&out, binary.LittleEndian, uint32(tablePayload.Len()))
	_, _ = out.Write(tablePayload.Bytes())
	return out.Bytes()
}

func rangeWasOpened(opened []Range, want Range) bool {
	for _, got := range opened {
		if got == want {
			return true
		}
	}
	return false
}

func containsErrorText(err error, text string) bool {
	return err != nil && bytes.Contains([]byte(err.Error()), []byte(text))
}
