package unwarc

import (
	"bytes"
	"errors"
	"strings"
	"testing"
)

func TestParseRecordHeaderUnfoldsFoldedFields(t *testing.T) {
	raw := []byte(
		"WARC/1.1\r\n" +
			"X-Archive-Note: first segment\r\n" +
			" \t second:segment\r\n" +
			"\tthird segment\r\n" +
			"Content-Type: application/http;\r\n" +
			"\tmsgtype=response\r\n" +
			"Content-Length: 0\r\n" +
			"\r\n",
	)
	original := bytes.Clone(raw)

	header, contentLength, err := parseRecordHeader(raw)
	if err != nil {
		t.Fatal(err)
	}
	if !bytes.Equal(raw, original) {
		t.Fatal("parseRecordHeader modified the raw header")
	}
	if contentLength != 0 {
		t.Fatalf("Content-Length = %d, want 0", contentLength)
	}
	if !header.HasFoldedFields() {
		t.Fatal("HasFoldedFields() = false, want true")
	}

	note := findWARCFieldInHeader(t, header, "X-Archive-Note")
	if note.Value != "first segment second:segment third segment" {
		t.Fatalf("note value = %q", note.Value)
	}
	if !note.Folded {
		t.Fatal("note Folded = false, want true")
	}

	contentType := findWARCFieldInHeader(t, header, "Content-Type")
	if contentType.Value != "application/http; msgtype=response" {
		t.Fatalf("Content-Type = %q", contentType.Value)
	}
	if !contentType.Folded {
		t.Fatal("Content-Type Folded = false, want true")
	}

	length := findWARCFieldInHeader(t, header, "Content-Length")
	if length.Folded {
		t.Fatal("Content-Length Folded = true, want false")
	}
}

func TestParseRecordHeaderFoldedWhitespaceForms(t *testing.T) {
	tests := []struct {
		name         string
		continuation string
		want         string
	}{
		{name: "space", continuation: " continued", want: "start continued"},
		{name: "tab", continuation: "\tcontinued", want: "start continued"},
		{name: "mixed whitespace", continuation: " \t  continued", want: "start continued"},
		{name: "colon in continuation", continuation: " value:with:colons", want: "start value:with:colons"},
		{name: "whitespace only", continuation: " \t ", want: "start"},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			raw := []byte("WARC/1.1\r\nX-Test: start\r\n" + tt.continuation + "\r\nContent-Length: 0\r\n\r\n")
			header, _, err := parseRecordHeader(raw)
			if err != nil {
				t.Fatal(err)
			}
			field := findWARCFieldInHeader(t, header, "X-Test")
			if field.Value != tt.want {
				t.Fatalf("value = %q, want %q", field.Value, tt.want)
			}
			if !field.Folded {
				t.Fatal("Folded = false, want true")
			}
		})
	}
}

func TestParseRecordHeaderRemovesOnlyOneLineEndingCR(t *testing.T) {
	_, _, err := parseRecordHeader([]byte("WARC/1.1\r\r\nContent-Length: 0\r\n\r\n"))
	if !errors.Is(err, ErrInvalidWARCHeader) {
		t.Fatalf("error = %v, want %v", err, ErrInvalidWARCHeader)
	}

	_, _, err = parseRecordHeader([]byte("WARC/1.1\r\nContent-Length: 0\r\r\n\r\n"))
	if !errors.Is(err, ErrInvalidContentLength) {
		t.Fatalf("error = %v, want %v", err, ErrInvalidContentLength)
	}
}

func TestParseRecordHeaderDoesNotRepairFieldNameWhitespace(t *testing.T) {
	tests := []string{
		"Content-Length : 0",
		"Content-Length\t: 0",
	}
	for _, field := range tests {
		t.Run(field, func(t *testing.T) {
			_, _, err := parseRecordHeader([]byte("WARC/1.1\r\n" + field + "\r\n\r\n"))
			if !errors.Is(err, ErrInvalidWARCHeader) {
				t.Fatalf("error = %v, want %v", err, ErrInvalidWARCHeader)
			}
			if !errors.Is(err, ErrInvalidWARCField) {
				t.Fatalf("error = %v, want %v", err, ErrInvalidWARCField)
			}
		})
	}
}

func TestParseRecordHeaderRejectsNamedFieldWithoutColon(t *testing.T) {
	_, _, err := parseRecordHeader([]byte("WARC/1.1\r\nmalformed\r\nContent-Length: 0\r\n\r\n"))
	if !errors.Is(err, ErrInvalidWARCHeader) {
		t.Fatalf("error = %v, want %v", err, ErrInvalidWARCHeader)
	}
	if !errors.Is(err, ErrInvalidWARCField) {
		t.Fatalf("error = %v, want %v", err, ErrInvalidWARCField)
	}
}

