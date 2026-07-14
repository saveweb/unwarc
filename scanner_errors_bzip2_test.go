package unwarc

import (
	"bytes"
	"encoding/base64"
	"errors"
	"fmt"
	"io"
	"testing"
)

func TestScannerContentLengthSemantics(t *testing.T) {
	tests := []struct {
		name        string
		headerLine  string
		wantErr     error
		wantRecord  bool
		wantContent int64
	}{
		{
			name:    "missing",
			wantErr: ErrMissingContentLength,
		},
		{
			name:       "invalid",
			headerLine: "Content-Length: nope\r\n",
			wantErr:    ErrInvalidContentLength,
		},
		{
			name:       "negative",
			headerLine: "Content-Length: -1\r\n",
			wantErr:    ErrInvalidContentLength,
		},
		{
			name:       "duplicate",
			headerLine: "Content-Length: 0\r\nContent-Length: 0\r\n",
			wantErr:    ErrDuplicateContentLength,
		},
		{
			name:        "zero",
			headerLine:  "Content-Length: 0\r\n",
			wantRecord:  true,
			wantContent: 0,
		},
	}

	for _, requireTrailer := range []bool{false, true} {
		for _, tt := range tests {
			t.Run(fmt.Sprintf("require-trailer=%t/%s", requireTrailer, tt.name), func(t *testing.T) {
				data := []byte(
					"WARC/1.1\r\n" +
						"WARC-Type: resource\r\n" +
						"WARC-Record-ID: <urn:uuid:content-length-" + tt.name + ">\r\n" +
						tt.headerLine +
						"\r\n" +
						"\r\n\r\n",
				)
				scanner, err := NewScanner(bytes.NewReader(data), ScannerOptions{
					Compression:          CompressionPlain,
					RequireRecordTrailer: requireTrailer,
				})
				if err != nil {
					t.Fatal(err)
				}

				if got := scanner.Next(); got != tt.wantRecord {
					t.Fatalf("Next() = %t, want %t, err=%v", got, tt.wantRecord, scanner.Err())
				}
				if tt.wantErr != nil {
					if !errors.Is(scanner.Err(), tt.wantErr) {
						t.Fatalf("Err() = %v, want %v", scanner.Err(), tt.wantErr)
					}
					return
				}
				if err := scanner.Err(); err != nil {
					t.Fatal(err)
				}
				if scanner.RecordRef().ContentLength != tt.wantContent {
					t.Fatalf("ContentLength = %d, want %d", scanner.RecordRef().ContentLength, tt.wantContent)
				}
				if scanner.Next() {
					t.Fatal("unexpected extra record")
				}
				if err := scanner.Err(); err != nil {
					t.Fatal(err)
				}
			})
		}
	}
}

func TestScannerRecordTrailerRequirement(t *testing.T) {
	tests := []struct {
		name        string
		suffix      string
		require     bool
		wantRecord  bool
		wantErr     error
		wantIssue   bool
		wantTrailer int64
	}{
		{
			name:        "valid optional",
			suffix:      "\r\n\r\n",
			wantRecord:  true,
			wantTrailer: 4,
		},
		{
			name:        "valid required",
			suffix:      "\r\n\r\n",
			require:     true,
			wantRecord:  true,
			wantTrailer: 4,
		},
		{
			name:        "missing optional",
			wantRecord:  true,
			wantIssue:   true,
			wantTrailer: 0,
		},
		{
			name:    "missing required",
			require: true,
			wantErr: ErrMissingRecordTrailer,
		},
		{
			name:        "partial optional",
			suffix:      "\r\n",
			wantRecord:  true,
			wantIssue:   true,
			wantTrailer: 2,
		},
		{
			name:    "partial required",
			suffix:  "\r\n",
			require: true,
			wantErr: ErrMissingRecordTrailer,
		},
		{
			name:        "invalid optional",
			suffix:      "BAD!",
			wantRecord:  true,
			wantIssue:   true,
			wantTrailer: 4,
		},
		{
			name:    "invalid required",
			suffix:  "BAD!",
			require: true,
			wantErr: ErrMissingRecordTrailer,
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			data := []byte(
				"WARC/1.1\r\n" +
					"WARC-Type: resource\r\n" +
					"WARC-Record-ID: <urn:uuid:trailer-" + tt.name + ">\r\n" +
					"Content-Length: 3\r\n" +
					"\r\n" +
					"ABC" +
					tt.suffix,
			)
			scanner, err := NewScanner(bytes.NewReader(data), ScannerOptions{
				Compression:          CompressionPlain,
				RequireRecordTrailer: tt.require,
			})
			if err != nil {
				t.Fatal(err)
			}

			if got := scanner.Next(); got != tt.wantRecord {
				t.Fatalf("Next() = %t, want %t, err=%v", got, tt.wantRecord, scanner.Err())
			}
			if tt.wantErr != nil {
				if !errors.Is(scanner.Err(), tt.wantErr) {
					t.Fatalf("Err() = %v, want %v", scanner.Err(), tt.wantErr)
				}
				return
			}
			if err := scanner.Err(); err != nil {
				t.Fatal(err)
			}

			ref := scanner.RecordRef()
			if ref.TrailerLen != tt.wantTrailer {
				t.Fatalf("TrailerLen = %d, want %d", ref.TrailerLen, tt.wantTrailer)
			}
			if hasIssue(ref, IssueMissingRecordTrailer) != tt.wantIssue {
				t.Fatalf("missing-trailer issue present = %t, want %t: %+v", hasIssue(ref, IssueMissingRecordTrailer), tt.wantIssue, ref.issues)
			}
			if scanner.Next() {
				t.Fatal("unexpected extra record")
			}
			if err := scanner.Err(); err != nil {
				t.Fatal(err)
			}
		})
	}
}

