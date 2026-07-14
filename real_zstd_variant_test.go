package unwarc

import (
	"bytes"
	"errors"
	"fmt"
	"io"
	"os"
	"path/filepath"
	"strings"
	"testing"

	"github.com/klauspost/compress/zstd"
)

const (
	zstdVariantGzipEnv    = "UNWARC_ZSTD_VARIANT_GZIP"
	zstdVariantRebuildEnv = "UNWARC_ZSTD_VARIANT_REBUILD"
)

var warcRecordTrailer = []byte("\r\n\r\n")

type zstdVariantPaths struct {
	Gzip  string
	FCS   string
	NoFCS string
}

type realCorpusStats struct {
	Records    int
	BlockBytes int64
}

func TestRealZstdVariantCorpus(t *testing.T) {
	paths := ensureRealZstdVariants(t)

	for _, tt := range []struct {
		name                string
		path                string
		requireAll          bool
		wantMissingFCS      bool
		wantMissingCRC      bool
		wantRequiredFailure bool
	}{
		{name: "zstd_fcs_required", path: paths.FCS, requireAll: true},
		{name: "zstd_no_fcs_reported", path: paths.NoFCS, wantMissingFCS: true},
		{name: "zstd_no_fcs_required", path: paths.NoFCS, requireAll: true, wantRequiredFailure: true},
	} {
		t.Run(tt.name, func(t *testing.T) {
			opts := ScannerOptions{Compression: CompressionUnknown}
			if tt.requireAll {
				opts = requireAllValidation(CompressionUnknown)
			}
			stats, issues, err := scanRealCorpusVariant(tt.path, opts)
			if tt.wantRequiredFailure {
				if !errors.Is(err, ErrInvalidWARCZstd) {
					t.Fatalf("scan error = %v, want %v", err, ErrInvalidWARCZstd)
				}
				return
			}
			if err != nil {
				t.Fatal(err)
			}
			if stats.Records == 0 || stats.BlockBytes == 0 {
				t.Fatalf("empty scan stats: %+v", stats)
			}
			missingFCS := issues[IssueZstdFrameMissingContentSize]
			if tt.wantMissingFCS {
				if missingFCS != stats.Records {
					t.Fatalf("missing FCS issues = %d, want one per record (%d); issues=%+v", missingFCS, stats.Records, issues)
				}
			} else if missingFCS != 0 {
				t.Fatalf("missing FCS issues = %d, want 0; issues=%+v", missingFCS, issues)
			}
			if got := issues[IssueZstdFrameMissingChecksum] > 0; got != tt.wantMissingCRC {
				t.Fatalf("missing checksum issue present = %v, want %v; issues=%+v", got, tt.wantMissingCRC, issues)
			}
			t.Logf("records=%d blockBytes=%d issues=%+v", stats.Records, stats.BlockBytes, issues)
		})
	}
}

func BenchmarkRealZstdVariants(b *testing.B) {
	paths := ensureRealZstdVariants(b)

	for _, tt := range []struct {
		name string
		path string
		opts ScannerOptions
	}{
		{
			name: "gzip_source_stream_block_required",
			path: paths.Gzip,
			opts: requireAllValidation(CompressionUnknown),
		},
		{
			name: "zstd_fcs_source_stream_block_required",
			path: paths.FCS,
			opts: requireAllValidation(CompressionUnknown),
		},
		{
			name: "zstd_no_fcs_source_stream_block_reported",
			path: paths.NoFCS,
			opts: ScannerOptions{Compression: CompressionUnknown},
		},
	} {
		b.Run(tt.name, func(b *testing.B) {
			for i := 0; i < b.N; i++ {
				stats, _, err := scanRealCorpusVariant(tt.path, tt.opts)
				if err != nil {
					b.Fatal(err)
				}
				reportRealWARCStats(b, stats.Records, stats.BlockBytes)
			}
		})
	}
}

