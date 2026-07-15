window.BENCHMARK_DATA = {
  "lastUpdate": 1784079931583,
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
        "date": 1784070202027,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - MB/s",
            "value": 55.16,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=53.51; max=55.5"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - MB/s",
            "value": 96.21,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=95.46; max=96.5"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - MB/s",
            "value": 96.18,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=95.57; max=96.45"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - MB/s",
            "value": 9.47,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=9.37; max=9.55"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - MB/s",
            "value": 25.78,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=25.59; max=25.89"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - MB/s",
            "value": 25.56,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=24.94; max=25.79"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - MB/s",
            "value": 0.23,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=0.22; max=0.23"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - MB/s",
            "value": 0.29,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=0.29; max=0.3"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - MB/s",
            "value": 0.29,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=0.29; max=0.3"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - MB/s",
            "value": 1.18,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=1.16; max=1.2"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - MB/s",
            "value": 2.55,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=2.51; max=2.58"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - MB/s",
            "value": 2.5,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=2.49; max=2.54"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - MB/s",
            "value": 9.1,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=8.97; max=9.22"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - MB/s",
            "value": 42.25,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=40.33; max=44.17"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - MB/s",
            "value": 41.59,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=41.18; max=43.44"
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
        "date": 1784073030264,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - MB/s",
            "value": 55.11,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=54.92; max=55.21"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - MB/s",
            "value": 96.57,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=95.95; max=96.93"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - MB/s",
            "value": 95.96,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=94.41; max=96.39"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - MB/s",
            "value": 9.41,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=9.12; max=9.45"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - MB/s",
            "value": 25.62,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=25.43; max=25.7"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - MB/s",
            "value": 25.51,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=25.41; max=25.6"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - MB/s",
            "value": 0.24,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=0.24; max=0.25"
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
            "extra": "median of 7 runs; min=0.3; max=0.31"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - MB/s",
            "value": 1.11,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=1.1; max=1.11"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - MB/s",
            "value": 2.61,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=2.6; max=2.62"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - MB/s",
            "value": 2.55,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=2.49; max=2.57"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - MB/s",
            "value": 9.93,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=9.83; max=10.05"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - MB/s",
            "value": 43.72,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=43.06; max=44.4"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - MB/s",
            "value": 44.09,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=40.04; max=45.08"
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
        "date": 1784074656737,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - MB/s",
            "value": 54.94,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=53.65; max=55.28"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - MB/s",
            "value": 96.47,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=95.57; max=96.92"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - MB/s",
            "value": 96.44,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=95.53; max=96.72"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - MB/s",
            "value": 9.25,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=9.25; max=9.34"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - MB/s",
            "value": 25.46,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=25.17; max=25.54"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - MB/s",
            "value": 25.37,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=25.21; max=25.47"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - MB/s",
            "value": 0.24,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=0.24; max=0.25"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - MB/s",
            "value": 0.31,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=0.31; max=0.31"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - MB/s",
            "value": 0.31,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=0.3; max=0.31"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - MB/s",
            "value": 1.11,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=1.1; max=1.12"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - MB/s",
            "value": 2.58,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=2.57; max=2.62"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - MB/s",
            "value": 2.54,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=2.5; max=2.55"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - MB/s",
            "value": 10.2,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=10.09; max=10.31"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - MB/s",
            "value": 45.27,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=43.59; max=45.78"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - MB/s",
            "value": 44.9,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=42.24; max=45.58"
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
        "date": 1784077906049,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - MB/s",
            "value": 56.96,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=54.96; max=57.34"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - MB/s",
            "value": 101.83,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=100.7; max=102.19"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - MB/s",
            "value": 101.84,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=101.69; max=103"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - MB/s",
            "value": 9.55,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=9.44; max=9.63"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - MB/s",
            "value": 26.82,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=26.64; max=26.87"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - MB/s",
            "value": 26.51,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=26.32; max=26.62"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - MB/s",
            "value": 0.23,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=0.22; max=0.23"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - MB/s",
            "value": 0.29,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=0.29; max=0.3"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - MB/s",
            "value": 0.29,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=0.29; max=0.3"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - MB/s",
            "value": 1.18,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=1.15; max=1.19"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - MB/s",
            "value": 2.56,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=2.55; max=2.58"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - MB/s",
            "value": 2.51,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=2.47; max=2.52"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - MB/s",
            "value": 9.16,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=9.08; max=9.23"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - MB/s",
            "value": 41.09,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=40.23; max=43.94"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - MB/s",
            "value": 43.59,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=40.29; max=44.38"
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
        "date": 1784078457869,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - MB/s",
            "value": 73.21,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=72.92; max=73.31"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - MB/s",
            "value": 130.69,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=129; max=131.48"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - MB/s",
            "value": 129.54,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=127.53; max=131.11"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - MB/s",
            "value": 12.18,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=12.1; max=12.23"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - MB/s",
            "value": 34.17,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=33.76; max=34.26"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - MB/s",
            "value": 33.85,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=33.82; max=33.95"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - MB/s",
            "value": 0.31,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=0.3; max=0.31"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - MB/s",
            "value": 0.4,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=0.39; max=0.4"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - MB/s",
            "value": 0.39,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=0.39; max=0.39"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - MB/s",
            "value": 1.43,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=1.42; max=1.44"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - MB/s",
            "value": 3.31,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=3.3; max=3.32"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - MB/s",
            "value": 3.24,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=3.23; max=3.25"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - MB/s",
            "value": 11.63,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=11.4; max=11.84"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - MB/s",
            "value": 52.92,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=51.68; max=54.88"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - MB/s",
            "value": 54.85,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=53.09; max=55.49"
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
          "id": "30ffdd449473af0a6c9efea6576e2b855509b2b5",
          "message": "update README",
          "timestamp": "2026-07-15T03:43:26+02:00",
          "tree_id": "a71e2b995ede5258b422286399ed76cd692d31bb",
          "url": "https://github.com/saveweb/unwarc/commit/30ffdd449473af0a6c9efea6576e2b855509b2b5"
        },
        "date": 1784079931356,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - MB/s",
            "value": 56.45,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=55.86; max=57.16"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - MB/s",
            "value": 100.94,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=99.97; max=102.41"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - MB/s",
            "value": 99.62,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=98.88; max=101.39"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - MB/s",
            "value": 9.49,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=9.32; max=9.52"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - MB/s",
            "value": 26.57,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=26.37; max=26.69"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - MB/s",
            "value": 26.41,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=25.58; max=26.7"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - MB/s",
            "value": 0.22,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=0.22; max=0.23"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - MB/s",
            "value": 0.29,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=0.28; max=0.29"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - MB/s",
            "value": 0.28,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=0.28; max=0.29"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - MB/s",
            "value": 1.15,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=1.13; max=1.16"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - MB/s",
            "value": 2.52,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=2.48; max=2.54"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - MB/s",
            "value": 2.48,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=2.44; max=2.5"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - MB/s",
            "value": 7.6,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=7.36; max=7.85"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - MB/s",
            "value": 35.56,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=32.46; max=35.8"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - MB/s",
            "value": 36.36,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=33.67; max=37.02"
          }
        ]
      }
    ]
  }
}