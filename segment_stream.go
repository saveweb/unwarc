package unwarc

import (
	"bytes"
	"compress/bzip2"
	"encoding/binary"
	"fmt"
	"io"

	"github.com/klauspost/compress/gzip"
	"github.com/klauspost/compress/zstd"
	"github.com/ulikunitz/xz"
)

type segmentStream interface {
	io.Reader
	Compression() Compression
	CompletedSegments() []Segment
	CurrentSegment() *Segment
	UncompOffset() int64
	Sync() error
}

func newSegmentStream(r io.Reader, compression Compression, maxBufferedZstdFrameSize int64, strict bool) (segmentStream, error) {
	cr := newCountingReader(r)
	switch compression {
	case CompressionPlain:
		return &plainSegmentStream{cr: cr}, nil
	case CompressionGzip:
		return newGzipSegmentStream(cr)
	case CompressionZstd:
		return newZstdSegmentStream(cr, maxBufferedZstdFrameSize, strict)
	case CompressionBzip2:
		return &wholeStreamSegmentStream{
			cr:          cr,
			reader:      bzip2.NewReader(cr),
			compression: CompressionBzip2,
			kind:        SegmentBzip2Stream,
		}, nil
	case CompressionXZ:
		xr, err := xz.ReaderConfig{SingleStream: true}.NewReader(cr)
		if err != nil {
			return nil, err
		}
		return &wholeStreamSegmentStream{
			cr:          cr,
			reader:      xr,
			compression: CompressionXZ,
			kind:        SegmentXZStream,
		}, nil
	default:
		return nil, fmt.Errorf("%w: %s", ErrUnsupportedCompression, compression)
	}
}

type plainSegmentStream struct {
	cr     *countingReader
	uncomp int64
}

func (s *plainSegmentStream) Read(p []byte) (int, error) {
	n, err := s.cr.Read(p)
	s.uncomp += int64(n)
	return n, err
}

func (s *plainSegmentStream) Compression() Compression     { return CompressionPlain }
func (s *plainSegmentStream) CompletedSegments() []Segment { return nil }
func (s *plainSegmentStream) CurrentSegment() *Segment     { return nil }
func (s *plainSegmentStream) UncompOffset() int64          { return s.uncomp }
func (s *plainSegmentStream) Sync() error                  { return nil }

type wholeStreamSegmentStream struct {
	cr          *countingReader
	reader      io.Reader
	compression Compression
	kind        SegmentKind
	current     *Segment
	completed   []Segment
	uncomp      int64
	started     bool
}

func (s *wholeStreamSegmentStream) Read(p []byte) (int, error) {
	if !s.started {
		s.started = true
		s.current = &Segment{
			Kind:                   s.kind,
			Comp:                   Range{Off: 0, Size: -1},
			Uncomp:                 Range{Off: s.uncomp, Size: 0},
			ProducesWARCBytes:      true,
			IndependentlyDecodable: false,
		}
	}
	n, err := s.reader.Read(p)
	if n > 0 {
		s.uncomp += int64(n)
		s.current.Uncomp.Size += int64(n)
	}
	if s.compression == CompressionXZ && isXZUnexpectedData(err) {
		err = fmt.Errorf("%w: %s", ErrSegmentedCompressionNotImplemented, s.compression)
	}
	if err == io.EOF && s.current != nil {
		s.current.Comp.Size = s.cr.Tell() - s.current.Comp.Off
		s.completed = append(s.completed, *s.current)
		s.current = nil
	}
	return n, err
}

func isXZUnexpectedData(err error) bool {
	return err != nil && err.Error() == "xz: unexpected data after stream"
}

func (s *wholeStreamSegmentStream) Compression() Compression     { return s.compression }
func (s *wholeStreamSegmentStream) CompletedSegments() []Segment { return s.completed }
func (s *wholeStreamSegmentStream) CurrentSegment() *Segment     { return s.current }
func (s *wholeStreamSegmentStream) UncompOffset() int64          { return s.uncomp }
func (s *wholeStreamSegmentStream) Sync() error                  { return nil }

type gzipSegmentStream struct {
	cr        *countingReader
	gz        *gzip.Reader
	current   *Segment
	completed []Segment
	uncomp    int64
	eof       bool
}

