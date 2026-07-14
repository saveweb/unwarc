package unwarc

import (
	"bytes"
	"fmt"
	"strings"
)

// WARCFieldsOptions configures parsing of an application/warc-fields record
// block. Record-header parsing is configured through ScannerOptions or
// WARCZstdSeekIndexOptions instead.
type WARCFieldsOptions struct {
	// FoldedFields controls continuation lines. The zero value accepts and
	// unfolds them for WARC 1.0/1.1 compatibility.
	FoldedFields FoldedFieldPolicy
}

// WARCFields is parsed content using the application/warc-fields syntax.
type WARCFields struct {
	// Fields contains only named fields; application/warc-fields has no WARC
	// version line.
	Fields []WARCField
}

// ParseWARCFields parses an application/warc-fields block. It accepts folded
// fields by default and does not modify data.
func ParseWARCFields(data []byte, opts WARCFieldsOptions) (WARCFields, error) {
	if !opts.FoldedFields.valid() {
		return WARCFields{}, fmt.Errorf("%w: unsupported folded-field policy %d", ErrInvalidWARCFields, opts.FoldedFields)
	}
	fields, err := parseNamedFieldLines(bytes.Split(data, []byte{'\n'}), opts.FoldedFields)
	if err != nil {
		return WARCFields{}, fmt.Errorf("%w: %w", ErrInvalidWARCFields, err)
	}
	return WARCFields{Fields: fields}, nil
}

// Get returns the first field value whose name matches case insensitively.
func (f WARCFields) Get(name string) (string, bool) {
	return getNamedField(f.Fields, name)
}

// HasFoldedFields reports whether any field used WARC continuation lines.
func (f WARCFields) HasFoldedFields() bool {
	return hasFoldedFields(f.Fields)
}

func parseNamedFieldLines(lines [][]byte, foldedFields FoldedFieldPolicy) ([]WARCField, error) {
	var fields []WARCField
	currentField := -1
	for _, line := range lines {
		line = trimLineCR(line)
		if len(line) == 0 { // EOF
			break
		}
		if line[0] == ' ' || line[0] == '\t' {
			if currentField < 0 {
				return nil, fmt.Errorf("%w: continuation line has no preceding field", ErrInvalidWARCField)
			}
			field := &fields[currentField]
			if foldedFields == FoldedFieldReject {
				return nil, fmt.Errorf("%w: %s", ErrFoldedWARCField, field.Name)
			}
			field.Folded = true
			continuation := string(trimOWS(line))
			if continuation != "" {
				if field.Value != "" {
					field.Value += " "
				}
				field.Value += continuation
			}
			continue
		}

		name, value, ok := bytes.Cut(line, []byte{':'})
		if !ok {
			return nil, fmt.Errorf("%w: named field is missing colon", ErrInvalidWARCField)
		}
		// WARC named fields, like HTTP fields, do not permit optional
		// whitespace around the field name. Do not repair a malformed name,
		// especially Content-Length, because doing so could change framing.
		if len(name) == 0 || name[0] == ' ' || name[0] == '\t' || name[len(name)-1] == ' ' || name[len(name)-1] == '\t' {
			return nil, fmt.Errorf("%w: invalid whitespace around field name", ErrInvalidWARCField)
		}
		fields = append(fields, WARCField{
			Name:  string(name),
			Value: string(trimOWS(value)),
		})
		currentField = len(fields) - 1
	}
	return fields, nil
}

// trimLineCR removes only the CR belonging to a single CRLF line ending.
// Any additional CR remains available to parsing and validation.
func trimLineCR(line []byte) []byte {
	if len(line) > 0 && line[len(line)-1] == '\r' {
		return line[:len(line)-1]
	}
	return line
}

// trimOWS removes HTTP/WARC optional whitespace: SP and HTAB only.
func trimOWS(value []byte) []byte {
	return bytes.Trim(value, " \t")
}

func equalFieldName(a, b string) bool {
	return strings.EqualFold(a, b)
}

func getNamedField(fields []WARCField, name string) (string, bool) {
	for _, field := range fields {
		if equalFieldName(field.Name, name) {
			return field.Value, true
		}
	}
	return "", false
}

func hasFoldedFields(fields []WARCField) bool {
	for _, field := range fields {
		if field.Folded {
			return true
		}
	}
	return false
}
