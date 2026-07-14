window.BENCHMARK_DATA = {
  "lastUpdate": 1784067828534,
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
        "date": 1784067441557,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - B/op",
            "value": 262761,
            "unit": "B/op",
            "extra": "median of 5 runs; min=262745; max=262782"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 269,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=269; max=269"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - ns/op",
            "value": 309815,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=306593; max=316950"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - B/op",
            "value": 132388,
            "unit": "B/op",
            "extra": "median of 5 runs; min=132383; max=132406"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - allocs/op",
            "value": 197,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=197; max=197"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - ns/op",
            "value": 170878,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=156766; max=208404"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - B/op",
            "value": 132317,
            "unit": "B/op",
            "extra": "median of 5 runs; min=132305; max=132330"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - allocs/op",
            "value": 194,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=194; max=194"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - ns/op",
            "value": 175909,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=166509; max=177925"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - B/op",
            "value": 513437,
            "unit": "B/op",
            "extra": "median of 5 runs; min=513421; max=513469"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 804,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=804; max=804"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - ns/op",
            "value": 431582,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=372028; max=552805"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - B/op",
            "value": 77020,
            "unit": "B/op",
            "extra": "median of 5 runs; min=77015; max=77025"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - allocs/op",
            "value": 534,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=534; max=534"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - ns/op",
            "value": 107232,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=94952; max=133453"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - B/op",
            "value": 76483,
            "unit": "B/op",
            "extra": "median of 5 runs; min=76475; max=76495"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - allocs/op",
            "value": 517,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=517; max=517"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - ns/op",
            "value": 100385,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=98332; max=109140"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - B/op",
            "value": 1224219,
            "unit": "B/op",
            "extra": "median of 5 runs; min=1.223917e+06; max=1.224342e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 210,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=210; max=210"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - ns/op",
            "value": 468722,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=444783; max=483400"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - B/op",
            "value": 1055795,
            "unit": "B/op",
            "extra": "median of 5 runs; min=1.05572e+06; max=1.055897e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - allocs/op",
            "value": 157,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=157; max=157"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - ns/op",
            "value": 225361,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=206317; max=325452"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - B/op",
            "value": 1055823,
            "unit": "B/op",
            "extra": "median of 5 runs; min=1.05577e+06; max=1.05589e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - allocs/op",
            "value": 156,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=156; max=156"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - ns/op",
            "value": 224490,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=207596; max=340726"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - B/op",
            "value": 201469,
            "unit": "B/op",
            "extra": "median of 5 runs; min=201452; max=201475"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 321,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=321; max=321"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - ns/op",
            "value": 185289,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=168359; max=194730"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - B/op",
            "value": 134040,
            "unit": "B/op",
            "extra": "median of 5 runs; min=134011; max=134048"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - allocs/op",
            "value": 207,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=207; max=207"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - ns/op",
            "value": 85988,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=52975; max=119472"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - B/op",
            "value": 133928,
            "unit": "B/op",
            "extra": "median of 5 runs; min=133904; max=133945"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - allocs/op",
            "value": 204,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=204; max=204"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - ns/op",
            "value": 79700,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=57209; max=119999"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - B/op",
            "value": 48845706,
            "unit": "B/op",
            "extra": "median of 5 runs; min=4.8845002e+07; max=4.8848073e+07"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 1709,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=1708; max=1709"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - ns/op",
            "value": 3626673,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=2.876373e+06; max=4.01492e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - B/op",
            "value": 10168652,
            "unit": "B/op",
            "extra": "median of 5 runs; min=1.0167871e+07; max=1.016896e+07"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - allocs/op",
            "value": 1147,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=1147; max=1147"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - ns/op",
            "value": 1173761,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=994728; max=1.262589e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - B/op",
            "value": 10167506,
            "unit": "B/op",
            "extra": "median of 5 runs; min=1.0166754e+07; max=1.0167589e+07"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - allocs/op",
            "value": 1122,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=1122; max=1122"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - ns/op",
            "value": 1284234,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=931991; max=1.296702e+06"
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
        "date": 1784067827808,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - B/op",
            "value": 262699,
            "unit": "B/op",
            "extra": "median of 5 runs; min=262628; max=262752"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 269,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=269; max=269"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - ns/op",
            "value": 362654,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=346302; max=376871"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - B/op",
            "value": 132370,
            "unit": "B/op",
            "extra": "median of 5 runs; min=132354; max=132391"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - allocs/op",
            "value": 197,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=197; max=197"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - ns/op",
            "value": 223598,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=189317; max=244621"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - B/op",
            "value": 132279,
            "unit": "B/op",
            "extra": "median of 5 runs; min=132270; max=132294"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - allocs/op",
            "value": 194,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=194; max=194"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - ns/op",
            "value": 259360,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=243972; max=264952"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - B/op",
            "value": 513442,
            "unit": "B/op",
            "extra": "median of 5 runs; min=513428; max=513487"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 804,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=804; max=804"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - ns/op",
            "value": 378765,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=372710; max=434649"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - B/op",
            "value": 77022,
            "unit": "B/op",
            "extra": "median of 5 runs; min=77017; max=77029"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - allocs/op",
            "value": 534,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=534; max=534"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - ns/op",
            "value": 125149,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=119119; max=136804"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - B/op",
            "value": 76487,
            "unit": "B/op",
            "extra": "median of 5 runs; min=76484; max=76494"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - allocs/op",
            "value": 517,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=517; max=517"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - ns/op",
            "value": 127114,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=120843; max=134048"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - B/op",
            "value": 1224426,
            "unit": "B/op",
            "extra": "median of 5 runs; min=1.224173e+06; max=1.224668e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 210,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=210; max=210"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - ns/op",
            "value": 570648,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=531428; max=614556"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - B/op",
            "value": 1055790,
            "unit": "B/op",
            "extra": "median of 5 runs; min=1.055735e+06; max=1.055912e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - allocs/op",
            "value": 157,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=157; max=157"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - ns/op",
            "value": 419060,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=233641; max=469116"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - B/op",
            "value": 1055943,
            "unit": "B/op",
            "extra": "median of 5 runs; min=1.055744e+06; max=1.056022e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - allocs/op",
            "value": 156,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=156; max=156"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - ns/op",
            "value": 236866,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=231076; max=283218"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - B/op",
            "value": 201474,
            "unit": "B/op",
            "extra": "median of 5 runs; min=201469; max=201510"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 321,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=321; max=321"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - ns/op",
            "value": 119301,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=114570; max=141168"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - B/op",
            "value": 134026,
            "unit": "B/op",
            "extra": "median of 5 runs; min=134016; max=134036"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - allocs/op",
            "value": 207,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=207; max=207"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - ns/op",
            "value": 58410,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=48219; max=67387"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - B/op",
            "value": 133928,
            "unit": "B/op",
            "extra": "median of 5 runs; min=133915; max=133937"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - allocs/op",
            "value": 204,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=204; max=204"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - ns/op",
            "value": 53455,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=49491; max=54094"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - B/op",
            "value": 48849470,
            "unit": "B/op",
            "extra": "median of 5 runs; min=4.8846784e+07; max=4.8849905e+07"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 1710,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=1709; max=1711"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - ns/op",
            "value": 3605940,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=3.460025e+06; max=4.0567e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - B/op",
            "value": 10169468,
            "unit": "B/op",
            "extra": "median of 5 runs; min=1.0167911e+07; max=1.0170069e+07"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - allocs/op",
            "value": 1147,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=1147; max=1148"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - ns/op",
            "value": 1095392,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=1.064736e+06; max=1.614771e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - B/op",
            "value": 10167929,
            "unit": "B/op",
            "extra": "median of 5 runs; min=1.0167141e+07; max=1.0169265e+07"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - allocs/op",
            "value": 1122,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=1122; max=1123"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - ns/op",
            "value": 1182003,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=997118; max=1.412124e+06"
          }
        ]
      }
    ]
  }
}