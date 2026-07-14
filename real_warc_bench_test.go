package unwarc

import (
	"errors"
	"io"
	"os"
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

func benchmarkStreamBlock(tb testing.TB, path string) (int, int64) {
	tb.Helper()
	f, err := os.Open(path)
	if err != nil {
		tb.Fatal(err)
	}
	defer closeTest(tb, f)

	scanner, err := NewScanner(f, ScannerOptions{
		Compression: CompressionUnknown,
		Strict:      true,
	})
	if err != nil {
		tb.Fatal(err)
	}
	return drainBlocks(tb, scanner)
}

func benchmarkSourceStreamBlock(tb testing.TB, path string) (int, int64) {
	tb.Helper()
	scanner, err := NewScannerFromSource(NewFileSource(path), ScannerOptions{
		Compression: CompressionUnknown,
		Strict:      true,
	})
	if err != nil {
		tb.Fatal(err)
	}
	return drainBlocks(tb, scanner)
}

func benchmarkSourceScanThenLazyReopenBlock(tb testing.TB, path string) (int, int64) {
	tb.Helper()
	scanner, err := NewScannerFromSource(NewFileSource(path), ScannerOptions{
		Compression: CompressionUnknown,
		Strict:      true,
	})
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
	b.ReportMetric(float64(records), "records")
	b.ReportMetric(float64(bytes), "block_bytes")
}
