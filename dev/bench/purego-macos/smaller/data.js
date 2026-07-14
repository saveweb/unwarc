window.BENCHMARK_DATA = {
  "lastUpdate": 1784060810801,
  "repoUrl": "https://github.com/saveweb/unwarc",
  "entries": {
    "unwarc corpus benchmark purego macos latency and allocations": [
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
        "date": 1784060809457,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - B/op",
            "value": 262519,
            "unit": "B/op",
            "extra": "median of 5 runs; min=262416; max=262603"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 266,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=266; max=266"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - ns/op",
            "value": 307093,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=302062; max=344459"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - B/op",
            "value": 132373,
            "unit": "B/op",
            "extra": "median of 5 runs; min=132363; max=132387"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - allocs/op",
            "value": 197,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=197; max=197"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - ns/op",
            "value": 214326,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=168334; max=264051"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - B/op",
            "value": 132272,
            "unit": "B/op",
            "extra": "median of 5 runs; min=132244; max=132287"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - allocs/op",
            "value": 194,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=194; max=194"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - ns/op",
            "value": 214466,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=203095; max=221499"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - B/op",
            "value": 512922,
            "unit": "B/op",
            "extra": "median of 5 runs; min=512874; max=512971"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 794,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=794; max=794"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - ns/op",
            "value": 348163,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=334169; max=378712"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - B/op",
            "value": 77016,
            "unit": "B/op",
            "extra": "median of 5 runs; min=77006; max=77021"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - allocs/op",
            "value": 534,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=534; max=534"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - ns/op",
            "value": 129816,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=101586; max=139145"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - B/op",
            "value": 76485,
            "unit": "B/op",
            "extra": "median of 5 runs; min=76460; max=76485"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - allocs/op",
            "value": 517,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=517; max=517"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - ns/op",
            "value": 108305,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=102974; max=120183"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - B/op",
            "value": 1223933,
            "unit": "B/op",
            "extra": "median of 5 runs; min=1.223579e+06; max=1.22449e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 209,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=209; max=209"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - ns/op",
            "value": 372889,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=250433; max=648642"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - B/op",
            "value": 1054932,
            "unit": "B/op",
            "extra": "median of 5 runs; min=1.054543e+06; max=1.055762e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - allocs/op",
            "value": 157,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=157; max=157"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - ns/op",
            "value": 289167,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=231738; max=364566"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - B/op",
            "value": 1055427,
            "unit": "B/op",
            "extra": "median of 5 runs; min=1.054005e+06; max=1.055785e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - allocs/op",
            "value": 156,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=156; max=156"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - ns/op",
            "value": 363032,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=250067; max=562937"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - B/op",
            "value": 201330,
            "unit": "B/op",
            "extra": "median of 5 runs; min=201321; max=201344"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 318,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=318; max=318"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - ns/op",
            "value": 130375,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=107609; max=151544"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - B/op",
            "value": 134023,
            "unit": "B/op",
            "extra": "median of 5 runs; min=133996; max=134031"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - allocs/op",
            "value": 207,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=207; max=207"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - ns/op",
            "value": 57319,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=50847; max=79260"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - B/op",
            "value": 133907,
            "unit": "B/op",
            "extra": "median of 5 runs; min=133899; max=133929"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - allocs/op",
            "value": 204,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=204; max=204"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - ns/op",
            "value": 56499,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=43242; max=64440"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - B/op",
            "value": 48849268,
            "unit": "B/op",
            "extra": "median of 5 runs; min=4.8845778e+07; max=4.8849963e+07"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 1696,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=1695; max=1697"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - ns/op",
            "value": 2094680,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=2.064061e+06; max=2.421069e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - B/op",
            "value": 10168393,
            "unit": "B/op",
            "extra": "median of 5 runs; min=1.0167886e+07; max=1.0168758e+07"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - allocs/op",
            "value": 1147,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=1147; max=1147"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - ns/op",
            "value": 662715,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=620944; max=924550"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - B/op",
            "value": 10168035,
            "unit": "B/op",
            "extra": "median of 5 runs; min=1.0167565e+07; max=1.0168562e+07"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - allocs/op",
            "value": 1122,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=1122; max=1122"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - ns/op",
            "value": 610543,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=599492; max=631564"
          }
        ]
      }
    ]
  }
}