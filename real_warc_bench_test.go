package unwarc

import (
	"errors"
	"io"
	"os"
	"path/filepath"
	"testing"
)

const realWARCPathEnv = "UNWARC_BENCH_WARC"

var realWARCBenchmarkSink struct {
	records int
	bytes   int64
}

func BenchmarkRealWARC(b *testing.B) {
	path := os.Getenv(realWARCPathEnv)
	if path == "" {
		b.Skipf("set %s=/path/to/input.warc[.gz|.zst|.bz2|.xz] to run", realWARCPathEnv)
	}

	b.Run("stream_block", func(b *testing.B) {
		for i := 0; i < b.N; i++ {
			records, bytes := benchmarkStreamBlock(b, path)
			reportRealWARCStats(b, records, bytes)
		}
	})
	b.Run("source_stream_block", func(b *testing.B) {
		for i := 0; i < b.N; i++ {
			records, bytes := benchmarkSourceStreamBlock(b, path)
			reportRealWARCStats(b, records, bytes)
		}
	})
	b.Run("source_scan_then_lazy_reopen_block", func(b *testing.B) {
		for i := 0; i < b.N; i++ {
			records, bytes := benchmarkSourceScanThenLazyReopenBlock(b, path)
			reportRealWARCStats(b, records, bytes)
		}
	})
}

func BenchmarkCorpusWARC(b *testing.B) {
	fixtures := []struct {
		name string
		path string
		opts ScannerOptions
	}{
		{
			name: "gzip_record_per_member",
			path: "gowarc/gowarc-test.warc.gz",
			opts: requireAllValidation(CompressionUnknown),
		},
		{
			name: "gzip_solid_member",
			path: "gowarc/gowarc-solid-gzip.warc.gz",
			opts: ScannerOptions{Compression: CompressionUnknown},
		},
		{
			name: "zstd_record_per_frame",
			path: "gowarc/gowarc-multi-record.warc.zst",
			opts: requireAllValidation(CompressionUnknown),
		},
		{
			name: "zstd_dictionary",
			path: "gowarc/gowarc-dict-record.warc.zst",
			opts: requireAllValidation(CompressionUnknown),
		},
		{
			name: "zstd_streaming_no_fcs",
			path: "zeno/zeno-fcs-missing.warc.zst",
			opts: ScannerOptions{Compression: CompressionUnknown},
		},
	}

	for _, fixture := range fixtures {
		path := filepath.Join("testdata", "corpus", fixture.path)
		b.Run(fixture.name, func(b *testing.B) {
			b.Run("stream_block", func(b *testing.B) {
				for i := 0; i < b.N; i++ {
					records, bytes := benchmarkStreamBlockWithOptions(b, path, fixture.opts)
					reportRealWARCStats(b, records, bytes)
				}
			})
			b.Run("source_stream_block", func(b *testing.B) {
				for i := 0; i < b.N; i++ {
					records, bytes := benchmarkSourceStreamBlockWithOptions(b, path, fixture.opts)
					reportRealWARCStats(b, records, bytes)
				}
			})
			b.Run("source_scan_then_lazy_reopen_block", func(b *testing.B) {
				for i := 0; i < b.N; i++ {
					records, bytes := benchmarkSourceScanThenLazyReopenBlockWithOptions(b, path, fixture.opts)
					reportRealWARCStats(b, records, bytes)
				}
			})
		})
	}
}

func benchmarkStreamBlock(tb testing.TB, path string) (int, int64) {
	tb.Helper()
	return benchmarkStreamBlockWithOptions(tb, path, requireAllValidation(CompressionUnknown))
}

func benchmarkStreamBlockWithOptions(tb testing.TB, path string, opts ScannerOptions) (int, int64) {
	tb.Helper()
	f, err := os.Open(path)
	if err != nil {
		tb.Fatal(err)
	}
	defer closeTest(tb, f)

	scanner, err := NewScanner(f, opts)
	if err != nil {
		tb.Fatal(err)
	}
	return drainBlocks(tb, scanner)
}

func benchmarkSourceStreamBlock(tb testing.TB, path string) (int, int64) {
	tb.Helper()
	return benchmarkSourceStreamBlockWithOptions(tb, path, requireAllValidation(CompressionUnknown))
}

func benchmarkSourceStreamBlockWithOptions(tb testing.TB, path string, opts ScannerOptions) (int, int64) {
	tb.Helper()
	scanner, err := NewScannerFromSource(NewFileSource(path), opts)
	if err != nil {
		tb.Fatal(err)
	}
	return drainBlocks(tb, scanner)
}

func benchmarkSourceScanThenLazyReopenBlock(tb testing.TB, path string) (int, int64) {
	tb.Helper()
	return benchmarkSourceScanThenLazyReopenBlockWithOptions(tb, path, requireAllValidation(CompressionUnknown))
}

func benchmarkSourceScanThenLazyReopenBlockWithOptions(tb testing.TB, path string, opts ScannerOptions) (int, int64) {
	tb.Helper()
	scanner, err := NewScannerFromSource(NewFileSource(path), opts)
	if err != nil {
		tb.Fatal(err)
	}
	defer closeTest(tb, scanner)

	var records int
	var bytes int64
	for scanner.Next() {
		ref := scanner.RecordRef()
		block, err := ref.OpenBlock()
		if err != nil {
			tb.Fatal(err)
		}
		n, err := io.Copy(io.Discard, block)
		closeErr := block.Close()
		if err != nil {
			tb.Fatal(err)
		}
		if closeErr != nil {
			tb.Fatal(closeErr)
		}
		records++
		bytes += n
	}
	if err := scanner.Err(); err != nil {
		tb.Fatal(err)
	}
	return records, bytes
}

func drainBlocks(tb testing.TB, scanner *Scanner) (int, int64) {
	tb.Helper()
	defer closeTest(tb, scanner)

	var records int
	var bytes int64
	for {
		record, err := scanner.NextRecord()
		if errors.Is(err, io.EOF) {
			break
		}
		if err != nil {
			tb.Fatal(err)
		}
		n, err := io.Copy(io.Discard, record.Block())
		closeErr := record.Close()
		if err != nil {
			tb.Fatal(err)
		}
		if closeErr != nil {
			tb.Fatal(closeErr)
		}
		records++
		bytes += n
	}
	if err := scanner.Err(); err != nil {
		tb.Fatal(err)
	}
	return records, bytes
}

func reportRealWARCStats(b *testing.B, records int, bytes int64) {
	b.Helper()
	realWARCBenchmarkSink.records = records
	realWARCBenchmarkSink.bytes = bytes
	b.SetBytes(bytes)
	b.ReportMetric(float64(records), "records")
	b.ReportMetric(float64(bytes), "block_bytes")
}
