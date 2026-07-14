window.BENCHMARK_DATA = {
  "lastUpdate": 1784073030809,
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
      }
    ]
  }
}