func TestScannerBzip2WholeStreamAccessModes(t *testing.T) {
	rec1 := makeRecord("warcinfo", "<urn:uuid:bzip2-1>", []byte("ABC"))
	rec2 := makeRecord("response", "<urn:uuid:bzip2-2>", []byte("DEFG"))
	wantRanges := []Range{
		{Off: 0, Size: int64(len(rec1))},
		{Off: int64(len(rec1)), Size: int64(len(rec2))},
	}
	compressed := bzip2TwoRecordFixture(t)

	t.Run("reader", func(t *testing.T) {
		scanner, err := NewScanner(bytes.NewReader(compressed), ScannerOptions{Compression: CompressionUnknown})
		if err != nil {
			t.Fatal(err)
		}
		assertBzip2Records(t, scanner, AccessStreamOnly, wantRanges)
	})

	t.Run("source", func(t *testing.T) {
		scanner, err := NewScannerFromSource(newBytesSource(compressed), ScannerOptions{Compression: CompressionUnknown})
		if err != nil {
			t.Fatal(err)
		}
		defer closeTest(t, scanner)
		refs := assertBzip2Records(t, scanner, AccessFromFileStart, wantRanges)
		if got := readAllFrom(t, refs[0].OpenRaw); !bytes.Equal(got, rec1) {
			t.Fatalf("first raw record = %q, want %q", got, rec1)
		}
		if got := readAllFrom(t, refs[1].OpenBlock); string(got) != "DEFG" {
			t.Fatalf("second block = %q, want DEFG", got)
		}
	})
}

func TestScannerBzip2CompressionUnknownDetection(t *testing.T) {
	rec1 := makeRecord("warcinfo", "<urn:uuid:bzip2-1>", []byte("ABC"))
	rec2 := makeRecord("response", "<urn:uuid:bzip2-2>", []byte("DEFG"))
	wantRanges := []Range{
		{Off: 0, Size: int64(len(rec1))},
		{Off: int64(len(rec1)), Size: int64(len(rec2))},
	}
	compressed := bzip2TwoRecordFixture(t)

	for _, tc := range []struct {
		name     string
		filename string
	}{
		{name: "name", filename: "fixture.warc.bz2"},
		{name: "magic", filename: "fixture.bin"},
	} {
		t.Run(tc.name, func(t *testing.T) {
			path := writeNamedTemp(t, tc.filename, compressed)
			scanner, err := NewScannerFromSource(NewFileSource(path), ScannerOptions{Compression: CompressionUnknown})
			if err != nil {
				t.Fatal(err)
			}
			defer closeTest(t, scanner)

			assertBzip2Records(t, scanner, AccessFromFileStart, wantRanges)
		})
	}
}

func TestScannerBzip2ExactDecodePlan(t *testing.T) {
	stream := bzip2TwoRecordFixture(t)
	want := append(
		makeRecord("warcinfo", "<urn:uuid:bzip2-1>", []byte("ABC")),
		makeRecord("response", "<urn:uuid:bzip2-2>", []byte("DEFG"))...,
	)
	ref := newResolvedTestRef(
		newBytesSource(stream),
		CompressionBzip2,
		AccessExact,
		[]Range{{Off: 0, Size: int64(len(stream))}},
		Range{Off: 0, Size: int64(len(want))},
	)
	if got := readAllFrom(t, ref.OpenRaw); !bytes.Equal(got, want) {
		t.Fatalf("OpenRaw() = %q, want %q", got, want)
	}
}

