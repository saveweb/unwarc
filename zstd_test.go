package unwarc

import (
	"bytes"
	"encoding/binary"
	"errors"
	"io"
	"testing"

	"github.com/klauspost/compress/zstd"
)

func TestZstdSingleRecordOneFrameExactLazySource(t *testing.T) {
	payload := []byte("single-frame-payload")
	record := makeRecord("response", "<urn:uuid:zstd-single>", payload)
	frame := zstdFrame(t, record)

	refs := scanZstdSource(t, frame)
	if len(refs) != 1 {
		t.Fatalf("expected 1 record, got %d", len(refs))
	}
	ref := refs[0]
	assertExactRanges(t, ref, Range{Off: 0, Size: int64(len(frame))})
	assertZstdOpenRaw(t, ref, record)
	assertZstdOpenPayload(t, ref, payload)
}

func TestZstdRecordSpansMultipleFramesExactLazySource(t *testing.T) {
	payload := []byte("record-spans-zstd-frames")
	record := makeRecord("response", "<urn:uuid:zstd-spanning>", payload)
	cut := bytes.Index(record, payload) + 7
	if cut <= 0 {
		t.Fatal("bad test fixture")
	}

	frame1 := zstdFrame(t, record[:cut])
	frame2 := zstdFrame(t, record[cut:])
	stream := append(append([]byte{}, frame1...), frame2...)

	refs := scanZstdSource(t, stream)
	if len(refs) != 1 {
		t.Fatalf("expected 1 record, got %d", len(refs))
	}
	ref := refs[0]
	assertExactRanges(t, ref,
		Range{Off: 0, Size: int64(len(frame1))},
		Range{Off: int64(len(frame1)), Size: int64(len(frame2))},
	)
	assertZstdOpenRaw(t, ref, record)
	assertZstdOpenPayload(t, ref, payload)
}

func TestZstdSingleFrameMultipleRecordsLazyFromSegmentStart(t *testing.T) {
	payload1 := []byte("ABC")
	payload2 := []byte("DEFG")
	record1 := makeRecord("warcinfo", "<urn:uuid:zstd-solid-1>", payload1)
	record2 := makeRecord("response", "<urn:uuid:zstd-solid-2>", payload2)
	frame := zstdFrame(t, append(append([]byte{}, record1...), record2...))

	refs := scanZstdSource(t, frame)
	if len(refs) != 2 {
		t.Fatalf("expected 2 records, got %d", len(refs))
	}
	for i, ref := range refs {
		if ref.Location.Access != AccessFromSegmentStart {
			t.Fatalf("record %d access = %s, want %s: %+v", i, ref.Location.Access, AccessFromSegmentStart, ref.Location)
		}
		if ref.Location.RestartRange == nil || ref.Location.RestartRange.Off != 0 {
			t.Fatalf("record %d restart range = %+v, want frame start", i, ref.Location.RestartRange)
		}
		assertIssue(t, ref, IssueFrameContainsMultipleRecords)
	}
	assertZstdOpenRaw(t, refs[0], record1)
	assertZstdOpenPayload(t, refs[0], payload1)
	assertZstdOpenRaw(t, refs[1], record2)
	assertZstdOpenPayload(t, refs[1], payload2)
}

func TestZstdStrictRejectsSingleFrameMultipleRecords(t *testing.T) {
	record1 := makeRecord("warcinfo", "<urn:uuid:zstd-strict-solid-1>", []byte("ABC"))
	record2 := makeRecord("response", "<urn:uuid:zstd-strict-solid-2>", []byte("DEFG"))
	frame := zstdFrame(t, append(append([]byte{}, record1...), record2...))

	scanner, err := NewScanner(bytes.NewReader(frame), ScannerOptions{
		Compression: CompressionZstd,
		Strict:      true,
	})
	if err != nil {
		t.Fatal(err)
	}
	if scanner.Next() {
		t.Fatal("unexpected strict record from zstd frame containing multiple records")
	}
	if !errors.Is(scanner.Err(), ErrInvalidWARCZstd) {
		t.Fatalf("Err() = %v, want %v", scanner.Err(), ErrInvalidWARCZstd)
	}
}

