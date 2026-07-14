window.BENCHMARK_DATA = {
  "lastUpdate": 1784067433579,
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
          "id": "173eb8546a31f33cb42713263f39878546bf94f7",
          "message": "Expose lazy decode cost",
          "timestamp": "2026-07-15T00:14:09+02:00",
          "tree_id": "266c384291abb874b5ce4d289aa1343ca6477bac",
          "url": "https://github.com/saveweb/unwarc/commit/173eb8546a31f33cb42713263f39878546bf94f7"
        },
        "date": 1784067433015,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - MB/s",
            "value": 65.52,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=65.12; max=65.56"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - MB/s",
            "value": 114.57,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=111.38; max=115.14"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - MB/s",
            "value": 112.76,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=111.51; max=113.26"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - MB/s",
            "value": 11.06,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=11.04; max=11.11"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - MB/s",
            "value": 31.62,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=31.49; max=31.68"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - MB/s",
            "value": 31.68,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=31.61; max=31.83"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - MB/s",
            "value": 0.15,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=0.15; max=0.16"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - MB/s",
            "value": 0.19,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=0.18; max=0.2"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - MB/s",
            "value": 0.18,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=0.18; max=0.19"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - MB/s",
            "value": 1.48,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=1.47; max=1.5"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - MB/s",
            "value": 2.83,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=2.81; max=2.85"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - MB/s",
            "value": 2.8,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=2.8; max=2.82"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - MB/s",
            "value": 6.55,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=5.65; max=6.82"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - MB/s",
            "value": 29.92,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=28.95; max=30.37"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - MB/s",
            "value": 29.96,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=29.64; max=30.26"
          }
        ]
      }
    ]
  }
}