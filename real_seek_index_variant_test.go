package unwarc

import (
	"bytes"
	"errors"
	"fmt"
	"io"
	"math"
	"os"
	"path/filepath"
	"strings"
	"sync"
	"testing"

	"github.com/klauspost/compress/zstd"
)

const seekVariantRebuildEnv = "UNWARC_SEEK_VARIANT_REBUILD"

var (
	seekVariantRebuildMu   sync.Mutex
	rebuiltSeekVariantPath = make(map[string]bool)
)

type seekVariantPaths struct {
	Single       string
	Chunk1M      string
	Chunk64K     string
	HTTPSplit    string
	HTTPSplit64K string
}

type seekVariantStats struct {
	Records            int
	BlockBytes         int64
	SeekTableBytes     int64
	DataFrames         int
	BlockSectionFrames int
	TrailerOnlyFrames  int
	HTTPSplitRecords   int
	HTTPHeaderFrames   int
	HTTPHeaderBytes    int64
	HTTPFallbacks      int
}

func TestRealSeekIndexVariantCorpus(t *testing.T) {
	paths := ensureRealSeekVariants(t)
	for _, tt := range []struct {
		name string
		path string
	}{
		{name: "seek-single", path: paths.Single},
		{name: "seek-1m", path: paths.Chunk1M},
		{name: "seek-64k", path: paths.Chunk64K},
		{name: "seek-http", path: paths.HTTPSplit},
		{name: "seek-http-64k", path: paths.HTTPSplit64K},
	} {
		t.Run(tt.name, func(t *testing.T) {
			refs := scanSeekIndexRefs(t, tt.path)
			if len(refs) == 0 {
				t.Fatal("seek-indexed corpus returned no records")
			}
			ref := largestBlockRef(refs)
			if ref == nil {
				t.Fatal("seek-indexed corpus returned no non-empty block records")
			}
			block := readAllFrom(t, ref.OpenBlock)
			if int64(len(block)) != ref.ContentLength {
				t.Fatalf("block length = %d, want %d", len(block), ref.ContentLength)
			}
		})
	}
}

func BenchmarkRealSeekIndexVariants(b *testing.B) {
	paths := ensureRealSeekVariants(b)

	for _, tt := range []struct {
		name string
		path string
	}{
		{name: "seek_single_open_index", path: paths.Single},
		{name: "seek_1m_open_index", path: paths.Chunk1M},
		{name: "seek_64k_open_index", path: paths.Chunk64K},
		{name: "seek_http_open_index", path: paths.HTTPSplit},
		{name: "seek_http_64k_open_index", path: paths.HTTPSplit64K},
	} {
		b.Run(tt.name, func(b *testing.B) {
			for i := 0; i < b.N; i++ {
				refs := scanSeekIndexRefs(b, tt.path)
				if len(refs) == 0 {
					b.Fatal("no refs")
				}
				reportRealWARCStats(b, len(refs), recordBlockBytes(refs))
				b.ReportMetric(float64(refs[len(refs)-1].location.Uncompressed.End()), "uncompressed_warc_bytes")
			}
		})
	}
}

func BenchmarkRealSeekIndexBlockRanges(b *testing.B) {
	paths := ensureRealSeekVariants(b)

	for _, tt := range []struct {
		name string
		path string
	}{
		{name: "seek_single_mid_range", path: paths.Single},
		{name: "seek_1m_mid_range", path: paths.Chunk1M},
		{name: "seek_64k_mid_range", path: paths.Chunk64K},
		{name: "seek_http_mid_range", path: paths.HTTPSplit},
		{name: "seek_http_64k_mid_range", path: paths.HTTPSplit64K},
	} {
		b.Run(tt.name, func(b *testing.B) {
			refs := scanSeekIndexRefs(b, tt.path)
			ref := largestBlockRef(refs)
			if ref == nil {
				b.Fatal("no block refs")
			}
			const size = int64(16 << 10)
			off := ref.ContentLength / 2
			if off+size > ref.ContentLength {
				off = ref.ContentLength - size
			}
			if off < 0 {
				off = 0
			}
			benchmarkOpenBlockRange(b, ref, off, size)
		})
	}
}

