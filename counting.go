package unwarc

import (
	"bufio"
	"io"
)

type countingReader struct {
	r          io.Reader
	byteReader io.ByteReader
	off        int64
}

func newCountingReader(r io.Reader) *countingReader {
	if _, ok := r.(io.ByteReader); !ok {
		r = bufio.NewReader(r)
	}
	cr := &countingReader{r: r}
	if br, ok := r.(io.ByteReader); ok {
		cr.byteReader = br
	}
	return cr
}

func (r *countingReader) Read(p []byte) (int, error) {
	n, err := r.r.Read(p)
	r.off += int64(n)
	return n, err
}

func (r *countingReader) ReadByte() (byte, error) {
	if r.byteReader != nil {
		b, err := r.byteReader.ReadByte()
		if err == nil {
			r.off++
		}
		return b, err
	}
	var b [1]byte
	_, err := io.ReadFull(r, b[:])
	return b[0], err
}

func (r *countingReader) Tell() int64 {
	return r.off
}
