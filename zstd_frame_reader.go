package unwarc

import (
	"encoding/binary"
	"fmt"
	"io"
)

type zstdFrameCompressedReader struct {
	r     io.Reader
	magic uint32
	state zstdFrameState

	pending []byte
	scratch [16]byte

	onHeader       func(zstdFrameMetadata) error
	hasCRC         bool
	lastBlock      bool
	blockRemaining int
	err            error
}

type zstdFrameMetadata struct {
	HasFrameContentSize bool
	HasContentChecksum  bool
	FrameContentSize    uint64
}

type zstdFrameState int

const (
	zstdFrameNeedMagic zstdFrameState = iota
	zstdFrameNeedHeader
	zstdFrameNeedBlockHeader
	zstdFrameNeedBlockBody
	zstdFrameNeedChecksum
	zstdFrameDone
)

func newZstdFrameCompressedReader(r io.Reader, magic uint32) *zstdFrameCompressedReader {
	return &zstdFrameCompressedReader{
		r:     r,
		magic: magic,
		state: zstdFrameNeedMagic,
	}
}

func (r *zstdFrameCompressedReader) Read(p []byte) (int, error) {
	if len(p) == 0 {
		return 0, nil
	}
	for {
		if len(r.pending) > 0 {
			n := copy(p, r.pending)
			r.pending = r.pending[n:]
			return n, nil
		}
		if r.err != nil {
			err := r.err
			r.err = nil
			return 0, err
		}

		switch r.state {
		case zstdFrameNeedMagic:
			binary.LittleEndian.PutUint32(r.scratch[:4], r.magic)
			r.pending = r.scratch[:4]
			r.state = zstdFrameNeedHeader

		case zstdFrameNeedHeader:
			header, meta, err := readZstdFrameHeader(r.r, &r.scratch)
			if err != nil {
				return 0, err
			}
			r.pending = header
			r.hasCRC = meta.HasContentChecksum
			if r.onHeader != nil {
				if err := r.onHeader(meta); err != nil {
					return 0, err
				}
			}
			r.state = zstdFrameNeedBlockHeader

		case zstdFrameNeedBlockHeader:
			header, last, contentSize, err := readZstdBlockHeader(r.r, &r.scratch)
			if err != nil {
				return 0, err
			}
			r.pending = header
			r.lastBlock = last
			r.blockRemaining = contentSize
			r.state = zstdFrameNeedBlockBody

		case zstdFrameNeedBlockBody:
			if r.blockRemaining == 0 {
				r.finishBlock()
				continue
			}
			n, err := r.readBlockBody(p)
			if n > 0 {
				return n, err
			}
			if err != nil {
				return 0, err
			}
			return 0, nil

		case zstdFrameNeedChecksum:
			if err := readFrameFull(r.r, r.scratch[:4]); err != nil {
				return 0, err
			}
			r.pending = r.scratch[:4]
			r.state = zstdFrameDone

		default:
			return 0, io.EOF
		}
	}
}

func (r *zstdFrameCompressedReader) readBlockBody(p []byte) (int, error) {
	if len(p) > r.blockRemaining {
		p = p[:r.blockRemaining]
	}
	n, err := r.r.Read(p)
	if n > 0 {
		r.blockRemaining -= n
		if err != nil && r.blockRemaining > 0 {
			r.err = frameUnexpectedEOF(err)
		}
		return n, nil
	}
	if err != nil {
		return 0, frameUnexpectedEOF(err)
	}
	return 0, nil
}

func (r *zstdFrameCompressedReader) finishBlock() {
	if r.lastBlock {
		if r.hasCRC {
			r.state = zstdFrameNeedChecksum
		} else {
			r.state = zstdFrameDone
		}
		return
	}
	r.state = zstdFrameNeedBlockHeader
}

func readZstdFrameHeader(r io.Reader, scratch *[16]byte) ([]byte, zstdFrameMetadata, error) {
	pos := 0
	if err := readFrameFull(r, scratch[pos:pos+1]); err != nil {
		return nil, zstdFrameMetadata{}, err
	}
	desc := scratch[pos]
	pos++

	fhd := desc
	fcsFlag := fhd >> 6
	singleSegment := fhd&0x20 != 0
	hasCRC := fhd&0x04 != 0
	dictIDFlag := fhd & 0x03

	if fhd&0x08 != 0 {
		return nil, zstdFrameMetadata{}, fmt.Errorf("zstd frame reserved bit set")
	}
	if !singleSegment {
		if err := readFrameFull(r, scratch[pos:pos+1]); err != nil {
			return nil, zstdFrameMetadata{}, err
		}
		pos++
	}

	dictIDSize := 0
	switch dictIDFlag {
	case 1:
		dictIDSize = 1
	case 2:
		dictIDSize = 2
	case 3:
		dictIDSize = 4
	}
	if dictIDSize > 0 {
		if err := readFrameFull(r, scratch[pos:pos+dictIDSize]); err != nil {
			return nil, zstdFrameMetadata{}, err
		}
		pos += dictIDSize
	}

	fcsSize := 0
	switch fcsFlag {
	case 0:
		if singleSegment {
			fcsSize = 1
		}
	case 1:
		fcsSize = 2
	case 2:
		fcsSize = 4
	case 3:
		fcsSize = 8
	}
	var frameContentSize uint64
	if fcsSize > 0 {
		fcsStart := pos
		if err := readFrameFull(r, scratch[pos:pos+fcsSize]); err != nil {
			return nil, zstdFrameMetadata{}, err
		}
		pos += fcsSize
		switch fcsSize {
		case 1:
			frameContentSize = uint64(scratch[fcsStart])
		case 2:
			frameContentSize = uint64(binary.LittleEndian.Uint16(scratch[fcsStart:pos])) + 256
		case 4:
			frameContentSize = uint64(binary.LittleEndian.Uint32(scratch[fcsStart:pos]))
		case 8:
			frameContentSize = binary.LittleEndian.Uint64(scratch[fcsStart:pos])
		}
	}

	return scratch[:pos], zstdFrameMetadata{
		HasFrameContentSize: fcsSize > 0,
		HasContentChecksum:  hasCRC,
		FrameContentSize:    frameContentSize,
	}, nil
}

func readZstdBlockHeader(r io.Reader, scratch *[16]byte) ([]byte, bool, int, error) {
	hdr := scratch[:3]
	if err := readFrameFull(r, hdr); err != nil {
		return nil, false, 0, err
	}
	v := uint32(hdr[0]) | uint32(hdr[1])<<8 | uint32(hdr[2])<<16
	last := v&1 != 0
	blockType := (v >> 1) & 0x03
	blockSize := int((v >> 3) & 0x1fffff)

	contentSize := blockSize
	switch blockType {
	case 0: // raw
	case 1: // RLE
		contentSize = 1
	case 2: // compressed
	case 3:
		return nil, false, 0, fmt.Errorf("zstd reserved block type")
	}
	return hdr, last, contentSize, nil
}

func readFrameFull(r io.Reader, p []byte) error {
	if _, err := io.ReadFull(r, p); err != nil {
		return frameUnexpectedEOF(err)
	}
	return nil
}

func frameUnexpectedEOF(err error) error {
	if err == io.EOF {
		return io.ErrUnexpectedEOF
	}
	return err
}