func ensureRealZstdVariants(tb testing.TB) zstdVariantPaths {
	tb.Helper()
	gzipPath := os.Getenv(zstdVariantGzipEnv)
	if gzipPath == "" {
		tb.Skipf("set %s=/path/to/input.warc.gz to generate and test zstd variants", zstdVariantGzipEnv)
	}
	paths := realZstdVariantPaths(gzipPath)
	rebuild := os.Getenv(zstdVariantRebuildEnv) != ""
	if !rebuild && fileExists(paths.FCS) && fileExists(paths.NoFCS) {
		return paths
	}

	stats, err := writeRealZstdVariants(paths)
	if err != nil {
		tb.Fatal(err)
	}
	tb.Logf("generated zstd variants: records=%d blockBytes=%d fcs=%s noFCS=%s", stats.Records, stats.BlockBytes, paths.FCS, paths.NoFCS)
	return paths
}

func realZstdVariantPaths(gzipPath string) zstdVariantPaths {
	dir := filepath.Dir(gzipPath)
	base := filepath.Base(gzipPath)
	base = strings.TrimSuffix(base, ".gz")
	base = strings.TrimSuffix(base, ".warc")
	return zstdVariantPaths{
		Gzip:  gzipPath,
		FCS:   filepath.Join(dir, base+".fcs.warc.zst"),
		NoFCS: filepath.Join(dir, base+".no-fcs.warc.zst"),
	}
}

func writeRealZstdVariants(paths zstdVariantPaths) (stats realCorpusStats, err error) {
	in, err := os.Open(paths.Gzip)
	if err != nil {
		return realCorpusStats{}, err
	}
	defer func() {
		err = errors.Join(err, in.Close())
	}()

	scanner, err := NewScanner(in, requireAllValidation(CompressionUnknown))
	if err != nil {
		return realCorpusStats{}, err
	}
	defer func() {
		err = errors.Join(err, scanner.Close())
	}()

	fcsOut, fcsTmp, err := createVariantTemp(paths.FCS)
	if err != nil {
		return realCorpusStats{}, err
	}
	defer func() { _ = os.Remove(fcsTmp) }()

	noFCSOut, noFCSTmp, err := createVariantTemp(paths.NoFCS)
	if err != nil {
		_ = fcsOut.Close()
		return realCorpusStats{}, err
	}
	defer func() { _ = os.Remove(noFCSTmp) }()

	fcsEncoder, err := zstd.NewWriter(nil, zstd.WithEncoderCRC(true), zstd.WithEncoderConcurrency(1))
	if err != nil {
		_ = fcsOut.Close()
		_ = noFCSOut.Close()
		return realCorpusStats{}, err
	}
	defer func() {
		err = errors.Join(err, fcsEncoder.Close())
	}()

	noFCSEncoder, err := zstd.NewWriter(nil,
		zstd.WithEncoderCRC(true),
		zstd.WithEncoderConcurrency(1),
		zstd.WithSingleSegment(false),
	)
	if err != nil {
		_ = fcsOut.Close()
		_ = noFCSOut.Close()
		return realCorpusStats{}, err
	}
	defer func() {
		err = errors.Join(err, noFCSEncoder.Close())
	}()

	stats, err = writeZstdVariantRecords(scanner, fcsOut, noFCSOut, fcsEncoder, noFCSEncoder)
	if closeErr := fcsOut.Close(); err == nil {
		err = closeErr
	}
	if closeErr := noFCSOut.Close(); err == nil {
		err = closeErr
	}
	if err != nil {
		return realCorpusStats{}, err
	}
	if err := os.Rename(fcsTmp, paths.FCS); err != nil {
		return realCorpusStats{}, err
	}
	if err := os.Rename(noFCSTmp, paths.NoFCS); err != nil {
		return realCorpusStats{}, err
	}
	return stats, nil
}

func createVariantTemp(path string) (*os.File, string, error) {
	if err := os.MkdirAll(filepath.Dir(path), 0o755); err != nil {
		return nil, "", err
	}
	f, err := os.CreateTemp(filepath.Dir(path), "."+filepath.Base(path)+".tmp-*")
	if err != nil {
		return nil, "", err
	}
	return f, f.Name(), nil
}

