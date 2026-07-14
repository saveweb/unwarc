window.BENCHMARK_DATA = {
  "lastUpdate": 1784067479778,
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
        "date": 1784067479335,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - MB/s",
            "value": 49.71,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=46.21; max=51.43"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - MB/s",
            "value": 73.51,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=71.51; max=74.28"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - MB/s",
            "value": 67.72,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=50.98; max=73.89"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - MB/s",
            "value": 5.85,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=5.59; max=5.91"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - MB/s",
            "value": 8.34,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=8.19; max=8.37"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - MB/s",
            "value": 8.22,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=8.17; max=8.31"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - MB/s",
            "value": 0.22,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=0.2; max=0.23"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - MB/s",
            "value": 0.3,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=0.3; max=0.31"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - MB/s",
            "value": 0.3,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=0.29; max=0.31"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - MB/s",
            "value": 1.62,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=1.47; max=1.66"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - MB/s",
            "value": 4.12,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=3.95; max=4.26"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - MB/s",
            "value": 4.13,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=4.01; max=4.15"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - MB/s",
            "value": 7.61,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=6.67; max=8.32"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - MB/s",
            "value": 29.75,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=22.84; max=36.35"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - MB/s",
            "value": 34.02,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=30.81; max=45.25"
          }
        ]
      }
    ]
  }
}