package unwarc

import (
	"bytes"
	"encoding/binary"
	"errors"
	"fmt"
	"io"
	"os"
	"path/filepath"
	"testing"

	"github.com/klauspost/compress/gzip"
	"github.com/klauspost/compress/zstd"
)

func TestScannerPlainOffsetsAndLazyPayload(t *testing.T) {
	records := [][]byte{
		makeRecord("warcinfo", "<urn:uuid:plain-1>", []byte("ABC")),
		makeRecord("response", "<urn:uuid:plain-2>", []byte("DEFG")),
	}
	path := writeTemp(t, bytes.Join(records, nil))

	scanner, err := NewScannerFromSource(NewFileSource(path), ScannerOptions{Compression: CompressionPlain})
	if err != nil {
		t.Fatal(err)
	}
	t.Cleanup(func() {
		if err := scanner.Close(); err != nil {
			t.Error(err)
		}
	})

	var refs []*RecordRef
	for scanner.Next() {
		refs = append(refs, scanner.RecordRef())
	}
	if err := scanner.Err(); err != nil {
		t.Fatal(err)
	}
	if len(refs) != 2 {
		t.Fatalf("expected 2 records, got %d", len(refs))
	}
	if refs[0].Location.Access != AccessExact || refs[0].Location.CompRanges[0].Off != 0 {
		t.Fatalf("unexpected first location: %+v", refs[0].Location)
	}
	if refs[1].Location.Access != AccessExact || refs[1].Location.CompRanges[0].Off != int64(len(records[0])) {
		t.Fatalf("unexpected second location: %+v", refs[1].Location)
	}

	payload, err := refs[1].OpenPayload()
	if err != nil {
		t.Fatal(err)
	}
	defer closeTest(t, payload)
	got, err := io.ReadAll(payload)
	if err != nil {
		t.Fatal(err)
	}
	if string(got) != "DEFG" {
		t.Fatalf("unexpected payload %q", got)
	}
}

func TestReadWARCHeaderRejectsNonCanonicalFraming(t *testing.T) {
	tests := []struct {
		name string
		data string
	}{
		{name: "leading CRLF", data: "\r\nWARC/1.1\r\nContent-Length: 0\r\n\r\n"},
		{name: "leading LF", data: "\nWARC/1.1\r\nContent-Length: 0\r\n\r\n"},
		{name: "LF version line", data: "WARC/1.1\nContent-Length: 0\r\n\r\n"},
		{name: "extra CR in version line", data: "WARC/1.1\r\r\nContent-Length: 0\r\n\r\n"},
		{name: "LF field line", data: "WARC/1.1\r\nContent-Length: 0\n\r\n"},
		{name: "LF header terminator", data: "WARC/1.1\r\nContent-Length: 0\r\n\n"},
		{name: "extra CR in header terminator", data: "WARC/1.1\r\nContent-Length: 0\r\n\r\r\n"},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			_, err := readRecordHeader(bytes.NewBufferString(tt.data), false)
			if !errors.Is(err, ErrInvalidWARCHeader) {
				t.Fatalf("error = %v, want %v", err, ErrInvalidWARCHeader)
			}
		})
	}
}

func TestScannerRejectsExtraCRLFBetweenRecords(t *testing.T) {
	first := makeRecord("warcinfo", "<urn:uuid:extra-crlf-1>", nil)
	second := makeRecord("response", "<urn:uuid:extra-crlf-2>", nil)
	data := append(append(append([]byte{}, first...), []byte("\r\n")...), second...)

	scanner, err := NewScanner(bytes.NewReader(data), ScannerOptions{Compression: CompressionPlain})
	if err != nil {
		t.Fatal(err)
	}
	if !scanner.Next() {
		t.Fatalf("first record: %v", scanner.Err())
	}
	if scanner.Next() {
		t.Fatal("second record unexpectedly accepted after extra CRLF")
	}
	if !errors.Is(scanner.Err(), ErrInvalidWARCHeader) {
		t.Fatalf("error = %v, want %v", scanner.Err(), ErrInvalidWARCHeader)
	}
}

