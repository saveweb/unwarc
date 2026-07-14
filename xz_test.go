package unwarc

import (
	"bytes"
	"errors"
	"testing"

	"github.com/ulikunitz/xz"
)

var xzMagic = []byte{0xFD, '7', 'z', 'X', 'Z', 0x00}

func TestScannerXZWholeStreamAccessModes(t *testing.T) {
	rec1 := makeRecord("warcinfo", "<urn:uuid:xz-1>", []byte("ABC"))
	rec2 := makeRecord("response", "<urn:uuid:xz-2>", []byte("DEFG"))
	wantRanges := []Range{
		{Off: 0, Size: int64(len(rec1))},
		{Off: int64(len(rec1)), Size: int64(len(rec2))},
	}
	compressed := xzStream(t, append(append([]byte{}, rec1...), rec2...))

	t.Run("reader", func(t *testing.T) {
		scanner, err := NewScanner(bytes.NewReader(compressed), ScannerOptions{Compression: CompressionUnknown})
		if err != nil {
			t.Fatal(err)
		}
		assertXZRecords(t, scanner, AccessStreamOnly, wantRanges)
	})

	t.Run("source", func(t *testing.T) {
		scanner, err := NewScannerFromSource(newBytesSource(compressed), ScannerOptions{Compression: CompressionUnknown})
		if err != nil {
			t.Fatal(err)
		}
		defer closeTest(t, scanner)
		refs := assertXZRecords(t, scanner, AccessFromFileStart, wantRanges)
		if got := readAllFrom(t, refs[0].OpenRaw); !bytes.Equal(got, rec1) {
			t.Fatalf("first raw record = %q, want %q", got, rec1)
		}
		if got := readAllFrom(t, refs[1].OpenPayload); string(got) != "DEFG" {
			t.Fatalf("second payload = %q, want DEFG", got)
		}
	})
}

func TestScannerXZCompressionUnknownDetection(t *testing.T) {
	payload := []byte("ABC")
	record := makeRecord("warcinfo", "<urn:uuid:xz-detect>", payload)
	stream := xzStream(t, record)

	for _, tc := range []struct {
		name     string
		filename string
	}{
		{name: "name", filename: "fixture.warc.xz"},
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
			if refs[0].Location.Access != AccessFromFileStart {
				t.Fatalf("expected from-file-start access, got %+v", refs[0].Location)
			}
			if refs[0].compression != CompressionXZ {
				t.Fatalf("compression = %s, want %s", refs[0].compression, CompressionXZ)
			}

			got := readAllFrom(t, refs[0].OpenPayload)
			if !bytes.Equal(got, payload) {
				t.Fatalf("unexpected payload %q", got)
			}
		})
	}
}

func TestScannerXZConcatenatedStreamsNotImplemented(t *testing.T) {
	rec1 := makeRecord("warcinfo", "<urn:uuid:xz-concat-1>", []byte("ABC"))
	rec2 := makeRecord("response", "<urn:uuid:xz-concat-2>", []byte("DEFG"))
	stream := append(append([]byte{}, xzStream(t, rec1)...), xzStream(t, rec2)...)

	scanner, err := NewScanner(bytes.NewReader(stream), ScannerOptions{Compression: CompressionXZ})
	if err != nil {
		t.Fatal(err)
	}
	if !scanner.Next() {
		t.Fatalf("first record: %v", scanner.Err())
	}
	if scanner.Next() {
		t.Fatal("unexpected record from second XZ stream")
	}
	if !errors.Is(scanner.Err(), ErrSegmentedCompressionNotImplemented) {
		t.Fatalf("Err() = %v, want %v", scanner.Err(), ErrSegmentedCompressionNotImplemented)
	}
}

