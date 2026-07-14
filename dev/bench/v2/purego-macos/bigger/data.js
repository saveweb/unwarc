window.BENCHMARK_DATA = {
  "lastUpdate": 1784073041118,
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
        "date": 1784070214034,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - MB/s",
            "value": 67.35,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=62.7; max=70.96"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - MB/s",
            "value": 136.42,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=121.82; max=142.33"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - MB/s",
            "value": 128.92,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=125.57; max=129.8"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - MB/s",
            "value": 11.63,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=11.14; max=12.54"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - MB/s",
            "value": 36.67,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=33.53; max=39.31"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - MB/s",
            "value": 34.72,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=33.06; max=36.54"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - MB/s",
            "value": 0.26,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=0.24; max=0.29"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - MB/s",
            "value": 0.34,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=0.28; max=0.38"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - MB/s",
            "value": 0.32,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=0.31; max=0.37"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - MB/s",
            "value": 1.4,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=1.21; max=1.48"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - MB/s",
            "value": 3.17,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=2.79; max=3.31"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - MB/s",
            "value": 3.28,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=3.01; max=3.41"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - MB/s",
            "value": 13.96,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=11.25; max=15"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - MB/s",
            "value": 43.28,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=41.52; max=44.89"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - MB/s",
            "value": 43.45,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=39.44; max=46.7"
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
          "id": "326c95978ee6dba6e2518064cb998999a5273653",
          "message": "Update decoder package reference",
          "timestamp": "2026-07-15T01:48:12+02:00",
          "tree_id": "0ba712c102bcc1faa8a00ec4160339ae93317f5b",
          "url": "https://github.com/saveweb/unwarc/commit/326c95978ee6dba6e2518064cb998999a5273653"
        },
        "date": 1784073040809,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - MB/s",
            "value": 53.89,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=39.36; max=63.87"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - MB/s",
            "value": 92.62,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=78.24; max=119.04"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - MB/s",
            "value": 99.46,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=76.99; max=115.54"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - MB/s",
            "value": 12.83,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=11.47; max=12.95"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - MB/s",
            "value": 35.88,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=35; max=37.97"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - MB/s",
            "value": 34,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=29.24; max=36.98"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - MB/s",
            "value": 0.3,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=0.3; max=0.31"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - MB/s",
            "value": 0.39,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=0.34; max=0.4"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - MB/s",
            "value": 0.33,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=0.23; max=0.35"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - MB/s",
            "value": 1.52,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=1.33; max=1.56"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - MB/s",
            "value": 3.52,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=3.19; max=3.58"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - MB/s",
            "value": 3.5,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=3.09; max=3.53"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - MB/s",
            "value": 14.87,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=12.78; max=15.31"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - MB/s",
            "value": 44.56,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=41.29; max=50.41"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - MB/s",
            "value": 49.55,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=40.92; max=51.03"
          }
        ]
      }
    ]
  }
}