func TestScannerResynchronizesAcrossExtraCRLF(t *testing.T) {
	first := makeRecord("warcinfo", "<urn:uuid:resync-1>", nil)
	second := makeRecord("response", "<urn:uuid:resync-2>", nil)
	data := append([]byte("\r\n"), first...)
	data = append(data, []byte("\r\n\r\n")...)
	data = append(data, second...)

	scanner, err := NewScannerFromSource(newBytesSource(data), ScannerOptions{
		Compression:   CompressionPlain,
		Resynchronize: true,
	})
	if err != nil {
		t.Fatal(err)
	}
	t.Cleanup(func() {
		if err := scanner.Close(); err != nil {
			t.Error(err)
		}
	})

	if !scanner.Next() {
		t.Fatalf("first record: %v", scanner.Err())
	}
	firstRef := scanner.RecordRef()
	if firstRef.Location.Uncomp.Off != 2 {
		t.Fatalf("first offset = %d, want 2", firstRef.Location.Uncomp.Off)
	}

	if !scanner.Next() {
		t.Fatalf("second record: %v", scanner.Err())
	}
	secondRef := scanner.RecordRef()
	wantSecondOff := int64(2 + len(first) + 4)
	if secondRef.Location.Uncomp.Off != wantSecondOff {
		t.Fatalf("second offset = %d, want %d", secondRef.Location.Uncomp.Off, wantSecondOff)
	}
	if got := readAllFrom(t, secondRef.OpenRaw); !bytes.Equal(got, second) {
		t.Fatalf("second raw record = %q, want %q", got, second)
	}

	if scanner.Next() {
		t.Fatal("unexpected third record")
	}
	if err := scanner.Err(); err != nil {
		t.Fatal(err)
	}
}

func TestScannerResynchronizationDoesNotSkipArbitraryBytes(t *testing.T) {
	record := makeRecord("warcinfo", "<urn:uuid:resync-garbage>", nil)
	data := append([]byte("garbage\r\n"), record...)
	scanner, err := NewScanner(bytes.NewReader(data), ScannerOptions{
		Compression:   CompressionPlain,
		Resynchronize: true,
	})
	if err != nil {
		t.Fatal(err)
	}
	if scanner.Next() {
		t.Fatal("record unexpectedly accepted after arbitrary bytes")
	}
	if !errors.Is(scanner.Err(), ErrInvalidWARCHeader) {
		t.Fatalf("error = %v, want %v", scanner.Err(), ErrInvalidWARCHeader)
	}
}

func TestScannerNextPayloadStreamsContent(t *testing.T) {
	records := [][]byte{
		makeRecord("warcinfo", "<urn:uuid:stream-payload-1>", []byte("ABC")),
		makeRecord("response", "<urn:uuid:stream-payload-2>", []byte("DEFG")),
	}
	scanner, err := NewScanner(bytes.NewReader(bytes.Join(records, nil)), ScannerOptions{Compression: CompressionPlain})
	if err != nil {
		t.Fatal(err)
	}

	ref, payload, err := scanner.NextPayload()
	if err != nil {
		t.Fatal(err)
	}
	got, err := io.ReadAll(payload)
	if err != nil {
		t.Fatal(err)
	}
	if string(got) != "ABC" {
		t.Fatalf("first payload = %q", got)
	}
	if ref.TrailerLen != 4 || ref.Location.Uncomp.Size != int64(len(records[0])) {
		t.Fatalf("first ref was not finalized after payload read: %+v trailer=%d", ref.Location, ref.TrailerLen)
	}

	ref, payload, err = scanner.NextPayload()
	if err != nil {
		t.Fatal(err)
	}
	got, err = io.ReadAll(payload)
	if err != nil {
		t.Fatal(err)
	}
	if string(got) != "DEFG" {
		t.Fatalf("second payload = %q", got)
	}
	if ref.TrailerLen != 4 || ref.Location.Uncomp.Size != int64(len(records[1])) {
		t.Fatalf("second ref was not finalized after payload read: %+v trailer=%d", ref.Location, ref.TrailerLen)
	}

	_, _, err = scanner.NextPayload()
	if !errors.Is(err, io.EOF) {
		t.Fatalf("NextPayload() err = %v, want EOF", err)
	}
	if err := scanner.Err(); err != nil {
		t.Fatal(err)
	}
}

