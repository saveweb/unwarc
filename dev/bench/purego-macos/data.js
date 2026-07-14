window.BENCHMARK_DATA = {
  "lastUpdate": 1784059883816,
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
          "id": "8082e6a3446f1fce1041c8ff9de37a2e89e9e88c",
          "message": "Test generic Zstd skippable frame layouts",
          "timestamp": "2026-07-14T22:02:29+02:00",
          "tree_id": "788992199218f3310d1a6cbff8da433efffdc718",
          "url": "https://github.com/saveweb/unwarc/commit/8082e6a3446f1fce1041c8ff9de37a2e89e9e88c"
        },
        "date": 1784059883087,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block",
            "value": 208474,
            "unit": "ns/op\t 105.93 MB/s\t     22083 block_bytes\t         3.000 records\t  132303 B/op\t     194 allocs/op",
            "extra": "5612 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - ns/op",
            "value": 208474,
            "unit": "ns/op",
            "extra": "5612 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - MB/s",
            "value": 105.93,
            "unit": "MB/s",
            "extra": "5612 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - block_bytes",
            "value": 22083,
            "unit": "block_bytes",
            "extra": "5612 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - records",
            "value": 3,
            "unit": "records",
            "extra": "5612 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - B/op",
            "value": 132303,
            "unit": "B/op",
            "extra": "5612 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - allocs/op",
            "value": 194,
            "unit": "allocs/op",
            "extra": "5612 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block",
            "value": 183323,
            "unit": "ns/op\t 120.46 MB/s\t     22083 block_bytes\t         3.000 records\t  132296 B/op\t     194 allocs/op",
            "extra": "6240 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - ns/op",
            "value": 183323,
            "unit": "ns/op",
            "extra": "6240 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - MB/s",
            "value": 120.46,
            "unit": "MB/s",
            "extra": "6240 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - block_bytes",
            "value": 22083,
            "unit": "block_bytes",
            "extra": "6240 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - records",
            "value": 3,
            "unit": "records",
            "extra": "6240 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - B/op",
            "value": 132296,
            "unit": "B/op",
            "extra": "6240 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - allocs/op",
            "value": 194,
            "unit": "allocs/op",
            "extra": "6240 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block",
            "value": 196407,
            "unit": "ns/op\t 112.43 MB/s\t     22083 block_bytes\t         3.000 records\t  132255 B/op\t     194 allocs/op",
            "extra": "6650 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - ns/op",
            "value": 196407,
            "unit": "ns/op",
            "extra": "6650 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - MB/s",
            "value": 112.43,
            "unit": "MB/s",
            "extra": "6650 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - block_bytes",
            "value": 22083,
            "unit": "block_bytes",
            "extra": "6650 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - records",
            "value": 3,
            "unit": "records",
            "extra": "6650 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - B/op",
            "value": 132255,
            "unit": "B/op",
            "extra": "6650 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - allocs/op",
            "value": 194,
            "unit": "allocs/op",
            "extra": "6650 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block",
            "value": 214797,
            "unit": "ns/op\t 102.81 MB/s\t     22083 block_bytes\t         3.000 records\t  132258 B/op\t     194 allocs/op",
            "extra": "5721 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - ns/op",
            "value": 214797,
            "unit": "ns/op",
            "extra": "5721 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - MB/s",
            "value": 102.81,
            "unit": "MB/s",
            "extra": "5721 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - block_bytes",
            "value": 22083,
            "unit": "block_bytes",
            "extra": "5721 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - records",
            "value": 3,
            "unit": "records",
            "extra": "5721 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - B/op",
            "value": 132258,
            "unit": "B/op",
            "extra": "5721 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - allocs/op",
            "value": 194,
            "unit": "allocs/op",
            "extra": "5721 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block",
            "value": 168124,
            "unit": "ns/op\t 131.35 MB/s\t     22083 block_bytes\t         3.000 records\t  132278 B/op\t     194 allocs/op",
            "extra": "6440 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - ns/op",
            "value": 168124,
            "unit": "ns/op",
            "extra": "6440 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - MB/s",
            "value": 131.35,
            "unit": "MB/s",
            "extra": "6440 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - block_bytes",
            "value": 22083,
            "unit": "block_bytes",
            "extra": "6440 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - records",
            "value": 3,
            "unit": "records",
            "extra": "6440 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - B/op",
            "value": 132278,
            "unit": "B/op",
            "extra": "6440 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/stream_block - allocs/op",
            "value": 194,
            "unit": "allocs/op",
            "extra": "6440 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block",
            "value": 155447,
            "unit": "ns/op\t 142.06 MB/s\t     22083 block_bytes\t         3.000 records\t  132328 B/op\t     197 allocs/op",
            "extra": "7984 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - ns/op",
            "value": 155447,
            "unit": "ns/op",
            "extra": "7984 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - MB/s",
            "value": 142.06,
            "unit": "MB/s",
            "extra": "7984 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - block_bytes",
            "value": 22083,
            "unit": "block_bytes",
            "extra": "7984 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - records",
            "value": 3,
            "unit": "records",
            "extra": "7984 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - B/op",
            "value": 132328,
            "unit": "B/op",
            "extra": "7984 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - allocs/op",
            "value": 197,
            "unit": "allocs/op",
            "extra": "7984 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block",
            "value": 155929,
            "unit": "ns/op\t 141.62 MB/s\t     22083 block_bytes\t         3.000 records\t  132379 B/op\t     197 allocs/op",
            "extra": "7846 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - ns/op",
            "value": 155929,
            "unit": "ns/op",
            "extra": "7846 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - MB/s",
            "value": 141.62,
            "unit": "MB/s",
            "extra": "7846 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - block_bytes",
            "value": 22083,
            "unit": "block_bytes",
            "extra": "7846 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - records",
            "value": 3,
            "unit": "records",
            "extra": "7846 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - B/op",
            "value": 132379,
            "unit": "B/op",
            "extra": "7846 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - allocs/op",
            "value": 197,
            "unit": "allocs/op",
            "extra": "7846 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block",
            "value": 156391,
            "unit": "ns/op\t 141.20 MB/s\t     22083 block_bytes\t         3.000 records\t  132389 B/op\t     197 allocs/op",
            "extra": "7795 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - ns/op",
            "value": 156391,
            "unit": "ns/op",
            "extra": "7795 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - MB/s",
            "value": 141.2,
            "unit": "MB/s",
            "extra": "7795 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - block_bytes",
            "value": 22083,
            "unit": "block_bytes",
            "extra": "7795 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - records",
            "value": 3,
            "unit": "records",
            "extra": "7795 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - B/op",
            "value": 132389,
            "unit": "B/op",
            "extra": "7795 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - allocs/op",
            "value": 197,
            "unit": "allocs/op",
            "extra": "7795 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block",
            "value": 156779,
            "unit": "ns/op\t 140.85 MB/s\t     22083 block_bytes\t         3.000 records\t  132367 B/op\t     197 allocs/op",
            "extra": "7472 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - ns/op",
            "value": 156779,
            "unit": "ns/op",
            "extra": "7472 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - MB/s",
            "value": 140.85,
            "unit": "MB/s",
            "extra": "7472 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - block_bytes",
            "value": 22083,
            "unit": "block_bytes",
            "extra": "7472 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - records",
            "value": 3,
            "unit": "records",
            "extra": "7472 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - B/op",
            "value": 132367,
            "unit": "B/op",
            "extra": "7472 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - allocs/op",
            "value": 197,
            "unit": "allocs/op",
            "extra": "7472 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block",
            "value": 185706,
            "unit": "ns/op\t 118.91 MB/s\t     22083 block_bytes\t         3.000 records\t  132378 B/op\t     197 allocs/op",
            "extra": "7576 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - ns/op",
            "value": 185706,
            "unit": "ns/op",
            "extra": "7576 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - MB/s",
            "value": 118.91,
            "unit": "MB/s",
            "extra": "7576 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - block_bytes",
            "value": 22083,
            "unit": "block_bytes",
            "extra": "7576 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - records",
            "value": 3,
            "unit": "records",
            "extra": "7576 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - B/op",
            "value": 132378,
            "unit": "B/op",
            "extra": "7576 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_stream_block - allocs/op",
            "value": 197,
            "unit": "allocs/op",
            "extra": "7576 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block",
            "value": 340500,
            "unit": "ns/op\t  64.85 MB/s\t     22083 block_bytes\t         3.000 records\t  262584 B/op\t     266 allocs/op",
            "extra": "3294 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - ns/op",
            "value": 340500,
            "unit": "ns/op",
            "extra": "3294 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - MB/s",
            "value": 64.85,
            "unit": "MB/s",
            "extra": "3294 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - block_bytes",
            "value": 22083,
            "unit": "block_bytes",
            "extra": "3294 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - records",
            "value": 3,
            "unit": "records",
            "extra": "3294 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - B/op",
            "value": 262584,
            "unit": "B/op",
            "extra": "3294 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 266,
            "unit": "allocs/op",
            "extra": "3294 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block",
            "value": 464674,
            "unit": "ns/op\t  47.52 MB/s\t     22083 block_bytes\t         3.000 records\t  262593 B/op\t     266 allocs/op",
            "extra": "3792 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - ns/op",
            "value": 464674,
            "unit": "ns/op",
            "extra": "3792 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - MB/s",
            "value": 47.52,
            "unit": "MB/s",
            "extra": "3792 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - block_bytes",
            "value": 22083,
            "unit": "block_bytes",
            "extra": "3792 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - records",
            "value": 3,
            "unit": "records",
            "extra": "3792 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - B/op",
            "value": 262593,
            "unit": "B/op",
            "extra": "3792 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 266,
            "unit": "allocs/op",
            "extra": "3792 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block",
            "value": 390135,
            "unit": "ns/op\t  56.60 MB/s\t     22083 block_bytes\t         3.000 records\t  262609 B/op\t     266 allocs/op",
            "extra": "3690 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - ns/op",
            "value": 390135,
            "unit": "ns/op",
            "extra": "3690 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - MB/s",
            "value": 56.6,
            "unit": "MB/s",
            "extra": "3690 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - block_bytes",
            "value": 22083,
            "unit": "block_bytes",
            "extra": "3690 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - records",
            "value": 3,
            "unit": "records",
            "extra": "3690 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - B/op",
            "value": 262609,
            "unit": "B/op",
            "extra": "3690 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 266,
            "unit": "allocs/op",
            "extra": "3690 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block",
            "value": 341972,
            "unit": "ns/op\t  64.58 MB/s\t     22083 block_bytes\t         3.000 records\t  262555 B/op\t     266 allocs/op",
            "extra": "3337 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - ns/op",
            "value": 341972,
            "unit": "ns/op",
            "extra": "3337 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - MB/s",
            "value": 64.58,
            "unit": "MB/s",
            "extra": "3337 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - block_bytes",
            "value": 22083,
            "unit": "block_bytes",
            "extra": "3337 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - records",
            "value": 3,
            "unit": "records",
            "extra": "3337 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - B/op",
            "value": 262555,
            "unit": "B/op",
            "extra": "3337 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 266,
            "unit": "allocs/op",
            "extra": "3337 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block",
            "value": 362060,
            "unit": "ns/op\t  60.99 MB/s\t     22083 block_bytes\t         3.000 records\t  262606 B/op\t     266 allocs/op",
            "extra": "2793 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - ns/op",
            "value": 362060,
            "unit": "ns/op",
            "extra": "2793 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - MB/s",
            "value": 60.99,
            "unit": "MB/s",
            "extra": "2793 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - block_bytes",
            "value": 22083,
            "unit": "block_bytes",
            "extra": "2793 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - records",
            "value": 3,
            "unit": "records",
            "extra": "2793 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - B/op",
            "value": 262606,
            "unit": "B/op",
            "extra": "2793 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_record_per_member/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 266,
            "unit": "allocs/op",
            "extra": "2793 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block",
            "value": 110184,
            "unit": "ns/op\t  38.67 MB/s\t      4261 block_bytes\t        10.00 records\t   76465 B/op\t     517 allocs/op",
            "extra": "10692 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - ns/op",
            "value": 110184,
            "unit": "ns/op",
            "extra": "10692 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - MB/s",
            "value": 38.67,
            "unit": "MB/s",
            "extra": "10692 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - block_bytes",
            "value": 4261,
            "unit": "block_bytes",
            "extra": "10692 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - records",
            "value": 10,
            "unit": "records",
            "extra": "10692 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - B/op",
            "value": 76465,
            "unit": "B/op",
            "extra": "10692 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - allocs/op",
            "value": 517,
            "unit": "allocs/op",
            "extra": "10692 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block",
            "value": 111314,
            "unit": "ns/op\t  38.28 MB/s\t      4261 block_bytes\t        10.00 records\t   76466 B/op\t     517 allocs/op",
            "extra": "12134 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - ns/op",
            "value": 111314,
            "unit": "ns/op",
            "extra": "12134 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - MB/s",
            "value": 38.28,
            "unit": "MB/s",
            "extra": "12134 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - block_bytes",
            "value": 4261,
            "unit": "block_bytes",
            "extra": "12134 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - records",
            "value": 10,
            "unit": "records",
            "extra": "12134 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - B/op",
            "value": 76466,
            "unit": "B/op",
            "extra": "12134 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - allocs/op",
            "value": 517,
            "unit": "allocs/op",
            "extra": "12134 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block",
            "value": 103309,
            "unit": "ns/op\t  41.25 MB/s\t      4261 block_bytes\t        10.00 records\t   76483 B/op\t     517 allocs/op",
            "extra": "10000 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - ns/op",
            "value": 103309,
            "unit": "ns/op",
            "extra": "10000 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - MB/s",
            "value": 41.25,
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
            "value": 76483,
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
            "value": 100525,
            "unit": "ns/op\t  42.39 MB/s\t      4261 block_bytes\t        10.00 records\t   76482 B/op\t     517 allocs/op",
            "extra": "10000 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - ns/op",
            "value": 100525,
            "unit": "ns/op",
            "extra": "10000 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - MB/s",
            "value": 42.39,
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
            "value": 76482,
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
            "value": 130203,
            "unit": "ns/op\t  32.73 MB/s\t      4261 block_bytes\t        10.00 records\t   76471 B/op\t     517 allocs/op",
            "extra": "10000 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - ns/op",
            "value": 130203,
            "unit": "ns/op",
            "extra": "10000 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/stream_block - MB/s",
            "value": 32.73,
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
            "value": 76471,
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
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block",
            "value": 105280,
            "unit": "ns/op\t  40.47 MB/s\t      4261 block_bytes\t        10.00 records\t   77014 B/op\t     534 allocs/op",
            "extra": "11143 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - ns/op",
            "value": 105280,
            "unit": "ns/op",
            "extra": "11143 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - MB/s",
            "value": 40.47,
            "unit": "MB/s",
            "extra": "11143 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - block_bytes",
            "value": 4261,
            "unit": "block_bytes",
            "extra": "11143 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - records",
            "value": 10,
            "unit": "records",
            "extra": "11143 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - B/op",
            "value": 77014,
            "unit": "B/op",
            "extra": "11143 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - allocs/op",
            "value": 534,
            "unit": "allocs/op",
            "extra": "11143 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block",
            "value": 128940,
            "unit": "ns/op\t  33.05 MB/s\t      4261 block_bytes\t        10.00 records\t   77026 B/op\t     534 allocs/op",
            "extra": "10000 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - ns/op",
            "value": 128940,
            "unit": "ns/op",
            "extra": "10000 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - MB/s",
            "value": 33.05,
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
            "value": 77026,
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
            "value": 116882,
            "unit": "ns/op\t  36.46 MB/s\t      4261 block_bytes\t        10.00 records\t   77013 B/op\t     534 allocs/op",
            "extra": "10000 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - ns/op",
            "value": 116882,
            "unit": "ns/op",
            "extra": "10000 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - MB/s",
            "value": 36.46,
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
            "value": 77013,
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
            "value": 100996,
            "unit": "ns/op\t  42.19 MB/s\t      4261 block_bytes\t        10.00 records\t   77024 B/op\t     534 allocs/op",
            "extra": "12141 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - ns/op",
            "value": 100996,
            "unit": "ns/op",
            "extra": "12141 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - MB/s",
            "value": 42.19,
            "unit": "MB/s",
            "extra": "12141 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - block_bytes",
            "value": 4261,
            "unit": "block_bytes",
            "extra": "12141 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - records",
            "value": 10,
            "unit": "records",
            "extra": "12141 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - B/op",
            "value": 77024,
            "unit": "B/op",
            "extra": "12141 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - allocs/op",
            "value": 534,
            "unit": "allocs/op",
            "extra": "12141 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block",
            "value": 116468,
            "unit": "ns/op\t  36.59 MB/s\t      4261 block_bytes\t        10.00 records\t   77014 B/op\t     534 allocs/op",
            "extra": "12344 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - ns/op",
            "value": 116468,
            "unit": "ns/op",
            "extra": "12344 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - MB/s",
            "value": 36.59,
            "unit": "MB/s",
            "extra": "12344 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - block_bytes",
            "value": 4261,
            "unit": "block_bytes",
            "extra": "12344 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - records",
            "value": 10,
            "unit": "records",
            "extra": "12344 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - B/op",
            "value": 77014,
            "unit": "B/op",
            "extra": "12344 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_stream_block - allocs/op",
            "value": 534,
            "unit": "allocs/op",
            "extra": "12344 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block",
            "value": 474285,
            "unit": "ns/op\t   8.98 MB/s\t      4261 block_bytes\t        10.00 records\t  512988 B/op\t     794 allocs/op",
            "extra": "2787 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - ns/op",
            "value": 474285,
            "unit": "ns/op",
            "extra": "2787 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - MB/s",
            "value": 8.98,
            "unit": "MB/s",
            "extra": "2787 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - block_bytes",
            "value": 4261,
            "unit": "block_bytes",
            "extra": "2787 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - records",
            "value": 10,
            "unit": "records",
            "extra": "2787 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - B/op",
            "value": 512988,
            "unit": "B/op",
            "extra": "2787 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 794,
            "unit": "allocs/op",
            "extra": "2787 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block",
            "value": 362916,
            "unit": "ns/op\t  11.74 MB/s\t      4261 block_bytes\t        10.00 records\t  512875 B/op\t     794 allocs/op",
            "extra": "3448 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - ns/op",
            "value": 362916,
            "unit": "ns/op",
            "extra": "3448 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - MB/s",
            "value": 11.74,
            "unit": "MB/s",
            "extra": "3448 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - block_bytes",
            "value": 4261,
            "unit": "block_bytes",
            "extra": "3448 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - records",
            "value": 10,
            "unit": "records",
            "extra": "3448 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - B/op",
            "value": 512875,
            "unit": "B/op",
            "extra": "3448 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 794,
            "unit": "allocs/op",
            "extra": "3448 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block",
            "value": 342337,
            "unit": "ns/op\t  12.45 MB/s\t      4261 block_bytes\t        10.00 records\t  512856 B/op\t     794 allocs/op",
            "extra": "2926 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - ns/op",
            "value": 342337,
            "unit": "ns/op",
            "extra": "2926 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - MB/s",
            "value": 12.45,
            "unit": "MB/s",
            "extra": "2926 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - block_bytes",
            "value": 4261,
            "unit": "block_bytes",
            "extra": "2926 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - records",
            "value": 10,
            "unit": "records",
            "extra": "2926 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - B/op",
            "value": 512856,
            "unit": "B/op",
            "extra": "2926 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 794,
            "unit": "allocs/op",
            "extra": "2926 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block",
            "value": 367794,
            "unit": "ns/op\t  11.59 MB/s\t      4261 block_bytes\t        10.00 records\t  512888 B/op\t     794 allocs/op",
            "extra": "3739 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - ns/op",
            "value": 367794,
            "unit": "ns/op",
            "extra": "3739 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - MB/s",
            "value": 11.59,
            "unit": "MB/s",
            "extra": "3739 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - block_bytes",
            "value": 4261,
            "unit": "block_bytes",
            "extra": "3739 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - records",
            "value": 10,
            "unit": "records",
            "extra": "3739 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - B/op",
            "value": 512888,
            "unit": "B/op",
            "extra": "3739 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 794,
            "unit": "allocs/op",
            "extra": "3739 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block",
            "value": 374201,
            "unit": "ns/op\t  11.39 MB/s\t      4261 block_bytes\t        10.00 records\t  512901 B/op\t     794 allocs/op",
            "extra": "3763 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - ns/op",
            "value": 374201,
            "unit": "ns/op",
            "extra": "3763 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - MB/s",
            "value": 11.39,
            "unit": "MB/s",
            "extra": "3763 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - block_bytes",
            "value": 4261,
            "unit": "block_bytes",
            "extra": "3763 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - records",
            "value": 10,
            "unit": "records",
            "extra": "3763 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - B/op",
            "value": 512901,
            "unit": "B/op",
            "extra": "3763 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/gzip_solid_member/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 794,
            "unit": "allocs/op",
            "extra": "3763 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block",
            "value": 61934,
            "unit": "ns/op\t   2.41 MB/s\t       149.0 block_bytes\t         3.000 records\t  133906 B/op\t     204 allocs/op",
            "extra": "27121 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - ns/op",
            "value": 61934,
            "unit": "ns/op",
            "extra": "27121 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - MB/s",
            "value": 2.41,
            "unit": "MB/s",
            "extra": "27121 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - block_bytes",
            "value": 149,
            "unit": "block_bytes",
            "extra": "27121 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - records",
            "value": 3,
            "unit": "records",
            "extra": "27121 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - B/op",
            "value": 133906,
            "unit": "B/op",
            "extra": "27121 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - allocs/op",
            "value": 204,
            "unit": "allocs/op",
            "extra": "27121 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block",
            "value": 79483,
            "unit": "ns/op\t   1.87 MB/s\t       149.0 block_bytes\t         3.000 records\t  133926 B/op\t     204 allocs/op",
            "extra": "21712 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - ns/op",
            "value": 79483,
            "unit": "ns/op",
            "extra": "21712 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - MB/s",
            "value": 1.87,
            "unit": "MB/s",
            "extra": "21712 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - block_bytes",
            "value": 149,
            "unit": "block_bytes",
            "extra": "21712 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - records",
            "value": 3,
            "unit": "records",
            "extra": "21712 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - B/op",
            "value": 133926,
            "unit": "B/op",
            "extra": "21712 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - allocs/op",
            "value": 204,
            "unit": "allocs/op",
            "extra": "21712 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block",
            "value": 58984,
            "unit": "ns/op\t   2.53 MB/s\t       149.0 block_bytes\t         3.000 records\t  133921 B/op\t     204 allocs/op",
            "extra": "22010 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - ns/op",
            "value": 58984,
            "unit": "ns/op",
            "extra": "22010 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - MB/s",
            "value": 2.53,
            "unit": "MB/s",
            "extra": "22010 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - block_bytes",
            "value": 149,
            "unit": "block_bytes",
            "extra": "22010 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - records",
            "value": 3,
            "unit": "records",
            "extra": "22010 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - B/op",
            "value": 133921,
            "unit": "B/op",
            "extra": "22010 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - allocs/op",
            "value": 204,
            "unit": "allocs/op",
            "extra": "22010 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block",
            "value": 53214,
            "unit": "ns/op\t   2.80 MB/s\t       149.0 block_bytes\t         3.000 records\t  133926 B/op\t     204 allocs/op",
            "extra": "27308 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - ns/op",
            "value": 53214,
            "unit": "ns/op",
            "extra": "27308 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - MB/s",
            "value": 2.8,
            "unit": "MB/s",
            "extra": "27308 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - block_bytes",
            "value": 149,
            "unit": "block_bytes",
            "extra": "27308 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - records",
            "value": 3,
            "unit": "records",
            "extra": "27308 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - B/op",
            "value": 133926,
            "unit": "B/op",
            "extra": "27308 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - allocs/op",
            "value": 204,
            "unit": "allocs/op",
            "extra": "27308 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block",
            "value": 54265,
            "unit": "ns/op\t   2.75 MB/s\t       149.0 block_bytes\t         3.000 records\t  133900 B/op\t     204 allocs/op",
            "extra": "22482 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - ns/op",
            "value": 54265,
            "unit": "ns/op",
            "extra": "22482 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - MB/s",
            "value": 2.75,
            "unit": "MB/s",
            "extra": "22482 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - block_bytes",
            "value": 149,
            "unit": "block_bytes",
            "extra": "22482 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - records",
            "value": 3,
            "unit": "records",
            "extra": "22482 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - B/op",
            "value": 133900,
            "unit": "B/op",
            "extra": "22482 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/stream_block - allocs/op",
            "value": 204,
            "unit": "allocs/op",
            "extra": "22482 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block",
            "value": 46835,
            "unit": "ns/op\t   3.18 MB/s\t       149.0 block_bytes\t         3.000 records\t  134020 B/op\t     207 allocs/op",
            "extra": "23908 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - ns/op",
            "value": 46835,
            "unit": "ns/op",
            "extra": "23908 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - MB/s",
            "value": 3.18,
            "unit": "MB/s",
            "extra": "23908 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - block_bytes",
            "value": 149,
            "unit": "block_bytes",
            "extra": "23908 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - records",
            "value": 3,
            "unit": "records",
            "extra": "23908 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - B/op",
            "value": 134020,
            "unit": "B/op",
            "extra": "23908 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - allocs/op",
            "value": 207,
            "unit": "allocs/op",
            "extra": "23908 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block",
            "value": 53340,
            "unit": "ns/op\t   2.79 MB/s\t       149.0 block_bytes\t         3.000 records\t  134035 B/op\t     207 allocs/op",
            "extra": "27247 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - ns/op",
            "value": 53340,
            "unit": "ns/op",
            "extra": "27247 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - MB/s",
            "value": 2.79,
            "unit": "MB/s",
            "extra": "27247 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - block_bytes",
            "value": 149,
            "unit": "block_bytes",
            "extra": "27247 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - records",
            "value": 3,
            "unit": "records",
            "extra": "27247 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - B/op",
            "value": 134035,
            "unit": "B/op",
            "extra": "27247 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - allocs/op",
            "value": 207,
            "unit": "allocs/op",
            "extra": "27247 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block",
            "value": 42852,
            "unit": "ns/op\t   3.48 MB/s\t       149.0 block_bytes\t         3.000 records\t  134009 B/op\t     207 allocs/op",
            "extra": "25144 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - ns/op",
            "value": 42852,
            "unit": "ns/op",
            "extra": "25144 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - MB/s",
            "value": 3.48,
            "unit": "MB/s",
            "extra": "25144 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - block_bytes",
            "value": 149,
            "unit": "block_bytes",
            "extra": "25144 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - records",
            "value": 3,
            "unit": "records",
            "extra": "25144 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - B/op",
            "value": 134009,
            "unit": "B/op",
            "extra": "25144 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - allocs/op",
            "value": 207,
            "unit": "allocs/op",
            "extra": "25144 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block",
            "value": 43063,
            "unit": "ns/op\t   3.46 MB/s\t       149.0 block_bytes\t         3.000 records\t  134000 B/op\t     207 allocs/op",
            "extra": "28282 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - ns/op",
            "value": 43063,
            "unit": "ns/op",
            "extra": "28282 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - MB/s",
            "value": 3.46,
            "unit": "MB/s",
            "extra": "28282 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - block_bytes",
            "value": 149,
            "unit": "block_bytes",
            "extra": "28282 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - records",
            "value": 3,
            "unit": "records",
            "extra": "28282 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - B/op",
            "value": 134000,
            "unit": "B/op",
            "extra": "28282 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - allocs/op",
            "value": 207,
            "unit": "allocs/op",
            "extra": "28282 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block",
            "value": 43132,
            "unit": "ns/op\t   3.45 MB/s\t       149.0 block_bytes\t         3.000 records\t  134009 B/op\t     207 allocs/op",
            "extra": "28502 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - ns/op",
            "value": 43132,
            "unit": "ns/op",
            "extra": "28502 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - MB/s",
            "value": 3.45,
            "unit": "MB/s",
            "extra": "28502 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - block_bytes",
            "value": 149,
            "unit": "block_bytes",
            "extra": "28502 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - records",
            "value": 3,
            "unit": "records",
            "extra": "28502 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - B/op",
            "value": 134009,
            "unit": "B/op",
            "extra": "28502 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_stream_block - allocs/op",
            "value": 207,
            "unit": "allocs/op",
            "extra": "28502 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block",
            "value": 93958,
            "unit": "ns/op\t   1.59 MB/s\t       149.0 block_bytes\t         3.000 records\t  201290 B/op\t     318 allocs/op",
            "extra": "12716 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - ns/op",
            "value": 93958,
            "unit": "ns/op",
            "extra": "12716 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - MB/s",
            "value": 1.59,
            "unit": "MB/s",
            "extra": "12716 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - block_bytes",
            "value": 149,
            "unit": "block_bytes",
            "extra": "12716 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - records",
            "value": 3,
            "unit": "records",
            "extra": "12716 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - B/op",
            "value": 201290,
            "unit": "B/op",
            "extra": "12716 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 318,
            "unit": "allocs/op",
            "extra": "12716 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block",
            "value": 99505,
            "unit": "ns/op\t   1.50 MB/s\t       149.0 block_bytes\t         3.000 records\t  201305 B/op\t     318 allocs/op",
            "extra": "12430 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - ns/op",
            "value": 99505,
            "unit": "ns/op",
            "extra": "12430 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - MB/s",
            "value": 1.5,
            "unit": "MB/s",
            "extra": "12430 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - block_bytes",
            "value": 149,
            "unit": "block_bytes",
            "extra": "12430 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - records",
            "value": 3,
            "unit": "records",
            "extra": "12430 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - B/op",
            "value": 201305,
            "unit": "B/op",
            "extra": "12430 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 318,
            "unit": "allocs/op",
            "extra": "12430 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block",
            "value": 123791,
            "unit": "ns/op\t   1.20 MB/s\t       149.0 block_bytes\t         3.000 records\t  201316 B/op\t     318 allocs/op",
            "extra": "12772 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - ns/op",
            "value": 123791,
            "unit": "ns/op",
            "extra": "12772 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - MB/s",
            "value": 1.2,
            "unit": "MB/s",
            "extra": "12772 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - block_bytes",
            "value": 149,
            "unit": "block_bytes",
            "extra": "12772 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - records",
            "value": 3,
            "unit": "records",
            "extra": "12772 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - B/op",
            "value": 201316,
            "unit": "B/op",
            "extra": "12772 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 318,
            "unit": "allocs/op",
            "extra": "12772 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block",
            "value": 135661,
            "unit": "ns/op\t   1.10 MB/s\t       149.0 block_bytes\t         3.000 records\t  201324 B/op\t     318 allocs/op",
            "extra": "10891 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - ns/op",
            "value": 135661,
            "unit": "ns/op",
            "extra": "10891 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - MB/s",
            "value": 1.1,
            "unit": "MB/s",
            "extra": "10891 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - block_bytes",
            "value": 149,
            "unit": "block_bytes",
            "extra": "10891 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - records",
            "value": 3,
            "unit": "records",
            "extra": "10891 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - B/op",
            "value": 201324,
            "unit": "B/op",
            "extra": "10891 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 318,
            "unit": "allocs/op",
            "extra": "10891 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block",
            "value": 116270,
            "unit": "ns/op\t   1.28 MB/s\t       149.0 block_bytes\t         3.000 records\t  201340 B/op\t     318 allocs/op",
            "extra": "9207 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - ns/op",
            "value": 116270,
            "unit": "ns/op",
            "extra": "9207 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - MB/s",
            "value": 1.28,
            "unit": "MB/s",
            "extra": "9207 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - block_bytes",
            "value": 149,
            "unit": "block_bytes",
            "extra": "9207 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - records",
            "value": 3,
            "unit": "records",
            "extra": "9207 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - B/op",
            "value": 201340,
            "unit": "B/op",
            "extra": "9207 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_record_per_frame/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 318,
            "unit": "allocs/op",
            "extra": "9207 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block",
            "value": 206001,
            "unit": "ns/op\t   0.27 MB/s\t        55.00 block_bytes\t         1.000 records\t 1056068 B/op\t     156 allocs/op",
            "extra": "5718 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - ns/op",
            "value": 206001,
            "unit": "ns/op",
            "extra": "5718 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - MB/s",
            "value": 0.27,
            "unit": "MB/s",
            "extra": "5718 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - block_bytes",
            "value": 55,
            "unit": "block_bytes",
            "extra": "5718 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - records",
            "value": 1,
            "unit": "records",
            "extra": "5718 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - B/op",
            "value": 1056068,
            "unit": "B/op",
            "extra": "5718 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - allocs/op",
            "value": 156,
            "unit": "allocs/op",
            "extra": "5718 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block",
            "value": 202260,
            "unit": "ns/op\t   0.27 MB/s\t        55.00 block_bytes\t         1.000 records\t 1056056 B/op\t     156 allocs/op",
            "extra": "6300 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - ns/op",
            "value": 202260,
            "unit": "ns/op",
            "extra": "6300 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - MB/s",
            "value": 0.27,
            "unit": "MB/s",
            "extra": "6300 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - block_bytes",
            "value": 55,
            "unit": "block_bytes",
            "extra": "6300 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - records",
            "value": 1,
            "unit": "records",
            "extra": "6300 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - B/op",
            "value": 1056056,
            "unit": "B/op",
            "extra": "6300 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - allocs/op",
            "value": 156,
            "unit": "allocs/op",
            "extra": "6300 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block",
            "value": 176695,
            "unit": "ns/op\t   0.31 MB/s\t        55.00 block_bytes\t         1.000 records\t 1056145 B/op\t     157 allocs/op",
            "extra": "6632 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - ns/op",
            "value": 176695,
            "unit": "ns/op",
            "extra": "6632 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - MB/s",
            "value": 0.31,
            "unit": "MB/s",
            "extra": "6632 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - block_bytes",
            "value": 55,
            "unit": "block_bytes",
            "extra": "6632 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - records",
            "value": 1,
            "unit": "records",
            "extra": "6632 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - B/op",
            "value": 1056145,
            "unit": "B/op",
            "extra": "6632 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - allocs/op",
            "value": 157,
            "unit": "allocs/op",
            "extra": "6632 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block",
            "value": 180044,
            "unit": "ns/op\t   0.31 MB/s\t        55.00 block_bytes\t         1.000 records\t 1056064 B/op\t     156 allocs/op",
            "extra": "6680 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - ns/op",
            "value": 180044,
            "unit": "ns/op",
            "extra": "6680 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - MB/s",
            "value": 0.31,
            "unit": "MB/s",
            "extra": "6680 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - block_bytes",
            "value": 55,
            "unit": "block_bytes",
            "extra": "6680 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - records",
            "value": 1,
            "unit": "records",
            "extra": "6680 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - B/op",
            "value": 1056064,
            "unit": "B/op",
            "extra": "6680 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - allocs/op",
            "value": 156,
            "unit": "allocs/op",
            "extra": "6680 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block",
            "value": 203840,
            "unit": "ns/op\t   0.27 MB/s\t        55.00 block_bytes\t         1.000 records\t 1056010 B/op\t     156 allocs/op",
            "extra": "6762 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - ns/op",
            "value": 203840,
            "unit": "ns/op",
            "extra": "6762 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - MB/s",
            "value": 0.27,
            "unit": "MB/s",
            "extra": "6762 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - block_bytes",
            "value": 55,
            "unit": "block_bytes",
            "extra": "6762 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - records",
            "value": 1,
            "unit": "records",
            "extra": "6762 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - B/op",
            "value": 1056010,
            "unit": "B/op",
            "extra": "6762 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/stream_block - allocs/op",
            "value": 156,
            "unit": "allocs/op",
            "extra": "6762 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block",
            "value": 181264,
            "unit": "ns/op\t   0.30 MB/s\t        55.00 block_bytes\t         1.000 records\t 1056283 B/op\t     158 allocs/op",
            "extra": "5772 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - ns/op",
            "value": 181264,
            "unit": "ns/op",
            "extra": "5772 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - MB/s",
            "value": 0.3,
            "unit": "MB/s",
            "extra": "5772 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - block_bytes",
            "value": 55,
            "unit": "block_bytes",
            "extra": "5772 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - records",
            "value": 1,
            "unit": "records",
            "extra": "5772 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - B/op",
            "value": 1056283,
            "unit": "B/op",
            "extra": "5772 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - allocs/op",
            "value": 158,
            "unit": "allocs/op",
            "extra": "5772 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block",
            "value": 184831,
            "unit": "ns/op\t   0.30 MB/s\t        55.00 block_bytes\t         1.000 records\t 1056258 B/op\t     158 allocs/op",
            "extra": "6477 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - ns/op",
            "value": 184831,
            "unit": "ns/op",
            "extra": "6477 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - MB/s",
            "value": 0.3,
            "unit": "MB/s",
            "extra": "6477 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - block_bytes",
            "value": 55,
            "unit": "block_bytes",
            "extra": "6477 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - records",
            "value": 1,
            "unit": "records",
            "extra": "6477 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - B/op",
            "value": 1056258,
            "unit": "B/op",
            "extra": "6477 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - allocs/op",
            "value": 158,
            "unit": "allocs/op",
            "extra": "6477 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block",
            "value": 184269,
            "unit": "ns/op\t   0.30 MB/s\t        55.00 block_bytes\t         1.000 records\t 1056366 B/op\t     158 allocs/op",
            "extra": "6640 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - ns/op",
            "value": 184269,
            "unit": "ns/op",
            "extra": "6640 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - MB/s",
            "value": 0.3,
            "unit": "MB/s",
            "extra": "6640 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - block_bytes",
            "value": 55,
            "unit": "block_bytes",
            "extra": "6640 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - records",
            "value": 1,
            "unit": "records",
            "extra": "6640 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - B/op",
            "value": 1056366,
            "unit": "B/op",
            "extra": "6640 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - allocs/op",
            "value": 158,
            "unit": "allocs/op",
            "extra": "6640 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block",
            "value": 182537,
            "unit": "ns/op\t   0.30 MB/s\t        55.00 block_bytes\t         1.000 records\t 1056397 B/op\t     158 allocs/op",
            "extra": "6700 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - ns/op",
            "value": 182537,
            "unit": "ns/op",
            "extra": "6700 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - MB/s",
            "value": 0.3,
            "unit": "MB/s",
            "extra": "6700 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - block_bytes",
            "value": 55,
            "unit": "block_bytes",
            "extra": "6700 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - records",
            "value": 1,
            "unit": "records",
            "extra": "6700 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - B/op",
            "value": 1056397,
            "unit": "B/op",
            "extra": "6700 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - allocs/op",
            "value": 158,
            "unit": "allocs/op",
            "extra": "6700 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block",
            "value": 181499,
            "unit": "ns/op\t   0.30 MB/s\t        55.00 block_bytes\t         1.000 records\t 1056399 B/op\t     158 allocs/op",
            "extra": "6643 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - ns/op",
            "value": 181499,
            "unit": "ns/op",
            "extra": "6643 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - MB/s",
            "value": 0.3,
            "unit": "MB/s",
            "extra": "6643 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - block_bytes",
            "value": 55,
            "unit": "block_bytes",
            "extra": "6643 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - records",
            "value": 1,
            "unit": "records",
            "extra": "6643 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - B/op",
            "value": 1056399,
            "unit": "B/op",
            "extra": "6643 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_stream_block - allocs/op",
            "value": 158,
            "unit": "allocs/op",
            "extra": "6643 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block",
            "value": 233845,
            "unit": "ns/op\t   0.24 MB/s\t        55.00 block_bytes\t         1.000 records\t 1224772 B/op\t     209 allocs/op",
            "extra": "5208 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - ns/op",
            "value": 233845,
            "unit": "ns/op",
            "extra": "5208 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - MB/s",
            "value": 0.24,
            "unit": "MB/s",
            "extra": "5208 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - block_bytes",
            "value": 55,
            "unit": "block_bytes",
            "extra": "5208 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - records",
            "value": 1,
            "unit": "records",
            "extra": "5208 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - B/op",
            "value": 1224772,
            "unit": "B/op",
            "extra": "5208 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 209,
            "unit": "allocs/op",
            "extra": "5208 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block",
            "value": 233809,
            "unit": "ns/op\t   0.24 MB/s\t        55.00 block_bytes\t         1.000 records\t 1224864 B/op\t     209 allocs/op",
            "extra": "5136 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - ns/op",
            "value": 233809,
            "unit": "ns/op",
            "extra": "5136 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - MB/s",
            "value": 0.24,
            "unit": "MB/s",
            "extra": "5136 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - block_bytes",
            "value": 55,
            "unit": "block_bytes",
            "extra": "5136 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - records",
            "value": 1,
            "unit": "records",
            "extra": "5136 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - B/op",
            "value": 1224864,
            "unit": "B/op",
            "extra": "5136 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 209,
            "unit": "allocs/op",
            "extra": "5136 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block",
            "value": 241513,
            "unit": "ns/op\t   0.23 MB/s\t        55.00 block_bytes\t         1.000 records\t 1224506 B/op\t     209 allocs/op",
            "extra": "5281 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - ns/op",
            "value": 241513,
            "unit": "ns/op",
            "extra": "5281 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - MB/s",
            "value": 0.23,
            "unit": "MB/s",
            "extra": "5281 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - block_bytes",
            "value": 55,
            "unit": "block_bytes",
            "extra": "5281 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - records",
            "value": 1,
            "unit": "records",
            "extra": "5281 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - B/op",
            "value": 1224506,
            "unit": "B/op",
            "extra": "5281 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 209,
            "unit": "allocs/op",
            "extra": "5281 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block",
            "value": 253729,
            "unit": "ns/op\t   0.22 MB/s\t        55.00 block_bytes\t         1.000 records\t 1224239 B/op\t     209 allocs/op",
            "extra": "4692 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - ns/op",
            "value": 253729,
            "unit": "ns/op",
            "extra": "4692 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - MB/s",
            "value": 0.22,
            "unit": "MB/s",
            "extra": "4692 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - block_bytes",
            "value": 55,
            "unit": "block_bytes",
            "extra": "4692 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - records",
            "value": 1,
            "unit": "records",
            "extra": "4692 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - B/op",
            "value": 1224239,
            "unit": "B/op",
            "extra": "4692 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 209,
            "unit": "allocs/op",
            "extra": "4692 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block",
            "value": 237424,
            "unit": "ns/op\t   0.23 MB/s\t        55.00 block_bytes\t         1.000 records\t 1224747 B/op\t     209 allocs/op",
            "extra": "5238 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - ns/op",
            "value": 237424,
            "unit": "ns/op",
            "extra": "5238 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - MB/s",
            "value": 0.23,
            "unit": "MB/s",
            "extra": "5238 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - block_bytes",
            "value": 55,
            "unit": "block_bytes",
            "extra": "5238 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - records",
            "value": 1,
            "unit": "records",
            "extra": "5238 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - B/op",
            "value": 1224747,
            "unit": "B/op",
            "extra": "5238 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_dictionary/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 209,
            "unit": "allocs/op",
            "extra": "5238 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block",
            "value": 601357,
            "unit": "ns/op\t  44.41 MB/s\t     26707 block_bytes\t        14.00 records\t10166897 B/op\t    1122 allocs/op",
            "extra": "1848 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - ns/op",
            "value": 601357,
            "unit": "ns/op",
            "extra": "1848 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - MB/s",
            "value": 44.41,
            "unit": "MB/s",
            "extra": "1848 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - block_bytes",
            "value": 26707,
            "unit": "block_bytes",
            "extra": "1848 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - records",
            "value": 14,
            "unit": "records",
            "extra": "1848 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - B/op",
            "value": 10166897,
            "unit": "B/op",
            "extra": "1848 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - allocs/op",
            "value": 1122,
            "unit": "allocs/op",
            "extra": "1848 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block",
            "value": 591036,
            "unit": "ns/op\t  45.19 MB/s\t     26707 block_bytes\t        14.00 records\t10166966 B/op\t    1122 allocs/op",
            "extra": "2059 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - ns/op",
            "value": 591036,
            "unit": "ns/op",
            "extra": "2059 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - MB/s",
            "value": 45.19,
            "unit": "MB/s",
            "extra": "2059 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - block_bytes",
            "value": 26707,
            "unit": "block_bytes",
            "extra": "2059 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - records",
            "value": 14,
            "unit": "records",
            "extra": "2059 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - B/op",
            "value": 10166966,
            "unit": "B/op",
            "extra": "2059 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - allocs/op",
            "value": 1122,
            "unit": "allocs/op",
            "extra": "2059 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block",
            "value": 615075,
            "unit": "ns/op\t  43.42 MB/s\t     26707 block_bytes\t        14.00 records\t10166579 B/op\t    1122 allocs/op",
            "extra": "1996 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - ns/op",
            "value": 615075,
            "unit": "ns/op",
            "extra": "1996 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - MB/s",
            "value": 43.42,
            "unit": "MB/s",
            "extra": "1996 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - block_bytes",
            "value": 26707,
            "unit": "block_bytes",
            "extra": "1996 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - records",
            "value": 14,
            "unit": "records",
            "extra": "1996 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - B/op",
            "value": 10166579,
            "unit": "B/op",
            "extra": "1996 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - allocs/op",
            "value": 1122,
            "unit": "allocs/op",
            "extra": "1996 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block",
            "value": 653110,
            "unit": "ns/op\t  40.89 MB/s\t     26707 block_bytes\t        14.00 records\t10166638 B/op\t    1122 allocs/op",
            "extra": "1890 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - ns/op",
            "value": 653110,
            "unit": "ns/op",
            "extra": "1890 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - MB/s",
            "value": 40.89,
            "unit": "MB/s",
            "extra": "1890 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - block_bytes",
            "value": 26707,
            "unit": "block_bytes",
            "extra": "1890 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - records",
            "value": 14,
            "unit": "records",
            "extra": "1890 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - B/op",
            "value": 10166638,
            "unit": "B/op",
            "extra": "1890 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - allocs/op",
            "value": 1122,
            "unit": "allocs/op",
            "extra": "1890 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block",
            "value": 633600,
            "unit": "ns/op\t  42.15 MB/s\t     26707 block_bytes\t        14.00 records\t10167367 B/op\t    1122 allocs/op",
            "extra": "1905 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - ns/op",
            "value": 633600,
            "unit": "ns/op",
            "extra": "1905 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - MB/s",
            "value": 42.15,
            "unit": "MB/s",
            "extra": "1905 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - block_bytes",
            "value": 26707,
            "unit": "block_bytes",
            "extra": "1905 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - records",
            "value": 14,
            "unit": "records",
            "extra": "1905 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - B/op",
            "value": 10167367,
            "unit": "B/op",
            "extra": "1905 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/stream_block - allocs/op",
            "value": 1122,
            "unit": "allocs/op",
            "extra": "1905 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block",
            "value": 675421,
            "unit": "ns/op\t  39.54 MB/s\t     26707 block_bytes\t        14.00 records\t10167229 B/op\t    1147 allocs/op",
            "extra": "1986 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - ns/op",
            "value": 675421,
            "unit": "ns/op",
            "extra": "1986 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - MB/s",
            "value": 39.54,
            "unit": "MB/s",
            "extra": "1986 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - block_bytes",
            "value": 26707,
            "unit": "block_bytes",
            "extra": "1986 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - records",
            "value": 14,
            "unit": "records",
            "extra": "1986 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - B/op",
            "value": 10167229,
            "unit": "B/op",
            "extra": "1986 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - allocs/op",
            "value": 1147,
            "unit": "allocs/op",
            "extra": "1986 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block",
            "value": 719804,
            "unit": "ns/op\t  37.10 MB/s\t     26707 block_bytes\t        14.00 records\t10166681 B/op\t    1147 allocs/op",
            "extra": "1846 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - ns/op",
            "value": 719804,
            "unit": "ns/op",
            "extra": "1846 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - MB/s",
            "value": 37.1,
            "unit": "MB/s",
            "extra": "1846 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - block_bytes",
            "value": 26707,
            "unit": "block_bytes",
            "extra": "1846 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - records",
            "value": 14,
            "unit": "records",
            "extra": "1846 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - B/op",
            "value": 10166681,
            "unit": "B/op",
            "extra": "1846 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - allocs/op",
            "value": 1147,
            "unit": "allocs/op",
            "extra": "1846 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block",
            "value": 591754,
            "unit": "ns/op\t  45.13 MB/s\t     26707 block_bytes\t        14.00 records\t10167715 B/op\t    1147 allocs/op",
            "extra": "2029 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - ns/op",
            "value": 591754,
            "unit": "ns/op",
            "extra": "2029 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - MB/s",
            "value": 45.13,
            "unit": "MB/s",
            "extra": "2029 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - block_bytes",
            "value": 26707,
            "unit": "block_bytes",
            "extra": "2029 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - records",
            "value": 14,
            "unit": "records",
            "extra": "2029 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - B/op",
            "value": 10167715,
            "unit": "B/op",
            "extra": "2029 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - allocs/op",
            "value": 1147,
            "unit": "allocs/op",
            "extra": "2029 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block",
            "value": 736067,
            "unit": "ns/op\t  36.28 MB/s\t     26707 block_bytes\t        14.00 records\t10167863 B/op\t    1147 allocs/op",
            "extra": "1642 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - ns/op",
            "value": 736067,
            "unit": "ns/op",
            "extra": "1642 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - MB/s",
            "value": 36.28,
            "unit": "MB/s",
            "extra": "1642 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - block_bytes",
            "value": 26707,
            "unit": "block_bytes",
            "extra": "1642 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - records",
            "value": 14,
            "unit": "records",
            "extra": "1642 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - B/op",
            "value": 10167863,
            "unit": "B/op",
            "extra": "1642 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - allocs/op",
            "value": 1147,
            "unit": "allocs/op",
            "extra": "1642 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block",
            "value": 590855,
            "unit": "ns/op\t  45.20 MB/s\t     26707 block_bytes\t        14.00 records\t10167549 B/op\t    1147 allocs/op",
            "extra": "2028 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - ns/op",
            "value": 590855,
            "unit": "ns/op",
            "extra": "2028 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - MB/s",
            "value": 45.2,
            "unit": "MB/s",
            "extra": "2028 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - block_bytes",
            "value": 26707,
            "unit": "block_bytes",
            "extra": "2028 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - records",
            "value": 14,
            "unit": "records",
            "extra": "2028 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - B/op",
            "value": 10167549,
            "unit": "B/op",
            "extra": "2028 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_stream_block - allocs/op",
            "value": 1147,
            "unit": "allocs/op",
            "extra": "2028 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block",
            "value": 2386643,
            "unit": "ns/op\t  11.19 MB/s\t     26707 block_bytes\t        14.00 records\t48845356 B/op\t    1695 allocs/op",
            "extra": "576 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - ns/op",
            "value": 2386643,
            "unit": "ns/op",
            "extra": "576 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - MB/s",
            "value": 11.19,
            "unit": "MB/s",
            "extra": "576 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - block_bytes",
            "value": 26707,
            "unit": "block_bytes",
            "extra": "576 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - records",
            "value": 14,
            "unit": "records",
            "extra": "576 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - B/op",
            "value": 48845356,
            "unit": "B/op",
            "extra": "576 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 1695,
            "unit": "allocs/op",
            "extra": "576 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block",
            "value": 2227610,
            "unit": "ns/op\t  11.99 MB/s\t     26707 block_bytes\t        14.00 records\t48843784 B/op\t    1694 allocs/op",
            "extra": "540 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - ns/op",
            "value": 2227610,
            "unit": "ns/op",
            "extra": "540 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - MB/s",
            "value": 11.99,
            "unit": "MB/s",
            "extra": "540 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - block_bytes",
            "value": 26707,
            "unit": "block_bytes",
            "extra": "540 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - records",
            "value": 14,
            "unit": "records",
            "extra": "540 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - B/op",
            "value": 48843784,
            "unit": "B/op",
            "extra": "540 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 1694,
            "unit": "allocs/op",
            "extra": "540 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block",
            "value": 2085495,
            "unit": "ns/op\t  12.81 MB/s\t     26707 block_bytes\t        14.00 records\t48845752 B/op\t    1695 allocs/op",
            "extra": "594 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - ns/op",
            "value": 2085495,
            "unit": "ns/op",
            "extra": "594 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - MB/s",
            "value": 12.81,
            "unit": "MB/s",
            "extra": "594 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - block_bytes",
            "value": 26707,
            "unit": "block_bytes",
            "extra": "594 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - records",
            "value": 14,
            "unit": "records",
            "extra": "594 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - B/op",
            "value": 48845752,
            "unit": "B/op",
            "extra": "594 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 1695,
            "unit": "allocs/op",
            "extra": "594 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block",
            "value": 2227577,
            "unit": "ns/op\t  11.99 MB/s\t     26707 block_bytes\t        14.00 records\t48842988 B/op\t    1693 allocs/op",
            "extra": "597 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - ns/op",
            "value": 2227577,
            "unit": "ns/op",
            "extra": "597 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - MB/s",
            "value": 11.99,
            "unit": "MB/s",
            "extra": "597 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - block_bytes",
            "value": 26707,
            "unit": "block_bytes",
            "extra": "597 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - records",
            "value": 14,
            "unit": "records",
            "extra": "597 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - B/op",
            "value": 48842988,
            "unit": "B/op",
            "extra": "597 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 1693,
            "unit": "allocs/op",
            "extra": "597 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block",
            "value": 2568272,
            "unit": "ns/op\t  10.40 MB/s\t     26707 block_bytes\t        14.00 records\t48843950 B/op\t    1694 allocs/op",
            "extra": "530 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - ns/op",
            "value": 2568272,
            "unit": "ns/op",
            "extra": "530 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - MB/s",
            "value": 10.4,
            "unit": "MB/s",
            "extra": "530 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - block_bytes",
            "value": 26707,
            "unit": "block_bytes",
            "extra": "530 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - records",
            "value": 14,
            "unit": "records",
            "extra": "530 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - B/op",
            "value": 48843950,
            "unit": "B/op",
            "extra": "530 times\n3 procs"
          },
          {
            "name": "BenchmarkCorpusWARC/zstd_streaming_no_fcs/source_scan_then_lazy_reopen_block - allocs/op",
            "value": 1694,
            "unit": "allocs/op",
            "extra": "530 times\n3 procs"
          }
        ]
      }
    ]
  }
}