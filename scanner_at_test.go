package unwarc

import (
	"bytes"
	"errors"
	"io"
	"testing"
)

func TestNewScannerAtPlainRecordBoundary(t *testing.T) {
	first := makeRecord("warcinfo", "<urn:uuid:scanner-at-plain-1>", []byte("first"))
	second := makeRecord("response", "<urn:uuid:scanner-at-plain-2>", []byte("second"))
	third := makeRecord("response", "<urn:uuid:scanner-at-plain-3>", []byte("third"))
	source := newBytesSource(bytes.Join([][]byte{first, second, third}, nil))

	scanner, err := NewScannerAt(source, int64(len(first)), ScannerOptions{Compression: CompressionPlain})
	if err != nil {
		t.Fatal(err)
	}
	defer closeTest(t, scanner)

	if !scanner.Next() {
		t.Fatalf("scan record: %v", scanner.Err())
	}
	ref := scanner.RecordRef()
	location, ok := ref.Location()
	if !ok {
		t.Fatal("record location is not finalized")
	}
	if location.Uncompressed.Off != 0 {
		t.Fatalf("uncompressed offset = %d, want 0", location.Uncompressed.Off)
	}
	cost, ok := ref.RawDecodeCost()
	if !ok {
		t.Fatal("raw decode cost is unavailable")
	}
	if len(cost.EncodedRanges) != 1 || cost.EncodedRanges[0].Off != int64(len(first)) {
		t.Fatalf("encoded ranges = %+v, want one range at %d", cost.EncodedRanges, len(first))
	}
	if cost.DecodedDiscardBytes != 0 {
		t.Fatalf("decoded discard = %d, want 0", cost.DecodedDiscardBytes)
	}
	block, err := ref.OpenBlock()
	if err != nil {
		t.Fatal(err)
	}
	defer closeTest(t, block)
	got, err := io.ReadAll(block)
	if err != nil {
		t.Fatal(err)
	}
	if string(got) != "second" {
		t.Fatalf("block = %q, want %q", got, "second")
	}

	if !scanner.Next() {
		t.Fatalf("scan following record: %v", scanner.Err())
	}
	nextLocation, ok := scanner.RecordRef().Location()
	if !ok {
		t.Fatal("following record location is not finalized")
	}
	wantNextOffset := int64(len(first) + len(second))
	if nextLocation.Uncompressed.Off != int64(len(second)) {
		t.Fatalf("following scanner-relative offset = %d, want %d", nextLocation.Uncompressed.Off, len(second))
	}
	nextCost, ok := scanner.RecordRef().RawDecodeCost()
	if !ok {
		t.Fatal("following raw decode cost is unavailable")
	}
	if len(nextCost.EncodedRanges) != 1 || nextCost.EncodedRanges[0].Off != wantNextOffset {
		t.Fatalf("following encoded ranges = %+v, want offset %d", nextCost.EncodedRanges, wantNextOffset)
	}

	restarted, err := NewScannerAt(source, nextCost.EncodedRanges[0].Off, ScannerOptions{Compression: CompressionPlain})
	if err != nil {
		t.Fatal(err)
	}
	defer closeTest(t, restarted)
	if !restarted.Next() {
		t.Fatalf("scan from following absolute offset: %v", restarted.Err())
	}
	if got, _ := restarted.RecordRef().Header.Get("WARC-Record-ID"); got != "<urn:uuid:scanner-at-plain-3>" {
		t.Fatalf("restarted record ID = %q, want third record", got)
	}
}

func TestNewScannerAtGzipMemberBoundary(t *testing.T) {
	firstRecord := makeRecord("warcinfo", "<urn:uuid:scanner-at-gzip-1>", []byte("first"))
	secondRecord := makeRecord("response", "<urn:uuid:scanner-at-gzip-2>", []byte("second"))
	firstMember := gzipMember(t, firstRecord)
	secondMember := gzipMember(t, secondRecord)
	source := newBytesSource(bytes.Join([][]byte{firstMember, secondMember}, nil))

	scanner, err := NewScannerAt(source, int64(len(firstMember)), ScannerOptions{Compression: CompressionGzip})
	if err != nil {
		t.Fatal(err)
	}
	defer closeTest(t, scanner)

	if !scanner.Next() {
		t.Fatalf("scan record: %v", scanner.Err())
	}
	ref := scanner.RecordRef()
	if _, ok := ref.Location(); !ok {
		t.Fatal("record location is not finalized")
	}
	cost, ok := ref.RawDecodeCost()
	if !ok {
		t.Fatal("raw decode cost is unavailable")
	}
	if len(cost.EncodedRanges) != 1 || cost.EncodedRanges[0].Off != int64(len(firstMember)) {
		t.Fatalf("encoded ranges = %+v, want offset %d", cost.EncodedRanges, len(firstMember))
	}
	raw, err := ref.OpenRaw()
	if err != nil {
		t.Fatal(err)
	}
	defer closeTest(t, raw)
	got, err := io.ReadAll(raw)
	if err != nil {
		t.Fatal(err)
	}
	if !bytes.Equal(got, secondRecord) {
		t.Fatalf("reopened record differs from input")
	}
}

func TestNewScannerAtRejectsInvalidOffset(t *testing.T) {
	source := newBytesSource([]byte("abc"))
	for _, off := range []int64{-1, 4} {
		_, err := NewScannerAt(source, off, ScannerOptions{Compression: CompressionPlain})
		if err == nil {
			t.Fatalf("offset %d unexpectedly accepted", off)
		}
	}
}

func TestNewScannerAtRequiresRecordBoundary(t *testing.T) {
	record := makeRecord("response", "<urn:uuid:scanner-at-boundary>", nil)
	scanner, err := NewScannerAt(newBytesSource(record), 1, ScannerOptions{Compression: CompressionPlain})
	if err != nil {
		t.Fatal(err)
	}
	defer closeTest(t, scanner)

	if scanner.Next() {
		t.Fatal("scan unexpectedly succeeded")
	}
	if !errors.Is(scanner.Err(), ErrInvalidWARCHeader) {
		t.Fatalf("error = %v, want %v", scanner.Err(), ErrInvalidWARCHeader)
	}
}