func TestScannerNextPayloadPendingLocationRejectsLazyOpen(t *testing.T) {
	record := makeRecord("warcinfo", "<urn:uuid:stream-pending>", []byte("ABC"))
	scanner, err := NewScanner(bytes.NewReader(record), ScannerOptions{Compression: CompressionPlain})
	if err != nil {
		t.Fatal(err)
	}

	ref, payload, err := scanner.NextPayload()
	if err != nil {
		t.Fatal(err)
	}
	if ref.Finalized() {
		t.Fatalf("ref was finalized before payload was consumed: %+v", ref.Location)
	}
	if got := scanner.RecordRef(); got != nil {
		t.Fatalf("scanner.RecordRef before finalization = %+v, want nil", got)
	}
	if _, err := ref.OpenRaw(); !errors.Is(err, ErrRecordLocationPending) {
		t.Fatalf("OpenRaw before finalization error = %v, want %v", err, ErrRecordLocationPending)
	}
	if _, err := ref.OpenPayload(); !errors.Is(err, ErrRecordLocationPending) {
		t.Fatalf("OpenPayload before finalization error = %v, want %v", err, ErrRecordLocationPending)
	}

	if _, err := io.ReadAll(payload); err != nil {
		t.Fatal(err)
	}
	if err := payload.Close(); err != nil {
		t.Fatal(err)
	}
	if !ref.Finalized() {
		t.Fatalf("ref was not finalized after payload read: %+v", ref.Location)
	}
	if got := scanner.RecordRef(); got != ref {
		t.Fatalf("scanner.RecordRef after finalization = %+v, want returned ref", got)
	}
	if _, err := ref.OpenPayload(); err == nil || errors.Is(err, ErrRecordLocationPending) {
		t.Fatalf("OpenPayload after finalization error = %v, want non-pending no-source/lazy-open error", err)
	}
}

func TestScannerNextPayloadClosesPreviousPayload(t *testing.T) {
	records := [][]byte{
		makeRecord("warcinfo", "<urn:uuid:stream-payload-close-1>", []byte("ABC")),
		makeRecord("response", "<urn:uuid:stream-payload-close-2>", []byte("DEFG")),
	}
	scanner, err := NewScanner(bytes.NewReader(bytes.Join(records, nil)), ScannerOptions{Compression: CompressionPlain})
	if err != nil {
		t.Fatal(err)
	}

	ref1, _, err := scanner.NextPayload()
	if err != nil {
		t.Fatal(err)
	}
	ref2, payload, err := scanner.NextPayload()
	if err != nil {
		t.Fatal(err)
	}
	if ref1.TrailerLen != 4 || ref1.Location.Uncomp.Size != int64(len(records[0])) {
		t.Fatalf("first ref was not finalized when advancing: %+v trailer=%d", ref1.Location, ref1.TrailerLen)
	}
	got, err := io.ReadAll(payload)
	if err != nil {
		t.Fatal(err)
	}
	if string(got) != "DEFG" {
		t.Fatalf("second payload = %q", got)
	}
	if ref2.TrailerLen != 4 {
		t.Fatalf("second ref was not finalized after payload read: %+v trailer=%d", ref2.Location, ref2.TrailerLen)
	}
	if err := scanner.Err(); err != nil {
		t.Fatal(err)
	}
}

