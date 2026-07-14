window.BENCHMARK_DATA = {
  "lastUpdate": 1784067452474,
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
        "date": 1784067451743,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - B/op",
            "value": 263464,
            "unit": "B/op",
            "extra": "median of 5 runs; min=263422; max=263477"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 269,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=269; max=269"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - ns/op",
            "value": 429164,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=424369; max=438640"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - B/op",
            "value": 132608,
            "unit": "B/op",
            "extra": "median of 5 runs; min=132586; max=132613"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - allocs/op",
            "value": 197,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=197; max=197"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - ns/op",
            "value": 227727,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=223086; max=232166"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - B/op",
            "value": 132500,
            "unit": "B/op",
            "extra": "median of 5 runs; min=132490; max=132513"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - allocs/op",
            "value": 194,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=194; max=194"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - ns/op",
            "value": 245122,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=228360; max=275287"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - B/op",
            "value": 514436,
            "unit": "B/op",
            "extra": "median of 5 runs; min=514354; max=514442"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 804,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=804; max=804"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - ns/op",
            "value": 619795,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=594776; max=635234"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - B/op",
            "value": 77231,
            "unit": "B/op",
            "extra": "median of 5 runs; min=77225; max=77253"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - allocs/op",
            "value": 534,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=534; max=534"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - ns/op",
            "value": 164998,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=159791; max=169300"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - B/op",
            "value": 76690,
            "unit": "B/op",
            "extra": "median of 5 runs; min=76669; max=76714"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - allocs/op",
            "value": 517,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=517; max=517"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - ns/op",
            "value": 163950,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=160390; max=164909"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - B/op",
            "value": 1222973,
            "unit": "B/op",
            "extra": "median of 5 runs; min=1.222838e+06; max=1.223065e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 207,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=206; max=207"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - ns/op",
            "value": 871924,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=800245; max=904756"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - B/op",
            "value": 1055613,
            "unit": "B/op",
            "extra": "median of 5 runs; min=1.052488e+06; max=1.055812e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - allocs/op",
            "value": 156,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=154; max=156"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - ns/op",
            "value": 709285,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=538395; max=775462"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - B/op",
            "value": 1055640,
            "unit": "B/op",
            "extra": "median of 5 runs; min=1.053587e+06; max=1.055989e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - allocs/op",
            "value": 155,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=154; max=155"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - ns/op",
            "value": 717631,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=709061; max=756712"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - B/op",
            "value": 196259,
            "unit": "B/op",
            "extra": "median of 5 runs; min=196242; max=196279"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 313,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=313; max=313"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - ns/op",
            "value": 205653,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=197627; max=209241"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - B/op",
            "value": 132787,
            "unit": "B/op",
            "extra": "median of 5 runs; min=132769; max=132794"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - allocs/op",
            "value": 205,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=205; max=205"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - ns/op",
            "value": 104609,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=93387; max=105923"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - B/op",
            "value": 132678,
            "unit": "B/op",
            "extra": "median of 5 runs; min=132652; max=132681"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - allocs/op",
            "value": 202,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=202; max=202"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - ns/op",
            "value": 94658,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=93736; max=100588"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - B/op",
            "value": 48818608,
            "unit": "B/op",
            "extra": "median of 5 runs; min=4.881597e+07; max=4.8822161e+07"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 1671,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=1670; max=1673"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - ns/op",
            "value": 4891118,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=4.855013e+06; max=5.039193e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - B/op",
            "value": 10162798,
            "unit": "B/op",
            "extra": "median of 5 runs; min=1.0162285e+07; max=1.0163022e+07"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - allocs/op",
            "value": 1143,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=1143; max=1143"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - ns/op",
            "value": 1201508,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=1.177217e+06; max=1.220103e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - B/op",
            "value": 10162182,
            "unit": "B/op",
            "extra": "median of 5 runs; min=1.0161938e+07; max=1.0162856e+07"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - allocs/op",
            "value": 1118,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=1118; max=1118"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - ns/op",
            "value": 1186351,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=1.183383e+06; max=1.206903e+06"
          }
        ]
      }
    ]
  }
}