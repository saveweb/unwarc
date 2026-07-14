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
	block1 := []byte("ABC")
	block2 := []byte("DEFG")
	rec1 := makeRecord("warcinfo", "<urn:uuid:gzip-1>", block1)
	rec2 := makeRecord("response", "<urn:uuid:gzip-2>", block2)

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

	gotBlock := readAllFrom(t, refs[1].OpenBlock)
	if !bytes.Equal(gotBlock, block2) {
		t.Fatalf("unexpected block %q", gotBlock)
	}
}

func TestGzipSourceNextRecordFinalizesAfterBlockRead(t *testing.T) {
	block := []byte("ABC")
	record := makeRecord("warcinfo", "<urn:uuid:gzip-stream-source>", block)
	member := gzipMember(t, record)

	scanner, err := NewScannerFromSource(newBytesSource(member), ScannerOptions{Compression: CompressionGzip})
	if err != nil {
		t.Fatal(err)
	}
	defer closeTest(t, scanner)

	recordReader, err := scanner.NextRecord()
	if err != nil {
		t.Fatal(err)
	}
	ref := recordReader.Ref()
	if ref.Finalized() {
		t.Fatalf("ref was finalized before block was consumed: %+v", ref.Location)
	}
	if _, err := ref.OpenRaw(); !errors.Is(err, ErrRecordLocationPending) {
		t.Fatalf("OpenRaw before finalization error = %v, want %v", err, ErrRecordLocationPending)
	}
	if _, err := ref.OpenBlock(); !errors.Is(err, ErrRecordLocationPending) {
		t.Fatalf("OpenBlock before finalization error = %v, want %v", err, ErrRecordLocationPending)
	}

	got, err := io.ReadAll(recordReader.Block())
	if err != nil {
		t.Fatal(err)
	}
	if closeErr := recordReader.Close(); closeErr != nil {
		t.Fatal(closeErr)
	}
	if !bytes.Equal(got, block) {
		t.Fatalf("block = %q, want %q", got, block)
	}
	if !ref.Finalized() {
		t.Fatalf("ref was not finalized after block read: %+v", ref.Location)
	}
	assertExactRanges(t, ref, Range{Off: 0, Size: int64(len(member))})

	gotRaw := readAllFrom(t, ref.OpenRaw)
	if !bytes.Equal(gotRaw, record) {
		t.Fatalf("lazy raw after finalization = %q, want %q", gotRaw, record)
	}

	got = readAllFrom(t, ref.OpenBlock)
	if !bytes.Equal(got, block) {
		t.Fatalf("lazy block after finalization = %q, want %q", got, block)
	}
}

func TestGzipSourceNextRecordCloseFinalizesRecord(t *testing.T) {
	block := []byte("ABCDEF")
	record := makeRecord("warcinfo", "<urn:uuid:gzip-stream-source-close>", block)
	member := gzipMember(t, record)

	scanner, err := NewScannerFromSource(newBytesSource(member), ScannerOptions{Compression: CompressionGzip})
	if err != nil {
		t.Fatal(err)
	}
	defer closeTest(t, scanner)

	recordReader, err := scanner.NextRecord()
	if err != nil {
		t.Fatal(err)
	}
	ref := recordReader.Ref()
	buf := make([]byte, 2)
	n, err := recordReader.Block().Read(buf)
	if err != nil {
		t.Fatal(err)
	}
	if string(buf[:n]) != "AB" {
		t.Fatalf("partial block = %q, want AB", buf[:n])
	}
	if err := recordReader.Close(); err != nil {
		t.Fatal(err)
	}

	if !ref.Finalized() {
		t.Fatalf("ref was not finalized after block close: %+v", ref.Location)
	}
	assertExactRanges(t, ref, Range{Off: 0, Size: int64(len(member))})

	got := readAllFrom(t, ref.OpenBlock)
	if !bytes.Equal(got, block) {
		t.Fatalf("lazy block after close = %q, want %q", got, block)
	}
	if err := scanner.Err(); err != nil {
		t.Fatal(err)
	}
}

