window.BENCHMARK_DATA = {
  "lastUpdate": 1784073061747,
  "repoUrl": "https://github.com/saveweb/unwarc",
  "entries": {
    "unwarc corpus benchmark native linux throughput": [
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
        "date": 1784068526607,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - MB/s",
            "value": 34.4,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=33.37; max=34.99"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - MB/s",
            "value": 49.28,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=48.71; max=50.02"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - MB/s",
            "value": 48.27,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=46.69; max=48.6"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - MB/s",
            "value": 3.79,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=3.76; max=3.81"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - MB/s",
            "value": 5.22,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=5.05; max=5.26"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - MB/s",
            "value": 5.23,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=5.19; max=5.28"
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
            "extra": "median of 7 runs; min=0.29; max=0.29"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - MB/s",
            "value": 0.29,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=0.29; max=0.29"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - MB/s",
            "value": 1.15,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=1.12; max=1.18"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - MB/s",
            "value": 2.71,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=2.63; max=2.72"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - MB/s",
            "value": 2.59,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=2.57; max=2.63"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - MB/s",
            "value": 8.32,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=8.18; max=8.58"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - MB/s",
            "value": 39.01,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=38.33; max=41.14"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - MB/s",
            "value": 38.42,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=37.85; max=39.28"
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
        "date": 1784070244749,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - MB/s",
            "value": 57.69,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=50.23; max=58.55"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - MB/s",
            "value": 82.03,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=81.02; max=82.67"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - MB/s",
            "value": 82.46,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=81.36; max=83.23"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - MB/s",
            "value": 5.59,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=5.27; max=6.24"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - MB/s",
            "value": 8.68,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=8.59; max=8.69"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - MB/s",
            "value": 8.68,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=8.22; max=8.69"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - MB/s",
            "value": 0.28,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=0.28; max=0.29"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - MB/s",
            "value": 0.35,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=0.34; max=0.35"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - MB/s",
            "value": 0.35,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=0.35; max=0.35"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - MB/s",
            "value": 2.11,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=1.89; max=2.12"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - MB/s",
            "value": 4.04,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=4; max=4.06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - MB/s",
            "value": 3.94,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=3.53; max=3.99"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - MB/s",
            "value": 10.24,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=10.2; max=10.29"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - MB/s",
            "value": 37.78,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=37.43; max=38.09"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - MB/s",
            "value": 38.08,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=37.69; max=38.36"
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
        "date": 1784073061544,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - MB/s",
            "value": 37.75,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=37.26; max=38.59"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - MB/s",
            "value": 55.18,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=53.12; max=56.78"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - MB/s",
            "value": 54.67,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=51.73; max=55.03"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - MB/s",
            "value": 4.1,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=3.91; max=4.13"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - MB/s",
            "value": 5.93,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=5.8; max=5.98"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - MB/s",
            "value": 5.88,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=5.44; max=5.92"
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
            "extra": "median of 7 runs; min=0.29; max=0.31"
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
            "extra": "median of 7 runs; min=1.1; max=1.14"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - MB/s",
            "value": 2.72,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=2.67; max=2.78"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - MB/s",
            "value": 2.64,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=2.51; max=2.7"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - MB/s",
            "value": 9.24,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=9.12; max=9.28"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - MB/s",
            "value": 42.11,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=40.92; max=42.37"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - MB/s",
            "value": 41.86,
            "unit": "MB/s",
            "extra": "median of 7 runs; min=39.46; max=42.34"
          }
        ]
      }
    ]
  }
}