func newGzipSegmentStream(cr *countingReader) (*gzipSegmentStream, error) {
	return &gzipSegmentStream{cr: cr}, nil
}

func (s *gzipSegmentStream) startMember() error {
	if s.eof {
		return io.EOF
	}
	off := s.cr.Tell()
	gz, err := gzip.NewReader(s.cr)
	if err == io.EOF {
		s.eof = true
		return io.EOF
	}
	if err != nil {
		return err
	}
	gz.Multistream(false)
	s.gz = gz
	s.current = &Segment{
		Kind:                   SegmentGzipMember,
		Comp:                   Range{Off: off, Size: -1},
		Uncomp:                 Range{Off: s.uncomp, Size: 0},
		ProducesWARCBytes:      true,
		IndependentlyDecodable: true,
	}
	return nil
}

func (s *gzipSegmentStream) finishMember() error {
	if s.gz != nil {
		if err := s.gz.Close(); err != nil {
			return err
		}
	}
	if s.current != nil {
		s.current.Comp.Size = s.cr.Tell() - s.current.Comp.Off
		s.completed = append(s.completed, *s.current)
		s.current = nil
	}
	s.gz = nil
	return nil
}

func (s *gzipSegmentStream) Read(p []byte) (int, error) {
	for {
		if s.gz == nil {
			if err := s.startMember(); err != nil {
				return 0, err
			}
		}
		n, err := s.gz.Read(p)
		if n > 0 {
			s.uncomp += int64(n)
			s.current.Uncomp.Size += int64(n)
		}
		if err == io.EOF {
			if ferr := s.finishMember(); ferr != nil {
				return n, ferr
			}
			if n > 0 {
				return n, nil
			}
			continue
		}
		return n, err
	}
}

func (s *gzipSegmentStream) Compression() Compression     { return CompressionGzip }
func (s *gzipSegmentStream) CompletedSegments() []Segment { return s.completed }
func (s *gzipSegmentStream) CurrentSegment() *Segment     { return s.current }
func (s *gzipSegmentStream) UncompOffset() int64          { return s.uncomp }
func (s *gzipSegmentStream) Sync() error                  { return nil }
func (s *gzipSegmentStream) PruneCompletedBefore(off int64) {
	s.completed = pruneCompletedSegments(s.completed, off)
}

type zstdSegmentStream struct {
	cr                   *countingReader
	decoder              *zstd.Decoder
	streamDecoder        *zstd.Decoder
	streaming            bool
	current              *Segment
	completed            []Segment
	uncomp               int64
	dicts                [][]byte
	compressed           []byte
	decoded              []byte
	pending              []byte
	pendingComp          int64
	probed               []byte
	probeEOF             bool
	probeErr             error
	maxBufferedFrameSize int64
	strict               bool
	sawFrame             bool
	sawDict              bool
	sawExtension         bool
}

func newZstdSegmentStream(cr *countingReader, maxBufferedFrameSize int64, strict bool) (*zstdSegmentStream, error) {
	return &zstdSegmentStream{
		cr:                   cr,
		maxBufferedFrameSize: maxBufferedFrameSize,
		strict:               strict,
	}, nil
}