func TestScannerUnsupportedCompressionErrors(t *testing.T) {
	t.Run("unknown enum", func(t *testing.T) {
		_, err := NewScanner(bytes.NewReader(nil), ScannerOptions{Compression: Compression(99)})
		if !errors.Is(err, ErrUnsupportedCompression) {
			t.Fatalf("NewScanner error = %v, want unsupported compression", err)
		}
	})
}

func TestScannerClosePropagatesSourceErrorWithoutSettingErr(t *testing.T) {
	closeErr := errors.New("close failed")
	source := closeErrorSource{
		data: makeRecord("resource", "<urn:uuid:close>", []byte("ABC")),
		err:  closeErr,
	}
	scanner, err := NewScannerFromSource(source, ScannerOptions{Compression: CompressionPlain})
	if err != nil {
		t.Fatal(err)
	}
	if !scanner.Next() {
		t.Fatalf("record: %v", scanner.Err())
	}
	if scanner.Next() {
		t.Fatal("unexpected extra record")
	}
	if err := scanner.Err(); err != nil {
		t.Fatal(err)
	}
	if err := scanner.Close(); !errors.Is(err, closeErr) {
		t.Fatalf("Close() = %v, want %v", err, closeErr)
	}
	if err := scanner.Err(); err != nil {
		t.Fatalf("Err() after Close() = %v, want nil", err)
	}
}

func assertBzip2Records(t *testing.T, scanner *Scanner, wantAccess AccessMode, wantRanges []Range) []*RecordRef {
	t.Helper()
	var refs []*RecordRef
	for i, wantRange := range wantRanges {
		if !scanner.Next() {
			t.Fatalf("record %d: %v", i+1, scanner.Err())
		}
		ref := scanner.RecordRef()
		refs = append(refs, ref)
		if ref.decode.compression != CompressionBzip2 {
			t.Fatalf("record %d compression = %s, want %s", i+1, ref.decode.compression, CompressionBzip2)
		}
		if ref.location.Access != wantAccess {
			t.Fatalf("record %d access = %s, want %s: %+v", i+1, ref.location.Access, wantAccess, ref.location)
		}
		if ref.location.Uncompressed != wantRange {
			t.Fatalf("record %d uncomp range = %+v, want %+v", i+1, ref.location.Uncompressed, wantRange)
		}
		if !ref.finalized {
			t.Fatalf("record %d final = false, want true", i+1)
		}
		if len(ref.issues) != 0 {
			t.Fatalf("record %d issues = %+v, want none", i+1, ref.issues)
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

func TestDetectBzip2Magic(t *testing.T) {
	for _, prefix := range [][]byte{
		[]byte("BZh1"),
		[]byte("BZh9"),
	} {
		if got := detectCompressionFromPrefix(prefix); got != CompressionBzip2 {
			t.Fatalf("%q detected as %s, want %s", prefix, got, CompressionBzip2)
		}
	}
	for _, prefix := range [][]byte{
		[]byte("BZh"),
		[]byte("BZh0"),
		[]byte("BZh:"),
	} {
		if got := detectCompressionFromPrefix(prefix); got != CompressionPlain {
			t.Fatalf("%q detected as %s, want %s", prefix, got, CompressionPlain)
		}
	}
}

func bzip2TwoRecordFixture(t *testing.T) []byte {
	t.Helper()
	const encoded = "QlpoOTFBWSZTWTJN+jMAADlfgAASQAO8FT+kFIA/4d6wIACUCUVDynqPJPUBoGEA9T9U9QSogAGgAAAAJEIcdVMzEJ2xhFxQhRidDwNCSMkJOBMpsVERE9jiNk8ROXPATMXiyuv1hARQcI3EptFKH201Hg6j7UyDFKjjTExUUaXYgPKk2gYWE5KFTKMbx/4qfxdyRThQkDJN+jM="
	data, err := base64.StdEncoding.DecodeString(encoded)
	if err != nil {
		t.Fatal(err)
	}
	return data
}

type closeErrorSource struct {
	data []byte
	err  error
}

func (s closeErrorSource) Open() (io.ReadCloser, error) {
	return &readCloser{
		Reader: bytes.NewReader(s.data),
		close: func() error {
			return s.err
		},
	}, nil
}

func (s closeErrorSource) OpenRange(off, size int64) (io.ReadCloser, error) {
	return io.NopCloser(io.NewSectionReader(bytes.NewReader(s.data), off, size)), nil
}

func (s closeErrorSource) OpenAt(off int64) (io.ReadCloser, error) {
	if off > int64(len(s.data)) {
		off = int64(len(s.data))
	}
	return io.NopCloser(io.NewSectionReader(bytes.NewReader(s.data), off, int64(len(s.data))-off)), nil
}

func (s closeErrorSource) Size() (int64, error) {
	return int64(len(s.data)), nil
}
