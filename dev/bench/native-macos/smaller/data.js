window.BENCHMARK_DATA = {
  "lastUpdate": 1784067477869,
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
        "date": 1784067477150,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - B/op",
            "value": 154959,
            "unit": "B/op",
            "extra": "median of 5 runs; min=154935; max=154965"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 1337,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=1337; max=1337"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - ns/op",
            "value": 444196,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=429354; max=477868"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - B/op",
            "value": 24621,
            "unit": "B/op",
            "extra": "median of 5 runs; min=24611; max=24624"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - allocs/op",
            "value": 1265,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=1265; max=1265"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - ns/op",
            "value": 300419,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=297310; max=308825"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - B/op",
            "value": 24530,
            "unit": "B/op",
            "extra": "median of 5 runs; min=24524; max=24533"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - allocs/op",
            "value": 1263,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=1263; max=1263"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - ns/op",
            "value": 326092,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=298878; max=433139"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - B/op",
            "value": 500432,
            "unit": "B/op",
            "extra": "median of 5 runs; min=500363; max=500483"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 3985,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=3985; max=3985"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - ns/op",
            "value": 728545,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=720672; max=762488"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - B/op",
            "value": 63995,
            "unit": "B/op",
            "extra": "median of 5 runs; min=63989; max=64002"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - allocs/op",
            "value": 3715,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=3715; max=3715"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - ns/op",
            "value": 510606,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=509067; max=520390"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - B/op",
            "value": 63468,
            "unit": "B/op",
            "extra": "median of 5 runs; min=63459; max=63478"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - allocs/op",
            "value": 3699,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=3699; max=3699"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - ns/op",
            "value": 518322,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=512692; max=521796"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - B/op",
            "value": 1224659,
            "unit": "B/op",
            "extra": "median of 5 runs; min=1.224315e+06; max=1.224887e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 210,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=210; max=210"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - ns/op",
            "value": 251956,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=235583; max=272328"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - B/op",
            "value": 1056031,
            "unit": "B/op",
            "extra": "median of 5 runs; min=1.056024e+06; max=1.056122e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - allocs/op",
            "value": 157,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=157; max=157"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - ns/op",
            "value": 181093,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=177728; max=183649"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - B/op",
            "value": 1056133,
            "unit": "B/op",
            "extra": "median of 5 runs; min=1.055944e+06; max=1.05633e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - allocs/op",
            "value": 156,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=156; max=157"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - ns/op",
            "value": 180513,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=177970; max=192485"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - B/op",
            "value": 181940,
            "unit": "B/op",
            "extra": "median of 5 runs; min=181933; max=181958"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 299,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=299; max=299"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - ns/op",
            "value": 92198,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=89542; max=101573"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - B/op",
            "value": 114496,
            "unit": "B/op",
            "extra": "median of 5 runs; min=114493; max=114501"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - allocs/op",
            "value": 185,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=185; max=185"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - ns/op",
            "value": 36177,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=34957; max=37754"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - B/op",
            "value": 114391,
            "unit": "B/op",
            "extra": "median of 5 runs; min=114376; max=114398"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - allocs/op",
            "value": 182,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=182; max=182"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - ns/op",
            "value": 36039,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=35887; max=37195"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - B/op",
            "value": 48823284,
            "unit": "B/op",
            "extra": "median of 5 runs; min=4.8822031e+07; max=4.882437e+07"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 1682,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=1682; max=1683"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - ns/op",
            "value": 3509978,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=3.208771e+06; max=4.002205e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - B/op",
            "value": 10152622,
            "unit": "B/op",
            "extra": "median of 5 runs; min=1.0151344e+07; max=1.0153764e+07"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - allocs/op",
            "value": 1124,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=1123; max=1124"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - ns/op",
            "value": 897846,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=734810; max=1.169194e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - B/op",
            "value": 10151336,
            "unit": "B/op",
            "extra": "median of 5 runs; min=1.0150422e+07; max=1.0152774e+07"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - allocs/op",
            "value": 1099,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=1098; max=1099"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - ns/op",
            "value": 784946,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=590196; max=866721"
          }
        ]
      }
    ]
  }
}