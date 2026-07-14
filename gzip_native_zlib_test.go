//go:build unwarc_libz && cgo

package unwarc

import (
	"bytes"
	"errors"
	"io"
	"testing"

	"github.com/klauspost/compress/gzip"
)

type readerOnly struct {
	r *bytes.Reader
}

func (r readerOnly) Read(p []byte) (int, error) {
	return r.r.Read(p)
}

func TestNativeGzipReaderMembersAndErrors(t *testing.T) {
	rec1 := makeRecord("warcinfo", "<urn:uuid:native-gzip-1>", []byte("native gzip one"))
	rec2 := makeRecord("response", "<urn:uuid:native-gzip-2>", []byte("native gzip two"))
	member1 := gzipMember(t, rec1)
	member2 := gzipMember(t, rec2)
	stream := append(append([]byte{}, member1...), member2...)

	cr := newCountingReader(readerOnly{r: bytes.NewReader(stream)})
	got1 := readNativeGzipMember(t, cr)
	if !bytes.Equal(got1, rec1) {
		t.Fatalf("first member = %q, want %q", got1, rec1)
	}
	if cr.Tell() != int64(len(member1)) {
		t.Fatalf("offset after first member = %d, want %d", cr.Tell(), len(member1))
	}

	got2 := readNativeGzipMember(t, cr)
	if !bytes.Equal(got2, rec2) {
		t.Fatalf("second member = %q, want %q", got2, rec2)
	}
	if cr.Tell() != int64(len(stream)) {
		t.Fatalf("offset after second member = %d, want %d", cr.Tell(), len(stream))
	}

	if _, ok, err := newNativeGzipReader(cr); !ok || !errors.Is(err, io.EOF) {
		t.Fatalf("newNativeGzipReader at EOF = ok %v, err %v; want native EOF", ok, err)
	}

	corrupt := gzipMember(t, rec1)
	corrupt[len(corrupt)/2] ^= 0xff
	cr = newCountingReader(readerOnly{r: bytes.NewReader(corrupt)})
	r, ok, err := newNativeGzipReader(cr)
	if err != nil || !ok {
		t.Fatalf("newNativeGzipReader corrupt = ok %v, err %v", ok, err)
	}
	_, err = io.Copy(io.Discard, r)
	closeErr := r.Close()
	if err == nil {
		t.Fatal("native gzip decoded corrupt member without error")
	}
	if !errors.Is(err, gzip.ErrHeader) {
		t.Fatalf("native gzip corrupt error = %v, want gzip.ErrHeader", err)
	}
	if closeErr != nil {
		t.Fatalf("close corrupt native gzip: %v", closeErr)
	}
}

func readNativeGzipMember(t *testing.T, cr *countingReader) []byte {
	t.Helper()
	r, ok, err := newNativeGzipReader(cr)
	if err != nil || !ok {
		t.Fatalf("newNativeGzipReader = ok %v, err %v", ok, err)
	}
	defer closeTest(t, r)

	data, err := io.ReadAll(r)
	if err != nil {
		t.Fatal(err)
	}
	return data
}