func writeZstdVariantRecords(scanner *Scanner, fcsOut, noFCSOut io.Writer, fcsEncoder, noFCSEncoder *zstd.Encoder) (realCorpusStats, error) {
	var stats realCorpusStats
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

		rawSize := ref.HeaderLen + ref.ContentLength + int64(len(warcRecordTrailer))
		fcsEncoder.ResetContentSize(fcsOut, rawSize)
		var noFCSFrame bytes.Buffer
		noFCSEncoder.ResetContentSize(&noFCSFrame, rawSize)

		if _, err := fcsEncoder.Write(ref.RawHeader); err != nil {
			_ = record.Close()
			return stats, err
		}
		if _, err := noFCSEncoder.Write(ref.RawHeader); err != nil {
			_ = record.Close()
			return stats, err
		}

		n, err := io.Copy(io.MultiWriter(fcsEncoder, noFCSEncoder), block)
		closeErr := record.Close()
		if err != nil {
			return stats, err
		}
		if closeErr != nil {
			return stats, closeErr
		}
		if n != ref.ContentLength {
			return stats, fmt.Errorf("block length mismatch: copied %d bytes, expected %d", n, ref.ContentLength)
		}

		if _, err := fcsEncoder.Write(warcRecordTrailer); err != nil {
			return stats, err
		}
		if _, err := noFCSEncoder.Write(warcRecordTrailer); err != nil {
			return stats, err
		}
		if err := fcsEncoder.Close(); err != nil {
			return stats, err
		}
		if err := noFCSEncoder.Close(); err != nil {
			return stats, err
		}
		stripped, err := zstdFrameWithoutContentSize(noFCSFrame.Bytes())
		if err != nil {
			return stats, err
		}
		if _, err := noFCSOut.Write(stripped); err != nil {
			return stats, err
		}

		stats.Records++
		stats.BlockBytes += n
	}
	if err := scanner.Err(); err != nil {
		return stats, err
	}
	return stats, nil
}

func zstdFrameWithoutContentSize(frame []byte) ([]byte, error) {
	if len(frame) < 6 {
		return nil, fmt.Errorf("short zstd frame: %d bytes", len(frame))
	}
	desc := frame[4]
	if desc&0x20 != 0 {
		return nil, fmt.Errorf("cannot strip FCS from single-segment zstd frame")
	}

	pos := 5
	pos++ // Window_Descriptor is present when Single_Segment_flag is not set.
	switch desc & 0x03 {
	case 1:
		pos++
	case 2:
		pos += 2
	case 3:
		pos += 4
	}
	if pos > len(frame) {
		return nil, fmt.Errorf("truncated zstd frame header")
	}

	fcsSize := 0
	switch desc >> 6 {
	case 1:
		fcsSize = 2
	case 2:
		fcsSize = 4
	case 3:
		fcsSize = 8
	}
	if fcsSize == 0 {
		return frame, nil
	}
	if pos+fcsSize > len(frame) {
		return nil, fmt.Errorf("truncated zstd frame content size")
	}

	out := make([]byte, 0, len(frame)-fcsSize)
	out = append(out, frame[:5]...)
	out[4] &^= 0xC0
	out = append(out, frame[5:pos]...)
	out = append(out, frame[pos+fcsSize:]...)
	return out, nil
}

func scanRealCorpusVariant(path string, opts ScannerOptions) (stats realCorpusStats, issues map[IssueCode]int, err error) {
	scanner, err := NewScannerFromSource(NewFileSource(path), opts)
	if err != nil {
		return realCorpusStats{}, nil, err
	}
	defer func() {
		err = errors.Join(err, scanner.Close())
	}()

	issues = make(map[IssueCode]int)
	for {
		record, err := scanner.NextRecord()
		if errors.Is(err, io.EOF) {
			break
		}
		if err != nil {
			return stats, issues, err
		}
		ref := record.Ref()
		n, err := io.Copy(io.Discard, record.Block())
		closeErr := record.Close()
		if err != nil {
			return stats, issues, err
		}
		if closeErr != nil {
			return stats, issues, closeErr
		}
		stats.Records++
		stats.BlockBytes += n
		for _, issue := range ref.issues {
			issues[issue.Code]++
		}
	}
	if err := scanner.Err(); err != nil {
		return stats, issues, err
	}
	return stats, issues, nil
}

func fileExists(path string) bool {
	_, err := os.Stat(path)
	return err == nil
}
