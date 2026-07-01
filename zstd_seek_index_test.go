package unwarc

import (
	"bytes"
	"encoding/binary"
	"errors"
	"fmt"
	"io"
	"testing"
)

func TestWARCZstdSeekIndexBuildsRefsWithoutDecodingPayloadFrames(t *testing.T) {
	fixture := newSeekIndexedWARCZstdFixture(t,
		seekIndexedFixtureRecord{
			recordType: "warcinfo",
			id:         "<urn:uuid:seek-indexed-1>",
			payload:    bytes.Repeat([]byte("alpha"), 256),
		},
		seekIndexedFixtureRecord{
			recordType: "response",
			id:         "<urn:uuid:seek-indexed-2>",
			payload:    bytes.Repeat([]byte("omega"), 512),
		},
	)
	source := &trackingRangeSource{data: fixture.data}

	index, err := OpenWARCZstdSeekIndex(source)
	if err != nil {
		t.Fatal(err)
	}
	for i, record := range fixture.records {
		if rangeWasOpened(source.opened, record.payloadRange) {
			t.Fatalf("payload frame %d was opened while building index: opened=%+v", i, source.opened)
		}
	}

	refs := index.Records()
	if len(refs) != len(fixture.records) {
		t.Fatalf("records = %d, want %d", len(refs), len(fixture.records))
	}
	var uncompOff int64
	for i, ref := range refs {
		want := fixture.records[i]
		if ref.Location.Uncomp != (Range{Off: uncompOff, Size: int64(len(want.rawHeader) + len(want.payloadWithTrailer))}) {
			t.Fatalf("record %d uncomp = %+v, want off=%d size=%d", i, ref.Location.Uncomp, uncompOff, len(want.rawHeader)+len(want.payloadWithTrailer))
		}
		uncompOff += ref.Location.Uncomp.Size
		assertExactRanges(t, ref, want.headerRange, want.payloadRange)
		if len(ref.Location.PayloadCompRanges) != 1 || ref.Location.PayloadCompRanges[0] != want.payloadRange {
			t.Fatalf("record %d payload ranges = %+v, want %+v", i, ref.Location.PayloadCompRanges, []Range{want.payloadRange})
		}
		if len(ref.Location.PayloadFrames) != 1 || ref.Location.PayloadFrames[0].Payload != (Range{Off: 0, Size: int64(len(want.payload))}) {
			t.Fatalf("record %d payload frames = %+v, want single full-payload frame", i, ref.Location.PayloadFrames)
		}
		if ref.ContentLength != int64(len(want.payload)) {
			t.Fatalf("record %d ContentLength = %d, want %d", i, ref.ContentLength, len(want.payload))
		}
		if ref.TrailerLen != int64(len(warcRecordTrailer)) {
			t.Fatalf("record %d TrailerLen = %d, want %d", i, ref.TrailerLen, len(warcRecordTrailer))
		}
	}

	source.opened = nil
	gotPayload := readAllFrom(t, refs[1].OpenPayload)
	if !bytes.Equal(gotPayload, fixture.records[1].payload) {
		t.Fatalf("payload = %q, want %q", gotPayload, fixture.records[1].payload)
	}
	if !rangeWasOpened(source.opened, fixture.records[1].payloadRange) {
		t.Fatalf("OpenPayload opened %+v, want payload range %+v", source.opened, fixture.records[1].payloadRange)
	}
	if rangeWasOpened(source.opened, fixture.records[1].headerRange) {
		t.Fatalf("OpenPayload reopened header range: %+v", source.opened)
	}

	gotRaw := readAllFrom(t, refs[0].OpenRaw)
	wantRaw := append(append([]byte{}, fixture.records[0].rawHeader...), fixture.records[0].payloadWithTrailer...)
	if !bytes.Equal(gotRaw, wantRaw) {
		t.Fatalf("raw record = %q, want %q", gotRaw, wantRaw)
	}
}

