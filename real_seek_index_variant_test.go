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
	Records              int
	PayloadBytes         int64
	SeekTableBytes       int64
	DataFrames           int
	PayloadSectionFrames int
	TrailerOnlyFrames    int
	HTTPSplitRecords     int
	HTTPHeaderFrames     int
	HTTPHeaderBytes      int64
	HTTPFallbacks        int
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
			ref := largestPayloadRef(refs)
			if ref == nil {
				t.Fatal("seek-indexed corpus returned no non-empty payload records")
			}
			payload := readAllFrom(t, ref.OpenPayload)
			if int64(len(payload)) != ref.ContentLength {
				t.Fatalf("payload length = %d, want %d", len(payload), ref.ContentLength)
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
				reportRealWARCStats(b, len(refs), recordPayloadBytes(refs))
				b.ReportMetric(float64(refs[len(refs)-1].Location.Uncomp.End()), "uncompressed_warc_bytes")
			}
		})
	}
}

func BenchmarkRealSeekIndexPayloadRanges(b *testing.B) {
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
			ref := largestPayloadRef(refs)
			if ref == nil {
				b.Fatal("no payload refs")
			}
			const size = int64(16 << 10)
			off := ref.ContentLength / 2
			if off+size > ref.ContentLength {
				off = ref.ContentLength - size
			}
			if off < 0 {
				off = 0
			}
			benchmarkOpenPayloadRange(b, ref, off, size)
		})
	}
}

