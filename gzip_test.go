package unwarc

import (
	"bytes"
	"errors"
	"io"
	"os"
	"path/filepath"
	"testing"
)

func TestGzipMemberPerRecordFromSourceLazy(t *testing.T) {
	payload1 := []byte("ABC")
	payload2 := []byte("DEFG")
	rec1 := makeRecord("warcinfo", "<urn:uuid:gzip-1>", payload1)
	rec2 := makeRecord("response", "<urn:uuid:gzip-2>", payload2)

	member1 := gzipMember(t, rec1)
	member2 := gzipMember(t, rec2)
	stream := append(append([]byte{}, member1...), member2...)

	scanner, err := NewScannerFromSource(newBytesSource(stream), ScannerOptions{Compression: CompressionGzip})
	if err != nil {
		t.Fatal(err)
	}
	defer closeTest(t, scanner)

	refs := collectScannerRefs(t, scanner)
	if len(refs) != 2 {
		t.Fatalf("expected 2 records, got %d", len(refs))
	}

	assertExactRanges(t, refs[0], Range{Off: 0, Size: int64(len(member1))})
	assertExactRanges(t, refs[1], Range{Off: int64(len(member1)), Size: int64(len(member2))})

	gotRaw := readAllFrom(t, refs[0].OpenRaw)
	if !bytes.Equal(gotRaw, rec1) {
		t.Fatalf("unexpected raw record:\n%s", gotRaw)
	}

	gotPayload := readAllFrom(t, refs[1].OpenPayload)
	if !bytes.Equal(gotPayload, payload2) {
		t.Fatalf("unexpected payload %q", gotPayload)
	}
}

func TestGzipSourceNextPayloadFinalizesAfterPayloadRead(t *testing.T) {
	payload := []byte("ABC")
	record := makeRecord("warcinfo", "<urn:uuid:gzip-stream-source>", payload)
	member := gzipMember(t, record)

	scanner, err := NewScannerFromSource(newBytesSource(member), ScannerOptions{Compression: CompressionGzip})
	if err != nil {
		t.Fatal(err)
	}
	defer closeTest(t, scanner)

	ref, payloadReader, err := scanner.NextPayload()
	if err != nil {
		t.Fatal(err)
	}
	if ref.Finalized() {
		t.Fatalf("ref was finalized before payload was consumed: %+v", ref.Location)
	}
	if _, err := ref.OpenRaw(); !errors.Is(err, ErrRecordLocationPending) {
		t.Fatalf("OpenRaw before finalization error = %v, want %v", err, ErrRecordLocationPending)
	}
	if _, err := ref.OpenPayload(); !errors.Is(err, ErrRecordLocationPending) {
		t.Fatalf("OpenPayload before finalization error = %v, want %v", err, ErrRecordLocationPending)
	}

	got, err := io.ReadAll(payloadReader)
	if err != nil {
		t.Fatal(err)
	}
	if closeErr := payloadReader.Close(); closeErr != nil {
		t.Fatal(closeErr)
	}
	if !bytes.Equal(got, payload) {
		t.Fatalf("payload = %q, want %q", got, payload)
	}
	if !ref.Finalized() {
		t.Fatalf("ref was not finalized after payload read: %+v", ref.Location)
	}
	assertExactRanges(t, ref, Range{Off: 0, Size: int64(len(member))})

	gotRaw := readAllFrom(t, ref.OpenRaw)
	if !bytes.Equal(gotRaw, record) {
		t.Fatalf("lazy raw after finalization = %q, want %q", gotRaw, record)
	}

	got = readAllFrom(t, ref.OpenPayload)
	if !bytes.Equal(got, payload) {
		t.Fatalf("lazy payload after finalization = %q, want %q", got, payload)
	}
}

func TestGzipSourceNextPayloadCloseFinalizesRecord(t *testing.T) {
	payload := []byte("ABCDEF")
	record := makeRecord("warcinfo", "<urn:uuid:gzip-stream-source-close>", payload)
	member := gzipMember(t, record)

	scanner, err := NewScannerFromSource(newBytesSource(member), ScannerOptions{Compression: CompressionGzip})
	if err != nil {
		t.Fatal(err)
	}
	defer closeTest(t, scanner)

	ref, payloadReader, err := scanner.NextPayload()
	if err != nil {
		t.Fatal(err)
	}
	buf := make([]byte, 2)
	n, err := payloadReader.Read(buf)
	if err != nil {
		t.Fatal(err)
	}
	if string(buf[:n]) != "AB" {
		t.Fatalf("partial payload = %q, want AB", buf[:n])
	}
	if err := payloadReader.Close(); err != nil {
		t.Fatal(err)
	}

	if !ref.Finalized() {
		t.Fatalf("ref was not finalized after payload close: %+v", ref.Location)
	}
	assertExactRanges(t, ref, Range{Off: 0, Size: int64(len(member))})

	got := readAllFrom(t, ref.OpenPayload)
	if !bytes.Equal(got, payload) {
		t.Fatalf("lazy payload after close = %q, want %q", got, payload)
	}
	if err := scanner.Err(); err != nil {
		t.Fatal(err)
	}
}

