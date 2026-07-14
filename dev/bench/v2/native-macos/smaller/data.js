window.BENCHMARK_DATA = {
  "lastUpdate": 1784070256516,
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
          "id": "9cf8cd60c557cb9ff4182b7a58a65c6672b5b49a",
          "message": "Stabilize corpus benchmark alerts",
          "timestamp": "2026-07-15T00:32:24+02:00",
          "tree_id": "2387fb29a71b7c168569b4e1b8da3600d4455911",
          "url": "https://github.com/saveweb/unwarc/commit/9cf8cd60c557cb9ff4182b7a58a65c6672b5b49a"
        },
        "date": 1784068536950,
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
            "value": 912233,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=769722; max=1.053161e+06"
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
            "value": 598951,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=539264; max=631613"
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
            "value": 568520,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=485562; max=762878"
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
            "value": 1174500,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=873731; max=1.376161e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - B/op",
            "value": 63914,
            "unit": "B/op",
            "extra": "median of 7 runs; min=63914; max=63915"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - allocs/op",
            "value": 3715,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=3715; max=3715"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - ns/op",
            "value": 973093,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=909848; max=1.083622e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - B/op",
            "value": 63378,
            "unit": "B/op",
            "extra": "median of 7 runs; min=63378; max=63379"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - allocs/op",
            "value": 3699,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=3699; max=3699"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - ns/op",
            "value": 1168863,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=1.016921e+06; max=1.655666e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - B/op",
            "value": 1220371,
            "unit": "B/op",
            "extra": "median of 7 runs; min=1.220366e+06; max=1.220374e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 209,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=209; max=209"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - ns/op",
            "value": 321580,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=245074; max=456075"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - B/op",
            "value": 1052285,
            "unit": "B/op",
            "extra": "median of 7 runs; min=1.052273e+06; max=1.052291e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - allocs/op",
            "value": 156,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=156; max=156"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - ns/op",
            "value": 209958,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=185546; max=295254"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - B/op",
            "value": 1052268,
            "unit": "B/op",
            "extra": "median of 7 runs; min=1.052264e+06; max=1.052274e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - allocs/op",
            "value": 155,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=155; max=155"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - ns/op",
            "value": 204894,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=184033; max=248819"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - B/op",
            "value": 180879,
            "unit": "B/op",
            "extra": "median of 7 runs; min=180879; max=180879"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 299,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=299; max=299"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - ns/op",
            "value": 118516,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=113517; max=130760"
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
            "value": 50115,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=45675; max=95390"
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
            "value": 49019,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=44620; max=85384"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - B/op",
            "value": 48788413,
            "unit": "B/op",
            "extra": "median of 7 runs; min=4.8788409e+07; max=4.8788486e+07"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 1671,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=1671; max=1671"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - ns/op",
            "value": 2754782,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=2.255097e+06; max=4.948849e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - B/op",
            "value": 10136421,
            "unit": "B/op",
            "extra": "median of 7 runs; min=1.0136401e+07; max=1.0136449e+07"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - allocs/op",
            "value": 1118,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=1118; max=1118"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - ns/op",
            "value": 750422,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=639184; max=910874"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - B/op",
            "value": 10135594,
            "unit": "B/op",
            "extra": "median of 7 runs; min=1.0135591e+07; max=1.0135621e+07"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - allocs/op",
            "value": 1093,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=1093; max=1093"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - ns/op",
            "value": 681730,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=659329; max=809331"
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
        "date": 1784070255746,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - B/op",
            "value": 154839,
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
            "value": 495471,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=483645; max=508186"
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
            "value": 343537,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=316859; max=373165"
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
            "value": 335194,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=328063; max=364309"
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
            "value": 835366,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=791458; max=887813"
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
            "value": 560767,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=529843; max=612306"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - B/op",
            "value": 63378,
            "unit": "B/op",
            "extra": "median of 7 runs; min=63378; max=63379"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - allocs/op",
            "value": 3699,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=3699; max=3699"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - ns/op",
            "value": 568535,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=557335; max=607752"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - B/op",
            "value": 1220373,
            "unit": "B/op",
            "extra": "median of 7 runs; min=1.220371e+06; max=1.220374e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 209,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=209; max=209"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - ns/op",
            "value": 214783,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=202312; max=226200"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - B/op",
            "value": 1052289,
            "unit": "B/op",
            "extra": "median of 7 runs; min=1.052277e+06; max=1.052295e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - allocs/op",
            "value": 156,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=156; max=156"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - ns/op",
            "value": 167530,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=149110; max=178471"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - B/op",
            "value": 1052273,
            "unit": "B/op",
            "extra": "median of 7 runs; min=1.052266e+06; max=1.052274e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - allocs/op",
            "value": 155,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=155; max=155"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - ns/op",
            "value": 172828,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=151299; max=229696"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - B/op",
            "value": 180879,
            "unit": "B/op",
            "extra": "median of 7 runs; min=180879; max=180879"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 299,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=299; max=299"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - ns/op",
            "value": 109202,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=102113; max=111879"
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
            "value": 43989,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=41797; max=46062"
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
            "value": 45158,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=43161; max=50163"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - B/op",
            "value": 48788480,
            "unit": "B/op",
            "extra": "median of 7 runs; min=4.878841e+07; max=4.8788672e+07"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 1671,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=1671; max=1671"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - ns/op",
            "value": 1930055,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=1.86962e+06; max=2.078043e+06"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - B/op",
            "value": 10136430,
            "unit": "B/op",
            "extra": "median of 7 runs; min=1.0136396e+07; max=1.0136492e+07"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - allocs/op",
            "value": 1118,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=1118; max=1118"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - ns/op",
            "value": 579414,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=549536; max=635286"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - B/op",
            "value": 10135604,
            "unit": "B/op",
            "extra": "median of 7 runs; min=1.0135588e+07; max=1.0135679e+07"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - allocs/op",
            "value": 1093,
            "unit": "allocs/op",
            "extra": "median of 7 runs; min=1093; max=1093"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - ns/op",
            "value": 588273,
            "unit": "ns/op",
            "extra": "median of 7 runs; min=540453; max=712169"
          }
        ]
      }
    ]
  }
}