func TestScannerXZExactCompressedSegmentLazyNotImplemented(t *testing.T) {
	stream := xzStream(t, makeRecord("warcinfo", "<urn:uuid:xz-exact>", []byte("ABC")))
	ref := &RecordRef{
		Location: RecordLocation{
			Access:     AccessExact,
			Final:      true,
			CompRanges: []Range{{Off: 0, Size: int64(len(stream))}},
		},
		source:      newBytesSource(stream),
		compression: CompressionXZ,
	}

	if _, err := ref.OpenRaw(); !errors.Is(err, ErrSegmentedCompressionNotImplemented) {
		t.Fatalf("OpenRaw() error = %v, want %v", err, ErrSegmentedCompressionNotImplemented)
	}
}

func TestScannerXZInvalidInputErrors(t *testing.T) {
	tests := []struct {
		name        string
		data        []byte
		compression Compression
		fromSource  bool
		filename    string
	}{
		{
			name:        "explicit reader",
			data:        []byte("not really xz"),
			compression: CompressionXZ,
		},
		{
			name:        "magic reader",
			data:        append(append([]byte{}, xzMagic...), []byte("bad")...),
			compression: CompressionUnknown,
		},
		{
			name:        "source name",
			data:        []byte("not really xz"),
			compression: CompressionUnknown,
			fromSource:  true,
			filename:    "fixture.warc.xz",
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			var err error
			if tt.fromSource {
				path := writeNamedTemp(t, tt.filename, tt.data)
				var scanner *Scanner
				scanner, err = NewScannerFromSource(NewFileSource(path), ScannerOptions{Compression: tt.compression})
				if scanner != nil {
					_ = scanner.Close()
				}
			} else {
				_, err = NewScanner(bytes.NewReader(tt.data), ScannerOptions{Compression: tt.compression})
			}
			if err == nil {
				t.Fatal("expected invalid XZ input error")
			}
			if errors.Is(err, ErrUnsupportedCompression) {
				t.Fatalf("error = %v, want XZ decode error", err)
			}
		})
	}
}

func TestDetectXZMagic(t *testing.T) {
	if got := detectCompressionFromPrefix(xzMagic); got != CompressionXZ {
		t.Fatalf("xz magic detected as %s", got)
	}
	if got := detectCompressionFromPrefix(xzMagic[:5]); got != CompressionPlain {
		t.Fatalf("partial xz magic detected as %s, want %s", got, CompressionPlain)
	}
}

func assertXZRecords(t *testing.T, scanner *Scanner, wantAccess AccessMode, wantRanges []Range) []*RecordRef {
	t.Helper()
	var refs []*RecordRef
	for i, wantRange := range wantRanges {
		if !scanner.Next() {
			t.Fatalf("record %d: %v", i+1, scanner.Err())
		}
		ref := scanner.RecordRef()
		refs = append(refs, ref)
		if ref.compression != CompressionXZ {
			t.Fatalf("record %d compression = %s, want %s", i+1, ref.compression, CompressionXZ)
		}
		if ref.Location.Access != wantAccess {
			t.Fatalf("record %d access = %s, want %s: %+v", i+1, ref.Location.Access, wantAccess, ref.Location)
		}
		if ref.Location.Uncomp != wantRange {
			t.Fatalf("record %d uncomp range = %+v, want %+v", i+1, ref.Location.Uncomp, wantRange)
		}
		if !ref.Location.Final {
			t.Fatalf("record %d final = false, want true", i+1)
		}
		if len(ref.Location.Issues) != 0 {
			t.Fatalf("record %d issues = %+v, want none", i+1, ref.Location.Issues)
		}
	}
	if scanner.Next() {
		t.Fatal("unexpected extra record")
	}
	if err := scanner.Err(); err != nil {
		t.Fatal(err)
	}
	return refs
}

func xzStream(t *testing.T, data []byte) []byte {
	t.Helper()
	var buf bytes.Buffer
	w, err := xz.NewWriter(&buf)
	if err != nil {
		t.Fatal(err)
	}
	if _, err := w.Write(data); err != nil {
		t.Fatal(err)
	}
	if err := w.Close(); err != nil {
		t.Fatal(err)
	}
	return buf.Bytes()
}