func TestGzipSourceNextPayloadDoesNotLazyReopen(t *testing.T) {
	rec1 := makeRecord("warcinfo", "<urn:uuid:gzip-stream-no-reopen-1>", []byte("ABC"))
	rec2 := makeRecord("response", "<urn:uuid:gzip-stream-no-reopen-2>", []byte("DEFG"))
	stream := append(append([]byte{}, gzipMember(t, rec1)...), gzipMember(t, rec2)...)
	source := &trackingRangeSource{data: stream}

	scanner, err := NewScannerFromSource(source, ScannerOptions{Compression: CompressionGzip})
	if err != nil {
		t.Fatal(err)
	}
	defer closeTest(t, scanner)

	var records int
	for {
		_, payload, err := scanner.NextPayload()
		if errors.Is(err, io.EOF) {
			break
		}
		if err != nil {
			t.Fatal(err)
		}
		if _, err := io.Copy(io.Discard, payload); err != nil {
			t.Fatal(err)
		}
		if err := payload.Close(); err != nil {
			t.Fatal(err)
		}
		records++
	}
	if err := scanner.Err(); err != nil {
		t.Fatal(err)
	}
	if records != 2 {
		t.Fatalf("records = %d, want 2", records)
	}
	if len(source.opened) != 0 {
		t.Fatalf("NextPayload opened compressed ranges %+v, want none", source.opened)
	}
	if len(source.openedAt) != 0 {
		t.Fatalf("NextPayload opened restart offsets %+v, want none", source.openedAt)
	}
}

func TestGzipSolidMemberAccessModes(t *testing.T) {
	rec1 := makeRecord("warcinfo", "<urn:uuid:gzip-solid-1>", []byte("ABC"))
	rec2Payload := []byte("DEFG")
	rec2 := makeRecord("response", "<urn:uuid:gzip-solid-2>", rec2Payload)
	stream := gzipMember(t, append(append([]byte{}, rec1...), rec2...))

	t.Run("stream only without source", func(t *testing.T) {
		scanner, err := NewScanner(bytes.NewReader(stream), ScannerOptions{Compression: CompressionGzip})
		if err != nil {
			t.Fatal(err)
		}
		refs := collectScannerRefs(t, scanner)
		if len(refs) != 2 {
			t.Fatalf("expected 2 records, got %d", len(refs))
		}
		for _, ref := range refs {
			if ref.Location.Access != AccessStreamOnly {
				t.Fatalf("expected stream-only access, got %+v", ref.Location)
			}
			assertIssue(t, ref, IssueSolidGzipMember)
		}
	})

	t.Run("restart from segment with source", func(t *testing.T) {
		scanner, err := NewScannerFromSource(newBytesSource(stream), ScannerOptions{Compression: CompressionGzip})
		if err != nil {
			t.Fatal(err)
		}
		defer closeTest(t, scanner)

		refs := collectScannerRefs(t, scanner)
		if len(refs) != 2 {
			t.Fatalf("expected 2 records, got %d", len(refs))
		}
		for _, ref := range refs {
			if ref.Location.Access != AccessFromSegmentStart {
				t.Fatalf("expected restart access, got %+v", ref.Location)
			}
			if ref.Location.RestartRange == nil || ref.Location.RestartRange.Off != 0 {
				t.Fatalf("unexpected restart range: %+v", ref.Location.RestartRange)
			}
			assertIssue(t, ref, IssueSolidGzipMember)
		}

		got := readAllFrom(t, refs[1].OpenPayload)
		if !bytes.Equal(got, rec2Payload) {
			t.Fatalf("unexpected restart payload %q", got)
		}
	})
}

