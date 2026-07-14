window.BENCHMARK_DATA = {
  "lastUpdate": 1784068540164,
  "repoUrl": "https://github.com/saveweb/unwarc",
  "entries": {
    "unwarc corpus benchmark native macos throughput": [
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
        "date": 1784068539569,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - MB/s",
            "value": 24.21,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=20.97; max=28.69"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - MB/s",
            "value": 36.87,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=34.96; max=40.95"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - MB/s",
            "value": 38.84,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=28.95; max=45.48"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - MB/s",
            "value": 3.63,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=3.1; max=4.88"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - MB/s",
            "value": 4.38,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=3.93; max=4.68"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - MB/s",
            "value": 3.65,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=2.57; max=4.19"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - MB/s",
            "value": 0.17,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=0.12; max=0.22"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - MB/s",
            "value": 0.26,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=0.19; max=0.3"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - MB/s",
            "value": 0.27,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=0.22; max=0.3"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - MB/s",
            "value": 1.26,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=1.14; max=1.31"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - MB/s",
            "value": 2.97,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=1.56; max=3.26"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - MB/s",
            "value": 3.04,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=1.75; max=3.34"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - MB/s",
            "value": 9.69,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=5.4; max=11.84"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - MB/s",
            "value": 35.59,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=29.32; max=41.78"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - MB/s",
            "value": 39.18,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=33; max=40.51"
          }
        ]
      }
    ]
  }
}