func BenchmarkRealSeekIndexHTTPBodyStartRanges(b *testing.B) {
	paths := ensureRealSeekVariants(b)
	splitRefs := scanSeekIndexRefs(b, paths.HTTPSplit)
	splitRef := largestBlockRefWithBodyFrame(splitRefs)
	if splitRef == nil {
		b.Fatal("no HTTP-split block refs")
	}
	id, ok := splitRef.Header.Get("WARC-Record-ID")
	if !ok {
		b.Fatal("HTTP-split ref has no WARC-Record-ID")
	}
	bodyOff := splitRef.blockIndex.frames[1].Block.Off
	const size = int64(16 << 10)

	for _, tt := range []struct {
		name string
		path string
	}{
		{name: "seek_single_body_start", path: paths.Single},
		{name: "seek_1m_body_start", path: paths.Chunk1M},
		{name: "seek_64k_body_start", path: paths.Chunk64K},
		{name: "seek_http_body_start", path: paths.HTTPSplit},
		{name: "seek_http_64k_body_start", path: paths.HTTPSplit64K},
	} {
		b.Run(tt.name, func(b *testing.B) {
			ref := findRecordRefByID(scanSeekIndexRefs(b, tt.path), id)
			if ref == nil {
				b.Fatalf("record %s not found", id)
			}
			benchmarkOpenBlockRange(b, ref, bodyOff, size)
		})
	}
}

func ensureRealSeekVariants(tb testing.TB) seekVariantPaths {
	tb.Helper()
	gzipPath := os.Getenv(zstdVariantGzipEnv)
	if gzipPath == "" {
		tb.Skipf("set %s=/path/to/input.warc.gz to generate and test seek-index variants", zstdVariantGzipEnv)
	}
	paths := realSeekVariantPaths(gzipPath)
	rebuild := shouldRebuildSeekVariants(gzipPath)

	type variant struct {
		name      string
		path      string
		chunkSize int64
		httpSplit bool
	}
	for _, v := range []variant{
		{name: "seek-single", path: paths.Single},
		{name: "seek-1m", path: paths.Chunk1M, chunkSize: 1 << 20},
		{name: "seek-64k", path: paths.Chunk64K, chunkSize: 64 << 10},
		{name: "seek-http", path: paths.HTTPSplit, httpSplit: true},
		{name: "seek-http-64k", path: paths.HTTPSplit64K, chunkSize: 64 << 10, httpSplit: true},
	} {
		if !rebuild && fileExists(v.path) {
			continue
		}
		stats, err := writeRealSeekVariant(gzipPath, v.path, v.chunkSize, v.httpSplit)
		if err != nil {
			tb.Fatal(err)
		}
		tb.Logf("generated %s variant: stats=%+v path=%s", v.name, stats, v.path)
	}
	markSeekVariantsRebuilt(gzipPath, rebuild)
	return paths
}

func shouldRebuildSeekVariants(gzipPath string) bool {
	if os.Getenv(seekVariantRebuildEnv) == "" {
		return false
	}
	seekVariantRebuildMu.Lock()
	defer seekVariantRebuildMu.Unlock()
	return !rebuiltSeekVariantPath[gzipPath]
}

func markSeekVariantsRebuilt(gzipPath string, rebuilt bool) {
	if !rebuilt {
		return
	}
	seekVariantRebuildMu.Lock()
	defer seekVariantRebuildMu.Unlock()
	rebuiltSeekVariantPath[gzipPath] = true
}

func largestBlockRef(refs []*RecordRef) *RecordRef {
	var largest *RecordRef
	for _, ref := range refs {
		if ref == nil || ref.ContentLength == 0 {
			continue
		}
		if largest == nil || ref.ContentLength > largest.ContentLength {
			largest = ref
		}
	}
	return largest
}

func largestBlockRefWithBodyFrame(refs []*RecordRef) *RecordRef {
	var largest *RecordRef
	for _, ref := range refs {
		if ref == nil || ref.blockIndex == nil || len(ref.blockIndex.frames) < 2 {
			continue
		}
		bodyOff := ref.blockIndex.frames[1].Block.Off
		if bodyOff <= 0 || bodyOff >= ref.ContentLength {
			continue
		}
		if largest == nil || ref.ContentLength > largest.ContentLength {
			largest = ref
		}
	}
	return largest
}

