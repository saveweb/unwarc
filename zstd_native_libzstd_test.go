//go:build unwarc_libzstd && cgo

package unwarc

import (
	"bytes"
	"testing"
)

func TestNativeZstdDecoderBytesAndErrors(t *testing.T) {
	record := makeRecord("response", "<urn:uuid:native-zstd>", []byte("native zstd block"))
	frame := zstdFrame(t, record)

	decoder, ok, err := newNativeZstdDecoder()
	if err != nil || !ok {
		t.Fatalf("newNativeZstdDecoder = ok %v, err %v", ok, err)
	}
	defer decoder.Close()

	got, err := decoder.Decode(frame, nil, uint64(len(record)))
	if err != nil {
		t.Fatalf("Decode valid frame: %v", err)
	}
	if !bytes.Equal(got, record) {
		t.Fatalf("decoded frame = %q, want %q", got, record)
	}

	emptyFrame := zstdFrame(t, nil)
	got, err = decoder.Decode(emptyFrame, got[:0], 0)
	if err != nil {
		t.Fatalf("Decode empty frame: %v", err)
	}
	if len(got) != 0 {
		t.Fatalf("empty frame decoded %d bytes, want 0", len(got))
	}

	corrupt := append([]byte{}, frame...)
	corrupt[len(corrupt)-1] ^= 0xff
	if _, err := decoder.Decode(corrupt, got[:0], uint64(len(record))); err == nil {
		t.Fatal("Decode corrupt frame succeeded, want native error")
	}
}
