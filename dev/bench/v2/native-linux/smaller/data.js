window.BENCHMARK_DATA = {
  "lastUpdate": 1784070243150,
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
          "id": "9cf8cd60c557cb9ff4182b7a58a65c6672b5b49a",
          "message": "Stabilize corpus benchmark alerts",
          "timestamp": "2026-07-15T00:32:24+02:00",
          "tree_id": "2387fb29a71b7c168569b4e1b8da3600d4455911",
          "url": "https://github.com/saveweb/unwarc/commit/9cf8cd60c557cb9ff4182b7a58a65c6672b5b49a"
        },
        "date": 1784068524545,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - B/op",
            "value": 154840,
            "unit": "B/op",
            "extra": "median of 7 runs; min=154839; max=154840"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 1337,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=1337; max=1337"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - ns/op",
            "value": 641961,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=631201; max=661761"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - B/op",
            "value": 24593,
            "unit": "B/op",
            "extra": "median of 7 runs; min=24593; max=24593"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - allocs/op",
            "value": 1265,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=1265; max=1265"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - ns/op",
            "value": 448153,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=441510; max=453339"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - B/op",
            "value": 24505,
            "unit": "B/op",
            "extra": "median of 7 runs; min=24504; max=24505"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - allocs/op",
            "value": 1263,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=1263; max=1263"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - ns/op",
            "value": 457529,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=454369; max=472949"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - B/op",
            "value": 499871,
            "unit": "B/op",
            "extra": "median of 7 runs; min=499871; max=499871"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 3985,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=3985; max=3985"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - ns/op",
            "value": 1123951,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=1.117844e+06; max=1.133988e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - B/op",
            "value": 63914,
            "unit": "B/op",
            "extra": "median of 7 runs; min=63914; max=63914"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - allocs/op",
            "value": 3715,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=3715; max=3715"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - ns/op",
            "value": 816204,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=809550; max=844214"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - B/op",
            "value": 63378,
            "unit": "B/op",
            "extra": "median of 7 runs; min=63378; max=63378"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - allocs/op",
            "value": 3699,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=3699; max=3699"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - ns/op",
            "value": 814228,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=807298; max=821150"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - B/op",
            "value": 1218037,
            "unit": "B/op",
            "extra": "median of 7 runs; min=1.218035e+06; max=1.218042e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 204,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=204; max=205"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - ns/op",
            "value": 244486,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=239033; max=247010"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - B/op",
            "value": 1051113,
            "unit": "B/op",
            "extra": "median of 7 runs; min=1.051113e+06; max=1.051113e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - allocs/op",
            "value": 154,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=154; max=154"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - ns/op",
            "value": 188109,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=186599; max=191762"
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
            "value": 189752,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=187330; max=192349"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - B/op",
            "value": 177346,
            "unit": "B/op",
            "extra": "median of 7 runs; min=177346; max=177346"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 293,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=293; max=293"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - ns/op",
            "value": 129257,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=126763; max=132486"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - B/op",
            "value": 114349,
            "unit": "B/op",
            "extra": "median of 7 runs; min=114349; max=114349"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - allocs/op",
            "value": 185,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=185; max=185"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - ns/op",
            "value": 55014,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=54857; max=56584"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - B/op",
            "value": 114245,
            "unit": "B/op",
            "extra": "median of 7 runs; min=114245; max=114245"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - allocs/op",
            "value": 182,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=182; max=182"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - ns/op",
            "value": 57541,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=56724; max=57969"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - B/op",
            "value": 48771641,
            "unit": "B/op",
            "extra": "median of 7 runs; min=4.8771641e+07; max=4.8771641e+07"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 1637,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=1637; max=1637"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - ns/op",
            "value": 3211627,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=3.114505e+06; max=3.265761e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - B/op",
            "value": 10136271,
            "unit": "B/op",
            "extra": "median of 7 runs; min=1.0136269e+07; max=1.0136293e+07"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - allocs/op",
            "value": 1117,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=1117; max=1117"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - ns/op",
            "value": 684556,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=649201; max=696772"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - B/op",
            "value": 10135463,
            "unit": "B/op",
            "extra": "median of 7 runs; min=1.0135463e+07; max=1.0135508e+07"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - allocs/op",
            "value": 1092,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=1092; max=1092"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - ns/op",
            "value": 695098,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=679874; max=705601"
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
        "date": 1784070241880,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - B/op",
            "value": 154840,
            "unit": "B/op",
            "extra": "median of 7 runs; min=154840; max=154840"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 1337,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=1337; max=1337"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - ns/op",
            "value": 382774,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=377150; max=439648"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - B/op",
            "value": 24593,
            "unit": "B/op",
            "extra": "median of 7 runs; min=24593; max=24593"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - allocs/op",
            "value": 1265,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=1265; max=1265"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - ns/op",
            "value": 269219,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=267130; max=272562"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - B/op",
            "value": 24505,
            "unit": "B/op",
            "extra": "median of 7 runs; min=24505; max=24505"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - allocs/op",
            "value": 1263,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=1263; max=1263"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - ns/op",
            "value": 267816,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=265334; max=271433"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - B/op",
            "value": 499871,
            "unit": "B/op",
            "extra": "median of 7 runs; min=499871; max=499871"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 3985,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=3985; max=3985"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - ns/op",
            "value": 762408,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=682955; max=807834"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - B/op",
            "value": 63914,
            "unit": "B/op",
            "extra": "median of 7 runs; min=63914; max=63914"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - allocs/op",
            "value": 3715,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=3715; max=3715"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - ns/op",
            "value": 491091,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=490377; max=496057"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - B/op",
            "value": 63378,
            "unit": "B/op",
            "extra": "median of 7 runs; min=63378; max=63378"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - allocs/op",
            "value": 3699,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=3699; max=3699"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - ns/op",
            "value": 491156,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=490373; max=518457"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - B/op",
            "value": 1218036,
            "unit": "B/op",
            "extra": "median of 7 runs; min=1.218035e+06; max=1.218037e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 204,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=204; max=205"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - ns/op",
            "value": 195583,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=192805; max=199184"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - B/op",
            "value": 1051111,
            "unit": "B/op",
            "extra": "median of 7 runs; min=1.051107e+06; max=1.051112e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - allocs/op",
            "value": 154,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=154; max=154"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - ns/op",
            "value": 157563,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=156240; max=161265"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - B/op",
            "value": 1051095,
            "unit": "B/op",
            "extra": "median of 7 runs; min=1.051093e+06; max=1.051096e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - allocs/op",
            "value": 153,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=153; max=153"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - ns/op",
            "value": 157851,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=155845; max=158285"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - B/op",
            "value": 177345,
            "unit": "B/op",
            "extra": "median of 7 runs; min=177345; max=177346"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 293,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=293; max=293"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - ns/op",
            "value": 70529,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=70156; max=78812"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - B/op",
            "value": 114349,
            "unit": "B/op",
            "extra": "median of 7 runs; min=114349; max=114349"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - allocs/op",
            "value": 185,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=185; max=185"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - ns/op",
            "value": 36910,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=36706; max=37223"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - B/op",
            "value": 114245,
            "unit": "B/op",
            "extra": "median of 7 runs; min=114245; max=114245"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - allocs/op",
            "value": 182,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=182; max=182"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - ns/op",
            "value": 37784,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=37312; max=42203"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - B/op",
            "value": 48771641,
            "unit": "B/op",
            "extra": "median of 7 runs; min=4.8771641e+07; max=4.8771641e+07"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 1637,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=1637; max=1637"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - ns/op",
            "value": 2609076,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=2.594358e+06; max=2.619473e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - B/op",
            "value": 10136363,
            "unit": "B/op",
            "extra": "median of 7 runs; min=1.0136294e+07; max=1.0136387e+07"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - allocs/op",
            "value": 1117,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=1117; max=1117"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - ns/op",
            "value": 706833,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=701220; max=713504"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - B/op",
            "value": 10135486,
            "unit": "B/op",
            "extra": "median of 7 runs; min=1.0135463e+07; max=1.013556e+07"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - allocs/op",
            "value": 1092,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=1092; max=1092"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - ns/op",
            "value": 701398,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=696158; max=708600"
          }
        ]
      }
    ]
  }
}