func findRecordRefByID(refs []*RecordRef, id string) *RecordRef {
	for _, ref := range refs {
		if ref == nil {
			continue
		}
		got, ok := ref.Header.Get("WARC-Record-ID")
		if ok && got == id {
			return ref
		}
	}
	return nil
}

func recordBlockBytes(refs []*RecordRef) int64 {
	var n int64
	for _, ref := range refs {
		if ref != nil {
			n += ref.ContentLength
		}
	}
	return n
}

func benchmarkOpenBlockRange(b *testing.B, ref *RecordRef, off, size int64) {
	b.Helper()
	if off >= ref.ContentLength {
		b.Fatalf("range offset %d outside block length %d", off, ref.ContentLength)
	}
	if off+size > ref.ContentLength {
		size = ref.ContentLength - off
	}
	b.SetBytes(size)
	blockFrames := len(ref.blockIndex.frames)
	overlapFrames := overlappingBlockFrameCount(ref, off, size)
	b.ResetTimer()
	b.ReportMetric(float64(size), "range_bytes")
	b.ReportMetric(float64(ref.ContentLength), "record_block_bytes")
	b.ReportMetric(float64(blockFrames), "block_frames")
	b.ReportMetric(float64(overlapFrames), "overlap_frames")
	for i := 0; i < b.N; i++ {
		block, err := ref.OpenBlockRange(off, size)
		if err != nil {
			b.Fatal(err)
		}
		n, err := io.Copy(io.Discard, block)
		closeErr := block.Close()
		if err != nil {
			b.Fatal(err)
		}
		if closeErr != nil {
			b.Fatal(closeErr)
		}
		if n != size {
			b.Fatalf("read %d bytes, want %d", n, size)
		}
	}
}

func overlappingBlockFrameCount(ref *RecordRef, off, size int64) int {
	want := Range{Off: off, Size: size}
	var n int
	for _, frame := range ref.blockIndex.frames {
		if rangesOverlap(frame.Block, want) {
			n++
		}
	}
	return n
}

func realSeekVariantPaths(gzipPath string) seekVariantPaths {
	dir := filepath.Dir(gzipPath)
	base := filepath.Base(gzipPath)
	base = strings.TrimSuffix(base, ".gz")
	base = strings.TrimSuffix(base, ".warc")
	return seekVariantPaths{
		Single:       filepath.Join(dir, base+".seek-single.warc.zst"),
		Chunk1M:      filepath.Join(dir, base+".seek-1m.warc.zst"),
		Chunk64K:     filepath.Join(dir, base+".seek-64k.warc.zst"),
		HTTPSplit:    filepath.Join(dir, base+".seek-http.warc.zst"),
		HTTPSplit64K: filepath.Join(dir, base+".seek-http-64k.warc.zst"),
	}
}

func writeRealSeekVariant(gzipPath, outPath string, blockChunkSize int64, httpSplit bool) (stats seekVariantStats, err error) {
	in, err := os.Open(gzipPath)
	if err != nil {
		return seekVariantStats{}, err
	}
	defer func() {
		err = errors.Join(err, in.Close())
	}()

	scanner, err := NewScanner(in, requireAllValidation(CompressionUnknown))
	if err != nil {
		return seekVariantStats{}, err
	}
	defer func() {
		err = errors.Join(err, scanner.Close())
	}()

	out, tmpPath, err := createVariantTemp(outPath)
	if err != nil {
		return seekVariantStats{}, err
	}
	defer func() { _ = os.Remove(tmpPath) }()

	enc, err := zstd.NewWriter(nil,
		zstd.WithEncoderCRC(true),
		zstd.WithEncoderConcurrency(1),
	)
	if err != nil {
		_ = out.Close()
		return seekVariantStats{}, err
	}
	defer func() {
		err = errors.Join(err, enc.Close())
	}()

	stats, err = writeSeekIndexedRecords(scanner, out, enc, blockChunkSize, httpSplit)
	if closeErr := out.Close(); err == nil {
		err = closeErr
	}
	if err != nil {
		return seekVariantStats{}, err
	}
	if err := os.Rename(tmpPath, outPath); err != nil {
		return seekVariantStats{}, err
	}
	return stats, nil
}

