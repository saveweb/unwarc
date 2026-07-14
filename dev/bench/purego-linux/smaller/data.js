window.BENCHMARK_DATA = {
  "lastUpdate": 1784060795562,
  "repoUrl": "https://github.com/saveweb/unwarc",
  "entries": {
    "unwarc corpus benchmark purego linux latency and allocations": [
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
        "date": 1784060795266,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - B/op",
            "value": 262679,
            "unit": "B/op",
            "extra": "median of 5 runs; min=262654; max=262728"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 266,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=266; max=266"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - ns/op",
            "value": 394376,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=392967; max=396049"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - B/op",
            "value": 132408,
            "unit": "B/op",
            "extra": "median of 5 runs; min=132401; max=132433"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - allocs/op",
            "value": 197,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=197; max=197"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - ns/op",
            "value": 222341,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=220511; max=222762"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - B/op",
            "value": 132327,
            "unit": "B/op",
            "extra": "median of 5 runs; min=132306; max=132350"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - allocs/op",
            "value": 194,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=194; max=194"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - ns/op",
            "value": 224593,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=223447; max=232891"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - B/op",
            "value": 513129,
            "unit": "B/op",
            "extra": "median of 5 runs; min=513062; max=513168"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 794,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=794; max=794"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - ns/op",
            "value": 443414,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=441088; max=449068"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - B/op",
            "value": 77052,
            "unit": "B/op",
            "extra": "median of 5 runs; min=77043; max=77060"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - allocs/op",
            "value": 534,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=534; max=534"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - ns/op",
            "value": 146460,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=145762; max=147856"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - B/op",
            "value": 76515,
            "unit": "B/op",
            "extra": "median of 5 runs; min=76503; max=76519"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - allocs/op",
            "value": 517,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=517; max=517"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - ns/op",
            "value": 147276,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=146653; max=147998"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - B/op",
            "value": 1220692,
            "unit": "B/op",
            "extra": "median of 5 runs; min=1.22053e+06; max=1.221471e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 204,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=204; max=204"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - ns/op",
            "value": 335072,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=322288; max=346447"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - B/op",
            "value": 1054573,
            "unit": "B/op",
            "extra": "median of 5 runs; min=1.054531e+06; max=1.054761e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - allocs/op",
            "value": 155,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=155; max=155"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - ns/op",
            "value": 265200,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=264514; max=268894"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - B/op",
            "value": 1054669,
            "unit": "B/op",
            "extra": "median of 5 runs; min=1.054461e+06; max=1.054727e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - allocs/op",
            "value": 154,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=154; max=154"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - ns/op",
            "value": 276541,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=266711; max=281960"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - B/op",
            "value": 195513,
            "unit": "B/op",
            "extra": "median of 5 runs; min=195496; max=195522"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 310,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=310; max=310"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - ns/op",
            "value": 130598,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=130278; max=132430"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - B/op",
            "value": 132604,
            "unit": "B/op",
            "extra": "median of 5 runs; min=132592; max=132606"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - allocs/op",
            "value": 205,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=205; max=205"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - ns/op",
            "value": 56884,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=56807; max=57413"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - B/op",
            "value": 132499,
            "unit": "B/op",
            "extra": "median of 5 runs; min=132481; max=132504"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - allocs/op",
            "value": 202,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=202; max=202"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - ns/op",
            "value": 58179,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=57979; max=58293"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - B/op",
            "value": 48818888,
            "unit": "B/op",
            "extra": "median of 5 runs; min=4.8817497e+07; max=4.8822368e+07"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 1655,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=1654; max=1656"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - ns/op",
            "value": 3539484,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=3.490673e+06; max=3.564156e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - B/op",
            "value": 10160879,
            "unit": "B/op",
            "extra": "median of 5 runs; min=1.0160859e+07; max=1.0161377e+07"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - allocs/op",
            "value": 1141,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=1141; max=1141"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - ns/op",
            "value": 708835,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=678285; max=733878"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - B/op",
            "value": 10160455,
            "unit": "B/op",
            "extra": "median of 5 runs; min=1.0160359e+07; max=1.0160806e+07"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - allocs/op",
            "value": 1116,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=1116; max=1116"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - ns/op",
            "value": 693540,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=684695; max=711509"
          }
        ]
      }
    ]
  }
}