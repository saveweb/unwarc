//go:build unwarc_libz && cgo

package unwarc

/*
#cgo pkg-config: zlib
#include <stdlib.h>
#include <string.h>
#include <zlib.h>

static int unwarc_inflate_init2(z_streamp strm) {
	return inflateInit2(strm, 15 + 16);
}

static int unwarc_inflate(z_streamp strm, Bytef* in, uInt in_len, Bytef* out, uInt out_len, uInt* consumed, uInt* produced) {
	strm->next_in = in;
	strm->avail_in = in_len;
	strm->next_out = out;
	strm->avail_out = out_len;
	int ret = inflate(strm, Z_NO_FLUSH);
	*consumed = in_len - strm->avail_in;
	*produced = out_len - strm->avail_out;
	strm->next_in = NULL;
	strm->avail_in = 0;
	strm->next_out = NULL;
	strm->avail_out = 0;
	return ret;
}
*/
import "C"

import (
	"bufio"
	"errors"
	"fmt"
	"io"
	"unsafe"

	"github.com/klauspost/compress/gzip"
)

var errCountingReaderUnbuffered = errors.New("counting reader has no buffered source")

const nativeGzipBufferSize = 32 * 1024

type nativeGzipReader struct {
	cr          *countingReader
	z           C.z_stream
	inBuf       unsafe.Pointer
	outBuf      unsafe.Pointer
	initialized bool
}

func newNativeGzipReader(cr *countingReader) (*nativeGzipReader, bool, error) {
	r := &nativeGzipReader{}
	err := r.Reset(cr)
	if errors.Is(err, errCountingReaderUnbuffered) {
		return nil, false, nil
	}
	return r, true, err
}

func (r *nativeGzipReader) Reset(cr *countingReader) error {
	if err := processCountingReaderBufferedInput(cr, func([]byte) (int, error) {
		return 0, nil
	}); err != nil {
		return err
	}
	if r.initialized {
		_ = r.Close()
	}
	if err := r.ensureBuffers(); err != nil {
		return err
	}
	r.cr = cr
	C.memset(unsafe.Pointer(&r.z), 0, C.size_t(unsafe.Sizeof(r.z)))
	ret := C.unwarc_inflate_init2(&r.z)
	if ret != C.Z_OK {
		r.freeBuffers()
		return zlibError("inflateInit2", ret)
	}
	r.initialized = true
	return nil
}

func (r *nativeGzipReader) Read(p []byte) (int, error) {
	if len(p) == 0 {
		return 0, nil
	}
	for {
		var used int
		var got int
		var ret C.int
		err := processCountingReaderBufferedInput(r.cr, func(in []byte) (int, error) {
			inLen := min(len(in), nativeGzipBufferSize)
			outLen := min(len(p), nativeGzipBufferSize)
			C.memcpy(r.inBuf, unsafe.Pointer(&in[0]), C.size_t(inLen))
			var consumed C.uInt
			var produced C.uInt
			ret = C.unwarc_inflate(
				&r.z,
				(*C.Bytef)(r.inBuf),
				C.uInt(inLen),
				(*C.Bytef)(r.outBuf),
				C.uInt(outLen),
				&consumed,
				&produced,
			)
			used = int(consumed)
			got = int(produced)
			if got > 0 {
				copy(p, unsafe.Slice((*byte)(r.outBuf), got))
			}
			return used, nil
		})
		if err != nil {
			if err == io.EOF {
				return 0, io.ErrUnexpectedEOF
			}
			return 0, err
		}

		switch ret {
		case C.Z_STREAM_END:
			if got > 0 {
				return got, io.EOF
			}
			return 0, io.EOF
		case C.Z_OK:
			if got > 0 {
				return got, nil
			}
			if used > 0 {
				continue
			}
			return 0, io.ErrUnexpectedEOF
		default:
			return got, zlibError("inflate", ret)
		}
	}
}

func (r *nativeGzipReader) ensureBuffers() error {
	if r.inBuf == nil {
		r.inBuf = C.malloc(C.size_t(nativeGzipBufferSize))
	}
	if r.outBuf == nil {
		r.outBuf = C.malloc(C.size_t(nativeGzipBufferSize))
	}
	if r.inBuf == nil || r.outBuf == nil {
		r.freeBuffers()
		return fmt.Errorf("native gzip: failed to allocate zlib buffers")
	}
	return nil
}

func (r *nativeGzipReader) freeBuffers() {
	if r.inBuf != nil {
		C.free(r.inBuf)
		r.inBuf = nil
	}
	if r.outBuf != nil {
		C.free(r.outBuf)
		r.outBuf = nil
	}
}

func (r *nativeGzipReader) Close() error {
	if !r.initialized {
		r.freeBuffers()
		return nil
	}
	r.z.next_in = nil
	r.z.avail_in = 0
	r.z.next_out = nil
	r.z.avail_out = 0
	ret := C.inflateEnd(&r.z)
	r.initialized = false
	r.freeBuffers()
	if ret != C.Z_OK {
		return zlibError("inflateEnd", ret)
	}
	return nil
}

func zlibError(op string, ret C.int) error {
	if ret == C.Z_DATA_ERROR {
		return fmt.Errorf("%w: %s: %s", gzip.ErrHeader, op, C.GoString(C.zError(ret)))
	}
	return fmt.Errorf("%s: %s", op, C.GoString(C.zError(ret)))
}

func processCountingReaderBufferedInput(cr *countingReader, process func([]byte) (int, error)) error {
	br, ok := cr.r.(*bufio.Reader)
	if !ok {
		return errCountingReaderUnbuffered
	}
	if br.Buffered() == 0 {
		if _, err := br.Peek(1); err != nil {
			return err
		}
	}
	in, err := br.Peek(br.Buffered())
	if err != nil {
		return err
	}
	used, err := process(in)
	if used < 0 || used > len(in) {
		return fmt.Errorf("counting reader consumed %d buffered bytes from %d available", used, len(in))
	}
	if used == 0 {
		return err
	}
	got, discardErr := br.Discard(used)
	cr.off += int64(got)
	if discardErr != nil {
		return errors.Join(err, discardErr)
	}
	if got != used {
		return errors.Join(err, io.ErrUnexpectedEOF)
	}
	return err
}