func writeSeekIndexedRecords(scanner *Scanner, out *os.File, enc *zstd.Encoder, blockChunkSize int64, httpSplit bool) (seekVariantStats, error) {
	var stats seekVariantStats
	for {
		record, err := scanner.NextRecord()
		if errors.Is(err, io.EOF) {
			break
		}
		if err != nil {
			return stats, err
		}
		ref := record.Ref()
		block := record.Block()

		entries := make([]zstdSeekEntry, 0, 4)
		if ref.ContentLength == 0 {
			raw := append(append([]byte{}, ref.RawHeader...), warcRecordTrailer...)
			entry, err := writeSeekVariantFrame(out, enc, raw, int64(len(raw)))
			closeErr := record.Close()
			if err != nil {
				return stats, err
			}
			if closeErr != nil {
				return stats, closeErr
			}
			entries = append(entries, entry)
			stats.DataFrames++
			table := recordLocalSeekTableForTest(entries...)
			if _, err := out.Write(table); err != nil {
				return stats, err
			}
			stats.SeekTableBytes += int64(len(table))
			stats.Records++
			continue
		}

		headerEntry, err := writeSeekVariantFrame(out, enc, ref.RawHeader, int64(len(ref.RawHeader)))
		if err != nil {
			_ = record.Close()
			return stats, err
		}
		entries = append(entries, headerEntry)
		stats.DataFrames++

		blockResult, err := writeSeekVariantBlockFramesForRecord(out, enc, ref, block, blockChunkSize, httpSplit)
		closeErr := record.Close()
		if err != nil {
			return stats, err
		}
		if closeErr != nil {
			return stats, closeErr
		}
		entries = append(entries, blockResult.entries...)
		if len(entries) > maxRecordLocalSeekFrames {
			return stats, fmt.Errorf("record-local seek table has %d frames, max %d", len(entries), maxRecordLocalSeekFrames)
		}
		stats.DataFrames += len(blockResult.entries)
		stats.BlockSectionFrames += len(blockResult.entries)
		if blockResult.trailerOnly {
			stats.TrailerOnlyFrames++
		}
		if blockResult.httpSplit {
			stats.HTTPSplitRecords++
			stats.HTTPHeaderFrames++
			stats.HTTPHeaderBytes += blockResult.httpHeaderBytes
		}
		if blockResult.httpFallback {
			stats.HTTPFallbacks++
		}

		table := recordLocalSeekTableForTest(entries...)
		if _, err := out.Write(table); err != nil {
			return stats, err
		}
		stats.SeekTableBytes += int64(len(table))
		stats.Records++
		stats.BlockBytes += ref.ContentLength
	}
	if err := scanner.Err(); err != nil {
		return stats, err
	}
	return stats, nil
}

type seekBlockFrameResult struct {
	entries         []zstdSeekEntry
	trailerOnly     bool
	httpSplit       bool
	httpHeaderBytes int64
	httpFallback    bool
}

func writeSeekVariantBlockFramesForRecord(out *os.File, enc *zstd.Encoder, ref *RecordRef, block io.Reader, chunkSize int64, httpSplit bool) (seekBlockFrameResult, error) {
	if !httpSplit || ref.ContentLength == 0 || !isHTTPWARCRecord(ref) {
		entries, trailerOnly, err := writeSeekVariantBlockFrames(out, enc, block, ref.ContentLength, chunkSize)
		return seekBlockFrameResult{entries: entries, trailerOnly: trailerOnly}, err
	}

	httpHeader, body, ok, err := splitHTTPBlockHeader(block, ref.ContentLength)
	if err != nil {
		return seekBlockFrameResult{}, err
	}
	if !ok {
		entries, trailerOnly, err := writeSeekVariantBlockFrames(out, enc, body, ref.ContentLength, chunkSize)
		return seekBlockFrameResult{entries: entries, trailerOnly: trailerOnly, httpFallback: true}, err
	}

	entries := make([]zstdSeekEntry, 0, 3)
	headerEntry, err := writeSeekVariantFrame(out, enc, httpHeader, int64(len(httpHeader)))
	if err != nil {
		return seekBlockFrameResult{}, err
	}
	entries = append(entries, headerEntry)

	bodySize := ref.ContentLength - int64(len(httpHeader))
	bodyEntries, trailerOnly, err := writeSeekVariantBlockFrames(out, enc, body, bodySize, chunkSize)
	if err != nil {
		return seekBlockFrameResult{}, err
	}
	entries = append(entries, bodyEntries...)
	return seekBlockFrameResult{
		entries:         entries,
		trailerOnly:     trailerOnly,
		httpSplit:       true,
		httpHeaderBytes: int64(len(httpHeader)),
	}, nil
}

