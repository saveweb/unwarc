window.BENCHMARK_DATA = {
  "lastUpdate": 1784068500876,
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
      }
    ]
  }
}