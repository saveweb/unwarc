package unwarc

import (
	"bytes"
	"fmt"
	"strconv"
)

func parseRecordHeader(raw []byte) (RecordHeader, int64, error) {
	return parseRecordHeaderWithOptions(raw, FoldedFieldAccept)
}

func parseRecordHeaderWithOptions(raw []byte, foldedFields FoldedFieldPolicy) (RecordHeader, int64, error) {
	lines := bytes.Split(raw, []byte{'\n'})
	h := RecordHeader{}
	if len(lines) == 0 {
		return h, 0, ErrInvalidWARCHeader
	}
	if !foldedFields.valid() {
		return h, 0, fmt.Errorf("%w: unsupported folded-field policy %d", ErrInvalidWARCHeader, foldedFields)
	}

	version := string(trimLineCR(lines[0]))
	if version != "WARC/1.0" && version != "WARC/1.1" {
		return h, 0, ErrInvalidWARCHeader
	}
	h.Version = version

	fields, err := parseNamedFieldLines(lines[1:], foldedFields)
	if err != nil {
		return h, -1, fmt.Errorf("%w: %w", ErrInvalidWARCHeader, err)
	}
	h.Fields = fields

	var contentLength int64 = -1
	for _, field := range h.Fields {
		if equalFieldName(field.Name, "Content-Length") {
			if contentLength >= 0 {
				return h, -1, ErrDuplicateContentLength
			}
			n, err := strconv.ParseInt(field.Value, 10, 64)
			if err != nil || n < 0 {
				return h, -1, ErrInvalidContentLength
			}
			contentLength = n
		}
	}
	if contentLength < 0 {
		return h, -1, ErrMissingContentLength
	}
	return h, contentLength, nil
}