func (s *zstdSegmentStream) startFrame() error {
	for {
		off := s.cr.Tell()
		magic, err := readMagic(s.cr)
		if err != nil {
			return err
		}

		switch {
		case magic == zstdFrameMagic:
			s.sawFrame = true
			fr := newZstdFrameCompressedReader(s.cr, magic)
			var meta zstdFrameMetadata
			var headerSeen bool
			current := &Segment{
				Kind:                     SegmentZstdFrame,
				Comp:                     Range{Off: off, Size: -1},
				Uncomp:                   Range{Off: s.uncomp, Size: 0},
				ProducesWARCBytes:        true,
				IndependentlyDecodable:   len(s.dicts) == 0,
				RequiresPrefixDictionary: len(s.dicts) > 0,
			}
			s.current = current
			fr.onHeader = func(m zstdFrameMetadata) error {
				meta = m
				headerSeen = true
				current.ZstdHasFrameContentSize = meta.HasFrameContentSize
				current.ZstdHasContentChecksum = meta.HasContentChecksum
				if s.strict {
					return strictZstdFrameRequirementError(meta)
				}
				return nil
			}
			// WARC-zstd frames are intended to be independent record units.
			// Small known-size frames use DecodeAll for speed; unknown or large
			// frames fall back to streaming so a single frame cannot dominate RAM.
			s.compressed = s.compressed[:0]
			var err error
			var fallback bool
			s.compressed, fallback, err = readZstdFrameBuffered(s.compressed, fr, s.maxBufferedFrameSize, func() bool {
				return headerSeen && (!meta.HasFrameContentSize || meta.FrameContentSize > uint64(s.maxBufferedFrameSize))
			})
			if err != nil {
				s.current = nil
				return err
			}
			if fallback {
				return s.startStreamingFrame(fr, s.compressed)
			}
			s.pendingComp = s.cr.Tell() - off
			s.pending, err = s.decodeFrame(s.compressed)
			if err != nil {
				s.current = nil
				s.pending = nil
				s.pendingComp = 0
				return err
			}
			if len(s.pending) == 0 {
				s.finishFrame()
				continue
			}
			return nil

		case magic == zstdDictFrameMagic:
			if off != 0 || s.sawDict || s.sawFrame || s.sawExtension {
				return fmt.Errorf("zstd dictionary frame magic at invalid offset %d", off)
			}
			s.sawDict = true
			data, err := readZstdDictionaryPayload(s.cr)
			if err != nil {
				return err
			}
			dict, err := decodeZstdDictionaryFrame(data)
			if err != nil {
				return err
			}
			s.dicts = append(s.dicts, dict)
			s.completed = append(s.completed, Segment{
				Kind:                   SegmentZstdDict,
				Comp:                   Range{Off: off, Size: s.cr.Tell() - off},
				ProducesWARCBytes:      false,
				IndependentlyDecodable: false,
			})
			continue

		case isZstdSkippableMagic(magic):
			if off == 0 {
				return fmt.Errorf("zstd extension frame magic cannot start a WARC-zstd file")
			}
			s.sawExtension = true
			if err := skipSkippablePayload(s.cr); err != nil {
				return err
			}
			s.completed = append(s.completed, Segment{
				Kind:                   SegmentZstdSkippable,
				Comp:                   Range{Off: off, Size: s.cr.Tell() - off},
				ProducesWARCBytes:      false,
				IndependentlyDecodable: false,
			})
			continue

		default:
			return fmt.Errorf("invalid zstd frame magic 0x%08x at offset %d", magic, off)
		}
	}
}

func (s *zstdSegmentStream) finishFrame() {
	if s.current != nil {
		size := s.pendingComp
		if size <= 0 {
			size = s.cr.Tell() - s.current.Comp.Off
		}
		s.current.Comp.Size = size
		s.completed = append(s.completed, *s.current)
		s.current = nil
	}
	s.pendingComp = 0
}

func (s *zstdSegmentStream) Read(p []byte) (int, error) {
	if len(p) == 0 {
		return 0, nil
	}
	for {
		if len(s.probed) > 0 {
			n := copy(p, s.probed)
			s.probed = s.probed[n:]
			s.uncomp += int64(n)
			s.current.Uncomp.Size += int64(n)
			if len(s.probed) == 0 {
				if s.probeEOF {
					s.finishStreamingFrame()
				}
				if s.probeErr != nil {
					err := s.probeErr
					s.probeErr = nil
					return n, err
				}
			}
			return n, nil
		}
		if len(s.pending) > 0 {
			n := copy(p, s.pending)
			s.pending = s.pending[n:]
			s.uncomp += int64(n)
			s.current.Uncomp.Size += int64(n)
			if len(s.pending) == 0 {
				s.finishFrame()
			}
			return n, nil
		}
		if s.streaming {
			n, err := s.streamDecoder.Read(p)
			if n > 0 {
				s.uncomp += int64(n)
				s.current.Uncomp.Size += int64(n)
			}
			if err == io.EOF {
				s.finishStreamingFrame()
				if n > 0 {
					return n, nil
				}
				continue
			}
			if err != nil {
				s.clearStreamingFrame()
				return n, err
			}
			if n > 0 {
				return n, nil
			}
			return 0, nil
		}
		if err := s.startFrame(); err != nil {
			return 0, err
		}
	}
}

