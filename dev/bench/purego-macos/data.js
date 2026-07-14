window.BENCHMARK_DATA = {
  "lastUpdate": 1784054449048,
  "repoUrl": "https://github.com/saveweb/unwarc",
  "entries": {
    "unwarc corpus benchmark purego macos": [
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
          "id": "29ee3ce58b099c83a2ca1170378ee3e8ca1c94f2",
          "message": "Limit native benchmarks to Unix runners",
          "timestamp": "2026-07-14T20:37:40+02:00",
          "tree_id": "15b617ad03e42f5dc4063fcf0238fd15f3d0ade0",
          "url": "https://github.com/saveweb/unwarc/commit/29ee3ce58b099c83a2ca1170378ee3e8ca1c94f2"
        },
        "date": 1784054448318,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block",
            "value": 244708,
            "unit": "ns/op\t  90.24 MB/s\t     22083 block_bytes\t         3.000 records\t  132285 B/op\t     194 allocs/op",
            "extra": "4759 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - ns/op",
            "value": 244708,
            "unit": "ns/op",
            "extra": "4759 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - MB/s",
            "value": 90.24,
            "unit": "MB/s",
            "extra": "4759 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - block_bytes",
            "value": 22083,
            "unit": "block_bytes",
            "extra": "4759 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - records",
            "value": 3,
            "unit": "records",
            "extra": "4759 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - B/op",
            "value": 132285,
            "unit": "B/op",
            "extra": "4759 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - allocs/op",
            "value": 194,
            "unit": "allocs/op",
            "extra": "4759 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block",
            "value": 261945,
            "unit": "ns/op\t  84.30 MB/s\t     22083 block_bytes\t         3.000 records\t  132275 B/op\t     194 allocs/op",
            "extra": "6877 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - ns/op",
            "value": 261945,
            "unit": "ns/op",
            "extra": "6877 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - MB/s",
            "value": 84.3,
            "unit": "MB/s",
            "extra": "6877 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - block_bytes",
            "value": 22083,
            "unit": "block_bytes",
            "extra": "6877 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - records",
            "value": 3,
            "unit": "records",
            "extra": "6877 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - B/op",
            "value": 132275,
            "unit": "B/op",
            "extra": "6877 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - allocs/op",
            "value": 194,
            "unit": "allocs/op",
            "extra": "6877 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block",
            "value": 182028,
            "unit": "ns/op\t 121.32 MB/s\t     22083 block_bytes\t         3.000 records\t  132262 B/op\t     194 allocs/op",
            "extra": "6427 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - ns/op",
            "value": 182028,
            "unit": "ns/op",
            "extra": "6427 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - MB/s",
            "value": 121.32,
            "unit": "MB/s",
            "extra": "6427 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - block_bytes",
            "value": 22083,
            "unit": "block_bytes",
            "extra": "6427 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - records",
            "value": 3,
            "unit": "records",
            "extra": "6427 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - B/op",
            "value": 132262,
            "unit": "B/op",
            "extra": "6427 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - allocs/op",
            "value": 194,
            "unit": "allocs/op",
            "extra": "6427 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block",
            "value": 187917,
            "unit": "ns/op\t 117.51 MB/s\t     22083 block_bytes\t         3.000 records\t  132267 B/op\t     194 allocs/op",
            "extra": "7452 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - ns/op",
            "value": 187917,
            "unit": "ns/op",
            "extra": "7452 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - MB/s",
            "value": 117.51,
            "unit": "MB/s",
            "extra": "7452 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - block_bytes",
            "value": 22083,
            "unit": "block_bytes",
            "extra": "7452 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - records",
            "value": 3,
            "unit": "records",
            "extra": "7452 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - B/op",
            "value": 132267,
            "unit": "B/op",
            "extra": "7452 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - allocs/op",
            "value": 194,
            "unit": "allocs/op",
            "extra": "7452 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block",
            "value": 178726,
            "unit": "ns/op\t 123.56 MB/s\t     22083 block_bytes\t         3.000 records\t  132245 B/op\t     194 allocs/op",
            "extra": "7556 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - ns/op",
            "value": 178726,
            "unit": "ns/op",
            "extra": "7556 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - MB/s",
            "value": 123.56,
            "unit": "MB/s",
            "extra": "7556 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - block_bytes",
            "value": 22083,
            "unit": "block_bytes",
            "extra": "7556 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - records",
            "value": 3,
            "unit": "records",
            "extra": "7556 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - B/op",
            "value": 132245,
            "unit": "B/op",
            "extra": "7556 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - allocs/op",
            "value": 194,
            "unit": "allocs/op",
            "extra": "7556 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block",
            "value": 180326,
            "unit": "ns/op\t 122.46 MB/s\t     22083 block_bytes\t         3.000 records\t  132355 B/op\t     197 allocs/op",
            "extra": "6169 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - ns/op",
            "value": 180326,
            "unit": "ns/op",
            "extra": "6169 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - MB/s",
            "value": 122.46,
            "unit": "MB/s",
            "extra": "6169 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - block_bytes",
            "value": 22083,
            "unit": "block_bytes",
            "extra": "6169 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - records",
            "value": 3,
            "unit": "records",
            "extra": "6169 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - B/op",
            "value": 132355,
            "unit": "B/op",
            "extra": "6169 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - allocs/op",
            "value": 197,
            "unit": "allocs/op",
            "extra": "6169 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block",
            "value": 212938,
            "unit": "ns/op\t 103.71 MB/s\t     22083 block_bytes\t         3.000 records\t  132368 B/op\t     197 allocs/op",
            "extra": "6936 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - ns/op",
            "value": 212938,
            "unit": "ns/op",
            "extra": "6936 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - MB/s",
            "value": 103.71,
            "unit": "MB/s",
            "extra": "6936 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - block_bytes",
            "value": 22083,
            "unit": "block_bytes",
            "extra": "6936 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - records",
            "value": 3,
            "unit": "records",
            "extra": "6936 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - B/op",
            "value": 132368,
            "unit": "B/op",
            "extra": "6936 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - allocs/op",
            "value": 197,
            "unit": "allocs/op",
            "extra": "6936 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block",
            "value": 181199,
            "unit": "ns/op\t 121.87 MB/s\t     22083 block_bytes\t         3.000 records\t  132394 B/op\t     197 allocs/op",
            "extra": "7974 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - ns/op",
            "value": 181199,
            "unit": "ns/op",
            "extra": "7974 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - MB/s",
            "value": 121.87,
            "unit": "MB/s",
            "extra": "7974 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - block_bytes",
            "value": 22083,
            "unit": "block_bytes",
            "extra": "7974 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - records",
            "value": 3,
            "unit": "records",
            "extra": "7974 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - B/op",
            "value": 132394,
            "unit": "B/op",
            "extra": "7974 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - allocs/op",
            "value": 197,
            "unit": "allocs/op",
            "extra": "7974 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block",
            "value": 159793,
            "unit": "ns/op\t 138.20 MB/s\t     22083 block_bytes\t         3.000 records\t  132364 B/op\t     197 allocs/op",
            "extra": "7196 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - ns/op",
            "value": 159793,
            "unit": "ns/op",
            "extra": "7196 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - MB/s",
            "value": 138.2,
            "unit": "MB/s",
            "extra": "7196 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - block_bytes",
            "value": 22083,
            "unit": "block_bytes",
            "extra": "7196 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - records",
            "value": 3,
            "unit": "records",
            "extra": "7196 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - B/op",
            "value": 132364,
            "unit": "B/op",
            "extra": "7196 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - allocs/op",
            "value": 197,
            "unit": "allocs/op",
            "extra": "7196 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block",
            "value": 152062,
            "unit": "ns/op\t 145.22 MB/s\t     22083 block_bytes\t         3.000 records\t  132353 B/op\t     197 allocs/op",
            "extra": "8031 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - ns/op",
            "value": 152062,
            "unit": "ns/op",
            "extra": "8031 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - MB/s",
            "value": 145.22,
            "unit": "MB/s",
            "extra": "8031 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - block_bytes",
            "value": 22083,
            "unit": "block_bytes",
            "extra": "8031 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - records",
            "value": 3,
            "unit": "records",
            "extra": "8031 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - B/op",
            "value": 132353,
            "unit": "B/op",
            "extra": "8031 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - allocs/op",
            "value": 197,
            "unit": "allocs/op",
            "extra": "8031 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block",
            "value": 299187,
            "unit": "ns/op\t  73.81 MB/s\t     22083 block_bytes\t         3.000 records\t  262519 B/op\t     266 allocs/op",
            "extra": "4159 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - ns/op",
            "value": 299187,
            "unit": "ns/op",
            "extra": "4159 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - MB/s",
            "value": 73.81,
            "unit": "MB/s",
            "extra": "4159 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - block_bytes",
            "value": 22083,
            "unit": "block_bytes",
            "extra": "4159 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - records",
            "value": 3,
            "unit": "records",
            "extra": "4159 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - B/op",
            "value": 262519,
            "unit": "B/op",
            "extra": "4159 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 266,
            "unit": "allocs/op",
            "extra": "4159 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block",
            "value": 327625,
            "unit": "ns/op\t  67.40 MB/s\t     22083 block_bytes\t         3.000 records\t  262590 B/op\t     266 allocs/op",
            "extra": "3715 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - ns/op",
            "value": 327625,
            "unit": "ns/op",
            "extra": "3715 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - MB/s",
            "value": 67.4,
            "unit": "MB/s",
            "extra": "3715 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - block_bytes",
            "value": 22083,
            "unit": "block_bytes",
            "extra": "3715 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - records",
            "value": 3,
            "unit": "records",
            "extra": "3715 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - B/op",
            "value": 262590,
            "unit": "B/op",
            "extra": "3715 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 266,
            "unit": "allocs/op",
            "extra": "3715 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block",
            "value": 331257,
            "unit": "ns/op\t  66.66 MB/s\t     22083 block_bytes\t         3.000 records\t  262569 B/op\t     266 allocs/op",
            "extra": "4135 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - ns/op",
            "value": 331257,
            "unit": "ns/op",
            "extra": "4135 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - MB/s",
            "value": 66.66,
            "unit": "MB/s",
            "extra": "4135 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - block_bytes",
            "value": 22083,
            "unit": "block_bytes",
            "extra": "4135 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - records",
            "value": 3,
            "unit": "records",
            "extra": "4135 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - B/op",
            "value": 262569,
            "unit": "B/op",
            "extra": "4135 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 266,
            "unit": "allocs/op",
            "extra": "4135 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block",
            "value": 370641,
            "unit": "ns/op\t  59.58 MB/s\t     22083 block_bytes\t         3.000 records\t  262618 B/op\t     266 allocs/op",
            "extra": "3583 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - ns/op",
            "value": 370641,
            "unit": "ns/op",
            "extra": "3583 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - MB/s",
            "value": 59.58,
            "unit": "MB/s",
            "extra": "3583 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - block_bytes",
            "value": 22083,
            "unit": "block_bytes",
            "extra": "3583 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - records",
            "value": 3,
            "unit": "records",
            "extra": "3583 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - B/op",
            "value": 262618,
            "unit": "B/op",
            "extra": "3583 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 266,
            "unit": "allocs/op",
            "extra": "3583 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block",
            "value": 362325,
            "unit": "ns/op\t  60.95 MB/s\t     22083 block_bytes\t         3.000 records\t  262650 B/op\t     266 allocs/op",
            "extra": "3385 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - ns/op",
            "value": 362325,
            "unit": "ns/op",
            "extra": "3385 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - MB/s",
            "value": 60.95,
            "unit": "MB/s",
            "extra": "3385 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - block_bytes",
            "value": 22083,
            "unit": "block_bytes",
            "extra": "3385 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - records",
            "value": 3,
            "unit": "records",
            "extra": "3385 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - B/op",
            "value": 262650,
            "unit": "B/op",
            "extra": "3385 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 266,
            "unit": "allocs/op",
            "extra": "3385 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block",
            "value": 104837,
            "unit": "ns/op\t  40.64 MB/s\t      4261 block_bytes\t        10.00 records\t   76491 B/op\t     517 allocs/op",
            "extra": "10000 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - ns/op",
            "value": 104837,
            "unit": "ns/op",
            "extra": "10000 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - MB/s",
            "value": 40.64,
            "unit": "MB/s",
            "extra": "10000 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - block_bytes",
            "value": 4261,
            "unit": "block_bytes",
            "extra": "10000 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - records",
            "value": 10,
            "unit": "records",
            "extra": "10000 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - B/op",
            "value": 76491,
            "unit": "B/op",
            "extra": "10000 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - allocs/op",
            "value": 517,
            "unit": "allocs/op",
            "extra": "10000 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block",
            "value": 102553,
            "unit": "ns/op\t  41.55 MB/s\t      4261 block_bytes\t        10.00 records\t   76473 B/op\t     517 allocs/op",
            "extra": "10000 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - ns/op",
            "value": 102553,
            "unit": "ns/op",
            "extra": "10000 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - MB/s",
            "value": 41.55,
            "unit": "MB/s",
            "extra": "10000 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - block_bytes",
            "value": 4261,
            "unit": "block_bytes",
            "extra": "10000 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - records",
            "value": 10,
            "unit": "records",
            "extra": "10000 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - B/op",
            "value": 76473,
            "unit": "B/op",
            "extra": "10000 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - allocs/op",
            "value": 517,
            "unit": "allocs/op",
            "extra": "10000 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block",
            "value": 106885,
            "unit": "ns/op\t  39.87 MB/s\t      4261 block_bytes\t        10.00 records\t   76479 B/op\t     517 allocs/op",
            "extra": "10000 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - ns/op",
            "value": 106885,
            "unit": "ns/op",
            "extra": "10000 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - MB/s",
            "value": 39.87,
            "unit": "MB/s",
            "extra": "10000 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - block_bytes",
            "value": 4261,
            "unit": "block_bytes",
            "extra": "10000 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - records",
            "value": 10,
            "unit": "records",
            "extra": "10000 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - B/op",
            "value": 76479,
            "unit": "B/op",
            "extra": "10000 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - allocs/op",
            "value": 517,
            "unit": "allocs/op",
            "extra": "10000 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block",
            "value": 117360,
            "unit": "ns/op\t  36.31 MB/s\t      4261 block_bytes\t        10.00 records\t   76465 B/op\t     517 allocs/op",
            "extra": "10000 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - ns/op",
            "value": 117360,
            "unit": "ns/op",
            "extra": "10000 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - MB/s",
            "value": 36.31,
            "unit": "MB/s",
            "extra": "10000 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - block_bytes",
            "value": 4261,
            "unit": "block_bytes",
            "extra": "10000 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - records",
            "value": 10,
            "unit": "records",
            "extra": "10000 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - B/op",
            "value": 76465,
            "unit": "B/op",
            "extra": "10000 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - allocs/op",
            "value": 517,
            "unit": "allocs/op",
            "extra": "10000 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block",
            "value": 113666,
            "unit": "ns/op\t  37.49 MB/s\t      4261 block_bytes\t        10.00 records\t   76480 B/op\t     517 allocs/op",
            "extra": "8914 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - ns/op",
            "value": 113666,
            "unit": "ns/op",
            "extra": "8914 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - MB/s",
            "value": 37.49,
            "unit": "MB/s",
            "extra": "8914 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - block_bytes",
            "value": 4261,
            "unit": "block_bytes",
            "extra": "8914 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - records",
            "value": 10,
            "unit": "records",
            "extra": "8914 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - B/op",
            "value": 76480,
            "unit": "B/op",
            "extra": "8914 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - allocs/op",
            "value": 517,
            "unit": "allocs/op",
            "extra": "8914 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block",
            "value": 113624,
            "unit": "ns/op\t  37.50 MB/s\t      4261 block_bytes\t        10.00 records\t   77014 B/op\t     534 allocs/op",
            "extra": "10000 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - ns/op",
            "value": 113624,
            "unit": "ns/op",
            "extra": "10000 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - MB/s",
            "value": 37.5,
            "unit": "MB/s",
            "extra": "10000 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - block_bytes",
            "value": 4261,
            "unit": "block_bytes",
            "extra": "10000 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - records",
            "value": 10,
            "unit": "records",
            "extra": "10000 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - B/op",
            "value": 77014,
            "unit": "B/op",
            "extra": "10000 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - allocs/op",
            "value": 534,
            "unit": "allocs/op",
            "extra": "10000 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block",
            "value": 99859,
            "unit": "ns/op\t  42.67 MB/s\t      4261 block_bytes\t        10.00 records\t   77013 B/op\t     534 allocs/op",
            "extra": "12428 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - ns/op",
            "value": 99859,
            "unit": "ns/op",
            "extra": "12428 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - MB/s",
            "value": 42.67,
            "unit": "MB/s",
            "extra": "12428 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - block_bytes",
            "value": 4261,
            "unit": "block_bytes",
            "extra": "12428 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - records",
            "value": 10,
            "unit": "records",
            "extra": "12428 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - B/op",
            "value": 77013,
            "unit": "B/op",
            "extra": "12428 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - allocs/op",
            "value": 534,
            "unit": "allocs/op",
            "extra": "12428 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block",
            "value": 101516,
            "unit": "ns/op\t  41.97 MB/s\t      4261 block_bytes\t        10.00 records\t   77020 B/op\t     534 allocs/op",
            "extra": "10000 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - ns/op",
            "value": 101516,
            "unit": "ns/op",
            "extra": "10000 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - MB/s",
            "value": 41.97,
            "unit": "MB/s",
            "extra": "10000 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - block_bytes",
            "value": 4261,
            "unit": "block_bytes",
            "extra": "10000 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - records",
            "value": 10,
            "unit": "records",
            "extra": "10000 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - B/op",
            "value": 77020,
            "unit": "B/op",
            "extra": "10000 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - allocs/op",
            "value": 534,
            "unit": "allocs/op",
            "extra": "10000 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block",
            "value": 90176,
            "unit": "ns/op\t  47.25 MB/s\t      4261 block_bytes\t        10.00 records\t   77020 B/op\t     534 allocs/op",
            "extra": "12222 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - ns/op",
            "value": 90176,
            "unit": "ns/op",
            "extra": "12222 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - MB/s",
            "value": 47.25,
            "unit": "MB/s",
            "extra": "12222 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - block_bytes",
            "value": 4261,
            "unit": "block_bytes",
            "extra": "12222 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - records",
            "value": 10,
            "unit": "records",
            "extra": "12222 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - B/op",
            "value": 77020,
            "unit": "B/op",
            "extra": "12222 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - allocs/op",
            "value": 534,
            "unit": "allocs/op",
            "extra": "12222 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block",
            "value": 91609,
            "unit": "ns/op\t  46.51 MB/s\t      4261 block_bytes\t        10.00 records\t   77011 B/op\t     534 allocs/op",
            "extra": "13315 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - ns/op",
            "value": 91609,
            "unit": "ns/op",
            "extra": "13315 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - MB/s",
            "value": 46.51,
            "unit": "MB/s",
            "extra": "13315 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - block_bytes",
            "value": 4261,
            "unit": "block_bytes",
            "extra": "13315 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - records",
            "value": 10,
            "unit": "records",
            "extra": "13315 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - B/op",
            "value": 77011,
            "unit": "B/op",
            "extra": "13315 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - allocs/op",
            "value": 534,
            "unit": "allocs/op",
            "extra": "13315 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block",
            "value": 315541,
            "unit": "ns/op\t  13.50 MB/s\t      4261 block_bytes\t        10.00 records\t  512765 B/op\t     794 allocs/op",
            "extra": "3795 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - ns/op",
            "value": 315541,
            "unit": "ns/op",
            "extra": "3795 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - MB/s",
            "value": 13.5,
            "unit": "MB/s",
            "extra": "3795 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - block_bytes",
            "value": 4261,
            "unit": "block_bytes",
            "extra": "3795 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - records",
            "value": 10,
            "unit": "records",
            "extra": "3795 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - B/op",
            "value": 512765,
            "unit": "B/op",
            "extra": "3795 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 794,
            "unit": "allocs/op",
            "extra": "3795 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block",
            "value": 316203,
            "unit": "ns/op\t  13.48 MB/s\t      4261 block_bytes\t        10.00 records\t  512713 B/op\t     794 allocs/op",
            "extra": "3835 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - ns/op",
            "value": 316203,
            "unit": "ns/op",
            "extra": "3835 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - MB/s",
            "value": 13.48,
            "unit": "MB/s",
            "extra": "3835 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - block_bytes",
            "value": 4261,
            "unit": "block_bytes",
            "extra": "3835 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - records",
            "value": 10,
            "unit": "records",
            "extra": "3835 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - B/op",
            "value": 512713,
            "unit": "B/op",
            "extra": "3835 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 794,
            "unit": "allocs/op",
            "extra": "3835 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block",
            "value": 338114,
            "unit": "ns/op\t  12.60 MB/s\t      4261 block_bytes\t        10.00 records\t  512792 B/op\t     794 allocs/op",
            "extra": "3585 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - ns/op",
            "value": 338114,
            "unit": "ns/op",
            "extra": "3585 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - MB/s",
            "value": 12.6,
            "unit": "MB/s",
            "extra": "3585 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - block_bytes",
            "value": 4261,
            "unit": "block_bytes",
            "extra": "3585 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - records",
            "value": 10,
            "unit": "records",
            "extra": "3585 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - B/op",
            "value": 512792,
            "unit": "B/op",
            "extra": "3585 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 794,
            "unit": "allocs/op",
            "extra": "3585 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block",
            "value": 336441,
            "unit": "ns/op\t  12.66 MB/s\t      4261 block_bytes\t        10.00 records\t  512879 B/op\t     794 allocs/op",
            "extra": "3247 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - ns/op",
            "value": 336441,
            "unit": "ns/op",
            "extra": "3247 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - MB/s",
            "value": 12.66,
            "unit": "MB/s",
            "extra": "3247 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - block_bytes",
            "value": 4261,
            "unit": "block_bytes",
            "extra": "3247 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - records",
            "value": 10,
            "unit": "records",
            "extra": "3247 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - B/op",
            "value": 512879,
            "unit": "B/op",
            "extra": "3247 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 794,
            "unit": "allocs/op",
            "extra": "3247 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block",
            "value": 415235,
            "unit": "ns/op\t  10.26 MB/s\t      4261 block_bytes\t        10.00 records\t  512948 B/op\t     794 allocs/op",
            "extra": "3390 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - ns/op",
            "value": 415235,
            "unit": "ns/op",
            "extra": "3390 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - MB/s",
            "value": 10.26,
            "unit": "MB/s",
            "extra": "3390 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - block_bytes",
            "value": 4261,
            "unit": "block_bytes",
            "extra": "3390 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - records",
            "value": 10,
            "unit": "records",
            "extra": "3390 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - B/op",
            "value": 512948,
            "unit": "B/op",
            "extra": "3390 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 794,
            "unit": "allocs/op",
            "extra": "3390 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block",
            "value": 78750,
            "unit": "ns/op\t   1.89 MB/s\t       149.0 block_bytes\t         3.000 records\t  133936 B/op\t     204 allocs/op",
            "extra": "17019 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - ns/op",
            "value": 78750,
            "unit": "ns/op",
            "extra": "17019 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - MB/s",
            "value": 1.89,
            "unit": "MB/s",
            "extra": "17019 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - block_bytes",
            "value": 149,
            "unit": "block_bytes",
            "extra": "17019 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - records",
            "value": 3,
            "unit": "records",
            "extra": "17019 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - B/op",
            "value": 133936,
            "unit": "B/op",
            "extra": "17019 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - allocs/op",
            "value": 204,
            "unit": "allocs/op",
            "extra": "17019 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block",
            "value": 57574,
            "unit": "ns/op\t   2.59 MB/s\t       149.0 block_bytes\t         3.000 records\t  133895 B/op\t     204 allocs/op",
            "extra": "18768 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - ns/op",
            "value": 57574,
            "unit": "ns/op",
            "extra": "18768 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - MB/s",
            "value": 2.59,
            "unit": "MB/s",
            "extra": "18768 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - block_bytes",
            "value": 149,
            "unit": "block_bytes",
            "extra": "18768 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - records",
            "value": 3,
            "unit": "records",
            "extra": "18768 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - B/op",
            "value": 133895,
            "unit": "B/op",
            "extra": "18768 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - allocs/op",
            "value": 204,
            "unit": "allocs/op",
            "extra": "18768 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block",
            "value": 58980,
            "unit": "ns/op\t   2.53 MB/s\t       149.0 block_bytes\t         3.000 records\t  133915 B/op\t     204 allocs/op",
            "extra": "21626 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - ns/op",
            "value": 58980,
            "unit": "ns/op",
            "extra": "21626 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - MB/s",
            "value": 2.53,
            "unit": "MB/s",
            "extra": "21626 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - block_bytes",
            "value": 149,
            "unit": "block_bytes",
            "extra": "21626 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - records",
            "value": 3,
            "unit": "records",
            "extra": "21626 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - B/op",
            "value": 133915,
            "unit": "B/op",
            "extra": "21626 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - allocs/op",
            "value": 204,
            "unit": "allocs/op",
            "extra": "21626 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block",
            "value": 59193,
            "unit": "ns/op\t   2.52 MB/s\t       149.0 block_bytes\t         3.000 records\t  133895 B/op\t     204 allocs/op",
            "extra": "19642 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - ns/op",
            "value": 59193,
            "unit": "ns/op",
            "extra": "19642 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - MB/s",
            "value": 2.52,
            "unit": "MB/s",
            "extra": "19642 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - block_bytes",
            "value": 149,
            "unit": "block_bytes",
            "extra": "19642 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - records",
            "value": 3,
            "unit": "records",
            "extra": "19642 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - B/op",
            "value": 133895,
            "unit": "B/op",
            "extra": "19642 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - allocs/op",
            "value": 204,
            "unit": "allocs/op",
            "extra": "19642 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block",
            "value": 66988,
            "unit": "ns/op\t   2.22 MB/s\t       149.0 block_bytes\t         3.000 records\t  133944 B/op\t     204 allocs/op",
            "extra": "19890 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - ns/op",
            "value": 66988,
            "unit": "ns/op",
            "extra": "19890 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - MB/s",
            "value": 2.22,
            "unit": "MB/s",
            "extra": "19890 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - block_bytes",
            "value": 149,
            "unit": "block_bytes",
            "extra": "19890 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - records",
            "value": 3,
            "unit": "records",
            "extra": "19890 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - B/op",
            "value": 133944,
            "unit": "B/op",
            "extra": "19890 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - allocs/op",
            "value": 204,
            "unit": "allocs/op",
            "extra": "19890 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block",
            "value": 48040,
            "unit": "ns/op\t   3.10 MB/s\t       149.0 block_bytes\t         3.000 records\t  134001 B/op\t     207 allocs/op",
            "extra": "25845 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - ns/op",
            "value": 48040,
            "unit": "ns/op",
            "extra": "25845 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - MB/s",
            "value": 3.1,
            "unit": "MB/s",
            "extra": "25845 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - block_bytes",
            "value": 149,
            "unit": "block_bytes",
            "extra": "25845 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - records",
            "value": 3,
            "unit": "records",
            "extra": "25845 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - B/op",
            "value": 134001,
            "unit": "B/op",
            "extra": "25845 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - allocs/op",
            "value": 207,
            "unit": "allocs/op",
            "extra": "25845 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block",
            "value": 59105,
            "unit": "ns/op\t   2.52 MB/s\t       149.0 block_bytes\t         3.000 records\t  134019 B/op\t     207 allocs/op",
            "extra": "28423 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - ns/op",
            "value": 59105,
            "unit": "ns/op",
            "extra": "28423 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - MB/s",
            "value": 2.52,
            "unit": "MB/s",
            "extra": "28423 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - block_bytes",
            "value": 149,
            "unit": "block_bytes",
            "extra": "28423 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - records",
            "value": 3,
            "unit": "records",
            "extra": "28423 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - B/op",
            "value": 134019,
            "unit": "B/op",
            "extra": "28423 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - allocs/op",
            "value": 207,
            "unit": "allocs/op",
            "extra": "28423 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block",
            "value": 58569,
            "unit": "ns/op\t   2.54 MB/s\t       149.0 block_bytes\t         3.000 records\t  133999 B/op\t     207 allocs/op",
            "extra": "27777 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - ns/op",
            "value": 58569,
            "unit": "ns/op",
            "extra": "27777 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - MB/s",
            "value": 2.54,
            "unit": "MB/s",
            "extra": "27777 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - block_bytes",
            "value": 149,
            "unit": "block_bytes",
            "extra": "27777 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - records",
            "value": 3,
            "unit": "records",
            "extra": "27777 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - B/op",
            "value": 133999,
            "unit": "B/op",
            "extra": "27777 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - allocs/op",
            "value": 207,
            "unit": "allocs/op",
            "extra": "27777 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block",
            "value": 56858,
            "unit": "ns/op\t   2.62 MB/s\t       149.0 block_bytes\t         3.000 records\t  133983 B/op\t     207 allocs/op",
            "extra": "24662 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - ns/op",
            "value": 56858,
            "unit": "ns/op",
            "extra": "24662 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - MB/s",
            "value": 2.62,
            "unit": "MB/s",
            "extra": "24662 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - block_bytes",
            "value": 149,
            "unit": "block_bytes",
            "extra": "24662 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - records",
            "value": 3,
            "unit": "records",
            "extra": "24662 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - B/op",
            "value": 133983,
            "unit": "B/op",
            "extra": "24662 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - allocs/op",
            "value": 207,
            "unit": "allocs/op",
            "extra": "24662 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block",
            "value": 68286,
            "unit": "ns/op\t   2.18 MB/s\t       149.0 block_bytes\t         3.000 records\t  134029 B/op\t     207 allocs/op",
            "extra": "18666 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - ns/op",
            "value": 68286,
            "unit": "ns/op",
            "extra": "18666 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - MB/s",
            "value": 2.18,
            "unit": "MB/s",
            "extra": "18666 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - block_bytes",
            "value": 149,
            "unit": "block_bytes",
            "extra": "18666 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - records",
            "value": 3,
            "unit": "records",
            "extra": "18666 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - B/op",
            "value": 134029,
            "unit": "B/op",
            "extra": "18666 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - allocs/op",
            "value": 207,
            "unit": "allocs/op",
            "extra": "18666 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block",
            "value": 111362,
            "unit": "ns/op\t   1.34 MB/s\t       149.0 block_bytes\t         3.000 records\t  201303 B/op\t     318 allocs/op",
            "extra": "10000 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - ns/op",
            "value": 111362,
            "unit": "ns/op",
            "extra": "10000 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - MB/s",
            "value": 1.34,
            "unit": "MB/s",
            "extra": "10000 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - block_bytes",
            "value": 149,
            "unit": "block_bytes",
            "extra": "10000 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - records",
            "value": 3,
            "unit": "records",
            "extra": "10000 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - B/op",
            "value": 201303,
            "unit": "B/op",
            "extra": "10000 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 318,
            "unit": "allocs/op",
            "extra": "10000 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block",
            "value": 114305,
            "unit": "ns/op\t   1.30 MB/s\t       149.0 block_bytes\t         3.000 records\t  201297 B/op\t     318 allocs/op",
            "extra": "10000 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - ns/op",
            "value": 114305,
            "unit": "ns/op",
            "extra": "10000 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - MB/s",
            "value": 1.3,
            "unit": "MB/s",
            "extra": "10000 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - block_bytes",
            "value": 149,
            "unit": "block_bytes",
            "extra": "10000 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - records",
            "value": 3,
            "unit": "records",
            "extra": "10000 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - B/op",
            "value": 201297,
            "unit": "B/op",
            "extra": "10000 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 318,
            "unit": "allocs/op",
            "extra": "10000 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block",
            "value": 129141,
            "unit": "ns/op\t   1.15 MB/s\t       149.0 block_bytes\t         3.000 records\t  201232 B/op\t     318 allocs/op",
            "extra": "10000 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - ns/op",
            "value": 129141,
            "unit": "ns/op",
            "extra": "10000 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - MB/s",
            "value": 1.15,
            "unit": "MB/s",
            "extra": "10000 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - block_bytes",
            "value": 149,
            "unit": "block_bytes",
            "extra": "10000 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - records",
            "value": 3,
            "unit": "records",
            "extra": "10000 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - B/op",
            "value": 201232,
            "unit": "B/op",
            "extra": "10000 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 318,
            "unit": "allocs/op",
            "extra": "10000 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block",
            "value": 122637,
            "unit": "ns/op\t   1.21 MB/s\t       149.0 block_bytes\t         3.000 records\t  201291 B/op\t     318 allocs/op",
            "extra": "9127 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - ns/op",
            "value": 122637,
            "unit": "ns/op",
            "extra": "9127 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - MB/s",
            "value": 1.21,
            "unit": "MB/s",
            "extra": "9127 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - block_bytes",
            "value": 149,
            "unit": "block_bytes",
            "extra": "9127 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - records",
            "value": 3,
            "unit": "records",
            "extra": "9127 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - B/op",
            "value": 201291,
            "unit": "B/op",
            "extra": "9127 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 318,
            "unit": "allocs/op",
            "extra": "9127 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block",
            "value": 124912,
            "unit": "ns/op\t   1.19 MB/s\t       149.0 block_bytes\t         3.000 records\t  201275 B/op\t     318 allocs/op",
            "extra": "8560 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - ns/op",
            "value": 124912,
            "unit": "ns/op",
            "extra": "8560 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - MB/s",
            "value": 1.19,
            "unit": "MB/s",
            "extra": "8560 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - block_bytes",
            "value": 149,
            "unit": "block_bytes",
            "extra": "8560 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - records",
            "value": 3,
            "unit": "records",
            "extra": "8560 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - B/op",
            "value": 201275,
            "unit": "B/op",
            "extra": "8560 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 318,
            "unit": "allocs/op",
            "extra": "8560 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block",
            "value": 190869,
            "unit": "ns/op\t   0.29 MB/s\t        55.00 block_bytes\t         1.000 records\t 1056292 B/op\t     157 allocs/op",
            "extra": "5797 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - ns/op",
            "value": 190869,
            "unit": "ns/op",
            "extra": "5797 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - MB/s",
            "value": 0.29,
            "unit": "MB/s",
            "extra": "5797 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - block_bytes",
            "value": 55,
            "unit": "block_bytes",
            "extra": "5797 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - records",
            "value": 1,
            "unit": "records",
            "extra": "5797 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - B/op",
            "value": 1056292,
            "unit": "B/op",
            "extra": "5797 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - allocs/op",
            "value": 157,
            "unit": "allocs/op",
            "extra": "5797 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block",
            "value": 219609,
            "unit": "ns/op\t   0.25 MB/s\t        55.00 block_bytes\t         1.000 records\t 1056286 B/op\t     157 allocs/op",
            "extra": "6652 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - ns/op",
            "value": 219609,
            "unit": "ns/op",
            "extra": "6652 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - MB/s",
            "value": 0.25,
            "unit": "MB/s",
            "extra": "6652 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - block_bytes",
            "value": 55,
            "unit": "block_bytes",
            "extra": "6652 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - records",
            "value": 1,
            "unit": "records",
            "extra": "6652 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - B/op",
            "value": 1056286,
            "unit": "B/op",
            "extra": "6652 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - allocs/op",
            "value": 157,
            "unit": "allocs/op",
            "extra": "6652 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block",
            "value": 255670,
            "unit": "ns/op\t   0.22 MB/s\t        55.00 block_bytes\t         1.000 records\t 1055900 B/op\t     156 allocs/op",
            "extra": "6658 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - ns/op",
            "value": 255670,
            "unit": "ns/op",
            "extra": "6658 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - MB/s",
            "value": 0.22,
            "unit": "MB/s",
            "extra": "6658 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - block_bytes",
            "value": 55,
            "unit": "block_bytes",
            "extra": "6658 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - records",
            "value": 1,
            "unit": "records",
            "extra": "6658 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - B/op",
            "value": 1055900,
            "unit": "B/op",
            "extra": "6658 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - allocs/op",
            "value": 156,
            "unit": "allocs/op",
            "extra": "6658 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block",
            "value": 284518,
            "unit": "ns/op\t   0.19 MB/s\t        55.00 block_bytes\t         1.000 records\t 1055648 B/op\t     156 allocs/op",
            "extra": "6765 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - ns/op",
            "value": 284518,
            "unit": "ns/op",
            "extra": "6765 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - MB/s",
            "value": 0.19,
            "unit": "MB/s",
            "extra": "6765 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - block_bytes",
            "value": 55,
            "unit": "block_bytes",
            "extra": "6765 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - records",
            "value": 1,
            "unit": "records",
            "extra": "6765 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - B/op",
            "value": 1055648,
            "unit": "B/op",
            "extra": "6765 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - allocs/op",
            "value": 156,
            "unit": "allocs/op",
            "extra": "6765 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block",
            "value": 247549,
            "unit": "ns/op\t   0.22 MB/s\t        55.00 block_bytes\t         1.000 records\t 1055958 B/op\t     156 allocs/op",
            "extra": "5434 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - ns/op",
            "value": 247549,
            "unit": "ns/op",
            "extra": "5434 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - MB/s",
            "value": 0.22,
            "unit": "MB/s",
            "extra": "5434 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - block_bytes",
            "value": 55,
            "unit": "block_bytes",
            "extra": "5434 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - records",
            "value": 1,
            "unit": "records",
            "extra": "5434 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - B/op",
            "value": 1055958,
            "unit": "B/op",
            "extra": "5434 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - allocs/op",
            "value": 156,
            "unit": "allocs/op",
            "extra": "5434 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block",
            "value": 232275,
            "unit": "ns/op\t   0.24 MB/s\t        55.00 block_bytes\t         1.000 records\t 1056098 B/op\t     158 allocs/op",
            "extra": "6669 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - ns/op",
            "value": 232275,
            "unit": "ns/op",
            "extra": "6669 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - MB/s",
            "value": 0.24,
            "unit": "MB/s",
            "extra": "6669 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - block_bytes",
            "value": 55,
            "unit": "block_bytes",
            "extra": "6669 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - records",
            "value": 1,
            "unit": "records",
            "extra": "6669 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - B/op",
            "value": 1056098,
            "unit": "B/op",
            "extra": "6669 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - allocs/op",
            "value": 158,
            "unit": "allocs/op",
            "extra": "6669 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block",
            "value": 306516,
            "unit": "ns/op\t   0.18 MB/s\t        55.00 block_bytes\t         1.000 records\t 1055667 B/op\t     157 allocs/op",
            "extra": "3622 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - ns/op",
            "value": 306516,
            "unit": "ns/op",
            "extra": "3622 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - MB/s",
            "value": 0.18,
            "unit": "MB/s",
            "extra": "3622 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - block_bytes",
            "value": 55,
            "unit": "block_bytes",
            "extra": "3622 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - records",
            "value": 1,
            "unit": "records",
            "extra": "3622 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - B/op",
            "value": 1055667,
            "unit": "B/op",
            "extra": "3622 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - allocs/op",
            "value": 157,
            "unit": "allocs/op",
            "extra": "3622 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block",
            "value": 259601,
            "unit": "ns/op\t   0.21 MB/s\t        55.00 block_bytes\t         1.000 records\t 1055674 B/op\t     157 allocs/op",
            "extra": "4102 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - ns/op",
            "value": 259601,
            "unit": "ns/op",
            "extra": "4102 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - MB/s",
            "value": 0.21,
            "unit": "MB/s",
            "extra": "4102 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - block_bytes",
            "value": 55,
            "unit": "block_bytes",
            "extra": "4102 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - records",
            "value": 1,
            "unit": "records",
            "extra": "4102 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - B/op",
            "value": 1055674,
            "unit": "B/op",
            "extra": "4102 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - allocs/op",
            "value": 157,
            "unit": "allocs/op",
            "extra": "4102 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block",
            "value": 215647,
            "unit": "ns/op\t   0.26 MB/s\t        55.00 block_bytes\t         1.000 records\t 1056100 B/op\t     157 allocs/op",
            "extra": "6696 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - ns/op",
            "value": 215647,
            "unit": "ns/op",
            "extra": "6696 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - MB/s",
            "value": 0.26,
            "unit": "MB/s",
            "extra": "6696 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - block_bytes",
            "value": 55,
            "unit": "block_bytes",
            "extra": "6696 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - records",
            "value": 1,
            "unit": "records",
            "extra": "6696 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - B/op",
            "value": 1056100,
            "unit": "B/op",
            "extra": "6696 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - allocs/op",
            "value": 157,
            "unit": "allocs/op",
            "extra": "6696 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block",
            "value": 178743,
            "unit": "ns/op\t   0.31 MB/s\t        55.00 block_bytes\t         1.000 records\t 1056365 B/op\t     158 allocs/op",
            "extra": "5875 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - ns/op",
            "value": 178743,
            "unit": "ns/op",
            "extra": "5875 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - MB/s",
            "value": 0.31,
            "unit": "MB/s",
            "extra": "5875 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - block_bytes",
            "value": 55,
            "unit": "block_bytes",
            "extra": "5875 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - records",
            "value": 1,
            "unit": "records",
            "extra": "5875 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - B/op",
            "value": 1056365,
            "unit": "B/op",
            "extra": "5875 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - allocs/op",
            "value": 158,
            "unit": "allocs/op",
            "extra": "5875 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block",
            "value": 232776,
            "unit": "ns/op\t   0.24 MB/s\t        55.00 block_bytes\t         1.000 records\t 1224105 B/op\t     209 allocs/op",
            "extra": "5089 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - ns/op",
            "value": 232776,
            "unit": "ns/op",
            "extra": "5089 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - MB/s",
            "value": 0.24,
            "unit": "MB/s",
            "extra": "5089 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - block_bytes",
            "value": 55,
            "unit": "block_bytes",
            "extra": "5089 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - records",
            "value": 1,
            "unit": "records",
            "extra": "5089 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - B/op",
            "value": 1224105,
            "unit": "B/op",
            "extra": "5089 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 209,
            "unit": "allocs/op",
            "extra": "5089 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block",
            "value": 236200,
            "unit": "ns/op\t   0.23 MB/s\t        55.00 block_bytes\t         1.000 records\t 1224540 B/op\t     209 allocs/op",
            "extra": "5469 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - ns/op",
            "value": 236200,
            "unit": "ns/op",
            "extra": "5469 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - MB/s",
            "value": 0.23,
            "unit": "MB/s",
            "extra": "5469 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - block_bytes",
            "value": 55,
            "unit": "block_bytes",
            "extra": "5469 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - records",
            "value": 1,
            "unit": "records",
            "extra": "5469 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - B/op",
            "value": 1224540,
            "unit": "B/op",
            "extra": "5469 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 209,
            "unit": "allocs/op",
            "extra": "5469 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block",
            "value": 235897,
            "unit": "ns/op\t   0.23 MB/s\t        55.00 block_bytes\t         1.000 records\t 1224567 B/op\t     209 allocs/op",
            "extra": "5239 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - ns/op",
            "value": 235897,
            "unit": "ns/op",
            "extra": "5239 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - MB/s",
            "value": 0.23,
            "unit": "MB/s",
            "extra": "5239 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - block_bytes",
            "value": 55,
            "unit": "block_bytes",
            "extra": "5239 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - records",
            "value": 1,
            "unit": "records",
            "extra": "5239 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - B/op",
            "value": 1224567,
            "unit": "B/op",
            "extra": "5239 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 209,
            "unit": "allocs/op",
            "extra": "5239 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block",
            "value": 243357,
            "unit": "ns/op\t   0.23 MB/s\t        55.00 block_bytes\t         1.000 records\t 1224434 B/op\t     209 allocs/op",
            "extra": "5094 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - ns/op",
            "value": 243357,
            "unit": "ns/op",
            "extra": "5094 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - MB/s",
            "value": 0.23,
            "unit": "MB/s",
            "extra": "5094 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - block_bytes",
            "value": 55,
            "unit": "block_bytes",
            "extra": "5094 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - records",
            "value": 1,
            "unit": "records",
            "extra": "5094 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - B/op",
            "value": 1224434,
            "unit": "B/op",
            "extra": "5094 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 209,
            "unit": "allocs/op",
            "extra": "5094 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block",
            "value": 234207,
            "unit": "ns/op\t   0.23 MB/s\t        55.00 block_bytes\t         1.000 records\t 1224622 B/op\t     209 allocs/op",
            "extra": "5154 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - ns/op",
            "value": 234207,
            "unit": "ns/op",
            "extra": "5154 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - MB/s",
            "value": 0.23,
            "unit": "MB/s",
            "extra": "5154 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - block_bytes",
            "value": 55,
            "unit": "block_bytes",
            "extra": "5154 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - records",
            "value": 1,
            "unit": "records",
            "extra": "5154 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - B/op",
            "value": 1224622,
            "unit": "B/op",
            "extra": "5154 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 209,
            "unit": "allocs/op",
            "extra": "5154 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block",
            "value": 607428,
            "unit": "ns/op\t  43.97 MB/s\t     26707 block_bytes\t        14.00 records\t10167892 B/op\t    1122 allocs/op",
            "extra": "2017 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - ns/op",
            "value": 607428,
            "unit": "ns/op",
            "extra": "2017 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - MB/s",
            "value": 43.97,
            "unit": "MB/s",
            "extra": "2017 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - block_bytes",
            "value": 26707,
            "unit": "block_bytes",
            "extra": "2017 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - records",
            "value": 14,
            "unit": "records",
            "extra": "2017 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - B/op",
            "value": 10167892,
            "unit": "B/op",
            "extra": "2017 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - allocs/op",
            "value": 1122,
            "unit": "allocs/op",
            "extra": "2017 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block",
            "value": 686136,
            "unit": "ns/op\t  38.92 MB/s\t     26707 block_bytes\t        14.00 records\t10167450 B/op\t    1122 allocs/op",
            "extra": "1694 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - ns/op",
            "value": 686136,
            "unit": "ns/op",
            "extra": "1694 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - MB/s",
            "value": 38.92,
            "unit": "MB/s",
            "extra": "1694 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - block_bytes",
            "value": 26707,
            "unit": "block_bytes",
            "extra": "1694 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - records",
            "value": 14,
            "unit": "records",
            "extra": "1694 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - B/op",
            "value": 10167450,
            "unit": "B/op",
            "extra": "1694 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - allocs/op",
            "value": 1122,
            "unit": "allocs/op",
            "extra": "1694 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block",
            "value": 775593,
            "unit": "ns/op\t  34.43 MB/s\t     26707 block_bytes\t        14.00 records\t10167327 B/op\t    1122 allocs/op",
            "extra": "1807 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - ns/op",
            "value": 775593,
            "unit": "ns/op",
            "extra": "1807 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - MB/s",
            "value": 34.43,
            "unit": "MB/s",
            "extra": "1807 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - block_bytes",
            "value": 26707,
            "unit": "block_bytes",
            "extra": "1807 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - records",
            "value": 14,
            "unit": "records",
            "extra": "1807 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - B/op",
            "value": 10167327,
            "unit": "B/op",
            "extra": "1807 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - allocs/op",
            "value": 1122,
            "unit": "allocs/op",
            "extra": "1807 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block",
            "value": 699465,
            "unit": "ns/op\t  38.18 MB/s\t     26707 block_bytes\t        14.00 records\t10167582 B/op\t    1122 allocs/op",
            "extra": "1754 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - ns/op",
            "value": 699465,
            "unit": "ns/op",
            "extra": "1754 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - MB/s",
            "value": 38.18,
            "unit": "MB/s",
            "extra": "1754 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - block_bytes",
            "value": 26707,
            "unit": "block_bytes",
            "extra": "1754 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - records",
            "value": 14,
            "unit": "records",
            "extra": "1754 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - B/op",
            "value": 10167582,
            "unit": "B/op",
            "extra": "1754 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - allocs/op",
            "value": 1122,
            "unit": "allocs/op",
            "extra": "1754 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block",
            "value": 820564,
            "unit": "ns/op\t  32.55 MB/s\t     26707 block_bytes\t        14.00 records\t10167863 B/op\t    1122 allocs/op",
            "extra": "1587 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - ns/op",
            "value": 820564,
            "unit": "ns/op",
            "extra": "1587 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - MB/s",
            "value": 32.55,
            "unit": "MB/s",
            "extra": "1587 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - block_bytes",
            "value": 26707,
            "unit": "block_bytes",
            "extra": "1587 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - records",
            "value": 14,
            "unit": "records",
            "extra": "1587 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - B/op",
            "value": 10167863,
            "unit": "B/op",
            "extra": "1587 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - allocs/op",
            "value": 1122,
            "unit": "allocs/op",
            "extra": "1587 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block",
            "value": 669451,
            "unit": "ns/op\t  39.89 MB/s\t     26707 block_bytes\t        14.00 records\t10168373 B/op\t    1147 allocs/op",
            "extra": "1804 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - ns/op",
            "value": 669451,
            "unit": "ns/op",
            "extra": "1804 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - MB/s",
            "value": 39.89,
            "unit": "MB/s",
            "extra": "1804 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - block_bytes",
            "value": 26707,
            "unit": "block_bytes",
            "extra": "1804 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - records",
            "value": 14,
            "unit": "records",
            "extra": "1804 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - B/op",
            "value": 10168373,
            "unit": "B/op",
            "extra": "1804 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - allocs/op",
            "value": 1147,
            "unit": "allocs/op",
            "extra": "1804 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block",
            "value": 591222,
            "unit": "ns/op\t  45.17 MB/s\t     26707 block_bytes\t        14.00 records\t10168878 B/op\t    1147 allocs/op",
            "extra": "2022 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - ns/op",
            "value": 591222,
            "unit": "ns/op",
            "extra": "2022 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - MB/s",
            "value": 45.17,
            "unit": "MB/s",
            "extra": "2022 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - block_bytes",
            "value": 26707,
            "unit": "block_bytes",
            "extra": "2022 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - records",
            "value": 14,
            "unit": "records",
            "extra": "2022 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - B/op",
            "value": 10168878,
            "unit": "B/op",
            "extra": "2022 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - allocs/op",
            "value": 1147,
            "unit": "allocs/op",
            "extra": "2022 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block",
            "value": 611126,
            "unit": "ns/op\t  43.70 MB/s\t     26707 block_bytes\t        14.00 records\t10168405 B/op\t    1147 allocs/op",
            "extra": "2038 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - ns/op",
            "value": 611126,
            "unit": "ns/op",
            "extra": "2038 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - MB/s",
            "value": 43.7,
            "unit": "MB/s",
            "extra": "2038 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - block_bytes",
            "value": 26707,
            "unit": "block_bytes",
            "extra": "2038 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - records",
            "value": 14,
            "unit": "records",
            "extra": "2038 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - B/op",
            "value": 10168405,
            "unit": "B/op",
            "extra": "2038 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - allocs/op",
            "value": 1147,
            "unit": "allocs/op",
            "extra": "2038 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block",
            "value": 583918,
            "unit": "ns/op\t  45.74 MB/s\t     26707 block_bytes\t        14.00 records\t10168506 B/op\t    1147 allocs/op",
            "extra": "1888 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - ns/op",
            "value": 583918,
            "unit": "ns/op",
            "extra": "1888 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - MB/s",
            "value": 45.74,
            "unit": "MB/s",
            "extra": "1888 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - block_bytes",
            "value": 26707,
            "unit": "block_bytes",
            "extra": "1888 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - records",
            "value": 14,
            "unit": "records",
            "extra": "1888 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - B/op",
            "value": 10168506,
            "unit": "B/op",
            "extra": "1888 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - allocs/op",
            "value": 1147,
            "unit": "allocs/op",
            "extra": "1888 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block",
            "value": 599124,
            "unit": "ns/op\t  44.58 MB/s\t     26707 block_bytes\t        14.00 records\t10169012 B/op\t    1147 allocs/op",
            "extra": "2091 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - ns/op",
            "value": 599124,
            "unit": "ns/op",
            "extra": "2091 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - MB/s",
            "value": 44.58,
            "unit": "MB/s",
            "extra": "2091 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - block_bytes",
            "value": 26707,
            "unit": "block_bytes",
            "extra": "2091 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - records",
            "value": 14,
            "unit": "records",
            "extra": "2091 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - B/op",
            "value": 10169012,
            "unit": "B/op",
            "extra": "2091 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - allocs/op",
            "value": 1147,
            "unit": "allocs/op",
            "extra": "2091 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block",
            "value": 2085260,
            "unit": "ns/op\t  12.81 MB/s\t     26707 block_bytes\t        14.00 records\t48848684 B/op\t    1696 allocs/op",
            "extra": "571 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - ns/op",
            "value": 2085260,
            "unit": "ns/op",
            "extra": "571 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - MB/s",
            "value": 12.81,
            "unit": "MB/s",
            "extra": "571 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - block_bytes",
            "value": 26707,
            "unit": "block_bytes",
            "extra": "571 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - records",
            "value": 14,
            "unit": "records",
            "extra": "571 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - B/op",
            "value": 48848684,
            "unit": "B/op",
            "extra": "571 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 1696,
            "unit": "allocs/op",
            "extra": "571 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block",
            "value": 2275569,
            "unit": "ns/op\t  11.74 MB/s\t     26707 block_bytes\t        14.00 records\t48849737 B/op\t    1697 allocs/op",
            "extra": "512 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - ns/op",
            "value": 2275569,
            "unit": "ns/op",
            "extra": "512 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - MB/s",
            "value": 11.74,
            "unit": "MB/s",
            "extra": "512 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - block_bytes",
            "value": 26707,
            "unit": "block_bytes",
            "extra": "512 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - records",
            "value": 14,
            "unit": "records",
            "extra": "512 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - B/op",
            "value": 48849737,
            "unit": "B/op",
            "extra": "512 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 1697,
            "unit": "allocs/op",
            "extra": "512 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block",
            "value": 2197023,
            "unit": "ns/op\t  12.16 MB/s\t     26707 block_bytes\t        14.00 records\t48848795 B/op\t    1697 allocs/op",
            "extra": "574 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - ns/op",
            "value": 2197023,
            "unit": "ns/op",
            "extra": "574 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - MB/s",
            "value": 12.16,
            "unit": "MB/s",
            "extra": "574 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - block_bytes",
            "value": 26707,
            "unit": "block_bytes",
            "extra": "574 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - records",
            "value": 14,
            "unit": "records",
            "extra": "574 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - B/op",
            "value": 48848795,
            "unit": "B/op",
            "extra": "574 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 1697,
            "unit": "allocs/op",
            "extra": "574 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block",
            "value": 2241977,
            "unit": "ns/op\t  11.91 MB/s\t     26707 block_bytes\t        14.00 records\t48847768 B/op\t    1696 allocs/op",
            "extra": "592 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - ns/op",
            "value": 2241977,
            "unit": "ns/op",
            "extra": "592 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - MB/s",
            "value": 11.91,
            "unit": "MB/s",
            "extra": "592 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - block_bytes",
            "value": 26707,
            "unit": "block_bytes",
            "extra": "592 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - records",
            "value": 14,
            "unit": "records",
            "extra": "592 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - B/op",
            "value": 48847768,
            "unit": "B/op",
            "extra": "592 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 1696,
            "unit": "allocs/op",
            "extra": "592 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block",
            "value": 2056567,
            "unit": "ns/op\t  12.99 MB/s\t     26707 block_bytes\t        14.00 records\t48850726 B/op\t    1697 allocs/op",
            "extra": "522 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - ns/op",
            "value": 2056567,
            "unit": "ns/op",
            "extra": "522 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - MB/s",
            "value": 12.99,
            "unit": "MB/s",
            "extra": "522 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - block_bytes",
            "value": 26707,
            "unit": "block_bytes",
            "extra": "522 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - records",
            "value": 14,
            "unit": "records",
            "extra": "522 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - B/op",
            "value": 48850726,
            "unit": "B/op",
            "extra": "522 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 1697,
            "unit": "allocs/op",
            "extra": "522 times\n3 procs"
          }
        ]
      }
    ]
  }
}