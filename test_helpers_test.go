package unwarc

import (
	"bytes"
	"io"
	"testing"
)

func newBytesSource(data []byte) ReaderAtSource {
	return NewReaderAtSource(bytes.NewReader(data), int64(len(data)), func() (io.ReadCloser, error) {
		return io.NopCloser(bytes.NewReader(data)), nil
	})
}

func newResolvedTestRef(source RandomAccessSource, compression Compression, access AccessMode, compressed []Range, decoded Range) *RecordRef {
	ref := &RecordRef{
		decode: newRecordDecodeContext(source, compression, nil),
	}
	ref.finalize(recordResolution{
		location: RecordLocation{
			Uncompressed: Range{Off: 0, Size: decoded.Size},
			Access:       access,
		},
		raw: newDecodePlan(compressed, decoded),
	})
	return ref
}

func closeTest(tb testing.TB, closer io.Closer) {
	tb.Helper()
	if err := closer.Close(); err != nil {
		tb.Errorf("close: %v", err)
	}
}

func scanSourceRefs(t *testing.T, source RandomAccessSource, compression Compression) []*RecordRef {
	t.Helper()
	scanner, err := NewScannerFromSource(source, ScannerOptions{Compression: compression})
	if err != nil {
		t.Fatal(err)
	}
	defer closeTest(t, scanner)
	return collectScannerRefs(t, scanner)
}

func collectScannerRefs(t *testing.T, scanner *Scanner) []*RecordRef {
	t.Helper()
	var refs []*RecordRef
	for scanner.Next() {
		refs = append(refs, scanner.RecordRef())
	}
	if err := scanner.Err(); err != nil {
		t.Fatal(err)
	}
	return refs
}

func readAllFrom(t *testing.T, open func() (io.ReadCloser, error)) []byte {
	t.Helper()
	rc, err := open()
	if err != nil {
		t.Fatal(err)
	}
	defer closeTest(t, rc)

	data, err := io.ReadAll(rc)
	if err != nil {
		t.Fatal(err)
	}
	return data
}

func assertExactRanges(t *testing.T, ref *RecordRef, ranges ...Range) {
	t.Helper()
	if ref.location.Access != AccessExact {
		t.Fatalf("access = %s, want %s: %+v", ref.location.Access, AccessExact, ref.location)
	}
	if len(ref.rawPlan.compressed) != len(ranges) {
		t.Fatalf("compressed ranges = %+v, want %+v", ref.rawPlan.compressed, ranges)
	}
	for i, want := range ranges {
		if ref.rawPlan.compressed[i] != want {
			t.Fatalf("compressed range %d = %+v, want %+v", i, ref.rawPlan.compressed[i], want)
		}
	}
}

func TestDetectCompressionFromName(t *testing.T) {
	tests := []struct {
		name string
		path string
		want Compression
	}{
		{name: "gzip warc", path: "fixture.warc.gz", want: CompressionGzip},
		{name: "gzip uppercase", path: "FIXTURE.GZ", want: CompressionGzip},
		{name: "zstd zst", path: "fixture.warc.zst", want: CompressionZstd},
		{name: "zstd long extension", path: "fixture.warc.zstd", want: CompressionZstd},
		{name: "zstd uppercase", path: "FIXTURE.ZST", want: CompressionZstd},
		{name: "bzip2", path: "fixture.warc.bz2", want: CompressionBzip2},
		{name: "bzip2 uppercase", path: "FIXTURE.BZ2", want: CompressionBzip2},
		{name: "xz", path: "fixture.warc.xz", want: CompressionXZ},
		{name: "xz uppercase", path: "FIXTURE.XZ", want: CompressionXZ},
		{name: "unknown", path: "fixture.warc", want: CompressionUnknown},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := detectCompressionFromName(NewFileSource(tt.path)); got != tt.want {
				t.Fatalf("detectCompressionFromName(%q) = %s, want %s", tt.path, got, tt.want)
			}
		})
	}
}

func hasIssue(ref *RecordRef, code IssueCode) bool {
	for _, issue := range ref.issues {
		if issue.Code == code {
			return true
		}
	}
	return false
}
