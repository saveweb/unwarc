window.BENCHMARK_DATA = {
  "lastUpdate": 1784060813044,
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
      }
    ]
  }
}