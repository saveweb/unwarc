window.BENCHMARK_DATA = {
  "lastUpdate": 1784060796911,
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
          "id": "4a399c9bfb4e07ef22f74df56bfacbba29810599",
          "message": "Use Bash for benchmark aggregation",
          "timestamp": "2026-07-14T22:23:46+02:00",
          "tree_id": "c7e945b8c438d5183d755b224a1ad176c4d4a33d",
          "url": "https://github.com/saveweb/unwarc/commit/4a399c9bfb4e07ef22f74df56bfacbba29810599"
        },
        "date": 1784060796714,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - MB/s",
            "value": 55.99,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=55.76; max=56.2"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - MB/s",
            "value": 99.32,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=99.13; max=100.14"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - MB/s",
            "value": 98.32,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=94.82; max=98.83"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - MB/s",
            "value": 9.61,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=9.49; max=9.66"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - MB/s",
            "value": 29.09,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=28.82; max=29.23"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - MB/s",
            "value": 28.93,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=28.79; max=29.06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - MB/s",
            "value": 0.16,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=0.16; max=0.17"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - MB/s",
            "value": 0.21,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=0.2; max=0.21"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - MB/s",
            "value": 0.2,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=0.2; max=0.21"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - MB/s",
            "value": 1.14,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=1.13; max=1.14"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - MB/s",
            "value": 2.62,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=2.6; max=2.62"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - MB/s",
            "value": 2.56,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=2.56; max=2.57"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - MB/s",
            "value": 7.55,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=7.49; max=7.65"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - MB/s",
            "value": 37.68,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=36.39; max=39.37"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - MB/s",
            "value": 38.51,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=37.54; max=39.01"
          }
        ]
      }
    ]
  }
}