func BenchmarkRealSeekIndexHTTPBodyStartRanges(b *testing.B) {
	paths := ensureRealSeekVariants(b)
	splitRefs := scanSeekIndexRefs(b, paths.HTTPSplit)
	splitRef := largestPayloadRefWithBodyFrame(splitRefs)
	if splitRef == nil {
		b.Fatal("no HTTP-split payload refs")
	}
	id, ok := splitRef.Header.Get("WARC-Record-ID")
	if !ok {
		b.Fatal("HTTP-split ref has no WARC-Record-ID")
	}
	bodyOff := splitRef.Location.PayloadFrames[1].Payload.Off
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
			benchmarkOpenPayloadRange(b, ref, bodyOff, size)
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

func largestPayloadRef(refs []*RecordRef) *RecordRef {
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

func largestPayloadRefWithBodyFrame(refs []*RecordRef) *RecordRef {
	var largest *RecordRef
	for _, ref := range refs {
		if ref == nil || len(ref.Location.PayloadFrames) < 2 {
			continue
		}
		bodyOff := ref.Location.PayloadFrames[1].Payload.Off
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

func recordPayloadBytes(refs []*RecordRef) int64 {
	var n int64
	for _, ref := range refs {
		if ref != nil {
			n += ref.ContentLength
		}
	}
	return n
}

func benchmarkOpenPayloadRange(b *testing.B, ref *RecordRef, off, size int64) {
	b.Helper()
	if off >= ref.ContentLength {
		b.Fatalf("range offset %d outside payload length %d", off, ref.ContentLength)
	}
	if off+size > ref.ContentLength {
		size = ref.ContentLength - off
	}
	b.SetBytes(size)
	payloadFrames := len(ref.Location.PayloadFrames)
	overlapFrames := overlappingPayloadFrameCount(ref, off, size)
	b.ResetTimer()
	b.ReportMetric(float64(size), "range_bytes")
	b.ReportMetric(float64(ref.ContentLength), "record_payload_bytes")
	b.ReportMetric(float64(payloadFrames), "payload_frames")
	b.ReportMetric(float64(overlapFrames), "overlap_frames")
	for i := 0; i < b.N; i++ {
		payload, err := ref.OpenPayloadRange(off, size)
		if err != nil {
			b.Fatal(err)
		}
		n, err := io.Copy(io.Discard, payload)
		closeErr := payload.Close()
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

func overlappingPayloadFrameCount(ref *RecordRef, off, size int64) int {
	want := Range{Off: off, Size: size}
	var n int
	for _, frame := range ref.Location.PayloadFrames {
		if rangesOverlap(frame.Payload, want) {
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

func writeRealSeekVariant(gzipPath, outPath string, payloadChunkSize int64, httpSplit bool) (seekVariantStats, error) {
	in, err := os.Open(gzipPath)
	if err != nil {
		return seekVariantStats{}, err
	}
	defer in.Close()

	scanner, err := NewScanner(in, ScannerOptions{
		Compression: CompressionUnknown,
		Strict:      true,
	})
	if err != nil {
		return seekVariantStats{}, err
	}
	defer scanner.Close()

	out, tmpPath, err := createVariantTemp(outPath)
	if err != nil {
		return seekVariantStats{}, err
	}
	defer os.Remove(tmpPath)

	enc, err := zstd.NewWriter(nil,
		zstd.WithEncoderCRC(true),
		zstd.WithEncoderConcurrency(1),
		zstd.WithSingleSegment(true),
	)
	if err != nil {
		_ = out.Close()
		return seekVariantStats{}, err
	}
	defer enc.Close()

	stats, err := writeSeekIndexedRecords(scanner, out, enc, payloadChunkSize, httpSplit)
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

func writeSeekIndexedRecords(scanner *Scanner, out *os.File, enc *zstd.Encoder, payloadChunkSize int64, httpSplit bool) (seekVariantStats, error) {
	var stats seekVariantStats
	for {
		ref, payload, err := scanner.NextPayload()
		if errors.Is(err, io.EOF) {
			break
		}
		if err != nil {
			return stats, err
		}

		entries := make([]zstdSeekEntry, 0, 4)
		if ref.ContentLength == 0 {
			raw := append(append([]byte{}, ref.RawHeader...), warcRecordTrailer...)
			entry, err := writeSeekVariantFrame(out, enc, raw, int64(len(raw)))
			closeErr := payload.Close()
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
			_ = payload.Close()
			return stats, err
		}
		entries = append(entries, headerEntry)
		stats.DataFrames++

		payloadResult, err := writeSeekVariantPayloadFramesForRecord(out, enc, ref, payload, payloadChunkSize, httpSplit)
		closeErr := payload.Close()
		if err != nil {
			return stats, err
		}
		if closeErr != nil {
			return stats, closeErr
		}
		entries = append(entries, payloadResult.entries...)
		if len(entries) > maxRecordLocalSeekFrames {
			return stats, fmt.Errorf("record-local seek table has %d frames, max %d", len(entries), maxRecordLocalSeekFrames)
		}
		stats.DataFrames += len(payloadResult.entries)
		stats.PayloadSectionFrames += len(payloadResult.entries)
		if payloadResult.trailerOnly {
			stats.TrailerOnlyFrames++
		}
		if payloadResult.httpSplit {
			stats.HTTPSplitRecords++
			stats.HTTPHeaderFrames++
			stats.HTTPHeaderBytes += payloadResult.httpHeaderBytes
		}
		if payloadResult.httpFallback {
			stats.HTTPFallbacks++
		}

		table := recordLocalSeekTableForTest(entries...)
		if _, err := out.Write(table); err != nil {
			return stats, err
		}
		stats.SeekTableBytes += int64(len(table))
		stats.Records++
		stats.PayloadBytes += ref.ContentLength
	}
	if err := scanner.Err(); err != nil {
		return stats, err
	}
	return stats, nil
}

type seekPayloadFrameResult struct {
	entries         []zstdSeekEntry
	trailerOnly     bool
	httpSplit       bool
	httpHeaderBytes int64
	httpFallback    bool
}

func writeSeekVariantPayloadFramesForRecord(out *os.File, enc *zstd.Encoder, ref *RecordRef, payload io.Reader, chunkSize int64, httpSplit bool) (seekPayloadFrameResult, error) {
	if !httpSplit || ref.ContentLength == 0 || !isHTTPWARCRecord(ref) {
		entries, trailerOnly, err := writeSeekVariantPayloadFrames(out, enc, payload, ref.ContentLength, chunkSize)
		return seekPayloadFrameResult{entries: entries, trailerOnly: trailerOnly}, err
	}

	httpHeader, body, ok, err := splitHTTPPayloadHeader(payload, ref.ContentLength)
	if err != nil {
		return seekPayloadFrameResult{}, err
	}
	if !ok {
		entries, trailerOnly, err := writeSeekVariantPayloadFrames(out, enc, body, ref.ContentLength, chunkSize)
		return seekPayloadFrameResult{entries: entries, trailerOnly: trailerOnly, httpFallback: true}, err
	}

	entries := make([]zstdSeekEntry, 0, 3)
	headerEntry, err := writeSeekVariantFrame(out, enc, httpHeader, int64(len(httpHeader)))
	if err != nil {
		return seekPayloadFrameResult{}, err
	}
	entries = append(entries, headerEntry)

	bodySize := ref.ContentLength - int64(len(httpHeader))
	bodyEntries, trailerOnly, err := writeSeekVariantPayloadFrames(out, enc, body, bodySize, chunkSize)
	if err != nil {
		return seekPayloadFrameResult{}, err
	}
	entries = append(entries, bodyEntries...)
	return seekPayloadFrameResult{
		entries:         entries,
		trailerOnly:     trailerOnly,
		httpSplit:       true,
		httpHeaderBytes: int64(len(httpHeader)),
	}, nil
}

func writeSeekVariantPayloadFrames(out *os.File, enc *zstd.Encoder, payload io.Reader, contentLength, chunkSize int64) ([]zstdSeekEntry, bool, error) {
	frameCount, err := seekVariantPayloadFrameCount(contentLength, chunkSize)
	if err != nil {
		return nil, false, err
	}
	if contentLength == 0 {
		entry, err := writeSeekVariantFrame(out, enc, warcRecordTrailer, int64(len(warcRecordTrailer)))
		return []zstdSeekEntry{entry}, true, err
	}
	if chunkSize <= 0 || contentLength <= chunkSize {
		frame := io.MultiReader(payload, bytes.NewReader(warcRecordTrailer))
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
		entry, err := writeSeekVariantFrameFromReader(out, enc, io.LimitReader(payload, n), n)
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

func seekVariantPayloadFrameCount(contentLength, chunkSize int64) (int, error) {
	if contentLength < 0 {
		return 0, fmt.Errorf("negative payload length %d", contentLength)
	}
	var frames int64 = 1
	if contentLength > 0 && chunkSize > 0 && contentLength > chunkSize {
		frames = (contentLength+chunkSize-1)/chunkSize + 1
	}
	if frames > maxRecordLocalSeekFrames {
		return 0, fmt.Errorf("payload uses %d seek frames, max %d", frames, maxRecordLocalSeekFrames)
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

func splitHTTPPayloadHeader(payload io.Reader, contentLength int64) ([]byte, io.Reader, bool, error) {
	const maxHTTPHeaderProbe = int64(256 << 10)
	if contentLength <= 0 {
		return nil, payload, false, nil
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
		n, err := payload.Read(tmp[:want])
		if n > 0 {
			buf = append(buf, tmp[:n]...)
			probed += int64(n)
			end, matched, needMore := httpPayloadSplitDecision(buf)
			if !needMore {
				body := io.MultiReader(bytes.NewReader(buf[end:]), payload)
				if matched {
					header := append([]byte(nil), buf[:end]...)
					return header, body, true, nil
				}
				return nil, io.MultiReader(bytes.NewReader(buf), payload), false, nil
			}
		}
		if err != nil {
			if errors.Is(err, io.EOF) {
				break
			}
			return nil, nil, false, err
		}
	}
	return nil, io.MultiReader(bytes.NewReader(buf), payload), false, nil
}

func httpPayloadSplitDecision(buf []byte) (end int, matched bool, needMore bool) {
	end = httpPayloadHeaderEndFrom(buf, 0)
	if end < 0 {
		return 0, false, true
	}
	if !looksLikeHTTPMessageHeader(buf[:end]) {
		return end, false, false
	}

	for headerStart := 0; isProvisionalHTTPResponse(buf[headerStart:end]); {
		nextEnd := httpPayloadHeaderEndFrom(buf, end)
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

func httpPayloadHeaderEndFrom(buf []byte, start int) int {
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

func TestSplitHTTPPayloadHeader(t *testing.T) {
	oversizeHeader := append(bytes.Repeat([]byte("A"), 257<<10), []byte("\r\n\r\nbody")...)
	for _, tt := range []struct {
		name       string
		payload    []byte
		wantHeader string
		wantBody   string
		wantSplit  bool
	}{
		{
			name:       "response",
			payload:    []byte("HTTP/1.1 200 OK\r\nContent-Type: text/plain\r\n\r\nhello"),
			wantHeader: "HTTP/1.1 200 OK\r\nContent-Type: text/plain\r\n\r\n",
			wantBody:   "hello",
			wantSplit:  true,
		},
		{
			name:       "request",
			payload:    []byte("GET / HTTP/1.1\r\nHost: example.com\r\n\r\n"),
			wantHeader: "GET / HTTP/1.1\r\nHost: example.com\r\n\r\n",
			wantSplit:  true,
		},
		{
			name:       "lf-only",
			payload:    []byte("HTTP/1.1 204 No Content\nServer: test\n\n"),
			wantHeader: "HTTP/1.1 204 No Content\nServer: test\n\n",
			wantSplit:  true,
		},
		{
			name:       "provisional-response",
			payload:    []byte("HTTP/1.1 100 Continue\r\n\r\nHTTP/1.1 200 OK\r\nContent-Length: 4\r\n\r\nbody"),
			wantHeader: "HTTP/1.1 100 Continue\r\n\r\nHTTP/1.1 200 OK\r\nContent-Length: 4\r\n\r\n",
			wantBody:   "body",
			wantSplit:  true,
		},
		{
			name:      "fallback-non-http",
			payload:   []byte("not-http\r\n\r\nstill payload"),
			wantBody:  "not-http\r\n\r\nstill payload",
			wantSplit: false,
		},
		{
			name:      "fallback-over-probe-limit",
			payload:   oversizeHeader,
			wantBody:  string(oversizeHeader),
			wantSplit: false,
		},
	} {
		t.Run(tt.name, func(t *testing.T) {
			header, body, ok, err := splitHTTPPayloadHeader(bytes.NewReader(tt.payload), int64(len(tt.payload)))
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
