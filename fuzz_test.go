package unwarc

import (
	"bytes"
	"encoding/binary"
	"io"
	"testing"

	"github.com/klauspost/compress/zstd"
)

func FuzzScannerInputs(f *testing.F) {
	f.Add([]byte{})
	f.Add([]byte("WARC/1.1\r\nContent-Length: 0\r\n\r\n\r\n\r\n"))
	f.Add(makeRecord("response", "<urn:uuid:fuzz-record>", []byte("payload")))

	zw, err := zstd.NewWriter(nil, zstd.WithEncoderCRC(true), zstd.WithSingleSegment(true))
	if err != nil {
		f.Fatal(err)
	}
	f.Add(zw.EncodeAll(makeRecord("warcinfo", "<urn:uuid:fuzz-zstd>", []byte("zstd")), nil))
	zw.Close()

	f.Fuzz(func(t *testing.T, data []byte) {
		_, _, _ = parseHeaderBlock(data)
		_, _ = NewRecordFromBytes(data)

		scanner, err := NewScanner(bytes.NewReader(data), ScannerOptions{Compression: CompressionPlain})
		if err == nil {
			for i := 0; i < 16 && scanner.Next(); i++ {
				ref := scanner.RecordRef()
				if ref == nil {
					t.Fatal("nil record ref after successful Next")
				}
			}
			_ = scanner.Err()
		}

		if len(data) >= 4 {
			magic := binary.LittleEndian.Uint32(data[:4])
			frame := newZstdFrameCompressedReader(bytes.NewReader(data[4:]), magic)
			_, _ = io.CopyN(io.Discard, frame, 1<<20)
		}
	})
}
