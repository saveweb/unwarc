//go:build !unwarc_libzstd || !cgo

package unwarc

import "fmt"

type nativeZstdDecoder struct{}

func newNativeZstdDecoder() (*nativeZstdDecoder, bool, error) {
	return nil, false, nil
}

func (d *nativeZstdDecoder) Decode(frame []byte, dst []byte, frameContentSize uint64) ([]byte, error) {
	return nil, fmt.Errorf("native zstd decoder is not enabled")
}

func (d *nativeZstdDecoder) Close() {}