func TestZstdDictionaryFrameAllowedOnlyAtBeginning(t *testing.T) {
	dict := zstdDictionary(t)
	payload := []byte("dictionary-backed payload dictionary-backed payload")
	record := makeRecord("response", "<urn:uuid:zstd-dict>", payload)
	dictFrame := zstdSkippableFrame(zstdDictFrameMagic, dict)
	dataFrame := zstdFrameWithDict(t, record, dict)
	stream := append(append([]byte{}, dictFrame...), dataFrame...)

	refs := scanZstdSource(t, stream)
	if len(refs) != 1 {
		t.Fatalf("expected 1 dictionary-prefixed record, got %d", len(refs))
	}
	ref := refs[0]
	assertExactRanges(t, ref, Range{Off: int64(len(dictFrame)), Size: int64(len(dataFrame))})
	assertZstdOpenRaw(t, ref, record)
	assertZstdOpenPayload(t, ref, payload)

	lateDict := append(append([]byte{}, zstdFrame(t, record)...), dictFrame...)
	lateDict = append(lateDict, zstdFrame(t, record)...)
	scanner, err := NewScanner(bytes.NewReader(lateDict), ScannerOptions{Compression: CompressionZstd})
	if err != nil {
		t.Fatal(err)
	}
	if !scanner.Next() {
		t.Fatalf("first record before late dictionary: %v", scanner.Err())
	}
	if scanner.Next() {
		t.Fatal("unexpected record after late dictionary")
	}
	if scanner.Err() == nil {
		t.Fatal("expected late dictionary frame error")
	}
}

func TestZstdDictionaryBackedSolidFrameLazyFromSegmentStart(t *testing.T) {
	dict := zstdDictionary(t)
	payload1 := []byte("dictionary-backed payload one dictionary-backed payload one")
	payload2 := []byte("dictionary-backed payload two dictionary-backed payload two")
	record1 := makeRecord("warcinfo", "<urn:uuid:zstd-dict-solid-1>", payload1)
	record2 := makeRecord("response", "<urn:uuid:zstd-dict-solid-2>", payload2)
	dictFrame := zstdSkippableFrame(zstdDictFrameMagic, dict)
	dataFrame := zstdFrameWithDict(t, append(append([]byte{}, record1...), record2...), dict)
	stream := append(append([]byte{}, dictFrame...), dataFrame...)

	refs := scanZstdSource(t, stream)
	if len(refs) != 2 {
		t.Fatalf("expected 2 dictionary-backed solid-frame records, got %d", len(refs))
	}
	for i, ref := range refs {
		if ref.Location.Access != AccessFromSegmentStart {
			t.Fatalf("record %d access = %s, want %s: %+v", i, ref.Location.Access, AccessFromSegmentStart, ref.Location)
		}
		if ref.Location.RestartRange == nil || ref.Location.RestartRange.Off != int64(len(dictFrame)) {
			t.Fatalf("record %d restart range = %+v, want data frame start", i, ref.Location.RestartRange)
		}
		assertIssue(t, ref, IssueFrameContainsMultipleRecords)
	}
	assertZstdOpenRaw(t, refs[0], record1)
	assertZstdOpenPayload(t, refs[0], payload1)
	assertZstdOpenRaw(t, refs[1], record2)
	assertZstdOpenPayload(t, refs[1], payload2)
}

