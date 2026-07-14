window.BENCHMARK_DATA = {
  "lastUpdate": 1784060846693,
  "repoUrl": "https://github.com/saveweb/unwarc",
  "entries": {
    "unwarc corpus benchmark native macos latency and allocations": [
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
        "date": 1784060846126,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - B/op",
            "value": 154811,
            "unit": "B/op",
            "extra": "median of 5 runs; min=154808; max=154841"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 1334,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=1334; max=1334"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - ns/op",
            "value": 772521,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=749193; max=848267"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - B/op",
            "value": 24610,
            "unit": "B/op",
            "extra": "median of 5 runs; min=24603; max=24618"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - allocs/op",
            "value": 1265,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=1265; max=1265"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - ns/op",
            "value": 447957,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=439976; max=562831"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - B/op",
            "value": 24519,
            "unit": "B/op",
            "extra": "median of 5 runs; min=24513; max=24522"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - allocs/op",
            "value": 1263,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=1263; max=1263"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - ns/op",
            "value": 419121,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=381947; max=492567"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - B/op",
            "value": 499921,
            "unit": "B/op",
            "extra": "median of 5 runs; min=499898; max=499940"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 3975,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=3975; max=3975"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - ns/op",
            "value": 1535368,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=1.356499e+06; max=2.149074e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - B/op",
            "value": 63971,
            "unit": "B/op",
            "extra": "median of 5 runs; min=63960; max=64004"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - allocs/op",
            "value": 3715,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=3715; max=3715"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - ns/op",
            "value": 958237,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=925527; max=1.213424e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - B/op",
            "value": 63438,
            "unit": "B/op",
            "extra": "median of 5 runs; min=63433; max=63489"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - allocs/op",
            "value": 3699,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=3699; max=3699"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - ns/op",
            "value": 916789,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=871419; max=943423"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - B/op",
            "value": 1223896,
            "unit": "B/op",
            "extra": "median of 5 runs; min=1.223538e+06; max=1.224188e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 209,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=209; max=209"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - ns/op",
            "value": 335947,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=276115; max=371717"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - B/op",
            "value": 1055844,
            "unit": "B/op",
            "extra": "median of 5 runs; min=1.055656e+06; max=1.056167e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - allocs/op",
            "value": 157,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=157; max=158"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - ns/op",
            "value": 200529,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=187945; max=357520"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - B/op",
            "value": 1055768,
            "unit": "B/op",
            "extra": "median of 5 runs; min=1.055423e+06; max=1.055838e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - allocs/op",
            "value": 156,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=156; max=156"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - ns/op",
            "value": 387409,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=271188; max=431329"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - B/op",
            "value": 181803,
            "unit": "B/op",
            "extra": "median of 5 runs; min=181787; max=181810"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 296,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=296; max=296"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - ns/op",
            "value": 161486,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=127173; max=190487"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - B/op",
            "value": 114488,
            "unit": "B/op",
            "extra": "median of 5 runs; min=114479; max=114502"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - allocs/op",
            "value": 185,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=185; max=185"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - ns/op",
            "value": 62063,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=53113; max=67802"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - B/op",
            "value": 114395,
            "unit": "B/op",
            "extra": "median of 5 runs; min=114383; max=114407"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - allocs/op",
            "value": 182,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=182; max=182"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - ns/op",
            "value": 67035,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=51854; max=85786"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - B/op",
            "value": 48822631,
            "unit": "B/op",
            "extra": "median of 5 runs; min=4.8819705e+07; max=4.8823817e+07"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 1669,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=1668; max=1669"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - ns/op",
            "value": 3321840,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=3.216589e+06; max=4.89713e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - B/op",
            "value": 10149971,
            "unit": "B/op",
            "extra": "median of 5 runs; min=1.01498e+07; max=1.0151397e+07"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - allocs/op",
            "value": 1123,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=1123; max=1123"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - ns/op",
            "value": 741705,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=675041; max=1.070533e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - B/op",
            "value": 10146269,
            "unit": "B/op",
            "extra": "median of 5 runs; min=1.0144105e+07; max=1.0148661e+07"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - allocs/op",
            "value": 1097,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=1096; max=1098"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - ns/op",
            "value": 1431918,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=1.191568e+06; max=1.774579e+06"
          }
        ]
      }
    ]
  }
}