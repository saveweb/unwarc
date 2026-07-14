window.BENCHMARK_DATA = {
  "lastUpdate": 1784067830819,
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
          "id": "4a399c9bfb4e07ef22f74df56bfacbba29810599",
          "message": "Use Bash for benchmark aggregation",
          "timestamp": "2026-07-14T22:23:46+02:00",
          "tree_id": "c7e945b8c438d5183d755b224a1ad176c4d4a33d",
          "url": "https://github.com/saveweb/unwarc/commit/4a399c9bfb4e07ef22f74df56bfacbba29810599"
        },
        "date": 1784060812168,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - MB/s",
            "value": 71.91,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=64.11; max=73.11"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - MB/s",
            "value": 103.03,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=83.63; max=131.19"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - MB/s",
            "value": 102.97,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=99.7; max=108.73"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - MB/s",
            "value": 12.24,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=11.25; max=12.75"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - MB/s",
            "value": 32.82,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=30.62; max=41.94"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - MB/s",
            "value": 39.34,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=35.45; max=41.38"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - MB/s",
            "value": 0.15,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=0.08; max=0.22"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - MB/s",
            "value": 0.19,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=0.15; max=0.24"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - MB/s",
            "value": 0.15,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=0.1; max=0.22"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - MB/s",
            "value": 1.14,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=0.98; max=1.38"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - MB/s",
            "value": 2.6,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=1.88; max=2.93"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - MB/s",
            "value": 2.64,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=2.31; max=3.45"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - MB/s",
            "value": 12.75,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=11.03; max=12.94"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - MB/s",
            "value": 40.3,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=28.89; max=43.01"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - MB/s",
            "value": 43.74,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=42.29; max=44.55"
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
          "id": "58559e974b973489025a6376daf969e07663c57d",
          "message": "Preserve zero-length stream block access",
          "timestamp": "2026-07-15T00:20:27+02:00",
          "tree_id": "2d26257c82c3142bd50e4fbeb2283b8c07030da1",
          "url": "https://github.com/saveweb/unwarc/commit/58559e974b973489025a6376daf969e07663c57d"
        },
        "date": 1784067830351,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - MB/s",
            "value": 60.89,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=58.6; max=63.77"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - MB/s",
            "value": 98.76,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=90.27; max=116.65"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - MB/s",
            "value": 85.14,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=83.35; max=90.51"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - MB/s",
            "value": 11.25,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=9.8; max=11.43"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - MB/s",
            "value": 34.05,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=31.15; max=35.77"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - MB/s",
            "value": 33.52,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=31.79; max=35.26"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - MB/s",
            "value": 0.1,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=0.09; max=0.1"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - MB/s",
            "value": 0.13,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=0.12; max=0.24"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - MB/s",
            "value": 0.23,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=0.19; max=0.24"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - MB/s",
            "value": 1.25,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=1.06; max=1.3"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - MB/s",
            "value": 2.55,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=2.21; max=3.09"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - MB/s",
            "value": 2.79,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=2.75; max=3.01"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - MB/s",
            "value": 7.41,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=6.58; max=7.72"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - MB/s",
            "value": 24.38,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=16.54; max=25.08"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - MB/s",
            "value": 22.59,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=18.91; max=26.78"
          }
        ]
      }
    ]
  }
}