window.BENCHMARK_DATA = {
  "lastUpdate": 1784068502885,
  "repoUrl": "https://github.com/saveweb/unwarc",
  "entries": {
    "unwarc corpus benchmark purego macos throughput": [
      {
        "commit": {
          "author": {
            "email": "yzqzss@saveweb.org",
            "name": "yzqzss",
            "username": "yzqzss"
          },
          "committer": {
            "email": "yzqzss@saveweb.org",
            "name": "yzqzss",
            "username": "yzqzss"
          },
          "distinct": true,
          "id": "9cf8cd60c557cb9ff4182b7a58a65c6672b5b49a",
          "message": "Stabilize corpus benchmark alerts",
          "timestamp": "2026-07-15T00:32:24+02:00",
          "tree_id": "2387fb29a71b7c168569b4e1b8da3600d4455911",
          "url": "https://github.com/saveweb/unwarc/commit/9cf8cd60c557cb9ff4182b7a58a65c6672b5b49a"
        },
        "date": 1784068502292,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - MB/s",
            "value": 58.42,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=50.08; max=61.39"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - MB/s",
            "value": 96.66,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=79.06; max=117.39"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - MB/s",
            "value": 87.52,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=70.02; max=109.31"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - MB/s",
            "value": 9.95,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=7.02; max=11.36"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - MB/s",
            "value": 27.66,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=26.3; max=31.82"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - MB/s",
            "value": 29.98,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=24.06; max=34.48"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - MB/s",
            "value": 0.23,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=0.13; max=0.24"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - MB/s",
            "value": 0.32,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=0.18; max=0.33"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - MB/s",
            "value": 0.31,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=0.29; max=0.32"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - MB/s",
            "value": 1.29,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=0.93; max=1.3"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - MB/s",
            "value": 2.84,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=1.8; max=2.94"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - MB/s",
            "value": 2.83,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=2.67; max=2.93"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - MB/s",
            "value": 11.62,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=7.07; max=12.2"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - MB/s",
            "value": 41.89,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=38.27; max=44.02"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - MB/s",
            "value": 23.42,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=21.37; max=44.34"
          }
        ]
      }
    ]
  }
}