func writeSeekVariantBlockFrames(out *os.File, enc *zstd.Encoder, block io.Reader, contentLength, chunkSize int64) ([]zstdSeekEntry, bool, error) {
	frameCount, err := seekVariantBlockFrameCount(contentLength, chunkSize)
	if err != nil {
		return nil, false, err
	}
	if contentLength == 0 {
		entry, err := writeSeekVariantFrame(out, enc, warcRecordTrailer, int64(len(warcRecordTrailer)))
		return []zstdSeekEntry{entry}, true, err
	}
	if chunkSize <= 0 || contentLength <= chunkSize {
		frame := io.MultiReader(block, bytes.NewReader(warcRecordTrailer))
		entry, err := writeSeekVariantFrameFromReader(out, enc, frame, contentLength+int64(len(warcRecordTrailer)))
		return []zstdSeekEntry{entry}, false, err
	}

	entries := make([]zstdSeekEntry, 0, frameCount)
	remaining := contentLength
	for remaining > 0 {
		n := chunkSize
		if remaining < n {
			n = remaining
		}
		entry, err := writeSeekVariantFrameFromReader(out, enc, io.LimitReader(block, n), n)
		if err != nil {
			return nil, false, err
		}
		entries = append(entries, entry)
		remaining -= n
	}
	entry, err := writeSeekVariantFrame(out, enc, warcRecordTrailer, int64(len(warcRecordTrailer)))
	if err != nil {
		return nil, false, err
	}
	entries = append(entries, entry)
	return entries, true, nil
}

func seekVariantBlockFrameCount(contentLength, chunkSize int64) (int, error) {
	if contentLength < 0 {
		return 0, fmt.Errorf("negative block length %d", contentLength)
	}
	var frames int64 = 1
	if contentLength > 0 && chunkSize > 0 && contentLength > chunkSize {
		frames = (contentLength+chunkSize-1)/chunkSize + 1
	}
	if frames > maxRecordLocalSeekFrames {
		return 0, fmt.Errorf("block uses %d seek frames, max %d", frames, maxRecordLocalSeekFrames)
	}
	return int(frames), nil
}

func isHTTPWARCRecord(ref *RecordRef) bool {
	contentType, ok := ref.Header.Get("Content-Type")
	if !ok {
		return false
	}
	mediaType, _, _ := strings.Cut(contentType, ";")
	return strings.EqualFold(strings.TrimSpace(mediaType), "application/http")
}

func splitHTTPBlockHeader(block io.Reader, contentLength int64) ([]byte, io.Reader, bool, error) {
	const maxHTTPHeaderProbe = int64(256 << 10)
	if contentLength <= 0 {
		return nil, block, false, nil
	}

	probeLimit := contentLength
	if probeLimit > maxHTTPHeaderProbe {
		probeLimit = maxHTTPHeaderProbe
	}
	capHint := probeLimit
	if capHint > 32<<10 {
		capHint = 32 << 10
	}
	buf := make([]byte, 0, capHint)
	tmp := make([]byte, 4096)

	var probed int64
	for probed < probeLimit {
		want := int64(len(tmp))
		if remaining := probeLimit - probed; remaining < want {
			want = remaining
		}
		n, err := block.Read(tmp[:want])
		if n > 0 {
			buf = append(buf, tmp[:n]...)
			probed += int64(n)
			end, matched, needMore := httpBlockSplitDecision(buf)
			if !needMore {
				body := io.MultiReader(bytes.NewReader(buf[end:]), block)
				if matched {
					header := append([]byte(nil), buf[:end]...)
					return header, body, true, nil
				}
				return nil, io.MultiReader(bytes.NewReader(buf), block), false, nil
			}
		}
		if err != nil {
			if errors.Is(err, io.EOF) {
				break
			}
			return nil, nil, false, err
		}
	}
	return nil, io.MultiReader(bytes.NewReader(buf), block), false, nil
}

