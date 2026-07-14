window.BENCHMARK_DATA = {
  "lastUpdate": 1784067856661,
  "repoUrl": "https://github.com/saveweb/unwarc",
  "entries": {
    "unwarc corpus benchmark native linux latency and allocations": [
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
        "date": 1784060833837,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - B/op",
            "value": 154823,
            "unit": "B/op",
            "extra": "median of 5 runs; min=154814; max=154865"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 1334,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=1334; max=1334"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - ns/op",
            "value": 567091,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=559442; max=570758"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - B/op",
            "value": 24629,
            "unit": "B/op",
            "extra": "median of 5 runs; min=24623; max=24637"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - allocs/op",
            "value": 1265,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=1265; max=1265"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - ns/op",
            "value": 390671,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=387871; max=412232"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - B/op",
            "value": 24537,
            "unit": "B/op",
            "extra": "median of 5 runs; min=24522; max=24545"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - allocs/op",
            "value": 1263,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=1263; max=1263"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - ns/op",
            "value": 393706,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=392817; max=398961"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - B/op",
            "value": 499903,
            "unit": "B/op",
            "extra": "median of 5 runs; min=499841; max=499944"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 3975,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=3975; max=3975"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - ns/op",
            "value": 1044079,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=1.035933e+06; max=1.081372e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - B/op",
            "value": 63997,
            "unit": "B/op",
            "extra": "median of 5 runs; min=63976; max=64018"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - allocs/op",
            "value": 3715,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=3715; max=3715"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - ns/op",
            "value": 730787,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=723974; max=735642"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - B/op",
            "value": 63460,
            "unit": "B/op",
            "extra": "median of 5 runs; min=63416; max=63471"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - allocs/op",
            "value": 3699,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=3699; max=3699"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - ns/op",
            "value": 725229,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=721935; max=733677"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - B/op",
            "value": 1221321,
            "unit": "B/op",
            "extra": "median of 5 runs; min=1.221068e+06; max=1.221649e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 204,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=204; max=204"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - ns/op",
            "value": 339886,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=334307; max=357533"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - B/op",
            "value": 1054963,
            "unit": "B/op",
            "extra": "median of 5 runs; min=1.054893e+06; max=1.055024e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - allocs/op",
            "value": 155,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=155; max=155"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - ns/op",
            "value": 320467,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=304264; max=329796"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - B/op",
            "value": 1054830,
            "unit": "B/op",
            "extra": "median of 5 runs; min=1.054743e+06; max=1.054863e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - allocs/op",
            "value": 154,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=154; max=154"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - ns/op",
            "value": 283070,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=273643; max=290117"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - B/op",
            "value": 177488,
            "unit": "B/op",
            "extra": "median of 5 runs; min=177463; max=177504"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 290,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=290; max=290"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - ns/op",
            "value": 128495,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=127905; max=129020"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - B/op",
            "value": 114557,
            "unit": "B/op",
            "extra": "median of 5 runs; min=114550; max=114566"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - allocs/op",
            "value": 185,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=185; max=185"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - ns/op",
            "value": 52097,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=51940; max=52165"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - B/op",
            "value": 114450,
            "unit": "B/op",
            "extra": "median of 5 runs; min=114443; max=114459"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - allocs/op",
            "value": 182,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=182; max=182"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - ns/op",
            "value": 53339,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=53290; max=53693"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - B/op",
            "value": 48784395,
            "unit": "B/op",
            "extra": "median of 5 runs; min=4.8784128e+07; max=4.8785907e+07"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 1627,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=1627; max=1627"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - ns/op",
            "value": 3158949,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=3.143575e+06; max=3.179547e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - B/op",
            "value": 10144623,
            "unit": "B/op",
            "extra": "median of 5 runs; min=1.0144038e+07; max=1.0144806e+07"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - allocs/op",
            "value": 1119,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=1119; max=1119"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - ns/op",
            "value": 683868,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=672088; max=690658"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - B/op",
            "value": 10144320,
            "unit": "B/op",
            "extra": "median of 5 runs; min=1.0143771e+07; max=1.0145147e+07"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - allocs/op",
            "value": 1095,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=1094; max=1095"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - ns/op",
            "value": 678387,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=671783; max=697443"
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
        "date": 1784067465586,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - B/op",
            "value": 154992,
            "unit": "B/op",
            "extra": "median of 5 runs; min=154983; max=154996"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 1337,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=1337; max=1337"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - ns/op",
            "value": 560721,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=557098; max=568302"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - B/op",
            "value": 24636,
            "unit": "B/op",
            "extra": "median of 5 runs; min=24623; max=24646"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - allocs/op",
            "value": 1265,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=1265; max=1265"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - ns/op",
            "value": 384223,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=381908; max=388823"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - B/op",
            "value": 24548,
            "unit": "B/op",
            "extra": "median of 5 runs; min=24537; max=24563"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - allocs/op",
            "value": 1263,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=1263; max=1263"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - ns/op",
            "value": 383496,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=381462; max=391240"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - B/op",
            "value": 500432,
            "unit": "B/op",
            "extra": "median of 5 runs; min=500384; max=500465"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 3985,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=3985; max=3985"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - ns/op",
            "value": 1025563,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=1.021167e+06; max=1.030758e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - B/op",
            "value": 64007,
            "unit": "B/op",
            "extra": "median of 5 runs; min=64001; max=64034"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - allocs/op",
            "value": 3715,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=3715; max=3715"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - ns/op",
            "value": 718466,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=716298; max=723355"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - B/op",
            "value": 63473,
            "unit": "B/op",
            "extra": "median of 5 runs; min=63455; max=63494"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - allocs/op",
            "value": 3699,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=3699; max=3699"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - ns/op",
            "value": 721151,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=713684; max=733558"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - B/op",
            "value": 1221612,
            "unit": "B/op",
            "extra": "median of 5 runs; min=1.221486e+06; max=1.221793e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 205,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=205; max=205"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - ns/op",
            "value": 367482,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=364879; max=370563"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - B/op",
            "value": 1054749,
            "unit": "B/op",
            "extra": "median of 5 runs; min=1.054614e+06; max=1.055005e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - allocs/op",
            "value": 155,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=155; max=155"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - ns/op",
            "value": 287804,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=275267; max=295950"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - B/op",
            "value": 1054507,
            "unit": "B/op",
            "extra": "median of 5 runs; min=1.052724e+06; max=1.054919e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - allocs/op",
            "value": 154,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=153; max=154"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - ns/op",
            "value": 274442,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=223352; max=321026"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - B/op",
            "value": 177644,
            "unit": "B/op",
            "extra": "median of 5 runs; min=177603; max=177655"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 293,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=293; max=293"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - ns/op",
            "value": 126409,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=126246; max=130036"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - B/op",
            "value": 114569,
            "unit": "B/op",
            "extra": "median of 5 runs; min=114560; max=114581"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - allocs/op",
            "value": 185,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=185; max=185"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - ns/op",
            "value": 51782,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=51758; max=52066"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - B/op",
            "value": 114463,
            "unit": "B/op",
            "extra": "median of 5 runs; min=114456; max=114470"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - allocs/op",
            "value": 182,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=182; max=182"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - ns/op",
            "value": 53273,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=52349; max=53466"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - B/op",
            "value": 48796316,
            "unit": "B/op",
            "extra": "median of 5 runs; min=4.8790567e+07; max=4.8799388e+07"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 1645,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=1643; max=1647"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - ns/op",
            "value": 3283925,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=3.053777e+06; max=3.398905e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - B/op",
            "value": 10142951,
            "unit": "B/op",
            "extra": "median of 5 runs; min=1.0142609e+07; max=1.0143878e+07"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - allocs/op",
            "value": 1119,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=1119; max=1119"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - ns/op",
            "value": 678348,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=669781; max=704659"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - B/op",
            "value": 10143638,
            "unit": "B/op",
            "extra": "median of 5 runs; min=1.0143532e+07; max=1.0144492e+07"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - allocs/op",
            "value": 1094,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=1094; max=1095"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - ns/op",
            "value": 681005,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=677564; max=688882"
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
        "date": 1784067855363,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - B/op",
            "value": 155006,
            "unit": "B/op",
            "extra": "median of 5 runs; min=154987; max=155031"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 1337,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=1337; max=1337"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - ns/op",
            "value": 571968,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=565868; max=584793"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - B/op",
            "value": 24642,
            "unit": "B/op",
            "extra": "median of 5 runs; min=24631; max=24659"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - allocs/op",
            "value": 1265,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=1265; max=1265"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - ns/op",
            "value": 400090,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=385593; max=405051"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - B/op",
            "value": 24554,
            "unit": "B/op",
            "extra": "median of 5 runs; min=24548; max=24557"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - allocs/op",
            "value": 1263,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=1263; max=1263"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - ns/op",
            "value": 395747,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=392933; max=397914"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - B/op",
            "value": 500460,
            "unit": "B/op",
            "extra": "median of 5 runs; min=500374; max=500467"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 3985,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=3985; max=3985"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - ns/op",
            "value": 1039904,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=1.034611e+06; max=1.057459e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - B/op",
            "value": 64021,
            "unit": "B/op",
            "extra": "median of 5 runs; min=64005; max=64043"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - allocs/op",
            "value": 3715,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=3715; max=3715"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - ns/op",
            "value": 728446,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=726433; max=733497"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - B/op",
            "value": 63494,
            "unit": "B/op",
            "extra": "median of 5 runs; min=63458; max=63519"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - allocs/op",
            "value": 3699,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=3699; max=3699"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - ns/op",
            "value": 732519,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=728195; max=743683"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - B/op",
            "value": 1221396,
            "unit": "B/op",
            "extra": "median of 5 runs; min=1.221288e+06; max=1.221961e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 205,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=205; max=205"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - ns/op",
            "value": 354377,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=343066; max=381513"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - B/op",
            "value": 1054860,
            "unit": "B/op",
            "extra": "median of 5 runs; min=1.054715e+06; max=1.054909e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - allocs/op",
            "value": 155,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=155; max=155"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - ns/op",
            "value": 290505,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=278182; max=298725"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - B/op",
            "value": 1054963,
            "unit": "B/op",
            "extra": "median of 5 runs; min=1.054895e+06; max=1.055109e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - allocs/op",
            "value": 154,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=154; max=154"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - ns/op",
            "value": 288696,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=276514; max=301417"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - B/op",
            "value": 177653,
            "unit": "B/op",
            "extra": "median of 5 runs; min=177641; max=177665"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 293,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=293; max=293"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - ns/op",
            "value": 130636,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=129427; max=130758"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - B/op",
            "value": 114573,
            "unit": "B/op",
            "extra": "median of 5 runs; min=114568; max=114584"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - allocs/op",
            "value": 185,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=185; max=185"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - ns/op",
            "value": 52608,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=52467; max=52994"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - B/op",
            "value": 114470,
            "unit": "B/op",
            "extra": "median of 5 runs; min=114467; max=114478"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - allocs/op",
            "value": 182,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=182; max=182"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - ns/op",
            "value": 54010,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=53948; max=54093"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - B/op",
            "value": 48786562,
            "unit": "B/op",
            "extra": "median of 5 runs; min=4.878576e+07; max=4.8787708e+07"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 1641,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=1641; max=1642"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - ns/op",
            "value": 3274243,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=3.213775e+06; max=3.338419e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - B/op",
            "value": 10143473,
            "unit": "B/op",
            "extra": "median of 5 runs; min=1.0143002e+07; max=1.0143505e+07"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - allocs/op",
            "value": 1119,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=1119; max=1119"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - ns/op",
            "value": 710370,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=701557; max=778061"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - B/op",
            "value": 10143612,
            "unit": "B/op",
            "extra": "median of 5 runs; min=1.014266e+07; max=1.0144279e+07"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - allocs/op",
            "value": 1094,
            "unit": "allocs/op",
            "extra": "median of 5 runs; min=1094; max=1094"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - ns/op",
            "value": 719680,
            "unit": "ns/op",
            "extra": "median of 5 runs; min=710630; max=780365"
          }
        ]
      }
    ]
  }
}