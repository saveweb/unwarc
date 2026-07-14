window.BENCHMARK_DATA = {
  "lastUpdate": 1784060834649,
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
      }
    ]
  }
}