func TestZstdDictionaryBackedRecordSpansFramesExactLazySource(t *testing.T) {
	dict := zstdDictionary(t)
	payload := []byte("dictionary-backed payload spanning dictionary-backed payload spanning")
	record := makeRecord("response", "<urn:uuid:zstd-dict-spanning>", payload)
	cut := bytes.Index(record, payload) + 9
	if cut <= 0 {
		t.Fatal("bad test fixture")
	}

	dictFrame := zstdSkippableFrame(zstdDictFrameMagic, dict)
	frame1 := zstdFrameWithDict(t, record[:cut], dict)
	frame2 := zstdFrameWithDict(t, record[cut:], dict)
	stream := append(append(append([]byte{}, dictFrame...), frame1...), frame2...)

	refs := scanZstdSource(t, stream)
	if len(refs) != 1 {
		t.Fatalf("expected 1 dictionary-backed spanning record, got %d", len(refs))
	}
	ref := refs[0]
	assertExactRanges(t, ref,
		Range{Off: int64(len(dictFrame)), Size: int64(len(frame1))},
		Range{Off: int64(len(dictFrame) + len(frame1)), Size: int64(len(frame2))},
	)
	assertZstdOpenRaw(t, ref, record)
	assertZstdOpenPayload(t, ref, payload)
}

func TestZstdDictionaryBackedFrameWithoutFCS(t *testing.T) {
	dict := zstdDictionary(t)
	payload := bytes.Repeat([]byte("dictionary-backed no-fcs payload "), 512)
	record := makeRecord("response", "<urn:uuid:zstd-dict-no-fcs>", payload)
	dictFrame := zstdSkippableFrame(zstdDictFrameMagic, dict)
	dataFrame := zstdFrameWithDictWithoutFCS(t, record, dict)
	stream := append(append([]byte{}, dictFrame...), dataFrame...)

	scanner, err := NewScannerFromSource(newBytesSource(stream), ScannerOptions{
		Compression:              CompressionZstd,
		MaxBufferedZstdFrameSize: -1,
	})
	if err != nil {
		t.Fatal(err)
	}
	defer closeTest(t, scanner)
	if !scanner.Next() {
		t.Fatalf("expected record: %v", scanner.Err())
	}
	ref := scanner.RecordRef()
	assertExactRanges(t, ref, Range{Off: int64(len(dictFrame)), Size: int64(len(dataFrame))})
	assertIssue(t, ref, IssueZstdFrameMissingContentSize)
	assertZstdOpenPayload(t, ref, payload)

	strictScanner, err := NewScanner(bytes.NewReader(stream), ScannerOptions{
		Compression: CompressionZstd,
		Strict:      true,
	})
	if err != nil {
		t.Fatal(err)
	}
	if strictScanner.Next() {
		t.Fatal("unexpected strict record from dictionary-backed frame missing FCS")
	}
	if !errors.Is(strictScanner.Err(), ErrInvalidWARCZstd) {
		t.Fatalf("strict Err() = %v, want %v", strictScanner.Err(), ErrInvalidWARCZstd)
	}
}

func TestZstdSkippableExtensionBetweenFrames(t *testing.T) {
	payload1 := []byte("before-extension")
	payload2 := []byte("after-extension")
	record1 := makeRecord("warcinfo", "<urn:uuid:zstd-ext-1>", payload1)
	record2 := makeRecord("response", "<urn:uuid:zstd-ext-2>", payload2)
	frame1 := zstdFrame(t, record1)
	extension := zstdSkippableFrame(0x184D2A50, []byte("extension payload"))
	frame2 := zstdFrame(t, record2)
	stream := append(append(append([]byte{}, frame1...), extension...), frame2...)

	refs := scanZstdSource(t, stream)
	if len(refs) != 2 {
		t.Fatalf("expected 2 records, got %d", len(refs))
	}
	assertExactRanges(t, refs[0], Range{Off: 0, Size: int64(len(frame1))})
	assertExactRanges(t, refs[1], Range{Off: int64(len(frame1) + len(extension)), Size: int64(len(frame2))})
	assertZstdOpenPayload(t, refs[0], payload1)
	assertZstdOpenPayload(t, refs[1], payload2)
}

