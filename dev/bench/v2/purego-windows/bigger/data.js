window.BENCHMARK_DATA = {
  "lastUpdate": 1784074679756,
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
        "date": 1784070227975,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - MB/s",
            "value": 37.8,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=35.61; max=38.82"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - MB/s",
            "value": 76.47,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=74.45; max=77.68"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - MB/s",
            "value": 76.06,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=75.2; max=77.54"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - MB/s",
            "value": 4.69,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=4.51; max=4.78"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - MB/s",
            "value": 19.71,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=18.77; max=20"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - MB/s",
            "value": 19.68,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=18.3; max=19.84"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - MB/s",
            "value": 0.16,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=0.15; max=0.16"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - MB/s",
            "value": 0.24,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=0.23; max=0.24"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - MB/s",
            "value": 0.23,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=0.23; max=0.24"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - MB/s",
            "value": 0.45,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=0.45; max=0.46"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - MB/s",
            "value": 1.46,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=1.37; max=1.56"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - MB/s",
            "value": 1.37,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=1.33; max=1.41"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - MB/s",
            "value": 5.87,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=5.4; max=5.93"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - MB/s",
            "value": 28.59,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=27.62; max=29.87"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - MB/s",
            "value": 28.81,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=26.41; max=29.57"
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
        "date": 1784073051449,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - MB/s",
            "value": 38,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=36.8; max=38.59"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - MB/s",
            "value": 75.55,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=53.85; max=77.94"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - MB/s",
            "value": 76.17,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=75.9; max=76.64"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - MB/s",
            "value": 4.66,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=3.66; max=4.73"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - MB/s",
            "value": 19.17,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=18.74; max=19.72"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - MB/s",
            "value": 19.45,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=18.97; max=19.75"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - MB/s",
            "value": 0.16,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=0.15; max=0.16"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - MB/s",
            "value": 0.24,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=0.24; max=0.24"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - MB/s",
            "value": 0.24,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=0.24; max=0.25"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - MB/s",
            "value": 0.46,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=0.46; max=0.47"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - MB/s",
            "value": 1.45,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=1.41; max=1.49"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - MB/s",
            "value": 1.37,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=1.1; max=1.49"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - MB/s",
            "value": 5.33,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=4.96; max=5.44"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - MB/s",
            "value": 26.11,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=25.77; max=27.49"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - MB/s",
            "value": 27.24,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=25.68; max=27.82"
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
          "id": "ef64ddc4e44b3b8bf654328a1a24e7e0cd04c3da",
          "message": "Add recommended default scanner options",
          "timestamp": "2026-07-15T02:15:30+02:00",
          "tree_id": "c8bfa504d56e5892027fe81b0032fa5a355e2fe5",
          "url": "https://github.com/saveweb/unwarc/commit/ef64ddc4e44b3b8bf654328a1a24e7e0cd04c3da"
        },
        "date": 1784074679170,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - MB/s",
            "value": 39.36,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=38.72; max=39.78"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - MB/s",
            "value": 78.5,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=76.05; max=79.36"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - MB/s",
            "value": 78.3,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=76; max=78.92"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - MB/s",
            "value": 4.81,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=4.7; max=4.86"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - MB/s",
            "value": 19.88,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=19.81; max=20.19"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - MB/s",
            "value": 19.42,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=19.14; max=19.93"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - MB/s",
            "value": 0.16,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=0.16; max=0.16"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - MB/s",
            "value": 0.24,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=0.23; max=0.24"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - MB/s",
            "value": 0.24,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=0.23; max=0.24"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - MB/s",
            "value": 0.47,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=0.46; max=0.48"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - MB/s",
            "value": 1.46,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=1.42; max=1.6"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - MB/s",
            "value": 1.4,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=1.38; max=1.43"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - MB/s",
            "value": 6.2,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=5.85; max=6.3"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - MB/s",
            "value": 30.77,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=29.26; max=31.48"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - MB/s",
            "value": 31.63,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=30.1; max=32.3"
          }
        ]
      }
    ]
  }
}