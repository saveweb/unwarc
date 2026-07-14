window.BENCHMARK_DATA = {
  "lastUpdate": 1784070258400,
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
      },
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
          "id": "a2af27d8cc9a20dc01403f9b708d09157451ebe9",
          "message": "Recommend warcsource for whole-file compressed WARC inputs",
          "timestamp": "2026-07-15T01:01:02+02:00",
          "tree_id": "2360fd26a9a681d7c407ed40cf2aaf5494e29847",
          "url": "https://github.com/saveweb/unwarc/commit/a2af27d8cc9a20dc01403f9b708d09157451ebe9"
        },
        "date": 1784070257850,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - MB/s",
            "value": 44.57,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=43.45; max=45.66"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - MB/s",
            "value": 64.28,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=59.18; max=69.69"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - MB/s",
            "value": 65.88,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=60.62; max=67.31"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - MB/s",
            "value": 5.1,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=4.8; max=5.38"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - MB/s",
            "value": 7.6,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=6.96; max=8.04"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - MB/s",
            "value": 7.49,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=7.01; max=7.65"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - MB/s",
            "value": 0.26,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=0.24; max=0.27"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - MB/s",
            "value": 0.33,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=0.31; max=0.37"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - MB/s",
            "value": 0.32,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=0.24; max=0.36"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - MB/s",
            "value": 1.36,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=1.33; max=1.46"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - MB/s",
            "value": 3.39,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=3.23; max=3.56"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - MB/s",
            "value": 3.3,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=2.97; max=3.45"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - MB/s",
            "value": 13.84,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=12.85; max=14.28"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - MB/s",
            "value": 46.09,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=42.04; max=48.6"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - MB/s",
            "value": 45.4,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=37.5; max=49.42"
          }
        ]
      }
    ]
  }
}