window.BENCHMARK_DATA = {
  "lastUpdate": 1784074666826,
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
          "id": "9cf8cd60c557cb9ff4182b7a58a65c6672b5b49a",
          "message": "Stabilize corpus benchmark alerts",
          "timestamp": "2026-07-15T00:32:24+02:00",
          "tree_id": "2387fb29a71b7c168569b4e1b8da3600d4455911",
          "url": "https://github.com/saveweb/unwarc/commit/9cf8cd60c557cb9ff4182b7a58a65c6672b5b49a"
        },
        "date": 1784068499944,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - B/op",
            "value": 262445,
            "unit": "B/op",
            "extra": "median of 7 runs; min=262444; max=262445"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 269,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=269; max=269"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - ns/op",
            "value": 378034,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=359696; max=440926"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - B/op",
            "value": 132198,
            "unit": "B/op",
            "extra": "median of 7 runs; min=132198; max=132198"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - allocs/op",
            "value": 197,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=197; max=197"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - ns/op",
            "value": 228454,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=188112; max=279307"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - B/op",
            "value": 132094,
            "unit": "B/op",
            "extra": "median of 7 runs; min=132094; max=132094"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - allocs/op",
            "value": 194,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=194; max=194"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - ns/op",
            "value": 252314,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=202029; max=315366"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - B/op",
            "value": 512865,
            "unit": "B/op",
            "extra": "median of 7 runs; min=512864; max=512865"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 804,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=804; max=804"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - ns/op",
            "value": 428083,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=375011; max=606562"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - B/op",
            "value": 76923,
            "unit": "B/op",
            "extra": "median of 7 runs; min=76923; max=76923"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - allocs/op",
            "value": 534,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=534; max=534"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - ns/op",
            "value": 154055,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=133901; max=162015"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - B/op",
            "value": 76387,
            "unit": "B/op",
            "extra": "median of 7 runs; min=76387; max=76387"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - allocs/op",
            "value": 517,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=517; max=517"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - ns/op",
            "value": 142138,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=123565; max=177110"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - B/op",
            "value": 1220370,
            "unit": "B/op",
            "extra": "median of 7 runs; min=1.220349e+06; max=1.220373e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 209,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=209; max=209"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - ns/op",
            "value": 238491,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=228323; max=430762"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - B/op",
            "value": 1052288,
            "unit": "B/op",
            "extra": "median of 7 runs; min=1.052285e+06; max=1.052291e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - allocs/op",
            "value": 156,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=156; max=156"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - ns/op",
            "value": 174116,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=165441; max=301557"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - B/op",
            "value": 1052273,
            "unit": "B/op",
            "extra": "median of 7 runs; min=1.052271e+06; max=1.052274e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - allocs/op",
            "value": 155,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=155; max=155"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - ns/op",
            "value": 176498,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=172440; max=192786"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - B/op",
            "value": 200029,
            "unit": "B/op",
            "extra": "median of 7 runs; min=200029; max=200029"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 321,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=321; max=321"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - ns/op",
            "value": 115559,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=114250; max=160854"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - B/op",
            "value": 133511,
            "unit": "B/op",
            "extra": "median of 7 runs; min=133511; max=133512"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - allocs/op",
            "value": 207,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=207; max=207"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - ns/op",
            "value": 52391,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=50758; max=82752"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - B/op",
            "value": 133407,
            "unit": "B/op",
            "extra": "median of 7 runs; min=133407; max=133408"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - allocs/op",
            "value": 204,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=204; max=204"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - ns/op",
            "value": 52583,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=50770; max=55733"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - B/op",
            "value": 48811503,
            "unit": "B/op",
            "extra": "median of 7 runs; min=4.8811409e+07; max=4.8811599e+07"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 1697,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=1697; max=1697"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - ns/op",
            "value": 2297549,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=2.188758e+06; max=3.775251e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - B/op",
            "value": 10158510,
            "unit": "B/op",
            "extra": "median of 7 runs; min=1.0158502e+07; max=1.0158514e+07"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - allocs/op",
            "value": 1145,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=1145; max=1145"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - ns/op",
            "value": 637539,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=606638; max=697808"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - B/op",
            "value": 10157700,
            "unit": "B/op",
            "extra": "median of 7 runs; min=1.0157696e+07; max=1.0157715e+07"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - allocs/op",
            "value": 1120,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=1119; max=1120"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - ns/op",
            "value": 1140120,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=602309; max=1.249905e+06"
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
          "id": "a2af27d8cc9a20dc01403f9b708d09157451ebe9",
          "message": "Recommend warcsource for whole-file compressed WARC inputs",
          "timestamp": "2026-07-15T01:01:02+02:00",
          "tree_id": "2360fd26a9a681d7c407ed40cf2aaf5494e29847",
          "url": "https://github.com/saveweb/unwarc/commit/a2af27d8cc9a20dc01403f9b708d09157451ebe9"
        },
        "date": 1784070212276,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - B/op",
            "value": 262444,
            "unit": "B/op",
            "extra": "median of 7 runs; min=262444; max=262444"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 269,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=269; max=269"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - ns/op",
            "value": 327888,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=311209; max=352196"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - B/op",
            "value": 132198,
            "unit": "B/op",
            "extra": "median of 7 runs; min=132198; max=132198"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - allocs/op",
            "value": 197,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=197; max=197"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - ns/op",
            "value": 161876,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=155149; max=181283"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - B/op",
            "value": 132094,
            "unit": "B/op",
            "extra": "median of 7 runs; min=132094; max=132094"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - allocs/op",
            "value": 194,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=194; max=194"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - ns/op",
            "value": 171287,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=170128; max=175855"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - B/op",
            "value": 512865,
            "unit": "B/op",
            "extra": "median of 7 runs; min=512864; max=512865"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 804,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=804; max=804"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - ns/op",
            "value": 366481,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=339724; max=382458"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - B/op",
            "value": 76923,
            "unit": "B/op",
            "extra": "median of 7 runs; min=76923; max=76923"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - allocs/op",
            "value": 534,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=534; max=534"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - ns/op",
            "value": 116187,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=108402; max=127085"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - B/op",
            "value": 76387,
            "unit": "B/op",
            "extra": "median of 7 runs; min=76387; max=76387"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - allocs/op",
            "value": 517,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=517; max=517"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - ns/op",
            "value": 122738,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=116628; max=128873"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - B/op",
            "value": 1220374,
            "unit": "B/op",
            "extra": "median of 7 runs; min=1.220372e+06; max=1.220376e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 209,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=209; max=209"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - ns/op",
            "value": 212945,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=189478; max=226429"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - B/op",
            "value": 1052286,
            "unit": "B/op",
            "extra": "median of 7 runs; min=1.052285e+06; max=1.052289e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - allocs/op",
            "value": 156,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=156; max=156"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - ns/op",
            "value": 161297,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=143100; max=196852"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - B/op",
            "value": 1052269,
            "unit": "B/op",
            "extra": "median of 7 runs; min=1.052263e+06; max=1.052273e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - allocs/op",
            "value": 155,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=155; max=155"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - ns/op",
            "value": 171968,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=150673; max=177404"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - B/op",
            "value": 200029,
            "unit": "B/op",
            "extra": "median of 7 runs; min=200029; max=200029"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 321,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=321; max=321"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - ns/op",
            "value": 106791,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=100757; max=122735"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - B/op",
            "value": 133511,
            "unit": "B/op",
            "extra": "median of 7 runs; min=133510; max=133511"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - allocs/op",
            "value": 207,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=207; max=207"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - ns/op",
            "value": 47032,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=44949; max=53473"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - B/op",
            "value": 133407,
            "unit": "B/op",
            "extra": "median of 7 runs; min=133406; max=133407"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - allocs/op",
            "value": 204,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=204; max=204"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - ns/op",
            "value": 45462,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=43697; max=49515"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - B/op",
            "value": 48811440,
            "unit": "B/op",
            "extra": "median of 7 runs; min=4.8811426e+07; max=4.8811572e+07"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 1697,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=1697; max=1697"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - ns/op",
            "value": 1912895,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=1.780942e+06; max=2.37301e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - B/op",
            "value": 10158508,
            "unit": "B/op",
            "extra": "median of 7 runs; min=1.0158502e+07; max=1.0158515e+07"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - allocs/op",
            "value": 1145,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=1145; max=1145"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - ns/op",
            "value": 617079,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=594928; max=643248"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - B/op",
            "value": 10157705,
            "unit": "B/op",
            "extra": "median of 7 runs; min=1.0157698e+07; max=1.015771e+07"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - allocs/op",
            "value": 1120,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=1119; max=1120"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - ns/op",
            "value": 614695,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=571850; max=677164"
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
          "id": "326c95978ee6dba6e2518064cb998999a5273653",
          "message": "Update decoder package reference",
          "timestamp": "2026-07-15T01:48:12+02:00",
          "tree_id": "0ba712c102bcc1faa8a00ec4160339ae93317f5b",
          "url": "https://github.com/saveweb/unwarc/commit/326c95978ee6dba6e2518064cb998999a5273653"
        },
        "date": 1784073039141,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - B/op",
            "value": 262444,
            "unit": "B/op",
            "extra": "median of 7 runs; min=262444; max=262445"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 269,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=269; max=269"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - ns/op",
            "value": 409766,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=345774; max=561115"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - B/op",
            "value": 132198,
            "unit": "B/op",
            "extra": "median of 7 runs; min=132198; max=132198"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - allocs/op",
            "value": 197,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=197; max=197"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - ns/op",
            "value": 238428,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=185508; max=282234"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - B/op",
            "value": 132094,
            "unit": "B/op",
            "extra": "median of 7 runs; min=132094; max=132095"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - allocs/op",
            "value": 194,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=194; max=194"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - ns/op",
            "value": 222040,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=191132; max=286817"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - B/op",
            "value": 512864,
            "unit": "B/op",
            "extra": "median of 7 runs; min=512864; max=512865"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 804,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=804; max=804"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - ns/op",
            "value": 332161,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=329057; max=371479"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - B/op",
            "value": 76923,
            "unit": "B/op",
            "extra": "median of 7 runs; min=76923; max=76923"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - allocs/op",
            "value": 534,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=534; max=534"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - ns/op",
            "value": 118758,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=112220; max=121757"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - B/op",
            "value": 76387,
            "unit": "B/op",
            "extra": "median of 7 runs; min=76387; max=76388"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - allocs/op",
            "value": 517,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=517; max=517"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - ns/op",
            "value": 125333,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=115232; max=145710"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - B/op",
            "value": 1220372,
            "unit": "B/op",
            "extra": "median of 7 runs; min=1.220369e+06; max=1.220374e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 209,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=209; max=209"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - ns/op",
            "value": 180851,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=178727; max=185051"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - B/op",
            "value": 1052288,
            "unit": "B/op",
            "extra": "median of 7 runs; min=1.052284e+06; max=1.052291e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - allocs/op",
            "value": 156,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=156; max=156"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - ns/op",
            "value": 139543,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=136560; max=161091"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - B/op",
            "value": 1052269,
            "unit": "B/op",
            "extra": "median of 7 runs; min=1.052259e+06; max=1.052274e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - allocs/op",
            "value": 155,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=155; max=155"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - ns/op",
            "value": 169165,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=155757; max=241807"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - B/op",
            "value": 200029,
            "unit": "B/op",
            "extra": "median of 7 runs; min=200028; max=200029"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 321,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=321; max=321"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - ns/op",
            "value": 98124,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=95810; max=112327"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - B/op",
            "value": 133511,
            "unit": "B/op",
            "extra": "median of 7 runs; min=133511; max=133513"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - allocs/op",
            "value": 207,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=207; max=207"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - ns/op",
            "value": 42338,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=41665; max=46690"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - B/op",
            "value": 133407,
            "unit": "B/op",
            "extra": "median of 7 runs; min=133406; max=133409"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - allocs/op",
            "value": 204,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=204; max=204"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - ns/op",
            "value": 42621,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=42256; max=48187"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - B/op",
            "value": 48811490,
            "unit": "B/op",
            "extra": "median of 7 runs; min=4.8811433e+07; max=4.8811684e+07"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 1697,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=1697; max=1697"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - ns/op",
            "value": 1796328,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=1.744136e+06; max=2.089424e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - B/op",
            "value": 10158507,
            "unit": "B/op",
            "extra": "median of 7 runs; min=1.0158502e+07; max=1.0158527e+07"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - allocs/op",
            "value": 1145,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=1144; max=1145"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - ns/op",
            "value": 599363,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=529803; max=646853"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - B/op",
            "value": 10157715,
            "unit": "B/op",
            "extra": "median of 7 runs; min=1.0157693e+07; max=1.0157734e+07"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - allocs/op",
            "value": 1119,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=1119; max=1120"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - ns/op",
            "value": 538967,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=523386; max=652620"
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
          "id": "ef64ddc4e44b3b8bf654328a1a24e7e0cd04c3da",
          "message": "Add recommended default scanner options",
          "timestamp": "2026-07-15T02:15:30+02:00",
          "tree_id": "c8bfa504d56e5892027fe81b0032fa5a355e2fe5",
          "url": "https://github.com/saveweb/unwarc/commit/ef64ddc4e44b3b8bf654328a1a24e7e0cd04c3da"
        },
        "date": 1784074666534,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - B/op",
            "value": 262444,
            "unit": "B/op",
            "extra": "median of 7 runs; min=262444; max=262445"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 269,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=269; max=269"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - ns/op",
            "value": 319014,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=300403; max=325406"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - B/op",
            "value": 132198,
            "unit": "B/op",
            "extra": "median of 7 runs; min=132198; max=132198"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - allocs/op",
            "value": 197,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=197; max=197"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - ns/op",
            "value": 165915,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=155601; max=171895"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - B/op",
            "value": 132094,
            "unit": "B/op",
            "extra": "median of 7 runs; min=132094; max=132094"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - allocs/op",
            "value": 194,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=194; max=194"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - ns/op",
            "value": 166781,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=156270; max=177613"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - B/op",
            "value": 512864,
            "unit": "B/op",
            "extra": "median of 7 runs; min=512864; max=512864"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 804,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=804; max=804"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - ns/op",
            "value": 362851,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=343168; max=378689"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - B/op",
            "value": 76923,
            "unit": "B/op",
            "extra": "median of 7 runs; min=76923; max=76923"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - allocs/op",
            "value": 534,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=534; max=534"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - ns/op",
            "value": 114728,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=110076; max=117527"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - B/op",
            "value": 76387,
            "unit": "B/op",
            "extra": "median of 7 runs; min=76387; max=76387"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - allocs/op",
            "value": 517,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=517; max=517"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - ns/op",
            "value": 114875,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=109680; max=118723"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - B/op",
            "value": 1220374,
            "unit": "B/op",
            "extra": "median of 7 runs; min=1.220368e+06; max=1.220378e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 209,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=209; max=209"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - ns/op",
            "value": 206173,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=192246; max=210704"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - B/op",
            "value": 1052288,
            "unit": "B/op",
            "extra": "median of 7 runs; min=1.052275e+06; max=1.052289e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - allocs/op",
            "value": 156,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=156; max=156"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - ns/op",
            "value": 159845,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=142757; max=169581"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - B/op",
            "value": 1052270,
            "unit": "B/op",
            "extra": "median of 7 runs; min=1.052266e+06; max=1.052273e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - allocs/op",
            "value": 155,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=155; max=155"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - ns/op",
            "value": 162262,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=143033; max=178312"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - B/op",
            "value": 200028,
            "unit": "B/op",
            "extra": "median of 7 runs; min=200027; max=200028"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 321,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=321; max=321"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - ns/op",
            "value": 107101,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=100987; max=117001"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - B/op",
            "value": 133513,
            "unit": "B/op",
            "extra": "median of 7 runs; min=133511; max=133515"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - allocs/op",
            "value": 207,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=207; max=207"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - ns/op",
            "value": 46851,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=43574; max=49397"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - B/op",
            "value": 133406,
            "unit": "B/op",
            "extra": "median of 7 runs; min=133406; max=133408"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - allocs/op",
            "value": 204,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=204; max=204"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - ns/op",
            "value": 47810,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=44366; max=54506"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - B/op",
            "value": 48811443,
            "unit": "B/op",
            "extra": "median of 7 runs; min=4.8811428e+07; max=4.8811501e+07"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 1697,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=1697; max=1697"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - ns/op",
            "value": 1946907,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=1.823961e+06; max=2.016073e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - B/op",
            "value": 10158516,
            "unit": "B/op",
            "extra": "median of 7 runs; min=1.0158508e+07; max=1.0158517e+07"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - allocs/op",
            "value": 1145,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=1144; max=1145"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - ns/op",
            "value": 583735,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=545574; max=630835"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - B/op",
            "value": 10157704,
            "unit": "B/op",
            "extra": "median of 7 runs; min=1.0157698e+07; max=1.0157717e+07"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - allocs/op",
            "value": 1120,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=1119; max=1120"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - ns/op",
            "value": 595498,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=567009; max=625350"
          }
        ]
      }
    ]
  }
}