func TestScannerNextPayloadReportsStrictTrailerErrors(t *testing.T) {
	data := []byte(
		"WARC/1.1\r\n" +
			"WARC-Type: resource\r\n" +
			"WARC-Record-ID: <urn:uuid:stream-payload-trailer>\r\n" +
			"Content-Length: 3\r\n" +
			"\r\n" +
			"ABC",
	)
	scanner, err := NewScanner(bytes.NewReader(data), ScannerOptions{
		Compression: CompressionPlain,
		Strict:      true,
	})
	if err != nil {
		t.Fatal(err)
	}
	_, payload, err := scanner.NextPayload()
	if err != nil {
		t.Fatal(err)
	}
	got, err := io.ReadAll(payload)
	if string(got) != "ABC" {
		t.Fatalf("payload = %q", got)
	}
	if !errors.Is(err, ErrMissingRecordTrailer) {
		t.Fatalf("payload read err = %v, want %v", err, ErrMissingRecordTrailer)
	}
	if !errors.Is(scanner.Err(), ErrMissingRecordTrailer) {
		t.Fatalf("scanner err = %v, want %v", scanner.Err(), ErrMissingRecordTrailer)
	}
}

func TestScannerGzipMemberPerRecord(t *testing.T) {
	rec1 := makeRecord("warcinfo", "<urn:uuid:gzip-1>", []byte("ABC"))
	rec2 := makeRecord("response", "<urn:uuid:gzip-2>", []byte("DEFG"))
	var compressed bytes.Buffer
	compressed.Write(gzipMember(t, rec1))
	firstLen := compressed.Len()
	compressed.Write(gzipMember(t, rec2))

	scanner, err := NewScanner(bytes.NewReader(compressed.Bytes()), ScannerOptions{Compression: CompressionGzip})
	if err != nil {
		t.Fatal(err)
	}
	if !scanner.Next() {
		t.Fatalf("first record: %v", scanner.Err())
	}
	ref1 := scanner.RecordRef()
	if ref1.Location.Access != AccessExact || ref1.Location.CompRanges[0].Off != 0 {
		t.Fatalf("unexpected first gzip location: %+v", ref1.Location)
	}
	if !scanner.Next() {
		t.Fatalf("second record: %v", scanner.Err())
	}
	ref2 := scanner.RecordRef()
	if ref2.Location.Access != AccessExact || ref2.Location.CompRanges[0].Off != int64(firstLen) {
		t.Fatalf("unexpected second gzip location: %+v", ref2.Location)
	}
}

func TestScannerZstdRecordSpansMultipleFrames(t *testing.T) {
	record := makeRecord("response", "<urn:uuid:zstd-multiframe>", []byte("0123456789"))
	cut := bytes.Index(record, []byte("0123456789")) + 4
	if cut <= 0 {
		t.Fatal("bad test fixture")
	}

	frame1 := zstdFrame(t, record[:cut])
	frame2 := zstdFrame(t, record[cut:])
	stream := append(append([]byte{}, frame1...), frame2...)

	scanner, err := NewScanner(bytes.NewReader(stream), ScannerOptions{Compression: CompressionZstd})
	if err != nil {
		t.Fatal(err)
	}
	if !scanner.Next() {
		t.Fatalf("record: %v", scanner.Err())
	}
	ref := scanner.RecordRef()
	if ref.Location.Access != AccessExact {
		t.Fatalf("expected exact access, got %+v", ref.Location)
	}
	if len(ref.Location.CompRanges) != 2 {
		t.Fatalf("expected 2 zstd frame ranges, got %+v", ref.Location.CompRanges)
	}
	if ref.Location.CompRanges[0].Size != int64(len(frame1)) || ref.Location.CompRanges[1].Size != int64(len(frame2)) {
		t.Fatalf("unexpected compressed ranges: %+v", ref.Location.CompRanges)
	}
	if scanner.Next() {
		t.Fatalf("unexpected extra record")
	}
	if err := scanner.Err(); err != nil {
		t.Fatal(err)
	}
}

