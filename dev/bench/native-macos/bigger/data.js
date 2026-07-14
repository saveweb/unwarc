window.BENCHMARK_DATA = {
  "lastUpdate": 1784060848392,
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
          "id": "4a399c9bfb4e07ef22f74df56bfacbba29810599",
          "message": "Use Bash for benchmark aggregation",
          "timestamp": "2026-07-14T22:23:46+02:00",
          "tree_id": "c7e945b8c438d5183d755b224a1ad176c4d4a33d",
          "url": "https://github.com/saveweb/unwarc/commit/4a399c9bfb4e07ef22f74df56bfacbba29810599"
        },
        "date": 1784060848007,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - MB/s",
            "value": 28.59,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=26.03; max=29.48"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - MB/s",
            "value": 49.3,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=39.24; max=50.19"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - MB/s",
            "value": 52.69,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=44.83; max=57.82"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - MB/s",
            "value": 2.78,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=1.98; max=3.14"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - MB/s",
            "value": 4.45,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=3.51; max=4.6"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - MB/s",
            "value": 4.65,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=4.52; max=4.89"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - MB/s",
            "value": 0.16,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=0.15; max=0.2"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - MB/s",
            "value": 0.27,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=0.15; max=0.29"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - MB/s",
            "value": 0.14,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=0.13; max=0.2"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - MB/s",
            "value": 0.92,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=0.78; max=1.17"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - MB/s",
            "value": 2.4,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=2.2; max=2.81"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - MB/s",
            "value": 2.22,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=1.74; max=2.87"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - MB/s",
            "value": 8.04,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=5.45; max=8.3"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - MB/s",
            "value": 36.01,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=24.95; max=39.56"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - MB/s",
            "value": 18.65,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=15.05; max=22.41"
          }
        ]
      }
    ]
  }
}