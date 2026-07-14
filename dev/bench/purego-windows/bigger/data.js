window.BENCHMARK_DATA = {
  "lastUpdate": 1784067843582,
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
        "date": 1784067453794,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - MB/s",
            "value": 51.46,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=50.34; max=52.04"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - MB/s",
            "value": 96.97,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=95.12; max=98.99"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - MB/s",
            "value": 90.09,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=80.22; max=96.7"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - MB/s",
            "value": 6.87,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=6.71; max=7.16"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - MB/s",
            "value": 25.82,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=25.17; max=26.67"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - MB/s",
            "value": 25.99,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=25.84; max=26.57"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - MB/s",
            "value": 0.06,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=0.06; max=0.07"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - MB/s",
            "value": 0.08,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=0.07; max=0.1"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - MB/s",
            "value": 0.08,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=0.07; max=0.08"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - MB/s",
            "value": 0.72,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=0.71; max=0.75"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - MB/s",
            "value": 1.42,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=1.41; max=1.6"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - MB/s",
            "value": 1.57,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=1.48; max=1.59"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - MB/s",
            "value": 5.46,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=5.3; max=5.5"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - MB/s",
            "value": 22.23,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=21.89; max=22.69"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - MB/s",
            "value": 22.51,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=22.13; max=22.57"
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
        "date": 1784067842972,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - MB/s",
            "value": 59.54,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=59.17; max=68.74"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - MB/s",
            "value": 128.8,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=128.37; max=129.57"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - MB/s",
            "value": 127.38,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=125.71; max=128.43"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - MB/s",
            "value": 9.32,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=8.06; max=9.62"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - MB/s",
            "value": 36.6,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=31.19; max=37.09"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - MB/s",
            "value": 36.94,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=30.71; max=37.45"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - MB/s",
            "value": 0.09,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=0.09; max=0.09"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - MB/s",
            "value": 0.11,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=0.11; max=0.12"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - MB/s",
            "value": 0.12,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=0.11; max=0.18"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - MB/s",
            "value": 0.99,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=0.97; max=1.03"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - MB/s",
            "value": 2.17,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=2.11; max=2.31"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - MB/s",
            "value": 2.26,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=2.17; max=2.28"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - MB/s",
            "value": 5.92,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=5.6; max=6.04"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - MB/s",
            "value": 24.6,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=24.2; max=24.86"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - MB/s",
            "value": 24.4,
            "unit": "MB/s",
            "extra": "median of 5 runs; min=24.24; max=24.82"
          }
        ]
      }
    ]
  }
}