func TestZstdOversizedSkippableFramesDoNotAllocatePayloads(t *testing.T) {
	record := makeRecord("warcinfo", "<urn:uuid:zstd-oversized-skippable>", []byte("ABC"))
	frame := zstdFrame(t, record)
	oversized := zstdSkippableFrameHeader(0x184D2A50, uint32(maxZstdDictionarySize+1))
	stream := append(append([]byte{}, frame...), oversized...)

	scanner, err := NewScanner(bytes.NewReader(stream), ScannerOptions{Compression: CompressionZstd})
	if err != nil {
		t.Fatal(err)
	}
	if !scanner.Next() {
		t.Fatalf("first record: %v", scanner.Err())
	}
	if scanner.Next() {
		t.Fatal("unexpected record after truncated extension frame")
	}
	if scanner.Err() == nil {
		t.Fatal("expected truncated extension frame error")
	}

	dictFrame := zstdSkippableFrameHeader(zstdDictFrameMagic, uint32(maxZstdDictionarySize+1))
	scanner, err = NewScanner(bytes.NewReader(dictFrame), ScannerOptions{Compression: CompressionZstd})
	if err != nil {
		t.Fatal(err)
	}
	if scanner.Next() {
		t.Fatal("unexpected record from oversized dictionary frame")
	}
	if scanner.Err() == nil {
		t.Fatal("expected oversized dictionary frame error")
	}

	for _, magic := range []uint32{0x184D2A50, zstdDictFrameMagic} {
		scanner, err = NewScanner(bytes.NewReader(zstdSkippableFrameHeader(magic, 0)[:4]), ScannerOptions{Compression: CompressionZstd})
		if err != nil {
			t.Fatal(err)
		}
		if scanner.Next() {
			t.Fatal("unexpected record from magic-only skippable frame")
		}
		if scanner.Err() == nil {
			t.Fatalf("expected magic-only frame error for 0x%08x", magic)
		}
	}
}

func TestZstdFrameWithoutFCSEndsAtExactRange(t *testing.T) {
	payload := []byte("no-frame-content-size")
	record := makeRecord("response", "<urn:uuid:zstd-no-fcs>", payload)
	frame := zstdFrameWithoutFCS(t, record)

	refs := scanZstdSource(t, frame)
	if len(refs) != 1 {
		t.Fatalf("expected 1 record, got %d", len(refs))
	}
	ref := refs[0]
	assertExactRanges(t, ref, Range{Off: 0, Size: int64(len(frame))})
	assertZstdOpenRaw(t, ref, record)
	assertZstdOpenPayload(t, ref, payload)
}

func TestZstdFrameWithoutFCSStreamsWhenBufferDisabled(t *testing.T) {
	payload := bytes.Repeat([]byte("no-fcs-streaming-"), 2048)
	record := makeRecord("response", "<urn:uuid:zstd-no-fcs-streaming>", payload)
	frame := zstdFrameWithoutFCS(t, record)

	scanner, err := NewScannerFromSource(newBytesSource(frame), ScannerOptions{
		Compression:              CompressionZstd,
		MaxBufferedZstdFrameSize: -1,
	})
	if err != nil {
		t.Fatal(err)
	}
	defer closeTest(t, scanner)
	if !scanner.Next() {
		t.Fatalf("expected record: %v", scanner.Err())
	}
	ref := scanner.RecordRef()
	assertExactRanges(t, ref, Range{Off: 0, Size: int64(len(frame))})
	assertIssue(t, ref, IssueZstdFrameMissingContentSize)
	assertZstdOpenPayload(t, ref, payload)
	if scanner.Next() {
		t.Fatal("unexpected extra record")
	}
	if err := scanner.Err(); err != nil {
		t.Fatal(err)
	}
}