func httpBlockSplitDecision(buf []byte) (end int, matched bool, needMore bool) {
	end = httpBlockHeaderEndFrom(buf, 0)
	if end < 0 {
		return 0, false, true
	}
	if !looksLikeHTTPMessageHeader(buf[:end]) {
		return end, false, false
	}

	for headerStart := 0; isProvisionalHTTPResponse(buf[headerStart:end]); {
		nextEnd := httpBlockHeaderEndFrom(buf, end)
		if nextEnd < 0 {
			return 0, true, true
		}
		if !looksLikeHTTPMessageHeader(buf[end:nextEnd]) {
			return end, true, false
		}
		headerStart = end
		end = nextEnd
	}
	return end, true, false
}

func httpBlockHeaderEndFrom(buf []byte, start int) int {
	if start >= len(buf) {
		return -1
	}
	crlf := bytes.Index(buf[start:], []byte("\r\n\r\n"))
	lf := bytes.Index(buf[start:], []byte("\n\n"))
	switch {
	case crlf >= 0 && (lf < 0 || crlf <= lf):
		return start + crlf + 4
	case lf >= 0:
		return start + lf + 2
	default:
		return -1
	}
}

func looksLikeHTTPMessageHeader(header []byte) bool {
	firstLine, _, _ := bytes.Cut(header, []byte{'\n'})
	firstLine = bytes.TrimRight(firstLine, "\r")
	if bytes.HasPrefix(firstLine, []byte("HTTP/")) {
		return true
	}
	fields := bytes.Fields(firstLine)
	return len(fields) >= 3 && bytes.HasPrefix(fields[len(fields)-1], []byte("HTTP/"))
}

func isProvisionalHTTPResponse(header []byte) bool {
	firstLine, _, _ := bytes.Cut(header, []byte{'\n'})
	fields := bytes.Fields(bytes.TrimRight(firstLine, "\r"))
	if len(fields) < 2 || !bytes.HasPrefix(fields[0], []byte("HTTP/")) {
		return false
	}
	status := fields[1]
	return len(status) == 3 && status[0] == '1' && !bytes.Equal(status, []byte("101"))
}

func TestSplitHTTPBlockHeader(t *testing.T) {
	oversizeHeader := append(bytes.Repeat([]byte("A"), 257<<10), []byte("\r\n\r\nbody")...)
	for _, tt := range []struct {
		name       string
		block      []byte
		wantHeader string
		wantBody   string
		wantSplit  bool
	}{
		{
			name:       "response",
			block:      []byte("HTTP/1.1 200 OK\r\nContent-Type: text/plain\r\n\r\nhello"),
			wantHeader: "HTTP/1.1 200 OK\r\nContent-Type: text/plain\r\n\r\n",
			wantBody:   "hello",
			wantSplit:  true,
		},
		{
			name:       "request",
			block:      []byte("GET / HTTP/1.1\r\nHost: example.com\r\n\r\n"),
			wantHeader: "GET / HTTP/1.1\r\nHost: example.com\r\n\r\n",
			wantSplit:  true,
		},
		{
			name:       "lf-only",
			block:      []byte("HTTP/1.1 204 No Content\nServer: test\n\n"),
			wantHeader: "HTTP/1.1 204 No Content\nServer: test\n\n",
			wantSplit:  true,
		},
		{
			name:       "provisional-response",
			block:      []byte("HTTP/1.1 100 Continue\r\n\r\nHTTP/1.1 200 OK\r\nContent-Length: 4\r\n\r\nbody"),
			wantHeader: "HTTP/1.1 100 Continue\r\n\r\nHTTP/1.1 200 OK\r\nContent-Length: 4\r\n\r\n",
			wantBody:   "body",
			wantSplit:  true,
		},
		{
			name:      "fallback-non-http",
			block:     []byte("not-http\r\n\r\nstill block"),
			wantBody:  "not-http\r\n\r\nstill block",
			wantSplit: false,
		},
		{
			name:      "fallback-over-probe-limit",
			block:     oversizeHeader,
			wantBody:  string(oversizeHeader),
			wantSplit: false,
		},
	} {
		t.Run(tt.name, func(t *testing.T) {
			header, body, ok, err := splitHTTPBlockHeader(bytes.NewReader(tt.block), int64(len(tt.block)))
			if err != nil {
				t.Fatal(err)
			}
			if ok != tt.wantSplit {
				t.Fatalf("split = %v, want %v", ok, tt.wantSplit)
			}
			if string(header) != tt.wantHeader {
				t.Fatalf("header = %q, want %q", header, tt.wantHeader)
			}
			gotBody, err := io.ReadAll(body)
			if err != nil {
				t.Fatal(err)
			}
			if string(gotBody) != tt.wantBody {
				t.Fatalf("body = %q, want %q", gotBody, tt.wantBody)
			}
		})
	}
}