func TestScannerZstdFrameContainsMultipleRecords(t *testing.T) {
	rec1 := makeRecord("warcinfo", "<urn:uuid:zstd-solid-1>", []byte("ABC"))
	rec2 := makeRecord("response", "<urn:uuid:zstd-solid-2>", []byte("DEFG"))
	frame := zstdFrame(t, append(append([]byte{}, rec1...), rec2...))

	scanner, err := NewScanner(bytes.NewReader(frame), ScannerOptions{Compression: CompressionZstd})
	if err != nil {
		t.Fatal(err)
	}
	if !scanner.Next() {
		t.Fatalf("first record: %v", scanner.Err())
	}
	ref1 := scanner.RecordRef()
	if ref1.Location.Access != AccessStreamOnly {
		t.Fatalf("expected stream-only for non-source solid zstd, got %+v", ref1.Location)
	}
	assertIssue(t, ref1, IssueFrameContainsMultipleRecords)

	if !scanner.Next() {
		t.Fatalf("second record: %v", scanner.Err())
	}
	ref2 := scanner.RecordRef()
	if ref2.Location.Access != AccessStreamOnly {
		t.Fatalf("expected stream-only for second solid zstd record, got %+v", ref2.Location)
	}
	assertIssue(t, ref2, IssueFrameContainsMultipleRecords)
}

func TestScannerMissingContentLengthIsFatal(t *testing.T) {
	data := []byte(
		"WARC/1.1\r\n" +
			"WARC-Type: resource\r\n" +
			"WARC-Record-ID: <urn:uuid:missing-length>\r\n" +
			"\r\n" +
			"ABC\r\n\r\n",
	)

	scanner, err := NewScanner(bytes.NewReader(data), ScannerOptions{Compression: CompressionPlain})
	if err != nil {
		t.Fatal(err)
	}
	if scanner.Next() {
		t.Fatal("unexpected record")
	}
	if scanner.Err() == nil {
		t.Fatal("expected missing Content-Length error")
	}
}

func TestScannerZeroContentLengthIsValid(t *testing.T) {
	data := []byte(
		"WARC/1.1\r\n" +
			"WARC-Type: resource\r\n" +
			"WARC-Record-ID: <urn:uuid:zero-length>\r\n" +
			"Content-Length: 0\r\n" +
			"\r\n" +
			"\r\n\r\n",
	)

	scanner, err := NewScanner(bytes.NewReader(data), ScannerOptions{Compression: CompressionPlain})
	if err != nil {
		t.Fatal(err)
	}
	if !scanner.Next() {
		t.Fatalf("expected zero-length record: %v", scanner.Err())
	}
	ref := scanner.RecordRef()
	if ref.ContentLength != 0 {
		t.Fatalf("expected Content-Length 0, got %d", ref.ContentLength)
	}
	if ref.Location.Access != AccessExact {
		t.Fatalf("expected exact access, got %+v", ref.Location)
	}
	if scanner.Next() {
		t.Fatal("unexpected extra record")
	}
	if err := scanner.Err(); err != nil {
		t.Fatal(err)
	}
}

func TestScannerInvalidContentLengthIsFatal(t *testing.T) {
	data := []byte(
		"WARC/1.1\r\n" +
			"WARC-Type: resource\r\n" +
			"WARC-Record-ID: <urn:uuid:invalid-length>\r\n" +
			"Content-Length: nope\r\n" +
			"\r\n" +
			"ABC\r\n\r\n",
	)

	scanner, err := NewScanner(bytes.NewReader(data), ScannerOptions{Compression: CompressionPlain})
	if err != nil {
		t.Fatal(err)
	}
	if scanner.Next() {
		t.Fatal("unexpected record")
	}
	if scanner.Err() == nil {
		t.Fatal("expected invalid Content-Length error")
	}
}

