package unwarc

import (
	"bytes"
	"errors"
	"fmt"
	"strings"
	"testing"
)

func TestParseWARCFieldsWpullCompatibility(t *testing.T) {
	data := []byte(
		"entry:\r\n" +
			"who:   Gilbert, W.S. | Sullivan, Arthur\r\n" +
			"what:  The Yeomen of\r\n" +
			"       the Guard\r\n" +
			"duck:\r\n" +
			"      quack\r\n" +
			"Blah: hello hello hello hello\r\n" +
			"  hello hello hello \r\n" +
			" hello hello hello \r\n" +
			"when/created:  1888\r\n" +
			"\r\n",
	)
	original := bytes.Clone(data)

	fields, err := ParseWARCFields(data, WARCFieldsOptions{})
	if err != nil {
		t.Fatal(err)
	}
	if !bytes.Equal(data, original) {
		t.Fatal("ParseWARCFields modified its input")
	}
	if !fields.HasFoldedFields() {
		t.Fatal("HasFoldedFields() = false, want true")
	}

	tests := []struct {
		name       string
		want       string
		wantFolded bool
	}{
		{name: "who", want: "Gilbert, W.S. | Sullivan, Arthur"},
		{name: "what", want: "The Yeomen of the Guard", wantFolded: true},
		{name: "duck", want: "quack", wantFolded: true},
		{name: "blah", want: "hello hello hello hello hello hello hello hello hello hello", wantFolded: true},
		{name: "when/created", want: "1888"},
	}
	for _, tt := range tests {
		field := findNamedField(t, fields.Fields, tt.name)
		if field.Value != tt.want || field.Folded != tt.wantFolded {
			t.Errorf("field %q = %+v, want value %q folded=%t", tt.name, field, tt.want, tt.wantFolded)
		}
		if value, ok := fields.Get(tt.name); !ok || value != tt.want {
			t.Errorf("Get(%q) = %q, %t", tt.name, value, ok)
		}
	}
}

func TestParseWARCFieldsFoldedFieldPolicy(t *testing.T) {
	data := []byte("software: wpull\r\n continuation\r\n\r\n")

	_, err := ParseWARCFields(data, WARCFieldsOptions{FoldedFields: FoldedFieldReject})
	if !errors.Is(err, ErrFoldedWARCField) {
		t.Fatalf("error = %v, want %v", err, ErrFoldedWARCField)
	}
}

func TestParseWARCFieldsWpullWrapWidth(t *testing.T) {
	first := strings.Repeat("a", 1024)
	second := strings.Repeat("b", 1024)
	data := []byte("wpull-arguments: " + first + "\r\n " + second + "\r\n\r\n")

	fields, err := ParseWARCFields(data, WARCFieldsOptions{})
	if err != nil {
		t.Fatal(err)
	}
	field := findNamedField(t, fields.Fields, "wpull-arguments")
	if field.Value != first+" "+second || !field.Folded {
		t.Fatalf("field value length = %d, folded=%t", len(field.Value), field.Folded)
	}
}

func TestParseWARCFieldsEmptyBlock(t *testing.T) {
	fields, err := ParseWARCFields(nil, WARCFieldsOptions{})
	if err != nil {
		t.Fatal(err)
	}
	if len(fields.Fields) != 0 || fields.HasFoldedFields() {
		t.Fatalf("fields = %+v", fields)
	}
}

func TestParseWARCFieldsDoesNotRepairFieldNameWhitespace(t *testing.T) {
	_, err := ParseWARCFields([]byte("good:\t value \t\r\nbad-name : value\r\n\r\n"), WARCFieldsOptions{})
	if !errors.Is(err, ErrInvalidWARCFields) {
		t.Fatalf("error = %v, want %v", err, ErrInvalidWARCFields)
	}
	if !errors.Is(err, ErrInvalidWARCField) {
		t.Fatalf("error = %v, want %v", err, ErrInvalidWARCField)
	}
}

func TestParseWARCFieldsRejectsNamedFieldWithoutColon(t *testing.T) {
	_, err := ParseWARCFields([]byte("good: value\r\nmalformed\r\n\r\n"), WARCFieldsOptions{})
	if !errors.Is(err, ErrInvalidWARCFields) {
		t.Fatalf("error = %v, want %v", err, ErrInvalidWARCFields)
	}
	if !errors.Is(err, ErrInvalidWARCField) {
		t.Fatalf("error = %v, want %v", err, ErrInvalidWARCField)
	}
}

