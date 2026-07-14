//go:build unwarc_libzstd && cgo

package unwarc

/*
#cgo pkg-config: libzstd
#include <stdlib.h>
#include <zstd.h>
*/
import "C"

import (
	"fmt"
	"unsafe"
)

type nativeZstdDecoder struct {
	ctx *C.ZSTD_DCtx
}

func newNativeZstdDecoder() (*nativeZstdDecoder, bool, error) {
	ctx := C.ZSTD_createDCtx()
	if ctx == nil {
		return nil, true, fmt.Errorf("zstd native decode: failed to create decoder context")
	}
	return &nativeZstdDecoder{ctx: ctx}, true, nil
}

func (d *nativeZstdDecoder) Decode(frame []byte, dst []byte, frameContentSize uint64) ([]byte, error) {
	if frameContentSize > uint64(int(^uint(0)>>1)) {
		return nil, fmt.Errorf("zstd native decode frame size %d exceeds addressable memory", frameContentSize)
	}
	size := int(frameContentSize)
	if len(frame) == 0 {
		return nil, fmt.Errorf("zstd native decode: empty frame")
	}
	if cap(dst) < size {
		dst = make([]byte, size)
	} else {
		dst = dst[:size]
	}
	var out unsafe.Pointer
	if size > 0 {
		out = unsafe.Pointer(&dst[0])
	}
	got := C.ZSTD_decompressDCtx(
		d.ctx,
		out,
		C.size_t(len(dst)),
		unsafe.Pointer(&frame[0]),
		C.size_t(len(frame)),
	)
	if C.ZSTD_isError(got) != 0 {
		return nil, fmt.Errorf("zstd native decode: %s", C.GoString(C.ZSTD_getErrorName(got)))
	}
	if int(got) != size {
		return nil, fmt.Errorf("zstd native decode produced %d bytes, want %d", int(got), size)
	}
	return dst, nil
}

func (d *nativeZstdDecoder) Close() {
	if d.ctx != nil {
		C.ZSTD_freeDCtx(d.ctx)
		d.ctx = nil
	}
}