func TestGzipSourceNextRecordDoesNotLazyReopen(t *testing.T) {
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
		record, err := scanner.NextRecord()
		if errors.Is(err, io.EOF) {
			break
		}
		if err != nil {
			t.Fatal(err)
		}
		if _, err := io.Copy(io.Discard, record.Block()); err != nil {
			t.Fatal(err)
		}
		if err := record.Close(); err != nil {
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
		t.Fatalf("NextRecord opened compressed ranges %+v, want none", source.opened)
	}
	if len(source.openedAt) != 0 {
		t.Fatalf("NextRecord opened restart offsets %+v, want none", source.openedAt)
	}
}

func TestGzipSolidMemberAccessModes(t *testing.T) {
	rec1 := makeRecord("warcinfo", "<urn:uuid:gzip-solid-1>", []byte("ABC"))
	rec2Block := []byte("DEFG")
	rec2 := makeRecord("response", "<urn:uuid:gzip-solid-2>", rec2Block)
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

	t.Run("restart from compression unit with source", func(t *testing.T) {
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
			if ref.Location.Access != AccessFromCompressionUnitStart {
				t.Fatalf("expected restart access, got %+v", ref.Location)
			}
			if ref.Location.RestartRange == nil || ref.Location.RestartRange.Off != 0 {
				t.Fatalf("unexpected restart range: %+v", ref.Location.RestartRange)
			}
			assertIssue(t, ref, IssueSolidGzipMember)
		}

		got := readAllFrom(t, refs[1].OpenBlock)
		if !bytes.Equal(got, rec2Block) {
			t.Fatalf("unexpected restart block %q", got)
		}
	})
}

func TestGzipRestartUncompOffsetSkipsFromCompressionUnitStart(t *testing.T) {
	earlierRecord := makeRecord("warcinfo", "<urn:uuid:gzip-restart-earlier>", []byte("earlier"))
	block2 := []byte("second")
	block3 := []byte("third")
	record2 := makeRecord("response", "<urn:uuid:gzip-restart-2>", block2)
	record3 := makeRecord("response", "<urn:uuid:gzip-restart-3>", block3)

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
		if ref.Location.Access != AccessFromCompressionUnitStart {
			t.Fatalf("record %d access = %s, want %s: %+v", i+1, ref.Location.Access, AccessFromCompressionUnitStart, ref.Location)
		}
		if ref.Location.RestartRange == nil || ref.Location.RestartRange.Off != int64(len(member1)) {
			t.Fatalf("record %d restart range = %+v, want second gzip member", i+1, ref.Location.RestartRange)
		}
		if ref.Location.RestartUncompOff != int64(len(earlierRecord)) {
			t.Fatalf("record %d RestartUncompOff = %d, want %d", i+1, ref.Location.RestartUncompOff, len(earlierRecord))
		}
		assertIssue(t, ref, IssueSolidGzipMember)
	}

	got := readAllFrom(t, refs[2].OpenBlock)
	if !bytes.Equal(got, block3) {
		t.Fatalf("third block = %q, want %q", got, block3)
	}
}

func TestGzipRecordSpansMembersIssueAndLazyRaw(t *testing.T) {
	block := []byte("0123456789")
	record := makeRecord("response", "<urn:uuid:gzip-spans-members>", block)
	cut := bytes.Index(record, block) + 4
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

	gotBlock := readAllFrom(t, ref.OpenBlock)
	if !bytes.Equal(gotBlock, block) {
		t.Fatalf("unexpected block %q", gotBlock)
	}
}

func TestGzipCompressionUnknownDetection(t *testing.T) {
	block := []byte("ABC")
	record := makeRecord("warcinfo", "<urn:uuid:gzip-detect>", block)
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

			got := readAllFrom(t, refs[0].OpenBlock)
			if !bytes.Equal(got, block) {
				t.Fatalf("unexpected block %q", got)
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