func TestZstdStrictNextPayloadRejectsMissingFCS(t *testing.T) {
	record := makeRecord("response", "<urn:uuid:zstd-strict-next-payload-no-fcs>", []byte("payload"))
	frame := zstdFrameWithoutFCS(t, record)

	scanner, err := NewScanner(bytes.NewReader(frame), ScannerOptions{
		Compression: CompressionZstd,
		Strict:      true,
	})
	if err != nil {
		t.Fatal(err)
	}
	_, _, err = scanner.NextPayload()
	if !errors.Is(err, ErrInvalidWARCZstd) {
		t.Fatalf("NextPayload() error = %v, want %v", err, ErrInvalidWARCZstd)
	}
}

func TestZstdStrictRequiresFrameContentSizeAndChecksum(t *testing.T) {
	payload := []byte("strict-zstd-frame-fields")
	record := makeRecord("response", "<urn:uuid:zstd-strict-frame-fields>", payload)

	tests := []struct {
		name      string
		frame     []byte
		wantIssue IssueCode
	}{
		{
			name:      "missing frame content size",
			frame:     zstdFrameWithoutFCS(t, record),
			wantIssue: IssueZstdFrameMissingContentSize,
		},
		{
			name:      "missing content checksum",
			frame:     zstdFrameWithoutChecksum(t, record),
			wantIssue: IssueZstdFrameMissingChecksum,
		},
	}

	for _, tt := range tests {
		t.Run(tt.name+"/non-strict", func(t *testing.T) {
			refs := scanZstdSource(t, tt.frame)
			if len(refs) != 1 {
				t.Fatalf("expected 1 record, got %d", len(refs))
			}
			if !hasIssue(refs[0], tt.wantIssue) {
				t.Fatalf("missing issue %v in %+v", tt.wantIssue, refs[0].Location.Issues)
			}
			assertZstdOpenPayload(t, refs[0], payload)
		})

		t.Run(tt.name+"/strict", func(t *testing.T) {
			scanner, err := NewScanner(bytes.NewReader(tt.frame), ScannerOptions{
				Compression: CompressionZstd,
				Strict:      true,
			})
			if err != nil {
				t.Fatal(err)
			}
			if scanner.Next() {
				t.Fatal("unexpected strict record from WARC-zstd frame missing required fields")
			}
			if !errors.Is(scanner.Err(), ErrInvalidWARCZstd) {
				t.Fatalf("Err() = %v, want %v", scanner.Err(), ErrInvalidWARCZstd)
			}
		})
	}
}

func TestZstdFrameCompressedReaderStreamsSmallReads(t *testing.T) {
	payload := bytes.Repeat([]byte("streaming-zstd-frame-reader-"), 4096)
	frame := zstdFrame(t, payload)
	if frame[4]&0x04 == 0 {
		t.Fatal("test fixture must include a zstd content checksum")
	}
	reader := newZstdFrameCompressedReader(bytes.NewReader(frame[4:]), zstdFrameMagic)

	var got bytes.Buffer
	buf := make([]byte, 2)
	for {
		n, err := reader.Read(buf)
		if n > 0 {
			got.Write(buf[:n])
		}
		if err == io.EOF {
			break
		}
		if err != nil {
			t.Fatal(err)
		}
	}
	if !bytes.Equal(got.Bytes(), frame) {
		t.Fatalf("streamed frame differs from original: got %d bytes, want %d", got.Len(), len(frame))
	}
}

func scanZstdSource(t *testing.T, stream []byte) []*RecordRef {
	t.Helper()
	return scanSourceRefs(t, newBytesSource(stream), CompressionZstd)
}

func assertZstdOpenRaw(t *testing.T, ref *RecordRef, want []byte) {
	t.Helper()
	assertZstdRead(t, readAllFrom(t, ref.OpenRaw), want)
}

func assertZstdOpenPayload(t *testing.T, ref *RecordRef, want []byte) {
	t.Helper()
	assertZstdRead(t, readAllFrom(t, ref.OpenPayload), want)
}

