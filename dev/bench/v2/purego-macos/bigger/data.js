window.BENCHMARK_DATA = {
  "lastUpdate": 1784078471862,
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
        "date": 1784074667948,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - MB/s",
            "value": 69.22,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=67.86; max=73.51"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - MB/s",
            "value": 133.1,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=128.47; max=141.92"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - MB/s",
            "value": 132.41,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=124.33; max=141.31"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - MB/s",
            "value": 11.74,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=11.25; max=12.42"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - MB/s",
            "value": 37.14,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=36.26; max=38.71"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - MB/s",
            "value": 37.09,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=35.89; max=38.85"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - MB/s",
            "value": 0.27,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=0.26; max=0.29"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - MB/s",
            "value": 0.34,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=0.32; max=0.39"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - MB/s",
            "value": 0.34,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=0.31; max=0.38"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - MB/s",
            "value": 1.39,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=1.27; max=1.48"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - MB/s",
            "value": 3.18,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=3.02; max=3.42"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - MB/s",
            "value": 3.12,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=2.73; max=3.36"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - MB/s",
            "value": 13.72,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=13.25; max=14.64"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - MB/s",
            "value": 45.75,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=42.34; max=48.95"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - MB/s",
            "value": 44.85,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=42.71; max=47.1"
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
          "id": "3d4e39eb2bca1aa028a798413054526ed1851fb9",
          "message": "Remove native compression backends",
          "timestamp": "2026-07-15T03:09:22+02:00",
          "tree_id": "66e8870db7157ea13445a06d941f00c5ba8a37a3",
          "url": "https://github.com/saveweb/unwarc/commit/3d4e39eb2bca1aa028a798413054526ed1851fb9"
        },
        "date": 1784077919348,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - MB/s",
            "value": 36.03,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=33.07; max=39.7"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - MB/s",
            "value": 72.82,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=65.33; max=79.04"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - MB/s",
            "value": 58.67,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=57.79; max=65.87"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - MB/s",
            "value": 5.67,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=5; max=6.07"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - MB/s",
            "value": 19.66,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=17.74; max=23.29"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - MB/s",
            "value": 19.08,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=16.24; max=32.08"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - MB/s",
            "value": 0.14,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=0.11; max=0.21"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - MB/s",
            "value": 0.24,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=0.17; max=0.26"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - MB/s",
            "value": 0.17,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=0.15; max=0.2"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - MB/s",
            "value": 0.55,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=0.47; max=0.98"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - MB/s",
            "value": 1.33,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=1; max=2.32"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - MB/s",
            "value": 1.35,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=1.18; max=1.47"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - MB/s",
            "value": 7.63,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=7.42; max=10.3"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - MB/s",
            "value": 27.49,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=23.33; max=36.5"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - MB/s",
            "value": 25.46,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=20.05; max=30.72"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "30341059+yzqzss@users.noreply.github.com",
            "name": "yzqzss",
            "username": "yzqzss"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7910ac318a9a9081b9538f58bb0d19c0c1f3be6b",
          "message": "update README\n\nUpdated terminology in README for clarity.",
          "timestamp": "2026-07-15T03:18:48+02:00",
          "tree_id": "94654f2c00b47a760d438106e911ea8050102e67",
          "url": "https://github.com/saveweb/unwarc/commit/7910ac318a9a9081b9538f58bb0d19c0c1f3be6b"
        },
        "date": 1784078471257,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - MB/s",
            "value": 65.57,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=50.97; max=76.32"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - MB/s",
            "value": 134.54,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=100.1; max=146.92"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - MB/s",
            "value": 94.99,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=84.03; max=122.99"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - MB/s",
            "value": 11.32,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=10.58; max=11.82"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - MB/s",
            "value": 37.35,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=28.41; max=40.74"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - MB/s",
            "value": 34.79,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=22.19; max=36.83"
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
            "extra": "median of 7 runs; min=0.25; max=0.38"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - MB/s",
            "value": 0.37,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=0.27; max=0.38"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - MB/s",
            "value": 1.45,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=1.02; max=1.49"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - MB/s",
            "value": 3.02,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=2.69; max=3.27"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - MB/s",
            "value": 2.95,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=2.28; max=3.1"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - MB/s",
            "value": 10.88,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=7.87; max=13.36"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - MB/s",
            "value": 34.1,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=27.6; max=42.61"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - MB/s",
            "value": 37.38,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=31.82; max=37.65"
          }
        ]
      }
    ]
  }
}