func writeSeekVariantFrame(out *os.File, enc *zstd.Encoder, data []byte, contentSize int64) (zstdSeekEntry, error) {
	return writeSeekVariantFrameFromReader(out, enc, bytes.NewReader(data), contentSize)
}

func writeSeekVariantFrameFromReader(out *os.File, enc *zstd.Encoder, r io.Reader, contentSize int64) (zstdSeekEntry, error) {
	if contentSize < 0 || contentSize > math.MaxUint32 {
		return zstdSeekEntry{}, fmt.Errorf("zstd seek entry uncompressed size %d exceeds uint32", contentSize)
	}
	start, err := out.Seek(0, io.SeekCurrent)
	if err != nil {
		return zstdSeekEntry{}, err
	}
	enc.ResetContentSize(out, contentSize)
	n, err := io.Copy(enc, r)
	if err != nil {
		return zstdSeekEntry{}, err
	}
	if n != contentSize {
		return zstdSeekEntry{}, fmt.Errorf("copied %d bytes, expected %d", n, contentSize)
	}
	if err := enc.Close(); err != nil {
		return zstdSeekEntry{}, err
	}
	end, err := out.Seek(0, io.SeekCurrent)
	if err != nil {
		return zstdSeekEntry{}, err
	}
	compSize := end - start
	if compSize < 0 || compSize > math.MaxUint32 {
		return zstdSeekEntry{}, fmt.Errorf("zstd seek entry compressed size %d exceeds uint32", compSize)
	}
	return zstdSeekEntry{
		compSize:   uint32(compSize),
		uncompSize: uint32(contentSize),
	}, nil
}

func scanSeekIndexRefs(tb testing.TB, path string) []*RecordRef {
	tb.Helper()
	index, err := OpenWARCZstdSeekIndex(NewFileSource(path))
	if err != nil {
		tb.Fatal(err)
	}
	refs := index.Records()
	return refs
}

func TestRealSeekIndexVariantOverheadReport(t *testing.T) {
	zstdPaths := ensureRealZstdVariants(t)
	paths := ensureRealSeekVariants(t)
	reportSeekVariantOverhead(t, zstdPaths.FCS, paths.Single, "seek-single")
	reportSeekVariantOverhead(t, zstdPaths.FCS, paths.Chunk1M, "seek-1m")
	reportSeekVariantOverhead(t, zstdPaths.FCS, paths.Chunk64K, "seek-64k")
	reportSeekVariantOverhead(t, zstdPaths.FCS, paths.HTTPSplit, "seek-http")
	reportSeekVariantOverhead(t, zstdPaths.FCS, paths.HTTPSplit64K, "seek-http-64k")
}

func reportSeekVariantOverhead(t *testing.T, baselinePath, variantPath, name string) {
	t.Helper()
	base, err := os.Stat(baselinePath)
	if err != nil {
		t.Fatal(err)
	}
	variant, err := os.Stat(variantPath)
	if err != nil {
		t.Fatal(err)
	}
	delta := variant.Size() - base.Size()
	pct := float64(delta) / float64(base.Size()) * 100
	t.Logf("%s size=%d baseline=%d delta=%+d (%+.4f%%)", name, variant.Size(), base.Size(), delta, pct)
}
