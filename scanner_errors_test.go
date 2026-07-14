package unwarc

import (
	"bytes"
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
