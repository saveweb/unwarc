window.BENCHMARK_DATA = {
  "lastUpdate": 1784060822855,
  "repoUrl": "https://github.com/saveweb/unwarc",
  "entries": {
    "unwarc corpus benchmark purego windows latency and allocations": [
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
        "date": 1784060822364,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - B/op",
            "value": 263336,
            "unit": "B/op",
            "extra": "median of 5 runs; min=263335; max=263370"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 266,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=266; max=266"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - ns/op",
            "value": 530573,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=525220; max=531716"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - B/op",
            "value": 132588,
            "unit": "B/op",
            "extra": "median of 5 runs; min=132568; max=132605"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - allocs/op",
            "value": 197,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=197; max=197"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - ns/op",
            "value": 272023,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=268262; max=273581"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - B/op",
            "value": 132507,
            "unit": "B/op",
            "extra": "median of 5 runs; min=132462; max=132524"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - allocs/op",
            "value": 194,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=194; max=194"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - ns/op",
            "value": 279649,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=271870; max=284033"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - B/op",
            "value": 513951,
            "unit": "B/op",
            "extra": "median of 5 runs; min=513911; max=514006"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 794,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=794; max=794"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - ns/op",
            "value": 747044,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=744931; max=769859"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - B/op",
            "value": 77215,
            "unit": "B/op",
            "extra": "median of 5 runs; min=77200; max=77223"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - allocs/op",
            "value": 534,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=534; max=534"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - ns/op",
            "value": 178387,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=176094; max=183342"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - B/op",
            "value": 76658,
            "unit": "B/op",
            "extra": "median of 5 runs; min=76652; max=76701"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - allocs/op",
            "value": 517,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=517; max=517"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - ns/op",
            "value": 180172,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=175118; max=182080"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - B/op",
            "value": 1222800,
            "unit": "B/op",
            "extra": "median of 5 runs; min=1.222586e+06; max=1.223098e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 206,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=205; max=206"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - ns/op",
            "value": 1088182,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=969817; max=1.192766e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - B/op",
            "value": 1055527,
            "unit": "B/op",
            "extra": "median of 5 runs; min=1.055448e+06; max=1.055668e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - allocs/op",
            "value": 156,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=156; max=156"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - ns/op",
            "value": 820651,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=720728; max=862293"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - B/op",
            "value": 1055640,
            "unit": "B/op",
            "extra": "median of 5 runs; min=1.055581e+06; max=1.055752e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - allocs/op",
            "value": 155,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=155; max=155"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - ns/op",
            "value": 796219,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=713363; max=884548"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - B/op",
            "value": 196094,
            "unit": "B/op",
            "extra": "median of 5 runs; min=196077; max=196123"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 310,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=310; max=310"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - ns/op",
            "value": 280674,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=270674; max=296725"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - B/op",
            "value": 132764,
            "unit": "B/op",
            "extra": "median of 5 runs; min=132742; max=132766"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - allocs/op",
            "value": 205,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=205; max=205"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - ns/op",
            "value": 107169,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=101731; max=115825"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - B/op",
            "value": 132658,
            "unit": "B/op",
            "extra": "median of 5 runs; min=132647; max=132664"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - allocs/op",
            "value": 202,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=202; max=202"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - ns/op",
            "value": 111583,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=105707; max=122506"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - B/op",
            "value": 48823093,
            "unit": "B/op",
            "extra": "median of 5 runs; min=4.8820685e+07; max=4.8824561e+07"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 1660,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=1658; max=1660"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - ns/op",
            "value": 6510086,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=6.37875e+06; max=6.619787e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - B/op",
            "value": 10164374,
            "unit": "B/op",
            "extra": "median of 5 runs; min=1.0163968e+07; max=1.0164676e+07"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - allocs/op",
            "value": 1143,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=1143; max=1143"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - ns/op",
            "value": 1422089,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=1.365804e+06; max=1.516382e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - B/op",
            "value": 10163305,
            "unit": "B/op",
            "extra": "median of 5 runs; min=1.0162801e+07; max=1.0164151e+07"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - allocs/op",
            "value": 1118,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=1118; max=1118"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - ns/op",
            "value": 1463676,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=1.398118e+06; max=1.518492e+06"
          }
        ]
      }
    ]
  }
}