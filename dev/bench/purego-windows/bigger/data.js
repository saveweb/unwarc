window.BENCHMARK_DATA = {
  "lastUpdate": 1784060824385,
  "repoUrl": "https://github.com/saveweb/unwarc",
  "entries": {
    "unwarc corpus benchmark purego windows throughput": [
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
        "date": 1784060824053,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - MB/s",
            "value": 41.62,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=41.53; max=42.05"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - MB/s",
            "value": 81.18,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=80.72; max=82.32"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - MB/s",
            "value": 78.97,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=77.75; max=81.23"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - MB/s",
            "value": 5.7,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=5.53; max=5.72"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - MB/s",
            "value": 23.89,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=23.24; max=24.2"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - MB/s",
            "value": 23.65,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=23.4; max=24.33"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - MB/s",
            "value": 0.05,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=0.05; max=0.06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - MB/s",
            "value": 0.07,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=0.06; max=0.08"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - MB/s",
            "value": 0.07,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=0.06; max=0.08"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - MB/s",
            "value": 0.53,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=0.5; max=0.55"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - MB/s",
            "value": 1.39,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=1.29; max=1.46"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - MB/s",
            "value": 1.34,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=1.22; max=1.41"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - MB/s",
            "value": 4.1,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=4.03; max=4.19"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - MB/s",
            "value": 18.78,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=17.61; max=19.55"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - MB/s",
            "value": 18.25,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=17.59; max=19.1"
          }
        ]
      }
    ]
  }
}