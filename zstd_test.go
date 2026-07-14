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
	block := []byte("single-frame-block")
	record := makeRecord("response", "<urn:uuid:zstd-single>", block)
	frame := zstdFrame(t, record)

	refs := scanZstdSource(t, frame)
	if len(refs) != 1 {
		t.Fatalf("expected 1 record, got %d", len(refs))
	}
	ref := refs[0]
	assertExactRanges(t, ref, Range{Off: 0, Size: int64(len(frame))})
	assertZstdOpenRaw(t, ref, record)
	assertZstdOpenBlock(t, ref, block)
}

func TestZstdRecordSpansMultipleFramesExactLazySource(t *testing.T) {
	block := []byte("record-spans-zstd-frames")
	record := makeRecord("response", "<urn:uuid:zstd-spanning>", block)
	cut := bytes.Index(record, block) + 7
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
	assertZstdOpenBlock(t, ref, block)
}

func TestZstdSingleFrameMultipleRecordsLazyFromCompressionUnitStart(t *testing.T) {
	block1 := []byte("ABC")
	block2 := []byte("DEFG")
	record1 := makeRecord("warcinfo", "<urn:uuid:zstd-solid-1>", block1)
	record2 := makeRecord("response", "<urn:uuid:zstd-solid-2>", block2)
	frame := zstdFrame(t, append(append([]byte{}, record1...), record2...))

	refs := scanZstdSource(t, frame)
	if len(refs) != 2 {
		t.Fatalf("expected 2 records, got %d", len(refs))
	}
	for i, ref := range refs {
		if ref.location.Access != AccessFromCompressionUnitStart {
			t.Fatalf("record %d access = %s, want %s: %+v", i, ref.location.Access, AccessFromCompressionUnitStart, ref.location)
		}
		if ref.rawPlan == nil || len(ref.rawPlan.compressed) != 1 || ref.rawPlan.compressed[0].Off != 0 {
			t.Fatalf("record %d replay plan = %+v, want frame start", i, ref.rawPlan)
		}
		wantSkip := int64(0)
		if i == 1 {
			wantSkip = int64(len(record1))
		}
		if ref.rawPlan.decoded.Off != wantSkip {
			t.Fatalf("record %d decoded skip = %d, want %d", i, ref.rawPlan.decoded.Off, wantSkip)
		}
		assertIssue(t, ref, IssueFrameContainsMultipleRecords)
	}
	assertZstdOpenRaw(t, refs[0], record1)
	assertZstdOpenBlock(t, refs[0], block1)
	assertZstdOpenRaw(t, refs[1], record2)
	assertZstdOpenBlock(t, refs[1], block2)
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
	block := []byte("dictionary-backed block dictionary-backed block")
	record := makeRecord("response", "<urn:uuid:zstd-dict>", block)
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
	assertZstdOpenBlock(t, ref, block)

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

func TestZstdDictionaryBackedSolidFrameLazyFromCompressionUnitStart(t *testing.T) {
	dict := zstdDictionary(t)
	block1 := []byte("dictionary-backed block one dictionary-backed block one")
	block2 := []byte("dictionary-backed block two dictionary-backed block two")
	wantBlocks := [][]byte{block1, block2}
	record1 := makeRecord("warcinfo", "<urn:uuid:zstd-dict-solid-1>", block1)
	record2 := makeRecord("response", "<urn:uuid:zstd-dict-solid-2>", block2)
	dictFrame := zstdSkippableFrame(zstdDictFrameMagic, dict)
	dataFrame := zstdFrameWithDict(t, append(append([]byte{}, record1...), record2...), dict)
	stream := append(append([]byte{}, dictFrame...), dataFrame...)

	refs := scanZstdSource(t, stream)
	if len(refs) != 2 {
		t.Fatalf("expected 2 dictionary-backed solid-frame records, got %d", len(refs))
	}
	if refs[0].decode == nil || refs[0].decode != refs[1].decode {
		t.Fatal("dictionary-backed records do not share one decode context")
	}
	type openResult struct {
		record int
		block  []byte
		err    error
	}
	results := make(chan openResult, len(refs))
	for i, ref := range refs {
		go func() {
			rc, err := ref.OpenBlock()
			if err != nil {
				results <- openResult{record: i, err: err}
				return
			}
			block, readErr := io.ReadAll(rc)
			results <- openResult{record: i, block: block, err: errors.Join(readErr, rc.Close())}
		}()
	}
	for range refs {
		result := <-results
		if result.err != nil {
			t.Fatalf("concurrent OpenBlock(%d): %v", result.record, result.err)
		}
		if want := wantBlocks[result.record]; !bytes.Equal(result.block, want) {
			t.Fatalf("concurrent block %d = %q, want %q", result.record, result.block, want)
		}
	}
	for i, ref := range refs {
		if ref.location.Access != AccessFromCompressionUnitStart {
			t.Fatalf("record %d access = %s, want %s: %+v", i, ref.location.Access, AccessFromCompressionUnitStart, ref.location)
		}
		if ref.rawPlan == nil || len(ref.rawPlan.compressed) != 1 || ref.rawPlan.compressed[0].Off != int64(len(dictFrame)) {
			t.Fatalf("record %d replay plan = %+v, want data frame start", i, ref.rawPlan)
		}
		assertIssue(t, ref, IssueFrameContainsMultipleRecords)
	}
	assertZstdOpenRaw(t, refs[0], record1)
	assertZstdOpenBlock(t, refs[0], block1)
	assertZstdOpenRaw(t, refs[1], record2)
	assertZstdOpenBlock(t, refs[1], block2)
}

func TestZstdDictionaryBackedRecordSpansFramesExactLazySource(t *testing.T) {
	dict := zstdDictionary(t)
	block := []byte("dictionary-backed block spanning dictionary-backed block spanning")
	record := makeRecord("response", "<urn:uuid:zstd-dict-spanning>", block)
	cut := bytes.Index(record, block) + 9
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
	assertZstdOpenBlock(t, ref, block)
}

func TestZstdDictionaryBackedFrameWithoutFCS(t *testing.T) {
	dict := zstdDictionary(t)
	block := bytes.Repeat([]byte("dictionary-backed no-fcs block "), 512)
	record := makeRecord("response", "<urn:uuid:zstd-dict-no-fcs>", block)
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
	assertZstdOpenBlock(t, ref, block)

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
	block1 := []byte("before-extension")
	block2 := []byte("after-extension")
	record1 := makeRecord("warcinfo", "<urn:uuid:zstd-ext-1>", block1)
	record2 := makeRecord("response", "<urn:uuid:zstd-ext-2>", block2)
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
	assertZstdOpenBlock(t, refs[0], block1)
	assertZstdOpenBlock(t, refs[1], block2)
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
	block := []byte("no-frame-content-size")
	record := makeRecord("response", "<urn:uuid:zstd-no-fcs>", block)
	frame := zstdFrameWithoutFCS(t, record)

	refs := scanZstdSource(t, frame)
	if len(refs) != 1 {
		t.Fatalf("expected 1 record, got %d", len(refs))
	}
	ref := refs[0]
	assertExactRanges(t, ref, Range{Off: 0, Size: int64(len(frame))})
	assertZstdOpenRaw(t, ref, record)
	assertZstdOpenBlock(t, ref, block)
}

func TestZstdFrameWithoutFCSStreamsWhenBufferDisabled(t *testing.T) {
	block := bytes.Repeat([]byte("no-fcs-streaming-"), 2048)
	record := makeRecord("response", "<urn:uuid:zstd-no-fcs-streaming>", block)
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
	assertZstdOpenBlock(t, ref, block)
	if scanner.Next() {
		t.Fatal("unexpected extra record")
	}
	if err := scanner.Err(); err != nil {
		t.Fatal(err)
	}
}

func TestZstdStrictNextRecordRejectsMissingFCS(t *testing.T) {
	record := makeRecord("response", "<urn:uuid:zstd-strict-next-block-no-fcs>", []byte("block"))
	frame := zstdFrameWithoutFCS(t, record)

	scanner, err := NewScanner(bytes.NewReader(frame), ScannerOptions{
		Compression: CompressionZstd,
		Strict:      true,
	})
	if err != nil {
		t.Fatal(err)
	}
	_, err = scanner.NextRecord()
	if !errors.Is(err, ErrInvalidWARCZstd) {
		t.Fatalf("NextRecord() error = %v, want %v", err, ErrInvalidWARCZstd)
	}
}

func TestZstdStrictRequiresFrameContentSizeAndChecksum(t *testing.T) {
	block := []byte("strict-zstd-frame-fields")
	record := makeRecord("response", "<urn:uuid:zstd-strict-frame-fields>", block)

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
				t.Fatalf("missing issue %v in %+v", tt.wantIssue, refs[0].issues)
			}
			assertZstdOpenBlock(t, refs[0], block)
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
	frameData := bytes.Repeat([]byte("streaming-zstd-frame-reader-"), 4096)
	frame := zstdFrame(t, frameData)
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

func assertZstdOpenBlock(t *testing.T, ref *RecordRef, want []byte) {
	t.Helper()
	assertZstdRead(t, readAllFrom(t, ref.OpenBlock), want)
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
	history := bytes.Repeat([]byte("dictionary-backed block WARC/1.1 response "), 64)
	contents := [][]byte{
		bytes.Repeat([]byte("dictionary-backed block WARC/1.1 response "), 32),
		bytes.Repeat([]byte("response dictionary-backed block Content-Length "), 32),
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
