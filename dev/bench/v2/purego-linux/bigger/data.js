window.BENCHMARK_DATA = {
  "lastUpdate": 1784068489577,
  "repoUrl": "https://github.com/saveweb/unwarc",
  "entries": {
    "unwarc corpus benchmark purego linux throughput": [
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
        "date": 1784068489211,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - MB/s",
            "value": 54.48,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=54.02; max=54.69"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - MB/s",
            "value": 95.25,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=94.58; max=95.6"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - MB/s",
            "value": 94.74,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=93.11; max=95.17"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - MB/s",
            "value": 9.25,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=9.22; max=9.28"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - MB/s",
            "value": 25.22,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=25.08; max=25.27"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - MB/s",
            "value": 24.85,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=24.67; max=25.15"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - MB/s",
            "value": 0.24,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=0.24; max=0.24"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - MB/s",
            "value": 0.31,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=0.3; max=0.31"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - MB/s",
            "value": 0.3,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=0.3; max=0.3"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - MB/s",
            "value": 1.1,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=1.09; max=1.12"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - MB/s",
            "value": 2.57,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=2.55; max=2.6"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - MB/s",
            "value": 2.5,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=2.47; max=2.52"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - MB/s",
            "value": 9.66,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=9.38; max=9.92"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - MB/s",
            "value": 38.59,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=37.16; max=41.52"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - MB/s",
            "value": 38.47,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=35.63; max=40.04"
          }
        ]
      }
    ]
  }
}