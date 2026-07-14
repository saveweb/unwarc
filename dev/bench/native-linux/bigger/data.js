window.BENCHMARK_DATA = {
  "lastUpdate": 1784067468515,
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
          "id": "4a399c9bfb4e07ef22f74df56bfacbba29810599",
          "message": "Use Bash for benchmark aggregation",
          "timestamp": "2026-07-14T22:23:46+02:00",
          "tree_id": "c7e945b8c438d5183d755b224a1ad176c4d4a33d",
          "url": "https://github.com/saveweb/unwarc/commit/4a399c9bfb4e07ef22f74df56bfacbba29810599"
        },
        "date": 1784060836150,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - MB/s",
            "value": 38.94,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=38.69; max=39.47"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - MB/s",
            "value": 56.53,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=53.57; max=56.93"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - MB/s",
            "value": 56.09,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=55.35; max=56.22"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - MB/s",
            "value": 4.08,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=3.94; max=4.11"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - MB/s",
            "value": 5.83,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=5.79; max=5.89"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - MB/s",
            "value": 5.88,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=5.81; max=5.9"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - MB/s",
            "value": 0.16,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=0.15; max=0.16"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - MB/s",
            "value": 0.17,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=0.17; max=0.18"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - MB/s",
            "value": 0.19,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=0.19; max=0.2"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - MB/s",
            "value": 1.16,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=1.15; max=1.16"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - MB/s",
            "value": 2.86,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=2.86; max=2.87"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - MB/s",
            "value": 2.79,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=2.78; max=2.8"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - MB/s",
            "value": 8.45,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=8.4; max=8.5"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - MB/s",
            "value": 39.05,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=38.67; max=39.74"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - MB/s",
            "value": 39.37,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=38.29; max=39.76"
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
        "date": 1784067467919,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - MB/s",
            "value": 39.38,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=38.86; max=39.64"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - MB/s",
            "value": 57.47,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=56.79; max=57.82"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - MB/s",
            "value": 57.58,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=56.44; max=57.89"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - MB/s",
            "value": 4.15,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=4.13; max=4.17"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - MB/s",
            "value": 5.93,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=5.89; max=5.95"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - MB/s",
            "value": 5.91,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=5.81; max=5.97"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - MB/s",
            "value": 0.15,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=0.15; max=0.15"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - MB/s",
            "value": 0.19,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=0.19; max=0.2"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - MB/s",
            "value": 0.2,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=0.17; max=0.25"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - MB/s",
            "value": 1.18,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=1.15; max=1.18"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - MB/s",
            "value": 2.88,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=2.86; max=2.88"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - MB/s",
            "value": 2.8,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=2.79; max=2.85"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - MB/s",
            "value": 8.13,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=7.86; max=8.75"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - MB/s",
            "value": 39.37,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=37.9; max=39.87"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - MB/s",
            "value": 39.22,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=38.77; max=39.42"
          }
        ]
      }
    ]
  }
}