func TestWARCZstdSeekIndexSupportsChunkedPayloadFrames(t *testing.T) {
	payload := []byte("AAAAABBBBBCCCCCDDDDDEEEEEFFFFF")
	fixture := newSeekIndexedWARCZstdFixture(t,
		seekIndexedFixtureRecord{
			recordType:    "response",
			id:            "<urn:uuid:seek-chunked>",
			payload:       payload,
			payloadChunks: []int{5, 5, 5, 5, 5, 5},
		},
	)
	source := &trackingRangeSource{data: fixture.data}

	index, err := OpenWARCZstdSeekIndex(source)
	if err != nil {
		t.Fatal(err)
	}
	ref := index.Records()[0]
	if len(ref.Location.PayloadCompRanges) != len(fixture.records[0].payloadRanges) {
		t.Fatalf("payload compressed ranges = %+v, want %+v", ref.Location.PayloadCompRanges, fixture.records[0].payloadRanges)
	}
	if len(ref.Location.PayloadFrames) != len(fixture.records[0].payloadChunks) {
		t.Fatalf("payload frames = %+v", ref.Location.PayloadFrames)
	}
	for i, frame := range ref.Location.PayloadFrames {
		if frame.Comp != fixture.records[0].payloadRanges[i] {
			t.Fatalf("payload frame %d comp = %+v, want %+v", i, frame.Comp, fixture.records[0].payloadRanges[i])
		}
		if frame.Payload != (Range{Off: int64(i * 5), Size: 5}) {
			t.Fatalf("payload frame %d payload = %+v, want off=%d size=5", i, frame.Payload, i*5)
		}
	}

	source.opened = nil
	gotRange := readAllFrom(t, func() (io.ReadCloser, error) {
		return ref.OpenPayloadRange(12, 10)
	})
	if !bytes.Equal(gotRange, payload[12:22]) {
		t.Fatalf("payload range = %q, want %q", gotRange, payload[12:22])
	}
	if rangeWasOpened(source.opened, fixture.records[0].headerRange) {
		t.Fatalf("OpenPayloadRange reopened header range: %+v", source.opened)
	}
	if !rangeWasOpened(source.opened, fixture.records[0].payloadRanges[2]) || !rangeWasOpened(source.opened, fixture.records[0].payloadRanges[3]) || !rangeWasOpened(source.opened, fixture.records[0].payloadRanges[4]) {
		t.Fatalf("OpenPayloadRange opened %+v, want overlapping chunks 2,3,4", source.opened)
	}
	if rangeWasOpened(source.opened, fixture.records[0].payloadRanges[0]) || rangeWasOpened(source.opened, fixture.records[0].payloadRanges[1]) || rangeWasOpened(source.opened, fixture.records[0].payloadRanges[5]) {
		t.Fatalf("OpenPayloadRange opened non-overlapping chunks: %+v", source.opened)
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
	if len(ref.Location.PayloadCompRanges) != 0 || len(ref.Location.PayloadFrames) != 0 {
		t.Fatalf("payload ranges = %+v frames = %+v, want none", ref.Location.PayloadCompRanges, ref.Location.PayloadFrames)
	}
	assertExactRanges(t, ref, fixture.records[0].recordRange)

	source.opened = nil
	payload := readAllFrom(t, ref.OpenPayload)
	if len(payload) != 0 {
		t.Fatalf("payload = %q, want empty", payload)
	}
	if len(source.opened) != 0 {
		t.Fatalf("empty OpenPayload opened ranges %+v, want none", source.opened)
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
	if len(ref.Location.PayloadCompRanges) != 1 {
		t.Fatalf("payload comp ranges = %+v, want trailer-only frame", ref.Location.PayloadCompRanges)
	}
	if len(ref.Location.PayloadFrames) != 0 {
		t.Fatalf("payload frames = %+v, want none for zero payload", ref.Location.PayloadFrames)
	}
	payload := readAllFrom(t, ref.OpenPayload)
	if len(payload) != 0 {
		t.Fatalf("payload = %q, want empty", payload)
	}
}

func TestWARCZstdSeekIndexRejectsHeaderFramePastBoundary(t *testing.T) {
	record := seekIndexedFixtureRecord{
		recordType: "response",
		id:         "<urn:uuid:seek-header-too-long>",
		payload:    []byte("payload"),
	}
	record.rawHeader = makeRecordHeader(record.recordType, record.id, record.payload)
	headerFrameBytes := append(append([]byte{}, record.rawHeader...), record.payload[:2]...)
	payloadFrameBytes := append(append([]byte{}, record.payload[2:]...), warcRecordTrailer...)

	data := seekIndexedRecordBytesForTest(t, headerFrameBytes, payloadFrameBytes)
	_, err := OpenWARCZstdSeekIndex(newBytesSource(data))
	if !errors.Is(err, ErrNotSeekIndexed) {
		t.Fatalf("OpenWARCZstdSeekIndex error = %v, want %v", err, ErrNotSeekIndexed)
	}
	if !containsErrorText(err, "not exactly the WARC header boundary") {
		t.Fatalf("error = %v, want header boundary message", err)
	}
}

func TestWARCZstdSeekIndexRejectsHeaderFrameBeforeBoundary(t *testing.T) {
	rawHeader := makeRecordHeader("response", "<urn:uuid:seek-header-too-short>", []byte("payload"))
	data := seekIndexedRecordBytesForTest(t, rawHeader[:len(rawHeader)-3], append([]byte("payload"), warcRecordTrailer...))

	_, err := OpenWARCZstdSeekIndex(newBytesSource(data))
	if !errors.Is(err, ErrNotSeekIndexed) {
		t.Fatalf("OpenWARCZstdSeekIndex error = %v, want %v", err, ErrNotSeekIndexed)
	}
	if !containsErrorText(err, "does not contain a complete WARC header") {
		t.Fatalf("error = %v, want incomplete header message", err)
	}
}

func TestWARCZstdSeekIndexedStreamRemainsForwardScannable(t *testing.T) {
	fixture := newSeekIndexedWARCZstdFixture(t,
		seekIndexedFixtureRecord{
			recordType: "warcinfo",
			id:         "<urn:uuid:seek-forward-1>",
			payload:    []byte("ABC"),
		},
		seekIndexedFixtureRecord{
			recordType: "response",
			id:         "<urn:uuid:seek-forward-2>",
			payload:    []byte("DEFG"),
		},
	)

	refs := scanZstdSource(t, fixture.data)
	if len(refs) != 2 {
		t.Fatalf("records = %d, want 2", len(refs))
	}
	assertZstdOpenPayload(t, refs[0], fixture.records[0].payload)
	assertZstdOpenPayload(t, refs[1], fixture.records[1].payload)
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
	payload          []byte
	payloadChunks    []int
	singleFrameEmpty bool

	rawHeader          []byte
	payloadWithTrailer []byte
	headerRange        Range
	payloadRange       Range
	payloadRanges      []Range
	recordRange        Range
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
		record.rawHeader = makeRecordHeader(record.recordType, record.id, record.payload)
		record.payloadWithTrailer = append(append([]byte{}, record.payload...), warcRecordTrailer...)
		if record.singleFrameEmpty {
			if len(record.payload) != 0 {
				t.Fatalf("single-frame empty fixture %d has payload", i)
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
		payloadFrames := payloadFramesForFixture(t, record.payloadWithTrailer, record.payloadChunks)
		record.headerRange = Range{Off: int64(out.Len()), Size: int64(len(headerFrame))}
		out.Write(headerFrame)
		entries := []zstdSeekEntry{
			{compSize: uint32(len(headerFrame)), uncompSize: uint32(len(record.rawHeader))},
		}
		for _, frame := range payloadFrames {
			rr := Range{Off: int64(out.Len()), Size: int64(len(frame.comp))}
			if record.payloadRange.Size == 0 {
				record.payloadRange = rr
			}
			record.payloadRanges = append(record.payloadRanges, rr)
			out.Write(frame.comp)
			entries = append(entries, zstdSeekEntry{
				compSize:   uint32(len(frame.comp)),
				uncompSize: uint32(len(frame.raw)),
			})
		}
		if len(record.payloadRanges) == 1 {
			record.payloadRange = record.payloadRanges[0]
		}
		record.recordRange = Range{Off: record.headerRange.Off, Size: int64(out.Len()) - record.headerRange.Off}
		out.Write(recordLocalSeekTableForTest(
			entries...,
		))
	}
	return seekIndexedWARCZstdFixture{data: out.Bytes(), records: records}
}

type payloadFrameFixture struct {
	raw  []byte
	comp []byte
}

func payloadFramesForFixture(t *testing.T, payloadWithTrailer []byte, chunkSizes []int) []payloadFrameFixture {
	t.Helper()
	if len(chunkSizes) == 0 {
		return []payloadFrameFixture{{
			raw:  payloadWithTrailer,
			comp: zstdFrame(t, payloadWithTrailer),
		}}
	}
	var frames []payloadFrameFixture
	off := 0
	for _, size := range chunkSizes {
		if off >= len(payloadWithTrailer) {
			break
		}
		end := off + size
		if end > len(payloadWithTrailer) {
			end = len(payloadWithTrailer)
		}
		raw := payloadWithTrailer[off:end]
		frames = append(frames, payloadFrameFixture{
			raw:  raw,
			comp: zstdFrame(t, raw),
		})
		off = end
	}
	if off < len(payloadWithTrailer) {
		raw := payloadWithTrailer[off:]
		frames = append(frames, payloadFrameFixture{
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

func makeRecordHeader(recordType, id string, payload []byte) []byte {
	return []byte(fmt.Sprintf(
		"WARC/1.1\r\n"+
			"WARC-Type: %s\r\n"+
			"WARC-Record-ID: %s\r\n"+
			"Content-Length: %d\r\n"+
			"\r\n",
		recordType,
		id,
		len(payload),
	))
}

func recordLocalSeekTableForTest(entries ...zstdSeekEntry) []byte {
	var payload bytes.Buffer
	for _, entry := range entries {
		_ = binary.Write(&payload, binary.LittleEndian, entry.compSize)
		_ = binary.Write(&payload, binary.LittleEndian, entry.uncompSize)
	}
	_ = binary.Write(&payload, binary.LittleEndian, uint32(len(entries)))
	_ = payload.WriteByte(0)
	_ = binary.Write(&payload, binary.LittleEndian, zstdSeekableMagicNumber)

	var out bytes.Buffer
	_ = binary.Write(&out, binary.LittleEndian, zstdSeekableFrameMagic)
	_ = binary.Write(&out, binary.LittleEndian, uint32(payload.Len()))
	_, _ = out.Write(payload.Bytes())
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