func TestParseWARCFieldsTrimsOnlySpaceAndTab(t *testing.T) {
	fields, err := ParseWARCFields([]byte("control: \vvalue\v \r\n\r\n"), WARCFieldsOptions{})
	if err != nil {
		t.Fatal(err)
	}
	field := findNamedField(t, fields.Fields, "control")
	if field.Value != "\vvalue\v" {
		t.Fatalf("value = %q, want vertical tabs preserved", field.Value)
	}
}

func TestParseWARCFieldsRejectsOrphanContinuation(t *testing.T) {
	_, err := ParseWARCFields([]byte(" orphan\r\nsoftware: wpull\r\n\r\n"), WARCFieldsOptions{})
	if !errors.Is(err, ErrInvalidWARCFields) {
		t.Fatalf("error = %v, want %v", err, ErrInvalidWARCFields)
	}
	if !errors.Is(err, ErrInvalidWARCField) {
		t.Fatalf("error = %v, want %v", err, ErrInvalidWARCField)
	}
}

func TestRecordHeaderAndWARCFieldsUseDistinctContextErrors(t *testing.T) {
	_, _, headerErr := parseRecordHeader([]byte("WARC/1.1\r\nmalformed\r\nContent-Length: 0\r\n\r\n"))
	if !errors.Is(headerErr, ErrInvalidWARCHeader) || !errors.Is(headerErr, ErrInvalidWARCField) {
		t.Fatalf("record-header error = %v", headerErr)
	}
	if errors.Is(headerErr, ErrInvalidWARCFields) {
		t.Fatalf("record-header error unexpectedly matches %v: %v", ErrInvalidWARCFields, headerErr)
	}

	_, fieldsErr := ParseWARCFields([]byte("malformed\r\n\r\n"), WARCFieldsOptions{})
	if !errors.Is(fieldsErr, ErrInvalidWARCFields) || !errors.Is(fieldsErr, ErrInvalidWARCField) {
		t.Fatalf("application/warc-fields error = %v", fieldsErr)
	}
	if errors.Is(fieldsErr, ErrInvalidWARCHeader) {
		t.Fatalf("application/warc-fields error unexpectedly matches %v: %v", ErrInvalidWARCHeader, fieldsErr)
	}
}

func TestRecordHeaderAndWARCFieldsShareNamedFieldUnfolding(t *testing.T) {
	namedFields := "X-Archive-Note: first\r\n second:with:colons\r\n"

	warcFields, err := ParseWARCFields([]byte(namedFields+"\r\n"), WARCFieldsOptions{})
	if err != nil {
		t.Fatal(err)
	}
	header, _, err := parseRecordHeader([]byte("WARC/1.1\r\n" + namedFields + "Content-Length: 0\r\n\r\n"))
	if err != nil {
		t.Fatal(err)
	}

	fromBlock := findNamedField(t, warcFields.Fields, "X-Archive-Note")
	fromHeader := findNamedField(t, header.Fields, "X-Archive-Note")
	if fromBlock != fromHeader {
		t.Fatalf("block field = %+v, header field = %+v", fromBlock, fromHeader)
	}
}

func TestParseWARCFieldsFromWarcinfoRecordBlock(t *testing.T) {
	block := []byte("software: Wpull/2.0\r\n Python/3.4\r\nwpull-argv: [\"--warc-file\"]\r\n\r\n")
	record := []byte(fmt.Sprintf(
		"WARC/1.1\r\n"+
			"WARC-Type: warcinfo\r\n"+
			"WARC-Record-ID: <urn:uuid:wpull-warcinfo>\r\n"+
			"Content-Type: application/warc-fields\r\n"+
			"Content-Length: %d\r\n"+
			"\r\n%s\r\n\r\n",
		len(block),
		block,
	))

	refs := scanSourceRefs(t, newBytesSource(record), CompressionPlain)
	if len(refs) != 1 {
		t.Fatalf("records = %d, want 1", len(refs))
	}
	fields, err := ParseWARCFields(readAllFrom(t, refs[0].OpenBlock), WARCFieldsOptions{})
	if err != nil {
		t.Fatal(err)
	}
	software := findNamedField(t, fields.Fields, "software")
	if software.Value != "Wpull/2.0 Python/3.4" || !software.Folded {
		t.Fatalf("software = %+v", software)
	}
}

func findNamedField(t *testing.T, fields []WARCField, name string) WARCField {
	t.Helper()
	for _, field := range fields {
		if equalFieldName(field.Name, name) {
			return field
		}
	}
	t.Fatalf("missing field %q", name)
	return WARCField{}
}
