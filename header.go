package unwarc

import (
	"bytes"
	"strconv"
	"strings"
)

func equalHeaderName(a, b string) bool {
	return strings.EqualFold(a, b)
}

func parseHeaderBlock(raw []byte) (Header, int64, error) {
	lines := bytes.Split(raw, []byte{'\n'})
	h := Header{}
	if len(lines) == 0 {
		return h, 0, ErrInvalidWARCHeader
	}

	version := strings.TrimRight(string(lines[0]), "\r")
	if version != "WARC/1.0" && version != "WARC/1.1" {
		return h, 0, ErrInvalidWARCHeader
	}
	h.Version = version

	var contentLength int64 = -1
	for _, line := range lines[1:] {
		line = bytes.TrimRight(line, "\r")
		if len(line) == 0 {
			continue
		}
		k, v, ok := bytes.Cut(line, []byte{':'})
		if !ok {
			continue
		}
		field := HeaderField{
			Name:  string(bytes.TrimSpace(k)),
			Value: string(bytes.TrimSpace(v)),
		}
		h.Fields = append(h.Fields, field)
		if equalHeaderName(field.Name, "Content-Length") {
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
