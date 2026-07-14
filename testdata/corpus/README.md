# Corpus Regression Fixtures

These fixtures are small real-world WARC samples used to keep scanner behavior
stable across common producers and failure modes. They are intentionally tiny so
that `go test ./...` can run them by default.

## Sources

- `commoncrawl/cc-main-2024-10-first-warcinfo.warc.gz`: first complete gzip
  member extracted from Common Crawl
  `crawl-data/CC-MAIN-2024-10/segments/1707947473347.0/warc/CC-MAIN-20240220211055-20240221001055-00000.warc.gz`.
- `gowarc/gowarc-test.warc.gz`: record-per-member gzip WARC from local gowarc
  testdata at `/Users/xingran.guo/git/other/gowarc`, commit
  `0d451b778858d74648f32092b27c6b1445c904cc`.
- `gowarc/gowarc-solid-gzip.warc.gz`: solid gzip member from local gowarc
  testdata at `/Users/xingran.guo/git/other/gowarc`, commit
  `0d451b778858d74648f32092b27c6b1445c904cc`; records are readable by
  restarting at the member start and carry `IssueSolidGzipMember`.
- `gowarc/gowarc-single-record.warc.zst`,
  `gowarc/gowarc-multi-record.warc.zst`, and
  `gowarc/gowarc-dict-record.warc.zst`: zstd fixtures from local gowarc
  testdata at `/Users/xingran.guo/git/mistral/gowarc`, commit
  `2767bf171a0b8d1becd42660a8d52e151a682d28`, including a
  dictionary-backed record.
- `gowarc/gowarc-corrupted-*.open` and `gowarc/gowarc-truncated.warc.zst.open`:
  interrupted or damaged gowarc outputs preserved as negative regression
  samples from `/Users/xingran.guo/git/mistral/gowarc`, commit
  `2767bf171a0b8d1becd42660a8d52e151a682d28`.
- `zeno/zeno-fcs-missing.warc.zst`: small Zeno zstd WARC that scans with the
  default policies but is rejected when `RequireZstdFrameContentSize` is set
  because some frames lack `Frame_Content_Size`; copied from
  `/Users/xingran.guo/git/mistral/Zeno/docs/warc-mcdx-test-data` at commit
  `f63f4678cb4fcd1f273518707e86ca961446919f`.
- `zeno/zeno-small.warc.gz`: small finalized Zeno gzip WARC copied from
  `/Users/xingran.guo/git/other/internetarchive/Zeno/jobs/29153cba-db75-11f0-bb23-162232711508/warcs`
  at commit `8a5b9794e886ee7f1d63c49f3a6883525ca257b0`.

The Common Crawl fixture was reproduced by downloading the first 256 KiB of
the source WARC with HTTP range and retaining the first complete gzip member.

## Checksums

```text
c4bfacd723da7c654b1bd8b305c54c67d24987bab36fff60fb5371596c40716c  commoncrawl/cc-main-2024-10-first-warcinfo.warc.gz
e145307d09c57296d8b0b6c89b75920da28ac661b5aa8bfc739ae44487c77b9e  gowarc/gowarc-corrupted-header.warc.zst.open
2567e97dafffb490bd09736df1721ede9e8a98f079d55aa22ed57fbffc440a96  gowarc/gowarc-corrupted-mid-frame.warc.zst.open
28fc8d79cdca19fe483c92ef776ed9bd3169efed4b0ebd0689e117edae6b378f  gowarc/gowarc-corrupted-mid-record.warc.gz.open
9acf3e37243ab29c4ac7a8f0b5eeab8eb56ceffc4fad8d93875e3ec0b5331b7b  gowarc/gowarc-dict-record.warc.zst
807000dbb0d537dd0fed7047ed7acda038961156e056ced0cc14f9d9af05f862  gowarc/gowarc-multi-record.warc.zst
c2353eb4eac2271a5e41695570f6f082f47b3a9d37c74af4c7dae7a542731b8b  gowarc/gowarc-single-record.warc.zst
6592c9f1d5ad9dc0dd5040a536d16ff8c83ccae8edd0b7f2ae26b85ec0a4c3bf  gowarc/gowarc-solid-gzip.warc.gz
9cd3963cb488839b77f6548d945297d1f5505c32bfe6fd974b9d4e6212e77818  gowarc/gowarc-test.warc.gz
7db85e98b9453048b2ca1d856ed8174027bed76ad108473ca259ba25be8a0614  gowarc/gowarc-truncated.warc.zst.open
8537f8a43902c50ea20b40c55ef8f54f604c6fa8241c0187ecc497453fa23a58  zeno/zeno-fcs-missing.warc.zst
4cb35b90952cbd7b9606f807ce885d0dc990055f78f9be2181df40feac8903ba  zeno/zeno-small.warc.gz
```

## External Corpus Smoke

Large corpora should stay out of the repository. To run the scanner against a
local corpus, set `UNWARC_CORPUS_DIR` or `UNWARC_CORPUS_PATHS`:

```bash
UNWARC_CORPUS_DIR=/path/to/warcs go test -run TestExternalCorpusSmoke ./...
UNWARC_CORPUS_PATHS="/path/a.warc.gz:/path/b.warc.zst" go test -run TestExternalCorpusSmoke ./...
UNWARC_CORPUS_LIMIT=10 UNWARC_CORPUS_DIR=/path/to/warcs go test -run TestExternalCorpusSmoke ./...
UNWARC_CORPUS_RECORD_LIMIT=25 UNWARC_CORPUS_DIR=/path/to/warcs go test -run TestExternalCorpusSmoke ./...
```

The external smoke accepts supported finalized WARC suffixes and skips `.open`
files. It reads at most 100 records per file by default and skips files larger
than 256 MiB; set `UNWARC_CORPUS_MAX_FILE_BYTES=0` to disable that size guard.
Promote interesting failures to minimized checked-in fixtures here.