func (s *zstdSegmentStream) startStreamingFrame(fr *zstdFrameCompressedReader, prefix []byte) error {
	reader := io.MultiReader(bytes.NewReader(prefix), fr)
	if s.streamDecoder == nil {
		decoder, err := newZstdDecoder(reader, s.dicts)
		if err != nil {
			s.current = nil
			s.compressed = nil
			return err
		}
		s.streamDecoder = decoder
	} else if err := s.streamDecoder.Reset(reader); err != nil {
		s.current = nil
		s.compressed = nil
		return err
	}
	s.streaming = true
	s.compressed = nil
	return nil
}

func (s *zstdSegmentStream) decodeFrame(frame []byte) ([]byte, error) {
	if s.decoder == nil {
		dec, err := newZstdDecoder(nil, s.dicts)
		if err != nil {
			return nil, err
		}
		s.decoder = dec
	}
	decoded, err := s.decoder.DecodeAll(frame, s.decoded[:0])
	if err != nil {
		return nil, err
	}
	s.decoded = decoded
	return s.decoded, nil
}

func (s *zstdSegmentStream) Compression() Compression     { return CompressionZstd }
func (s *zstdSegmentStream) CompletedSegments() []Segment { return s.completed }
func (s *zstdSegmentStream) CurrentSegment() *Segment     { return s.current }
func (s *zstdSegmentStream) UncompOffset() int64          { return s.uncomp }
func (s *zstdSegmentStream) PrefixDictionaries() [][]byte {
	if len(s.dicts) == 0 {
		return nil
	}
	dicts := make([][]byte, len(s.dicts))
	copy(dicts, s.dicts)
	return dicts
}

func (s *zstdSegmentStream) Sync() error {
	if !s.streaming || len(s.probed) > 0 {
		return nil
	}

	var one [1]byte
	n, err := s.streamDecoder.Read(one[:])
	if n > 0 {
		s.probed = append(s.probed[:0], one[:n]...)
		if err == io.EOF {
			s.probeEOF = true
		} else if err != nil {
			s.probeErr = err
		}
		return nil
	}
	if err == io.EOF {
		s.finishStreamingFrame()
		return nil
	}
	if err != nil {
		s.clearStreamingFrame()
		return err
	}
	return nil
}

func (s *zstdSegmentStream) Close() error {
	if s.decoder != nil {
		s.decoder.Close()
		s.decoder = nil
	}
	if s.streamDecoder != nil {
		s.streamDecoder.Close()
		s.streamDecoder = nil
	}
	s.streaming = false
	s.current = nil
	s.pending = nil
	s.compressed = nil
	s.decoded = nil
	s.dicts = nil
	s.probed = nil
	return nil
}

func (s *zstdSegmentStream) finishStreamingFrame() {
	if s.streamDecoder != nil {
		_ = s.streamDecoder.Reset(nil)
	}
	s.streaming = false
	s.probed = nil
	s.probeEOF = false
	s.probeErr = nil
	s.finishFrame()
}

func (s *zstdSegmentStream) clearStreamingFrame() {
	if s.streamDecoder != nil {
		_ = s.streamDecoder.Reset(nil)
	}
	s.streaming = false
	s.probed = nil
	s.probeEOF = false
	s.probeErr = nil
}

func (s *zstdSegmentStream) PruneCompletedBefore(off int64) {
	s.completed = pruneCompletedSegments(s.completed, off)
}

func newZstdDecoder(r io.Reader, dicts [][]byte) (*zstd.Decoder, error) {
	opts := []zstd.DOption{
		zstd.WithDecoderConcurrency(1),
	}
	for _, d := range dicts {
		opts = append(opts, zstd.WithDecoderDicts(d))
	}
	return zstd.NewReader(r, opts...)
}

func readZstdFrameBuffered(dst []byte, r io.Reader, max int64, shouldFallback func() bool) ([]byte, bool, error) {
	var buf [32 * 1024]byte
	for {
		n, err := r.Read(buf[:])
		if n > 0 {
			dst = append(dst, buf[:n]...)
			if shouldFallback() || int64(len(dst)) > max {
				return dst, true, nil
			}
		}
		if err == io.EOF {
			return dst, false, nil
		}
		if err != nil {
			return dst, false, err
		}
	}
}