func TestParseRecordHeaderTrimsOnlyValueOWS(t *testing.T) {
	raw := []byte("WARC/1.1\r\nX-Test:\t  value  \t\r\nContent-Length:\t0 \t\r\n\r\n")
	header, contentLength, err := parseRecordHeader(raw)
	if err != nil {
		t.Fatal(err)
	}
	if contentLength != 0 {
		t.Fatalf("Content-Length = %d, want 0", contentLength)
	}
	field := findWARCFieldInHeader(t, header, "X-Test")
	if field.Value != "value" {
		t.Fatalf("value = %q, want %q", field.Value, "value")
	}
}

func TestParseRecordHeaderFoldedFieldsWARCVersions(t *testing.T) {
	for _, version := range []string{"WARC/1.0", "WARC/1.1"} {
		t.Run(version, func(t *testing.T) {
			raw := []byte(version + "\r\nX-Archive-Note:\r\n continuation-only value\r\nContent-Length: 0\r\n\r\n")
			header, _, err := parseRecordHeader(raw)
			if err != nil {
				t.Fatal(err)
			}
			field := findWARCFieldInHeader(t, header, "X-Archive-Note")
			if field.Value != "continuation-only value" || !field.Folded {
				t.Fatalf("field = %+v", field)
			}
		})
	}
}

func TestParseRecordHeaderRejectsFoldedFields(t *testing.T) {
	raw := []byte("WARC/1.1\r\nX-Archive-Note: first\r\n second\r\nContent-Length: 0\r\n\r\n")

	_, _, err := parseRecordHeaderWithOptions(raw, FoldedFieldReject)
	if !errors.Is(err, ErrFoldedWARCField) {
		t.Fatalf("error = %v, want %v", err, ErrFoldedWARCField)
	}
	if !strings.Contains(err.Error(), "X-Archive-Note") {
		t.Fatalf("error = %q, want field name", err)
	}
}

func TestParseRecordHeaderRejectsOrphanContinuations(t *testing.T) {
	tests := []struct {
		name string
		raw  string
	}{
		{
			name: "first header line",
			raw:  "WARC/1.1\r\n orphan\r\nContent-Length: 0\r\n\r\n",
		},
		{
			name: "after malformed field",
			raw:  "WARC/1.1\r\nX-Test: first\r\nmalformed\r\n continuation\r\nContent-Length: 0\r\n\r\n",
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			_, _, err := parseRecordHeader([]byte(tt.raw))
			if !errors.Is(err, ErrInvalidWARCHeader) {
				t.Fatalf("error = %v, want %v", err, ErrInvalidWARCHeader)
			}
		})
	}
}

func TestScannerFoldedFieldPolicy(t *testing.T) {
	record := []byte(
		"WARC/1.1\r\n" +
			"X-Archive-Note: first\r\n" +
			" second\r\n" +
			"Content-Length: 0\r\n" +
			"\r\n" +
			"\r\n\r\n",
	)

	t.Run("accept by default", func(t *testing.T) {
		scanner, err := NewScanner(bytes.NewReader(record), ScannerOptions{Compression: CompressionPlain})
		if err != nil {
			t.Fatal(err)
		}
		if !scanner.Next() {
			t.Fatalf("Next() = false: %v", scanner.Err())
		}
		ref := scanner.RecordRef()
		if !bytes.Equal(ref.RawHeader, record[:len(record)-len(warcRecordTrailer)]) {
			t.Fatalf("RawHeader = %q", ref.RawHeader)
		}
		field := findWARCFieldInHeader(t, ref.Header, "X-Archive-Note")
		if field.Value != "first second" || !field.Folded {
			t.Fatalf("field = %+v", field)
		}
	})

	t.Run("reject", func(t *testing.T) {
		scanner, err := NewScanner(bytes.NewReader(record), ScannerOptions{
			Compression:  CompressionPlain,
			FoldedFields: FoldedFieldReject,
		})
		if err != nil {
			t.Fatal(err)
		}
		if scanner.Next() {
			t.Fatal("Next() = true, want folded-field error")
		}
		if !errors.Is(scanner.Err(), ErrFoldedWARCField) {
			t.Fatalf("error = %v, want %v", scanner.Err(), ErrFoldedWARCField)
		}
	})
}

func TestRecordHeaderHasFoldedFieldsFalse(t *testing.T) {
	header := RecordHeader{Fields: []WARCField{{Name: "Content-Length", Value: "0"}}}
	if header.HasFoldedFields() {
		t.Fatal("HasFoldedFields() = true, want false")
	}
}

func findWARCFieldInHeader(t *testing.T, header RecordHeader, name string) WARCField {
	t.Helper()
	return findNamedField(t, header.Fields, name)
}
