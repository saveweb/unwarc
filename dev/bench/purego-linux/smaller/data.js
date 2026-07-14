window.BENCHMARK_DATA = {
  "lastUpdate": 1784067816528,
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
        "date": 1784067430791,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - B/op",
            "value": 262847,
            "unit": "B/op",
            "extra": "median of 5 runs; min=262760; max=262883"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 269,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=269; max=269"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - ns/op",
            "value": 337066,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=336848; max=339114"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - B/op",
            "value": 132444,
            "unit": "B/op",
            "extra": "median of 5 runs; min=132435; max=132454"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - allocs/op",
            "value": 197,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=197; max=197"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - ns/op",
            "value": 192755,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=191800; max=198272"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - B/op",
            "value": 132348,
            "unit": "B/op",
            "extra": "median of 5 runs; min=132343; max=132349"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - allocs/op",
            "value": 194,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=194; max=194"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - ns/op",
            "value": 195836,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=194981; max=198040"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - B/op",
            "value": 513651,
            "unit": "B/op",
            "extra": "median of 5 runs; min=513629; max=513677"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 804,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=804; max=804"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - ns/op",
            "value": 385136,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=383422; max=385852"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - B/op",
            "value": 77078,
            "unit": "B/op",
            "extra": "median of 5 runs; min=77066; max=77089"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - allocs/op",
            "value": 534,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=534; max=534"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - ns/op",
            "value": 134753,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=134513; max=135296"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - B/op",
            "value": 76531,
            "unit": "B/op",
            "extra": "median of 5 runs; min=76520; max=76535"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - allocs/op",
            "value": 517,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=517; max=517"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - ns/op",
            "value": 134518,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=133864; max=134799"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - B/op",
            "value": 1222464,
            "unit": "B/op",
            "extra": "median of 5 runs; min=1.222394e+06; max=1.222555e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 206,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=205; max=206"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - ns/op",
            "value": 357777,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=347433; max=367457"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - B/op",
            "value": 1055213,
            "unit": "B/op",
            "extra": "median of 5 runs; min=1.055039e+06; max=1.055297e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - allocs/op",
            "value": 155,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=155; max=155"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - ns/op",
            "value": 285537,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=278685; max=300386"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - B/op",
            "value": 1055329,
            "unit": "B/op",
            "extra": "median of 5 runs; min=1.055242e+06; max=1.055394e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - allocs/op",
            "value": 154,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=154; max=154"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - ns/op",
            "value": 301262,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=295028; max=310447"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - B/op",
            "value": 195720,
            "unit": "B/op",
            "extra": "median of 5 runs; min=195715; max=195723"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 313,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=313; max=313"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - ns/op",
            "value": 100761,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=99466; max=101216"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - B/op",
            "value": 132647,
            "unit": "B/op",
            "extra": "median of 5 runs; min=132646; max=132654"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - allocs/op",
            "value": 205,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=205; max=205"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - ns/op",
            "value": 52592,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=52218; max=53047"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - B/op",
            "value": 132552,
            "unit": "B/op",
            "extra": "median of 5 runs; min=132544; max=132559"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - allocs/op",
            "value": 202,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=202; max=202"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - ns/op",
            "value": 53176,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=52896; max=53284"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - B/op",
            "value": 48825161,
            "unit": "B/op",
            "extra": "median of 5 runs; min=4.8824136e+07; max=4.8826941e+07"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 1671,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=1671; max=1672"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - ns/op",
            "value": 4075200,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=3.916307e+06; max=4.724534e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - B/op",
            "value": 10162660,
            "unit": "B/op",
            "extra": "median of 5 runs; min=1.0162253e+07; max=1.0162914e+07"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - allocs/op",
            "value": 1141,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=1141; max=1142"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - ns/op",
            "value": 892703,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=879259; max=922543"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - B/op",
            "value": 10161322,
            "unit": "B/op",
            "extra": "median of 5 runs; min=1.0160297e+07; max=1.0161481e+07"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - allocs/op",
            "value": 1116,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=1116; max=1116"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - ns/op",
            "value": 891313,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=882665; max=900921"
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
        "date": 1784067815550,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - B/op",
            "value": 262796,
            "unit": "B/op",
            "extra": "median of 5 runs; min=262735; max=262810"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 269,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=269; max=269"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - ns/op",
            "value": 403178,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=397715; max=414992"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - B/op",
            "value": 132423,
            "unit": "B/op",
            "extra": "median of 5 runs; min=132396; max=132443"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - allocs/op",
            "value": 197,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=197; max=197"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - ns/op",
            "value": 228058,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=226037; max=234546"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - B/op",
            "value": 132314,
            "unit": "B/op",
            "extra": "median of 5 runs; min=132284; max=132345"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - allocs/op",
            "value": 194,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=194; max=194"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - ns/op",
            "value": 229428,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=228606; max=231437"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - B/op",
            "value": 513601,
            "unit": "B/op",
            "extra": "median of 5 runs; min=513534; max=513707"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 804,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=804; max=804"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - ns/op",
            "value": 448909,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=446481; max=449837"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - B/op",
            "value": 77040,
            "unit": "B/op",
            "extra": "median of 5 runs; min=77031; max=77055"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - allocs/op",
            "value": 534,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=534; max=534"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - ns/op",
            "value": 148529,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=147144; max=149049"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - B/op",
            "value": 76505,
            "unit": "B/op",
            "extra": "median of 5 runs; min=76499; max=76513"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - allocs/op",
            "value": 517,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=517; max=517"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - ns/op",
            "value": 149126,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=148634; max=149795"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - B/op",
            "value": 1221669,
            "unit": "B/op",
            "extra": "median of 5 runs; min=1.221583e+06; max=1.221828e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 205,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=205; max=205"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - ns/op",
            "value": 398536,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=392716; max=407541"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - B/op",
            "value": 1054719,
            "unit": "B/op",
            "extra": "median of 5 runs; min=1.054698e+06; max=1.054836e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - allocs/op",
            "value": 155,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=155; max=155"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - ns/op",
            "value": 320846,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=315725; max=323491"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - B/op",
            "value": 1054683,
            "unit": "B/op",
            "extra": "median of 5 runs; min=1.054521e+06; max=1.054709e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - allocs/op",
            "value": 154,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=154; max=154"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - ns/op",
            "value": 274437,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=269305; max=276826"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - B/op",
            "value": 195669,
            "unit": "B/op",
            "extra": "median of 5 runs; min=195663; max=195683"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 313,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=313; max=313"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - ns/op",
            "value": 125336,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=124921; max=126345"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - B/op",
            "value": 132617,
            "unit": "B/op",
            "extra": "median of 5 runs; min=132605; max=132620"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - allocs/op",
            "value": 205,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=205; max=205"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - ns/op",
            "value": 58572,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=58547; max=59426"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - B/op",
            "value": 132507,
            "unit": "B/op",
            "extra": "median of 5 runs; min=132504; max=132524"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - allocs/op",
            "value": 202,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=202; max=202"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - ns/op",
            "value": 59544,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=59456; max=60466"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - B/op",
            "value": 48812250,
            "unit": "B/op",
            "extra": "median of 5 runs; min=4.8810623e+07; max=4.8813917e+07"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 1665,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=1664; max=1666"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - ns/op",
            "value": 3947944,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=3.740532e+06; max=4.177031e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - B/op",
            "value": 10160294,
            "unit": "B/op",
            "extra": "median of 5 runs; min=1.0160037e+07; max=1.0160416e+07"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - allocs/op",
            "value": 1141,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=1141; max=1141"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - ns/op",
            "value": 830651,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=737357; max=1.353036e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - B/op",
            "value": 10159979,
            "unit": "B/op",
            "extra": "median of 5 runs; min=1.0159798e+07; max=1.016038e+07"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - allocs/op",
            "value": 1116,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=1116; max=1116"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - ns/op",
            "value": 780847,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=776761; max=781611"
          }
        ]
      }
    ]
  }
}