func TestGzipRestartUncompOffsetSkipsFromSegmentStart(t *testing.T) {
	earlierRecord := makeRecord("warcinfo", "<urn:uuid:gzip-restart-earlier>", []byte("earlier"))
	payload2 := []byte("second")
	payload3 := []byte("third")
	record2 := makeRecord("response", "<urn:uuid:gzip-restart-2>", payload2)
	record3 := makeRecord("response", "<urn:uuid:gzip-restart-3>", payload3)

	member1 := gzipMember(t, earlierRecord)
	member2 := gzipMember(t, append(append([]byte{}, record2...), record3...))
	stream := append(append([]byte{}, member1...), member2...)

	scanner, err := NewScannerFromSource(newBytesSource(stream), ScannerOptions{Compression: CompressionGzip})
	if err != nil {
		t.Fatal(err)
	}
	defer closeTest(t, scanner)

	refs := collectScannerRefs(t, scanner)
	if len(refs) != 3 {
		t.Fatalf("expected 3 records, got %d", len(refs))
	}

	assertExactRanges(t, refs[0], Range{Off: 0, Size: int64(len(member1))})
	for i, ref := range refs[1:] {
		if ref.Location.Access != AccessFromSegmentStart {
			t.Fatalf("record %d access = %s, want %s: %+v", i+1, ref.Location.Access, AccessFromSegmentStart, ref.Location)
		}
		if ref.Location.RestartRange == nil || ref.Location.RestartRange.Off != int64(len(member1)) {
			t.Fatalf("record %d restart range = %+v, want second gzip member", i+1, ref.Location.RestartRange)
		}
		if ref.Location.RestartUncompOff != int64(len(earlierRecord)) {
			t.Fatalf("record %d RestartUncompOff = %d, want %d", i+1, ref.Location.RestartUncompOff, len(earlierRecord))
		}
		assertIssue(t, ref, IssueSolidGzipMember)
	}

	got := readAllFrom(t, refs[2].OpenPayload)
	if !bytes.Equal(got, payload3) {
		t.Fatalf("third payload = %q, want %q", got, payload3)
	}
}

func TestGzipRecordSpansMembersIssueAndLazyRaw(t *testing.T) {
	payload := []byte("0123456789")
	record := makeRecord("response", "<urn:uuid:gzip-spans-members>", payload)
	cut := bytes.Index(record, payload) + 4
	if cut <= 0 {
		t.Fatal("bad test fixture")
	}

	member1 := gzipMember(t, record[:cut])
	member2 := gzipMember(t, record[cut:])
	stream := append(append([]byte{}, member1...), member2...)

	scanner, err := NewScannerFromSource(newBytesSource(stream), ScannerOptions{Compression: CompressionGzip})
	if err != nil {
		t.Fatal(err)
	}
	defer closeTest(t, scanner)

	refs := collectScannerRefs(t, scanner)
	if len(refs) != 1 {
		t.Fatalf("expected 1 record, got %d", len(refs))
	}
	ref := refs[0]
	if ref.Location.Access != AccessExact {
		t.Fatalf("expected exact access for member-spanning record, got %+v", ref.Location)
	}
	if len(ref.Location.CompRanges) != 2 {
		t.Fatalf("expected 2 gzip member ranges, got %+v", ref.Location.CompRanges)
	}
	if ref.Location.CompRanges[0].Size != int64(len(member1)) || ref.Location.CompRanges[1].Size != int64(len(member2)) {
		t.Fatalf("unexpected compressed ranges: %+v", ref.Location.CompRanges)
	}
	assertIssue(t, ref, IssueRecordSpansGzipMembers)

	gotRaw := readAllFrom(t, ref.OpenRaw)
	if !bytes.Equal(gotRaw, record) {
		t.Fatalf("unexpected raw record:\n%s", gotRaw)
	}

	gotPayload := readAllFrom(t, ref.OpenPayload)
	if !bytes.Equal(gotPayload, payload) {
		t.Fatalf("unexpected payload %q", gotPayload)
	}
}

func TestGzipCompressionUnknownDetection(t *testing.T) {
	payload := []byte("ABC")
	record := makeRecord("warcinfo", "<urn:uuid:gzip-detect>", payload)
	stream := gzipMember(t, record)

	for _, tc := range []struct {
		name     string
		filename string
	}{
		{name: "name", filename: "fixture.warc.gz"},
		{name: "magic", filename: "fixture.bin"},
	} {
		t.Run(tc.name, func(t *testing.T) {
			path := writeNamedTemp(t, tc.filename, stream)
			scanner, err := NewScannerFromSource(NewFileSource(path), ScannerOptions{Compression: CompressionUnknown})
			if err != nil {
				t.Fatal(err)
			}
			defer closeTest(t, scanner)

			refs := collectScannerRefs(t, scanner)
			if len(refs) != 1 {
				t.Fatalf("expected 1 record, got %d", len(refs))
			}
			if refs[0].Location.Access != AccessExact {
				t.Fatalf("expected exact access, got %+v", refs[0].Location)
			}

			got := readAllFrom(t, refs[0].OpenPayload)
			if !bytes.Equal(got, payload) {
				t.Fatalf("unexpected payload %q", got)
			}
		})
	}
}

func writeNamedTemp(t *testing.T, name string, data []byte) string {
	t.Helper()
	path := filepath.Join(t.TempDir(), name)
	if err := os.WriteFile(path, data, 0o644); err != nil {
		t.Fatal(err)
	}
	return path
}