func TestDetectZstdWarcMagics(t *testing.T) {
	if got := detectCompressionFromPrefix([]byte{0x28, 0xB5, 0x2F, 0xFD}); got != CompressionZstd {
		t.Fatalf("zstd frame magic detected as %s", got)
	}
	if got := detectCompressionFromPrefix([]byte{0x5D, 0x2A, 0x4D, 0x18}); got != CompressionZstd {
		t.Fatalf("zstd dictionary magic detected as %s", got)
	}
	if got := detectCompressionFromPrefix([]byte{0x50, 0x2A, 0x4D, 0x18}); got != CompressionPlain {
		t.Fatalf("zstd extension magic must not start a WARC-zstd file, detected as %s", got)
	}
}

func TestScannerRejectsInitialZstdExtensionFrame(t *testing.T) {
	stream := zstdSkippableFrame(0x184D2A50, []byte("extension"))

	scanner, err := NewScanner(bytes.NewReader(stream), ScannerOptions{Compression: CompressionZstd})
	if err != nil {
		t.Fatal(err)
	}
	if scanner.Next() {
		t.Fatal("unexpected record")
	}
	if scanner.Err() == nil {
		t.Fatal("expected initial extension frame error")
	}
}

func TestScannerRejectsLateZstdDictionaryFrame(t *testing.T) {
	rec1 := makeRecord("warcinfo", "<urn:uuid:zstd-dict-late-1>", []byte("ABC"))
	rec2 := makeRecord("response", "<urn:uuid:zstd-dict-late-2>", []byte("DEFG"))
	stream := append([]byte{}, zstdFrame(t, rec1)...)
	stream = append(stream, zstdSkippableFrame(0x184D2A5D, []byte{0x37, 0xA4, 0x30, 0xEC})...)
	stream = append(stream, zstdFrame(t, rec2)...)

	scanner, err := NewScanner(bytes.NewReader(stream), ScannerOptions{Compression: CompressionZstd})
	if err != nil {
		t.Fatal(err)
	}
	if !scanner.Next() {
		t.Fatalf("first record: %v", scanner.Err())
	}
	if scanner.Next() {
		t.Fatal("unexpected second record")
	}
	if scanner.Err() == nil {
		t.Fatal("expected late dictionary frame error")
	}
}

func makeRecord(recordType, id string, payload []byte) []byte {
	return []byte(fmt.Sprintf(
		"WARC/1.1\r\n"+
			"WARC-Type: %s\r\n"+
			"WARC-Record-ID: %s\r\n"+
			"Content-Length: %d\r\n"+
			"\r\n"+
			"%s\r\n\r\n",
		recordType,
		id,
		len(payload),
		payload,
	))
}

func gzipMember(t *testing.T, data []byte) []byte {
	t.Helper()
	var buf bytes.Buffer
	w := gzip.NewWriter(&buf)
	if _, err := w.Write(data); err != nil {
		t.Fatal(err)
	}
	if err := w.Close(); err != nil {
		t.Fatal(err)
	}
	return buf.Bytes()
}

func zstdFrame(t *testing.T, data []byte) []byte {
	t.Helper()
	enc, err := zstd.NewWriter(nil, zstd.WithEncoderCRC(true), zstd.WithSingleSegment(true))
	if err != nil {
		t.Fatal(err)
	}
	defer closeTest(t, enc)
	return enc.EncodeAll(data, nil)
}

func zstdSkippableFrame(magic uint32, data []byte) []byte {
	var out bytes.Buffer
	_ = binary.Write(&out, binary.LittleEndian, magic)
	_ = binary.Write(&out, binary.LittleEndian, uint32(len(data)))
	out.Write(data)
	return out.Bytes()
}

func writeTemp(t *testing.T, data []byte) string {
	t.Helper()
	path := filepath.Join(t.TempDir(), "test.warc")
	if err := os.WriteFile(path, data, 0o644); err != nil {
		t.Fatal(err)
	}
	return path
}

func assertIssue(t *testing.T, ref *RecordRef, code IssueCode) {
	t.Helper()
	if hasIssue(ref, code) {
		return
	}
	t.Fatalf("missing issue %v in %+v", code, ref.Location.Issues)
}
