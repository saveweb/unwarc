window.BENCHMARK_DATA = {
  "lastUpdate": 1784078480571,
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
          "id": "9cf8cd60c557cb9ff4182b7a58a65c6672b5b49a",
          "message": "Stabilize corpus benchmark alerts",
          "timestamp": "2026-07-15T00:32:24+02:00",
          "tree_id": "2387fb29a71b7c168569b4e1b8da3600d4455911",
          "url": "https://github.com/saveweb/unwarc/commit/9cf8cd60c557cb9ff4182b7a58a65c6672b5b49a"
        },
        "date": 1784068513330,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - B/op",
            "value": 263034,
            "unit": "B/op",
            "extra": "median of 7 runs; min=263033; max=263034"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 269,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=269; max=269"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - ns/op",
            "value": 507992,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=500802; max=517711"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - B/op",
            "value": 132349,
            "unit": "B/op",
            "extra": "median of 7 runs; min=132348; max=132349"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - allocs/op",
            "value": 197,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=197; max=197"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - ns/op",
            "value": 265217,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=263435; max=268199"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - B/op",
            "value": 132245,
            "unit": "B/op",
            "extra": "median of 7 runs; min=132245; max=132245"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - allocs/op",
            "value": 194,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=194; max=194"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - ns/op",
            "value": 264726,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=263544; max=274291"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - B/op",
            "value": 513514,
            "unit": "B/op",
            "extra": "median of 7 runs; min=513514; max=513515"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 804,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=804; max=804"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - ns/op",
            "value": 687840,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=675661; max=700043"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - B/op",
            "value": 77071,
            "unit": "B/op",
            "extra": "median of 7 runs; min=77071; max=77071"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - allocs/op",
            "value": 534,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=534; max=534"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - ns/op",
            "value": 196269,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=193794; max=199120"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - B/op",
            "value": 76535,
            "unit": "B/op",
            "extra": "median of 7 runs; min=76535; max=76535"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - allocs/op",
            "value": 517,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=517; max=517"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - ns/op",
            "value": 196299,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=192935; max=198828"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - B/op",
            "value": 1218316,
            "unit": "B/op",
            "extra": "median of 7 runs; min=1.218316e+06; max=1.21832e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 204,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=204; max=204"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - ns/op",
            "value": 311245,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=303687; max=318163"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - B/op",
            "value": 1051248,
            "unit": "B/op",
            "extra": "median of 7 runs; min=1.051248e+06; max=1.051248e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - allocs/op",
            "value": 154,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=154; max=154"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - ns/op",
            "value": 202684,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=197639; max=204261"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - B/op",
            "value": 1051232,
            "unit": "B/op",
            "extra": "median of 7 runs; min=1.051232e+06; max=1.051248e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - allocs/op",
            "value": 153,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=153; max=153"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - ns/op",
            "value": 209550,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=202272; max=219058"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - B/op",
            "value": 195910,
            "unit": "B/op",
            "extra": "median of 7 runs; min=195904; max=195910"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 313,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=313; max=313"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - ns/op",
            "value": 253566,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=234911; max=256251"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - B/op",
            "value": 132480,
            "unit": "B/op",
            "extra": "median of 7 runs; min=132480; max=132481"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - allocs/op",
            "value": 205,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=205; max=205"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - ns/op",
            "value": 74235,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=72441; max=78890"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - B/op",
            "value": 132378,
            "unit": "B/op",
            "extra": "median of 7 runs; min=132376; max=132379"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - allocs/op",
            "value": 202,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=202; max=202"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - ns/op",
            "value": 80019,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=75351; max=82695"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - B/op",
            "value": 48794789,
            "unit": "B/op",
            "extra": "median of 7 runs; min=4.8794729e+07; max=4.8794837e+07"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 1660,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=1659; max=1661"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - ns/op",
            "value": 3411238,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=3.293006e+06; max=3.471703e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - B/op",
            "value": 10157436,
            "unit": "B/op",
            "extra": "median of 7 runs; min=1.0157433e+07; max=1.0157568e+07"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - allocs/op",
            "value": 1142,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=1141; max=1142"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - ns/op",
            "value": 802849,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=780837; max=820451"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - B/op",
            "value": 10156624,
            "unit": "B/op",
            "extra": "median of 7 runs; min=1.0156623e+07; max=1.0156629e+07"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - allocs/op",
            "value": 1117,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=1117; max=1117"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - ns/op",
            "value": 792911,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=775824; max=804841"
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
        "date": 1784070225650,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - B/op",
            "value": 263034,
            "unit": "B/op",
            "extra": "median of 7 runs; min=263033; max=263035"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 269,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=269; max=269"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - ns/op",
            "value": 584141,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=568889; max=620199"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - B/op",
            "value": 132349,
            "unit": "B/op",
            "extra": "median of 7 runs; min=132348; max=132349"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - allocs/op",
            "value": 197,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=197; max=197"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - ns/op",
            "value": 288783,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=284284; max=296605"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - B/op",
            "value": 132245,
            "unit": "B/op",
            "extra": "median of 7 runs; min=132245; max=132245"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - allocs/op",
            "value": 194,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=194; max=194"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - ns/op",
            "value": 290321,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=284791; max=293673"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - B/op",
            "value": 513515,
            "unit": "B/op",
            "extra": "median of 7 runs; min=513514; max=513516"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 804,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=804; max=804"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - ns/op",
            "value": 909371,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=892143; max=945743"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - B/op",
            "value": 77071,
            "unit": "B/op",
            "extra": "median of 7 runs; min=77071; max=77071"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - allocs/op",
            "value": 534,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=534; max=534"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - ns/op",
            "value": 216142,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=213025; max=226983"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - B/op",
            "value": 76535,
            "unit": "B/op",
            "extra": "median of 7 runs; min=76535; max=76535"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - allocs/op",
            "value": 517,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=517; max=517"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - ns/op",
            "value": 216565,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=214804; max=232816"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - B/op",
            "value": 1218316,
            "unit": "B/op",
            "extra": "median of 7 runs; min=1.218316e+06; max=1.218317e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 204,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=204; max=204"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - ns/op",
            "value": 353214,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=344414; max=359144"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - B/op",
            "value": 1051248,
            "unit": "B/op",
            "extra": "median of 7 runs; min=1.051248e+06; max=1.051248e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - allocs/op",
            "value": 154,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=154; max=154"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - ns/op",
            "value": 233198,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=228220; max=238555"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - B/op",
            "value": 1051232,
            "unit": "B/op",
            "extra": "median of 7 runs; min=1.051232e+06; max=1.051232e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - allocs/op",
            "value": 153,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=153; max=153"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - ns/op",
            "value": 235064,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=232463; max=239049"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - B/op",
            "value": 195910,
            "unit": "B/op",
            "extra": "median of 7 runs; min=195910; max=195910"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 313,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=313; max=313"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - ns/op",
            "value": 328242,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=323381; max=332282"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - B/op",
            "value": 132483,
            "unit": "B/op",
            "extra": "median of 7 runs; min=132480; max=132484"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - allocs/op",
            "value": 205,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=205; max=205"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - ns/op",
            "value": 102123,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=95439; max=108704"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - B/op",
            "value": 132380,
            "unit": "B/op",
            "extra": "median of 7 runs; min=132379; max=132380"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - allocs/op",
            "value": 202,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=202; max=202"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - ns/op",
            "value": 108566,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=105526; max=112120"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - B/op",
            "value": 48794811,
            "unit": "B/op",
            "extra": "median of 7 runs; min=4.8794757e+07; max=4.8795105e+07"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 1660,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=1660; max=1661"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - ns/op",
            "value": 4551839,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=4.502456e+06; max=4.941983e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - B/op",
            "value": 10157434,
            "unit": "B/op",
            "extra": "median of 7 runs; min=1.0157433e+07; max=1.0157481e+07"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - allocs/op",
            "value": 1142,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=1141; max=1142"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - ns/op",
            "value": 934043,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=894247; max=966878"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - B/op",
            "value": 10156626,
            "unit": "B/op",
            "extra": "median of 7 runs; min=1.0156625e+07; max=1.0156629e+07"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - allocs/op",
            "value": 1117,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=1117; max=1117"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - ns/op",
            "value": 927035,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=903265; max=1.011349e+06"
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
        "date": 1784073049546,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - B/op",
            "value": 263034,
            "unit": "B/op",
            "extra": "median of 7 runs; min=263033; max=263035"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 269,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=269; max=269"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - ns/op",
            "value": 581071,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=572190; max=600111"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - B/op",
            "value": 132349,
            "unit": "B/op",
            "extra": "median of 7 runs; min=132349; max=132349"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - allocs/op",
            "value": 197,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=197; max=197"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - ns/op",
            "value": 292309,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=283341; max=410100"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - B/op",
            "value": 132245,
            "unit": "B/op",
            "extra": "median of 7 runs; min=132245; max=132245"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - allocs/op",
            "value": 194,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=194; max=194"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - ns/op",
            "value": 289919,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=288146; max=290942"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - B/op",
            "value": 513515,
            "unit": "B/op",
            "extra": "median of 7 runs; min=513514; max=513515"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 804,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=804; max=804"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - ns/op",
            "value": 914093,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=900417; max=1.164891e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - B/op",
            "value": 77071,
            "unit": "B/op",
            "extra": "median of 7 runs; min=77071; max=77072"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - allocs/op",
            "value": 534,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=534; max=534"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - ns/op",
            "value": 222229,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=216126; max=227402"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - B/op",
            "value": 76535,
            "unit": "B/op",
            "extra": "median of 7 runs; min=76535; max=76535"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - allocs/op",
            "value": 517,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=517; max=517"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - ns/op",
            "value": 219121,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=215738; max=224664"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - B/op",
            "value": 1218316,
            "unit": "B/op",
            "extra": "median of 7 runs; min=1.218316e+06; max=1.218317e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 204,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=204; max=204"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - ns/op",
            "value": 354356,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=346670; max=357653"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - B/op",
            "value": 1051248,
            "unit": "B/op",
            "extra": "median of 7 runs; min=1.051248e+06; max=1.051248e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - allocs/op",
            "value": 154,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=154; max=154"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - ns/op",
            "value": 230016,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=227825; max=231525"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - B/op",
            "value": 1051232,
            "unit": "B/op",
            "extra": "median of 7 runs; min=1.051232e+06; max=1.051237e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - allocs/op",
            "value": 153,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=153; max=153"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - ns/op",
            "value": 230029,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=224445; max=232530"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - B/op",
            "value": 195910,
            "unit": "B/op",
            "extra": "median of 7 runs; min=195910; max=195910"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 313,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=313; max=313"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - ns/op",
            "value": 322134,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=317945; max=326245"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - B/op",
            "value": 132484,
            "unit": "B/op",
            "extra": "median of 7 runs; min=132483; max=132484"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - allocs/op",
            "value": 205,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=205; max=205"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - ns/op",
            "value": 102903,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=100092; max=105972"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - B/op",
            "value": 132380,
            "unit": "B/op",
            "extra": "median of 7 runs; min=132377; max=132380"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - allocs/op",
            "value": 202,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=202; max=202"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - ns/op",
            "value": 108415,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=100171; max=135125"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - B/op",
            "value": 48794849,
            "unit": "B/op",
            "extra": "median of 7 runs; min=4.8794796e+07; max=4.8794953e+07"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 1661,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=1660; max=1661"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - ns/op",
            "value": 5009987,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=4.909547e+06; max=5.383787e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - B/op",
            "value": 10157438,
            "unit": "B/op",
            "extra": "median of 7 runs; min=1.0157433e+07; max=1.0157442e+07"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - allocs/op",
            "value": 1142,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=1142; max=1142"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - ns/op",
            "value": 1022851,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=971433; max=1.036182e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - B/op",
            "value": 10156628,
            "unit": "B/op",
            "extra": "median of 7 runs; min=1.0156626e+07; max=1.015663e+07"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - allocs/op",
            "value": 1117,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=1117; max=1117"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - ns/op",
            "value": 980573,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=960135; max=1.039844e+06"
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
        "date": 1784074676903,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - B/op",
            "value": 263034,
            "unit": "B/op",
            "extra": "median of 7 runs; min=263033; max=263034"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 269,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=269; max=269"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - ns/op",
            "value": 561104,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=555198; max=570263"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - B/op",
            "value": 132349,
            "unit": "B/op",
            "extra": "median of 7 runs; min=132348; max=132349"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - allocs/op",
            "value": 197,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=197; max=197"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - ns/op",
            "value": 281314,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=278248; max=290389"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - B/op",
            "value": 132245,
            "unit": "B/op",
            "extra": "median of 7 runs; min=132245; max=132245"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - allocs/op",
            "value": 194,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=194; max=194"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - ns/op",
            "value": 282014,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=279798; max=290584"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - B/op",
            "value": 513514,
            "unit": "B/op",
            "extra": "median of 7 runs; min=513514; max=513515"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 804,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=804; max=804"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - ns/op",
            "value": 885596,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=877620; max=906784"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - B/op",
            "value": 77071,
            "unit": "B/op",
            "extra": "median of 7 runs; min=77071; max=77071"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - allocs/op",
            "value": 534,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=534; max=534"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - ns/op",
            "value": 214342,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=211040; max=215117"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - B/op",
            "value": 76535,
            "unit": "B/op",
            "extra": "median of 7 runs; min=76535; max=76535"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - allocs/op",
            "value": 517,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=517; max=517"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - ns/op",
            "value": 219430,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=213832; max=222611"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - B/op",
            "value": 1218316,
            "unit": "B/op",
            "extra": "median of 7 runs; min=1.218316e+06; max=1.218317e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 204,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=204; max=204"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - ns/op",
            "value": 339904,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=336658; max=345357"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - B/op",
            "value": 1051248,
            "unit": "B/op",
            "extra": "median of 7 runs; min=1.051248e+06; max=1.051253e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - allocs/op",
            "value": 154,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=154; max=154"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - ns/op",
            "value": 228775,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=226758; max=235461"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - B/op",
            "value": 1051232,
            "unit": "B/op",
            "extra": "median of 7 runs; min=1.051232e+06; max=1.051232e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - allocs/op",
            "value": 153,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=153; max=153"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - ns/op",
            "value": 231527,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=229132; max=238395"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - B/op",
            "value": 195910,
            "unit": "B/op",
            "extra": "median of 7 runs; min=195910; max=195910"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 313,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=313; max=313"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - ns/op",
            "value": 315290,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=312184; max=322685"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - B/op",
            "value": 132484,
            "unit": "B/op",
            "extra": "median of 7 runs; min=132480; max=132484"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - allocs/op",
            "value": 205,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=205; max=205"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - ns/op",
            "value": 102080,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=93352; max=104601"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - B/op",
            "value": 132380,
            "unit": "B/op",
            "extra": "median of 7 runs; min=132379; max=132380"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - allocs/op",
            "value": 202,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=202; max=202"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - ns/op",
            "value": 106594,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=104558; max=107948"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - B/op",
            "value": 48794757,
            "unit": "B/op",
            "extra": "median of 7 runs; min=4.879471e+07; max=4.8794809e+07"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 1660,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=1659; max=1660"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - ns/op",
            "value": 4310195,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=4.241643e+06; max=4.564581e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - B/op",
            "value": 10157444,
            "unit": "B/op",
            "extra": "median of 7 runs; min=1.0157444e+07; max=1.0157447e+07"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - allocs/op",
            "value": 1142,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=1142; max=1142"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - ns/op",
            "value": 868082,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=848255; max=912681"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - B/op",
            "value": 10156636,
            "unit": "B/op",
            "extra": "median of 7 runs; min=1.0156636e+07; max=1.0156833e+07"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - allocs/op",
            "value": 1117,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=1116; max=1117"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - ns/op",
            "value": 844276,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=826792; max=887411"
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
          "id": "3d4e39eb2bca1aa028a798413054526ed1851fb9",
          "message": "Remove native compression backends",
          "timestamp": "2026-07-15T03:09:22+02:00",
          "tree_id": "66e8870db7157ea13445a06d941f00c5ba8a37a3",
          "url": "https://github.com/saveweb/unwarc/commit/3d4e39eb2bca1aa028a798413054526ed1851fb9"
        },
        "date": 1784077928833,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - B/op",
            "value": 184930,
            "unit": "B/op",
            "extra": "median of 7 runs; min=184930; max=184931"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 254,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=254; max=254"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - ns/op",
            "value": 562735,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=548997; max=573194"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - B/op",
            "value": 54245,
            "unit": "B/op",
            "extra": "median of 7 runs; min=54245; max=54245"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - allocs/op",
            "value": 182,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=182; max=182"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - ns/op",
            "value": 279468,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=273736; max=285496"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - B/op",
            "value": 54141,
            "unit": "B/op",
            "extra": "median of 7 runs; min=54141; max=54141"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - allocs/op",
            "value": 179,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=179; max=179"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - ns/op",
            "value": 273820,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=268268; max=283856"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - B/op",
            "value": 512794,
            "unit": "B/op",
            "extra": "median of 7 runs; min=512794; max=512796"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 803,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=803; max=803"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - ns/op",
            "value": 922291,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=909657; max=946591"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - B/op",
            "value": 76351,
            "unit": "B/op",
            "extra": "median of 7 runs; min=76351; max=76351"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - allocs/op",
            "value": 533,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=533; max=533"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - ns/op",
            "value": 218905,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=215369; max=223211"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - B/op",
            "value": 75815,
            "unit": "B/op",
            "extra": "median of 7 runs; min=75815; max=75815"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - allocs/op",
            "value": 516,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=516; max=516"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - ns/op",
            "value": 213672,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=212104; max=217866"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - B/op",
            "value": 1218301,
            "unit": "B/op",
            "extra": "median of 7 runs; min=1.218299e+06; max=1.218304e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 204,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=204; max=204"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - ns/op",
            "value": 367257,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=364027; max=375367"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - B/op",
            "value": 1051232,
            "unit": "B/op",
            "extra": "median of 7 runs; min=1.051232e+06; max=1.051232e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - allocs/op",
            "value": 154,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=154; max=154"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - ns/op",
            "value": 237634,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=235674; max=243229"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - B/op",
            "value": 1051216,
            "unit": "B/op",
            "extra": "median of 7 runs; min=1.051216e+06; max=1.051216e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - allocs/op",
            "value": 153,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=153; max=153"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - ns/op",
            "value": 247160,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=242049; max=255691"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - B/op",
            "value": 195894,
            "unit": "B/op",
            "extra": "median of 7 runs; min=195894; max=195894"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 313,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=313; max=313"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - ns/op",
            "value": 327877,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=320123; max=339442"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - B/op",
            "value": 132468,
            "unit": "B/op",
            "extra": "median of 7 runs; min=132464; max=132468"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - allocs/op",
            "value": 205,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=205; max=205"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - ns/op",
            "value": 104945,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=97525; max=108565"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - B/op",
            "value": 132364,
            "unit": "B/op",
            "extra": "median of 7 runs; min=132364; max=132364"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - allocs/op",
            "value": 202,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=202; max=202"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - ns/op",
            "value": 109375,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=108527; max=111531"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - B/op",
            "value": 48794759,
            "unit": "B/op",
            "extra": "median of 7 runs; min=4.8794735e+07; max=4.8794796e+07"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 1660,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=1660; max=1660"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - ns/op",
            "value": 5161959,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=5.064472e+06; max=5.207231e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - B/op",
            "value": 10157429,
            "unit": "B/op",
            "extra": "median of 7 runs; min=1.0157425e+07; max=1.015748e+07"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - allocs/op",
            "value": 1142,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=1141; max=1142"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - ns/op",
            "value": 1115893,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=1.097527e+06; max=1.157644e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - B/op",
            "value": 10156614,
            "unit": "B/op",
            "extra": "median of 7 runs; min=1.0156612e+07; max=1.0156866e+07"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - allocs/op",
            "value": 1117,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=1116; max=1117"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - ns/op",
            "value": 1101642,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=1.075101e+06; max=1.194026e+06"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "30341059+yzqzss@users.noreply.github.com",
            "name": "yzqzss",
            "username": "yzqzss"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7910ac318a9a9081b9538f58bb0d19c0c1f3be6b",
          "message": "update README\n\nUpdated terminology in README for clarity.",
          "timestamp": "2026-07-15T03:18:48+02:00",
          "tree_id": "94654f2c00b47a760d438106e911ea8050102e67",
          "url": "https://github.com/saveweb/unwarc/commit/7910ac318a9a9081b9538f58bb0d19c0c1f3be6b"
        },
        "date": 1784078480288,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - B/op",
            "value": 184930,
            "unit": "B/op",
            "extra": "median of 7 runs; min=184930; max=184930"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 254,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=254; max=254"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - ns/op",
            "value": 449919,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=432152; max=530631"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - B/op",
            "value": 54245,
            "unit": "B/op",
            "extra": "median of 7 runs; min=54245; max=54245"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - allocs/op",
            "value": 182,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=182; max=182"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - ns/op",
            "value": 225817,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=218544; max=271838"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - B/op",
            "value": 54141,
            "unit": "B/op",
            "extra": "median of 7 runs; min=54141; max=54141"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - allocs/op",
            "value": 179,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=179; max=179"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - ns/op",
            "value": 222372,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=220166; max=228577"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - B/op",
            "value": 512794,
            "unit": "B/op",
            "extra": "median of 7 runs; min=512794; max=512795"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 803,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=803; max=803"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - ns/op",
            "value": 623804,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=616762; max=635841"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - B/op",
            "value": 76351,
            "unit": "B/op",
            "extra": "median of 7 runs; min=76351; max=76351"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - allocs/op",
            "value": 533,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=533; max=533"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - ns/op",
            "value": 184651,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=182347; max=188568"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - B/op",
            "value": 75815,
            "unit": "B/op",
            "extra": "median of 7 runs; min=75815; max=75815"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - allocs/op",
            "value": 516,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=516; max=516"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - ns/op",
            "value": 184990,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=183501; max=191113"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - B/op",
            "value": 1218300,
            "unit": "B/op",
            "extra": "median of 7 runs; min=1.218297e+06; max=1.218306e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 204,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=204; max=204"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - ns/op",
            "value": 342190,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=339320; max=357738"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - B/op",
            "value": 1051232,
            "unit": "B/op",
            "extra": "median of 7 runs; min=1.051232e+06; max=1.051232e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - allocs/op",
            "value": 154,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=154; max=154"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - ns/op",
            "value": 242680,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=236590; max=248325"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - B/op",
            "value": 1051216,
            "unit": "B/op",
            "extra": "median of 7 runs; min=1.051216e+06; max=1.051226e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - allocs/op",
            "value": 153,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=153; max=153"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - ns/op",
            "value": 248134,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=243302; max=253930"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - B/op",
            "value": 195894,
            "unit": "B/op",
            "extra": "median of 7 runs; min=195894; max=195894"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 313,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=313; max=313"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - ns/op",
            "value": 210721,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=206955; max=216183"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - B/op",
            "value": 132466,
            "unit": "B/op",
            "extra": "median of 7 runs; min=132465; max=132468"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - allocs/op",
            "value": 205,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=205; max=205"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - ns/op",
            "value": 72608,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=66379; max=75655"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - B/op",
            "value": 132361,
            "unit": "B/op",
            "extra": "median of 7 runs; min=132360; max=132364"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - allocs/op",
            "value": 202,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=202; max=202"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - ns/op",
            "value": 69836,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=68076; max=76864"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - B/op",
            "value": 48794752,
            "unit": "B/op",
            "extra": "median of 7 runs; min=4.8794726e+07; max=4.8794816e+07"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 1660,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=1659; max=1661"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - ns/op",
            "value": 5058446,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=4.5943e+06; max=5.200136e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - B/op",
            "value": 10157421,
            "unit": "B/op",
            "extra": "median of 7 runs; min=1.0157419e+07; max=1.0157429e+07"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - allocs/op",
            "value": 1142,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=1142; max=1142"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - ns/op",
            "value": 1051185,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=1.035469e+06; max=1.059143e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - B/op",
            "value": 10156615,
            "unit": "B/op",
            "extra": "median of 7 runs; min=1.0156613e+07; max=1.0156619e+07"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - allocs/op",
            "value": 1117,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=1117; max=1117"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - ns/op",
            "value": 1044504,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=1.035105e+06; max=1.058522e+06"
          }
        ]
      }
    ]
  }
}