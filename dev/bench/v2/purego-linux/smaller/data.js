window.BENCHMARK_DATA = {
  "lastUpdate": 1784077904690,
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
          "id": "9cf8cd60c557cb9ff4182b7a58a65c6672b5b49a",
          "message": "Stabilize corpus benchmark alerts",
          "timestamp": "2026-07-15T00:32:24+02:00",
          "tree_id": "2387fb29a71b7c168569b4e1b8da3600d4455911",
          "url": "https://github.com/saveweb/unwarc/commit/9cf8cd60c557cb9ff4182b7a58a65c6672b5b49a"
        },
        "date": 1784068487424,
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
            "value": 405347,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=403790; max=408763"
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
            "value": 231833,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=230994; max=233491"
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
            "value": 233091,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=232030; max=237173"
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
            "value": 460646,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=459018; max=462336"
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
            "value": 168977,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=168603; max=169922"
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
            "value": 171447,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=169417; max=172719"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - B/op",
            "value": 1218037,
            "unit": "B/op",
            "extra": "median of 7 runs; min=1.218036e+06; max=1.21804e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 204,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=204; max=204"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - ns/op",
            "value": 231419,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=229485; max=233544"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - B/op",
            "value": 1051113,
            "unit": "B/op",
            "extra": "median of 7 runs; min=1.051112e+06; max=1.051113e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - allocs/op",
            "value": 154,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=154; max=154"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - ns/op",
            "value": 179672,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=178700; max=181247"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - B/op",
            "value": 1051096,
            "unit": "B/op",
            "extra": "median of 7 runs; min=1.051096e+06; max=1.051096e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - allocs/op",
            "value": 153,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=153; max=153"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - ns/op",
            "value": 182535,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=181683; max=183604"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - B/op",
            "value": 195323,
            "unit": "B/op",
            "extra": "median of 7 runs; min=195323; max=195323"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 313,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=313; max=313"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - ns/op",
            "value": 136055,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=133625; max=136576"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - B/op",
            "value": 132333,
            "unit": "B/op",
            "extra": "median of 7 runs; min=132333; max=132333"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - allocs/op",
            "value": 205,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=205; max=205"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - ns/op",
            "value": 57894,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=57315; max=58501"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - B/op",
            "value": 132229,
            "unit": "B/op",
            "extra": "median of 7 runs; min=132229; max=132229"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - allocs/op",
            "value": 202,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=202; max=202"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - ns/op",
            "value": 59531,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=59105; max=60400"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - B/op",
            "value": 48792369,
            "unit": "B/op",
            "extra": "median of 7 runs; min=4.8792369e+07; max=4.879237e+07"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 1659,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=1659; max=1659"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - ns/op",
            "value": 2765470,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=2.693117e+06; max=2.845903e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - B/op",
            "value": 10157171,
            "unit": "B/op",
            "extra": "median of 7 runs; min=1.0157163e+07; max=1.0157181e+07"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - allocs/op",
            "value": 1141,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=1140; max=1141"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - ns/op",
            "value": 692139,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=643262; max=718611"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - B/op",
            "value": 10156363,
            "unit": "B/op",
            "extra": "median of 7 runs; min=1.0156351e+07; max=1.0156367e+07"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - allocs/op",
            "value": 1116,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=1115; max=1116"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - ns/op",
            "value": 694164,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=666994; max=749620"
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
        "date": 1784070199982,
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
            "value": 400353,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=397905; max=412651"
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
            "value": 229524,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=228845; max=231321"
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
            "value": 229609,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=228953; max=231075"
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
            "value": 449847,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=446291; max=454697"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - B/op",
            "value": 76923,
            "unit": "B/op",
            "extra": "median of 7 runs; min=76923; max=76924"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - allocs/op",
            "value": 534,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=534; max=534"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - ns/op",
            "value": 165312,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=164609; max=166502"
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
            "value": 166688,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=165215; max=170826"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - B/op",
            "value": 1218039,
            "unit": "B/op",
            "extra": "median of 7 runs; min=1.218036e+06; max=1.218042e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 204,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=204; max=205"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - ns/op",
            "value": 241952,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=236359; max=244445"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - B/op",
            "value": 1051113,
            "unit": "B/op",
            "extra": "median of 7 runs; min=1.051112e+06; max=1.051113e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - allocs/op",
            "value": 154,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=154; max=154"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - ns/op",
            "value": 187211,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=183048; max=191656"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - B/op",
            "value": 1051096,
            "unit": "B/op",
            "extra": "median of 7 runs; min=1.051096e+06; max=1.051096e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - allocs/op",
            "value": 153,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=153; max=153"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - ns/op",
            "value": 189079,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=184416; max=192181"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - B/op",
            "value": 195323,
            "unit": "B/op",
            "extra": "median of 7 runs; min=195323; max=195323"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 313,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=313; max=313"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - ns/op",
            "value": 125777,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=123792; max=128505"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - B/op",
            "value": 132333,
            "unit": "B/op",
            "extra": "median of 7 runs; min=132333; max=132333"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - allocs/op",
            "value": 205,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=205; max=205"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - ns/op",
            "value": 58408,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=57818; max=59448"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - B/op",
            "value": 132229,
            "unit": "B/op",
            "extra": "median of 7 runs; min=132229; max=132229"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - allocs/op",
            "value": 202,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=202; max=202"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - ns/op",
            "value": 59485,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=58567; max=59752"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - B/op",
            "value": 48792369,
            "unit": "B/op",
            "extra": "median of 7 runs; min=4.8792369e+07; max=4.8792371e+07"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 1659,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=1659; max=1659"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - ns/op",
            "value": 2933718,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=2.895634e+06; max=2.977598e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - B/op",
            "value": 10157162,
            "unit": "B/op",
            "extra": "median of 7 runs; min=1.0157157e+07; max=1.0157175e+07"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - allocs/op",
            "value": 1141,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=1140; max=1141"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - ns/op",
            "value": 632109,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=604635; max=662173"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - B/op",
            "value": 10156358,
            "unit": "B/op",
            "extra": "median of 7 runs; min=1.0156349e+07; max=1.0156364e+07"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - allocs/op",
            "value": 1116,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=1116; max=1116"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - ns/op",
            "value": 642206,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=614792; max=648507"
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
        "date": 1784073027883,
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
            "value": 400735,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=399965; max=402096"
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
            "value": 228667,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=227835; max=230163"
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
            "value": 230118,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=229098; max=233916"
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
            "value": 453030,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=451112; max=467408"
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
            "value": 166287,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=165820; max=167536"
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
            "value": 167032,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=166455; max=167664"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - B/op",
            "value": 1218039,
            "unit": "B/op",
            "extra": "median of 7 runs; min=1.218037e+06; max=1.218042e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 204,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=204; max=205"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - ns/op",
            "value": 226287,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=221671; max=231988"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - B/op",
            "value": 1051113,
            "unit": "B/op",
            "extra": "median of 7 runs; min=1.051112e+06; max=1.051113e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - allocs/op",
            "value": 154,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=154; max=154"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - ns/op",
            "value": 178290,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=176231; max=180328"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - B/op",
            "value": 1051096,
            "unit": "B/op",
            "extra": "median of 7 runs; min=1.051096e+06; max=1.0511e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - allocs/op",
            "value": 153,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=153; max=153"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - ns/op",
            "value": 180599,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=179162; max=184733"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - B/op",
            "value": 195323,
            "unit": "B/op",
            "extra": "median of 7 runs; min=195323; max=195323"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 313,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=313; max=313"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - ns/op",
            "value": 134694,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=133772; max=135814"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - B/op",
            "value": 132333,
            "unit": "B/op",
            "extra": "median of 7 runs; min=132333; max=132333"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - allocs/op",
            "value": 205,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=205; max=205"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - ns/op",
            "value": 57053,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=56764; max=57258"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - B/op",
            "value": 132229,
            "unit": "B/op",
            "extra": "median of 7 runs; min=132229; max=132229"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - allocs/op",
            "value": 202,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=202; max=202"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - ns/op",
            "value": 58387,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=58051; max=59938"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - B/op",
            "value": 48792369,
            "unit": "B/op",
            "extra": "median of 7 runs; min=4.8792367e+07; max=4.8792369e+07"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 1659,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=1658; max=1659"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - ns/op",
            "value": 2689641,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=2.658326e+06; max=2.716056e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - B/op",
            "value": 10157165,
            "unit": "B/op",
            "extra": "median of 7 runs; min=1.0157162e+07; max=1.0157173e+07"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - allocs/op",
            "value": 1141,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=1141; max=1141"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - ns/op",
            "value": 610898,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=601565; max=620168"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - B/op",
            "value": 10156354,
            "unit": "B/op",
            "extra": "median of 7 runs; min=1.015635e+07; max=1.015636e+07"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - allocs/op",
            "value": 1116,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=1115; max=1116"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - ns/op",
            "value": 605767,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=592453; max=667084"
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
        "date": 1784074654008,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - B/op",
            "value": 262445,
            "unit": "B/op",
            "extra": "median of 7 runs; min=262444; max=262446"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 269,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=269; max=269"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - ns/op",
            "value": 401969,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=399488; max=411637"
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
            "value": 228916,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=227843; max=231067"
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
            "value": 228981,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=228316; max=231170"
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
            "value": 460468,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=456195; max=460883"
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
            "value": 167375,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=166832; max=169280"
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
            "value": 167959,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=167290; max=169011"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - B/op",
            "value": 1218038,
            "unit": "B/op",
            "extra": "median of 7 runs; min=1.218037e+06; max=1.218042e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 204,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=204; max=205"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - ns/op",
            "value": 225627,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=224169; max=226541"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - B/op",
            "value": 1051113,
            "unit": "B/op",
            "extra": "median of 7 runs; min=1.051112e+06; max=1.051113e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - allocs/op",
            "value": 154,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=154; max=154"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - ns/op",
            "value": 175955,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=174844; max=176946"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - B/op",
            "value": 1051096,
            "unit": "B/op",
            "extra": "median of 7 runs; min=1.051096e+06; max=1.051096e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - allocs/op",
            "value": 153,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=153; max=153"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - ns/op",
            "value": 176940,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=176208; max=181085"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - B/op",
            "value": 195323,
            "unit": "B/op",
            "extra": "median of 7 runs; min=195323; max=195323"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 313,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=313; max=313"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - ns/op",
            "value": 133928,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=132816; max=136014"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - B/op",
            "value": 132333,
            "unit": "B/op",
            "extra": "median of 7 runs; min=132333; max=132333"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - allocs/op",
            "value": 205,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=205; max=205"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - ns/op",
            "value": 57771,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=56938; max=57978"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - B/op",
            "value": 132229,
            "unit": "B/op",
            "extra": "median of 7 runs; min=132229; max=132229"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - allocs/op",
            "value": 202,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=202; max=202"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - ns/op",
            "value": 58763,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=58364; max=59503"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - B/op",
            "value": 48792369,
            "unit": "B/op",
            "extra": "median of 7 runs; min=4.8792369e+07; max=4.8792369e+07"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 1659,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=1659; max=1659"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - ns/op",
            "value": 2619056,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=2.58952e+06; max=2.646288e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - B/op",
            "value": 10157160,
            "unit": "B/op",
            "extra": "median of 7 runs; min=1.0157157e+07; max=1.0157164e+07"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - allocs/op",
            "value": 1141,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=1141; max=1141"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - ns/op",
            "value": 589958,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=583329; max=612668"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - B/op",
            "value": 10156357,
            "unit": "B/op",
            "extra": "median of 7 runs; min=1.0156349e+07; max=1.0156359e+07"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - allocs/op",
            "value": 1116,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=1115; max=1116"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - ns/op",
            "value": 594868,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=585980; max=632251"
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
        "date": 1784077903820,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - B/op",
            "value": 184345,
            "unit": "B/op",
            "extra": "median of 7 runs; min=184344; max=184345"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 254,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=254; max=254"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - ns/op",
            "value": 387687,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=385107; max=401817"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - B/op",
            "value": 54098,
            "unit": "B/op",
            "extra": "median of 7 runs; min=54098; max=54098"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - allocs/op",
            "value": 182,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=182; max=182"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - ns/op",
            "value": 216872,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=216092; max=219305"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - B/op",
            "value": 53994,
            "unit": "B/op",
            "extra": "median of 7 runs; min=53994; max=53994"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - allocs/op",
            "value": 179,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=179; max=179"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - ns/op",
            "value": 216842,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=214405; max=217155"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - B/op",
            "value": 512144,
            "unit": "B/op",
            "extra": "median of 7 runs; min=512144; max=512144"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 803,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=803; max=803"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - ns/op",
            "value": 446087,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=442539; max=451413"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - B/op",
            "value": 76203,
            "unit": "B/op",
            "extra": "median of 7 runs; min=76203; max=76204"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - allocs/op",
            "value": 533,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=533; max=533"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - ns/op",
            "value": 158877,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=158590; max=159948"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - B/op",
            "value": 75667,
            "unit": "B/op",
            "extra": "median of 7 runs; min=75667; max=75667"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - allocs/op",
            "value": 516,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=516; max=516"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - ns/op",
            "value": 160717,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=160052; max=161908"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - B/op",
            "value": 1218022,
            "unit": "B/op",
            "extra": "median of 7 runs; min=1.21802e+06; max=1.218024e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 204,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=204; max=205"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - ns/op",
            "value": 242506,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=239971; max=246768"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - B/op",
            "value": 1051096,
            "unit": "B/op",
            "extra": "median of 7 runs; min=1.051096e+06; max=1.051096e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - allocs/op",
            "value": 154,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=154; max=154"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - ns/op",
            "value": 189064,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=185982; max=190013"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - B/op",
            "value": 1051080,
            "unit": "B/op",
            "extra": "median of 7 runs; min=1.05108e+06; max=1.051084e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - allocs/op",
            "value": 153,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=153; max=153"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - ns/op",
            "value": 186449,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=185046; max=187784"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - B/op",
            "value": 195307,
            "unit": "B/op",
            "extra": "median of 7 runs; min=195307; max=195307"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 313,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=313; max=313"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - ns/op",
            "value": 125900,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=125004; max=129790"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - B/op",
            "value": 132317,
            "unit": "B/op",
            "extra": "median of 7 runs; min=132317; max=132317"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - allocs/op",
            "value": 205,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=205; max=205"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - ns/op",
            "value": 58128,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=57805; max=58439"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - B/op",
            "value": 132213,
            "unit": "B/op",
            "extra": "median of 7 runs; min=132213; max=132213"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - allocs/op",
            "value": 202,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=202; max=202"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - ns/op",
            "value": 59465,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=59154; max=60308"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - B/op",
            "value": 48792353,
            "unit": "B/op",
            "extra": "median of 7 runs; min=4.8792353e+07; max=4.8792353e+07"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 1659,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=1659; max=1659"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - ns/op",
            "value": 2914159,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=2.892012e+06; max=2.941967e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - B/op",
            "value": 10157153,
            "unit": "B/op",
            "extra": "median of 7 runs; min=1.0157145e+07; max=1.0157156e+07"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - allocs/op",
            "value": 1141,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=1141; max=1141"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - ns/op",
            "value": 649919,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=607806; max=663845"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - B/op",
            "value": 10156345,
            "unit": "B/op",
            "extra": "median of 7 runs; min=1.0156333e+07; max=1.0156349e+07"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - allocs/op",
            "value": 1116,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=1116; max=1116"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - ns/op",
            "value": 612730,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=601769; max=662808"
          }
        ]
      }
    ]
  }
}