func assertZstdRead(t *testing.T, got, want []byte) {
	t.Helper()
	if !bytes.Equal(got, want) {
		t.Fatalf("read %q, want %q", got, want)
	}
}

func zstdSkippableFrameHeader(magic, size uint32) []byte {
	var out bytes.Buffer
	_ = binary.Write(&out, binary.LittleEndian, magic)
	_ = binary.Write(&out, binary.LittleEndian, size)
	return out.Bytes()
}

func zstdFrameWithoutFCS(t *testing.T, data []byte) []byte {
	t.Helper()
	var buf bytes.Buffer
	enc, err := zstd.NewWriter(&buf,
		zstd.WithEncoderCRC(true),
		zstd.WithEncoderConcurrency(1),
		zstd.WithSingleSegment(false),
	)
	if err != nil {
		t.Fatal(err)
	}
	if _, err := enc.Write(data); err != nil {
		t.Fatal(err)
	}
	if err := enc.Close(); err != nil {
		t.Fatal(err)
	}
	out := buf.Bytes()
	if len(out) < 6 {
		t.Fatalf("short zstd frame: %d bytes", len(out))
	}
	desc := out[4]
	if desc&0x20 != 0 || desc>>6 != 0 {
		out, err = zstdFrameWithoutContentSize(out)
		if err != nil {
			t.Fatal(err)
		}
		desc = out[4]
		if desc&0x20 != 0 || desc>>6 != 0 {
			t.Fatalf("fixture unexpectedly has frame content size: descriptor 0x%02x", desc)
		}
	}
	return out
}

func zstdFrameWithoutChecksum(t *testing.T, data []byte) []byte {
	t.Helper()
	enc, err := zstd.NewWriter(nil,
		zstd.WithEncoderCRC(false),
		zstd.WithEncoderConcurrency(1),
		zstd.WithSingleSegment(true),
	)
	if err != nil {
		t.Fatal(err)
	}
	defer closeTest(t, enc)
	out := enc.EncodeAll(data, nil)
	if len(out) < 5 {
		t.Fatalf("short zstd frame: %d bytes", len(out))
	}
	if out[4]&0x04 != 0 {
		t.Fatalf("fixture unexpectedly has content checksum: descriptor 0x%02x", out[4])
	}
	return out
}

func zstdDictionary(t *testing.T) []byte {
	t.Helper()
	history := bytes.Repeat([]byte("dictionary-backed payload WARC/1.1 response "), 64)
	contents := [][]byte{
		bytes.Repeat([]byte("dictionary-backed payload WARC/1.1 response "), 32),
		bytes.Repeat([]byte("response dictionary-backed payload Content-Length "), 32),
	}
	dict, err := zstd.BuildDict(zstd.BuildDictOptions{
		ID:       17,
		History:  history,
		Contents: contents,
	})
	if err != nil {
		t.Fatal(err)
	}
	return dict
}

func zstdFrameWithDict(t *testing.T, data, dict []byte) []byte {
	t.Helper()
	enc, err := zstd.NewWriter(nil,
		zstd.WithEncoderCRC(true),
		zstd.WithEncoderDict(dict),
		zstd.WithSingleSegment(true),
	)
	if err != nil {
		t.Fatal(err)
	}
	defer closeTest(t, enc)
	return enc.EncodeAll(data, nil)
}

func zstdFrameWithDictWithoutFCS(t *testing.T, data, dict []byte) []byte {
	t.Helper()
	enc, err := zstd.NewWriter(nil,
		zstd.WithEncoderCRC(true),
		zstd.WithEncoderDict(dict),
		zstd.WithSingleSegment(false),
	)
	if err != nil {
		t.Fatal(err)
	}
	defer closeTest(t, enc)
	out := enc.EncodeAll(data, nil)
	out, err = zstdFrameWithoutContentSize(out)
	if err != nil {
		t.Fatal(err)
	}
	return out
}