func strictZstdFrameRequirementError(meta zstdFrameMetadata) error {
	switch {
	case !meta.HasFrameContentSize:
		return fmt.Errorf("%w: zstd frame is missing Frame_Content_Size", ErrInvalidWARCZstd)
	case !meta.HasContentChecksum:
		return fmt.Errorf("%w: zstd frame is missing Content_Checksum", ErrInvalidWARCZstd)
	default:
		return nil
	}
}

func pruneCompletedSegments(segments []Segment, off int64) []Segment {
	keep := 0
	for keep < len(segments) {
		end := segments[keep].Uncomp.End()
		if end < 0 || end > off {
			break
		}
		keep++
	}
	if keep == 0 {
		return segments
	}
	copy(segments, segments[keep:])
	clear(segments[len(segments)-keep:])
	return segments[:len(segments)-keep]
}

const (
	// RFC 8878 Zstandard frame magic number. On disk this is:
	// 0x28 0xB5 0x2F 0xFD.
	zstdFrameMagic uint32 = 0xFD2FB528

	// WARC-zstd dictionary frame magic number. It is a skippable frame
	// whose on-disk bytes are: 0x5D 0x2A 0x4D 0x18.
	zstdDictFrameMagic uint32 = 0x184D2A5D

	maxZstdDictionarySize = 8 << 20
)

func readMagic(r io.Reader) (uint32, error) {
	var b [4]byte
	if _, err := io.ReadFull(r, b[:]); err != nil {
		return 0, err
	}
	return binary.LittleEndian.Uint32(b[:]), nil
}

func isZstdSkippableMagic(m uint32) bool {
	return m >= 0x184D2A50 && m <= 0x184D2A5F
}

func readZstdDictionaryPayload(r io.Reader) ([]byte, error) {
	var sizeBuf [4]byte
	if _, err := io.ReadFull(r, sizeBuf[:]); err != nil {
		if err == io.EOF {
			return nil, io.ErrUnexpectedEOF
		}
		return nil, err
	}
	size := binary.LittleEndian.Uint32(sizeBuf[:])
	if size > maxZstdDictionarySize {
		return nil, fmt.Errorf("zstd dictionary frame payload exceeds %d bytes", maxZstdDictionarySize)
	}
	data := make([]byte, size)
	if _, err := io.ReadFull(r, data); err != nil {
		if err == io.EOF {
			return nil, io.ErrUnexpectedEOF
		}
		return nil, err
	}
	return data, nil
}

func skipSkippablePayload(r io.Reader) error {
	var sizeBuf [4]byte
	if _, err := io.ReadFull(r, sizeBuf[:]); err != nil {
		if err == io.EOF {
			return io.ErrUnexpectedEOF
		}
		return err
	}
	size := binary.LittleEndian.Uint32(sizeBuf[:])
	_, err := io.CopyN(io.Discard, r, int64(size))
	if err == io.EOF {
		return io.ErrUnexpectedEOF
	}
	return err
}

func decodeZstdDictionaryFrame(data []byte) ([]byte, error) {
	if len(data) < 4 {
		return nil, fmt.Errorf("truncated zstd dictionary frame")
	}
	switch binary.LittleEndian.Uint32(data[:4]) {
	case 0xEC30A437:
		return data, nil
	case zstdFrameMagic:
		dec, err := zstd.NewReader(bytes.NewReader(data), zstd.WithDecoderConcurrency(1))
		if err != nil {
			return nil, err
		}
		defer dec.Close()
		return readAllLimited(dec, maxZstdDictionarySize)
	default:
		return nil, fmt.Errorf("invalid zstd dictionary frame payload")
	}
}

func readAllLimited(r io.Reader, max int64) ([]byte, error) {
	data, err := io.ReadAll(io.LimitReader(r, max+1))
	if err != nil {
		return nil, err
	}
	if int64(len(data)) > max {
		return nil, fmt.Errorf("zstd dictionary exceeds %d bytes", max)
	}
	return data, nil
}
