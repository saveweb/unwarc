window.BENCHMARK_DATA = {
  "lastUpdate": 1784068516189,
  "repoUrl": "https://github.com/saveweb/unwarc",
  "entries": {
    "unwarc corpus benchmark purego windows throughput": [
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
        "date": 1784068515591,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - MB/s",
            "value": 43.47,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=42.66; max=44.1"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - MB/s",
            "value": 83.26,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=82.34; max=83.83"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - MB/s",
            "value": 83.42,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=80.51; max=83.79"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - MB/s",
            "value": 6.19,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=6.09; max=6.31"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - MB/s",
            "value": 21.71,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=21.4; max=21.99"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - MB/s",
            "value": 21.71,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=21.43; max=22.09"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - MB/s",
            "value": 0.18,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=0.17; max=0.18"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - MB/s",
            "value": 0.27,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=0.27; max=0.28"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - MB/s",
            "value": 0.26,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=0.25; max=0.27"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - MB/s",
            "value": 0.59,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=0.58; max=0.63"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - MB/s",
            "value": 2.01,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=1.89; max=2.06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - MB/s",
            "value": 1.86,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=1.8; max=1.98"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - MB/s",
            "value": 7.83,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=7.69; max=8.11"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - MB/s",
            "value": 33.27,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=32.55; max=34.2"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - MB/s",
            "value": 33.68,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=33.18; max=34.42"
          }
        ]
      }
    ]
  }
}