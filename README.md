# unwarc

`unwarc` is a Go library for reading WARC.

It is aimed at readers, validators, indexers, and extraction pipelines.

## Highlights

- Lazy random access: scan once, keep `RecordRef`s, and reopen raw records or blocks later.
- Handles both record-aligned and non-record-aligned compression layouts: one gzip member/zstd frame per record, one compression unit containing many records, or records crossing unit boundaries.
- Supports the WARC-zstd record-local seek-index profile proposed in `warc-specifications#118`.
- Follow WARC terminology.
- Customizable, Developer-friendly.
- Block-level APIs: read the full WARC record, just the declared block, or a
  range inside the block without pretending to understand payload semantics.
- Small, composable core: no built-in network clients or WARC writer (`saveweb/gowarc`), whole-file xz/bzip2/LZ4
  decoders (`github.com/saveweb/decodedsource`), validator (`TODO`), content block parser (`TODO`), rewriter (`TODO`); those belong in adjacent
  layers.

## unwarc Package Terminology

`unwarc` has a few concepts that come from its scanning model rather than from
the WARC specification itself. The short version is:

```text
Source -> Scanner -> RecordReader or finalized RecordRef -> optional lazy reopen
```

### Input and scanning

- A **source** is something that can open the input bytes. `Source` only needs
  `Open`; `RandomAccessSource` can also reopen byte ranges with `OpenRange`,
  `OpenAt`, and `Size`. `NewFileSource` is the built-in local-file source.
- A **scanner** is the stateful reader created by `NewScanner`,
  `NewScannerFromSource`, or `NewScannerAt`. It discovers WARC record
  boundaries in order.
- `NewScanner` reads from an `io.Reader`. It is stream-only: once bytes have
  passed, old records cannot be reopened.
- `NewScannerFromSource` reads from a `RandomAccessSource`. It can produce
  references that reopen records later, as long as the backing bytes stay
  stable.
- `NewScannerAt` starts scanning at an encoded byte offset that is already a
  valid compression-unit boundary: plain WARC record boundary, gzip member
  boundary, or zstd frame boundary.

### Records and references

- A **record reader** (`RecordReader`) is returned by `NextRecord`. It owns the
  currently active record and streams the record block once through `Block`.
  This is usually the simplest and fastest path for sequential processing.
- A **record reference** (`RecordRef`) is unwarc's durable description of a
  scanned record. It stores the parsed header, raw header bytes, content length,
  trailer length, diagnostics, and the information needed to reopen the record
  later when possible.
- A reference is **finalized** when unwarc has consumed enough bytes to know the
  record's trailer, compression-unit relationship, access mode, and reopen
  plan. References from `Scanner.Next` are finalized before they are exposed.
  References from `RecordReader.Ref` become finalized only after the block is
  exhausted or the record is closed.
- `OpenRaw` reopens the full decoded WARC record: header, block, and trailer.
  `OpenBlock` reopens only the bytes declared by `Content-Length`.
  `OpenBlockRange` reopens a byte range inside that block.

### Offsets and access modes

- **Encoded offsets** are byte offsets in the stored input file or object. For
  `.warc.gz` and `.warc.zst`, these are compressed offsets. `OpenRange`,
  `OpenAt`, `DecodeCost.EncodedRanges`, and `NewScannerAt` use encoded offsets.
- **Decoded offsets** are byte offsets in the uncompressed WARC byte stream seen
  by a scanner. `RecordLocation.Uncompressed` uses decoded offsets. These are
  useful for describing record order and decoded layout, but they are not file
  offsets and must not be passed to `NewScannerAt`.
- A **compression unit** is a storage-layer unit such as a gzip member, zstd
  frame, zstd dictionary frame, or zstd skippable frame. It is not a WARC
  segment and is unrelated to `WARC-Segment-*`.
- A **restart point** is the encoded offset where lazy reopening has to start.
  For record-aligned compression it is the record's own encoded start. For
  solid or crossed compression units it may be an earlier gzip member or zstd
  frame, after which unwarc decodes and discards bytes until the requested
  record or block begins.
- `AccessExact` means the encoded ranges map exactly to the requested record.
  `AccessFromCompressionUnitStart` means reopening starts at an earlier
  compression-unit boundary and discards decoded bytes. `AccessStreamOnly` means
  the record was found but cannot be reopened later. `AccessInvalid` means no
  usable location could be resolved.

### Cost, indexes, and diagnostics

- A **decode cost** (`DecodeCost`) describes the work hidden behind lazy
  reopening: which encoded ranges must be read, how many decoded bytes must be
  discarded first, and how many decoded bytes will be returned. Use
  `RawDecodeCost`, `BlockDecodeCost`, or `BlockRangeDecodeCost` before lazy
  opening when you want to avoid expensive solid-compression reads.
- A **block index** (`BlockIndex`) is optional frame-level mapping for formats
  that carry recognized per-record block indexes. When present,
  `OpenBlockRange` can reopen only the compressed frames overlapping the
  requested block range.
- **Issues** are non-fatal diagnostics attached to a finalized `RecordRef`, such
  as a missing record trailer, a solid gzip member, or a zstd frame shared by
  multiple WARC records. `DefaultScannerOptions` turns the common recoverable
  validation issues into fatal errors; `ScannerOptions{}` keeps the permissive
  low-level behavior.

## Supported Inputs

- Plain `.warc`
- Record-at-a-time gzip `.warc.gz`
- WARC-zstd `.warc.zst` / `.warc.zstd`, including prefix dictionary frames

### Other Compression Formats

xz, bzip2, and LZ4 WARC files are generally compressed as one
whole file; I have not found real-world per-record usage comparable to gzip
or WARC-zstd.
For those whole-file envelopes, use `github.com/saveweb/decodedsource` or another
outer-layer decoder.

### Remote Sources

To read WARC files from HTTP, WebDAV, S3, FTP, SMB, or other rclone-backed locations, use `github.com/saveweb/remotesource`.

## WARC Terminology

This package follows the WARC grammar's hierarchy:

- A **record header** is the WARC version line followed by the record's WARC
  named fields and the terminating empty CRLF line. It is represented by
  `RecordHeader`; its individual named fields are `WARCField` values.
- An **`application/warc-fields` block** contains WARC named fields without a
  WARC version line. It is represented by `WARCFields` and parsed with
  `ParseWARCFields`.
- The **record block** begins after the record header and contains exactly the
  number of octets declared by `Content-Length`.
- A WARC **payload** is a record-type-specific subset of the block. `unwarc`
  does not infer that subset: `RecordReader.Block`, `OpenBlock`, and
  `OpenBlockRange` return block bytes. For an `application/http` response
  block, that includes both the HTTP header section and body.
- The record terminator is the `CRLF CRLF` following the record block.

Record headers and `application/warc-fields` blocks therefore share named-field
syntax, but they are not the same structure.

## Validation Policies

Use `DefaultScannerOptions` for normal reading. It enables automatic
compression detection and makes the common recoverable validation issues fatal:

```go
scanner, err := unwarc.NewScannerFromSource(source, unwarc.DefaultScannerOptions())
```

The `ScannerOptions{}` zero value remains a low-level, permissive mode:
recoverable format problems are reported through `RecordRef.Issues()` instead
of being fatal. Applications can independently make specific conditions fatal
with:

- `RequireRecordTrailer`
- `RequireZstdFrameContentSize`
- `RequireZstdFrameChecksum`
- `RequireZstdRecordIsolation`

The zstd record-isolation option rejects a frame that contributes bytes to more
than one WARC record. It still permits one record to span multiple frames.

Without the corresponding requirement, zstd frames without
`Frame_Content_Size` are decoded as streams and can still be lazy-opened after
finalization when their compressed range is known and the record covers the
whole frame.

The zero-value policies also accept practical, non-conforming layouts such as
a solid gzip member or a zstd frame containing bytes from multiple WARC
records. These layouts receive diagnostics. With a random-access source,
reopening starts at the containing compression-unit boundary and discards
decoded bytes before the requested record; without one, the records remain
available through sequential streaming with `AccessStreamOnly`.

WARC version lines, header CRLF framing, and named-field syntax are always
parsed strictly. Set `ScannerOptions.Resynchronize` to permit extra complete
CRLF lines at record boundaries. It is disabled by default and never skips
arbitrary bytes or relaxes parsing inside a record header.

## Folded WARC Named Fields

WARC 1.0 and 1.1 allow a named field to continue on lines beginning with a
space or tab. The named-field syntax is shared by fields inside record headers
and by `application/warc-fields` blocks such as the record block of a typical
`warcinfo` record. By default, `unwarc` accepts these fields for compatibility,
replaces each continuation boundary with a single space, and sets
`WARCField.Folded`.

`RecordHeader.HasFoldedFields` reports folding in a record header, and
`WARCFields.HasFoldedFields` reports it in a parsed fields block.
`RecordRef.RawHeader` always preserves the original record-header bytes.

Set `ScannerOptions.FoldedFields` to `FoldedFieldReject` when an application
wants to reject continuation lines:

```go
scanner, err := unwarc.NewScanner(r, unwarc.ScannerOptions{
	Compression:  unwarc.CompressionUnknown,
	FoldedFields: unwarc.FoldedFieldReject,
})
```

`OpenWARCZstdSeekIndexWithOptions` provides the same policy for reverse-built
seek indexes. Rejection returns `ErrFoldedWARCField`; accepted folded fields are
not reported as malformed-record issues because they are valid WARC syntax.

Use `ParseWARCFields` for an `application/warc-fields` block:

```go
fields, err := unwarc.ParseWARCFields(block, unwarc.WARCFieldsOptions{
	FoldedFields: unwarc.FoldedFieldAccept,
})
if err != nil {
	return err
}
software, _ := fields.Get("software")
```

`ScannerOptions.MaxBufferedZstdFrameSize` bounds the in-memory fast path for
WARC-zstd frames. Frames without `Frame_Content_Size`, frames larger than this
limit, and frames whose compressed bytes exceed it are decoded with a streaming
fallback instead of being buffered whole.

## One-Pass Block Usage

Use `NextRecord` when you want to process each WARC record block in file order.
It returns a `RecordReader` that owns the active record lifecycle and exposes
its block through `Block`. This is the fast path for gzip because each
compressed member is decompressed once. It works with both `NewScanner` and
`NewScannerFromSource`.

```go
source := unwarc.NewFileSource("crawl.warc.gz")
scanner, err := unwarc.NewScannerFromSource(source, unwarc.DefaultScannerOptions())
if err != nil {
	return err
}
defer scanner.Close()

for {
	record, err := scanner.NextRecord()
	if errors.Is(err, io.EOF) {
		break
	}
	if err != nil {
		return err
	}
	ref := record.Ref()

	warcType, _ := ref.Header.Get("WARC-Type")
	fmt.Println(warcType, ref.ContentLength)

	_, err = io.Copy(io.Discard, record.Block())
	closeErr := record.Close()
	if err != nil {
		return err
	}
	if closeErr != nil {
		return closeErr
	}

	// After the block has been read or closed, the same ref has final
	// location metadata and may be lazy-opened later if its access mode allows.
	if !ref.Finalized() {
		return fmt.Errorf("record was not finalized")
	}
}
if err := scanner.Err(); err != nil {
	return err
}
```

References returned by `RecordReader.Ref` may remain unfinalized until the
block reaches EOF or the record is closed. Check `RecordRef.Finalized()` when
using the streaming API. Calling `OpenRaw` or `OpenBlock` before finalization
returns `ErrRecordLocationPending`. While a `NextRecord` reader is active,
`Scanner.RecordRef()` returns `nil`; use `record.Ref()` for header inspection
before finalization. Calling `NextRecord`, `Next`, `Err`, or `Scanner.Close`
automatically closes and drains an active record; any trailer or compression
error encountered during that finalization is returned or retained by the
scanner.

## Lazy Random-Access Usage

Use `NewScannerFromSource` with `Next` when you want to scan first and lazily
reopen records later. The source can reopen byte ranges, so finalized record
references remain usable after scanning. For compressed inputs this path may
re-read and re-decompress compressed data when `OpenRaw` or `OpenBlock` is
called. Keep the source backing bytes stable until all lazy readers are closed;
`FileSource` reopens by path, so the file must not be replaced while collected
references are being processed.

After finalization, `RecordRef.Location()` reports the record's decoded WARC
stream range and its `AccessMode`. Use `RawDecodeCost`, `BlockDecodeCost`, or
`BlockRangeDecodeCost` to inspect the encoded ranges that must be reopened and
the decoded bytes that must be discarded before output starts. Whole-file or
solid compression often reports an encoded range starting at an earlier
compression unit, with a non-zero decoded discard count.

`OpenRaw`, `OpenBlock`, and `OpenBlockRange` open any lazy-loadable record. New
code that wants to avoid hidden expensive work should check decode cost before
opening. `RecordRef.BlockIndex()` separately exposes parsed frame mappings when
an indexed input provides them.

```go
source := unwarc.NewFileSource("crawl.warc.zst")
scanner, err := unwarc.NewScannerFromSource(source, unwarc.DefaultScannerOptions())
if err != nil {
	return err
}
defer scanner.Close()

var refs []*unwarc.RecordRef
for scanner.Next() {
	refs = append(refs, scanner.RecordRef())
}
if err := scanner.Err(); err != nil {
	return err
}

for _, ref := range refs {
	cost, ok := ref.BlockDecodeCost()
	if !ok {
		continue
	}
	if cost.DecodedDiscardBytes > 64<<20 {
		continue
	}
	block, err := ref.OpenBlock()
	if err != nil {
		return err
	}
	_, err = io.Copy(io.Discard, block)
	closeErr := block.Close()
	if err != nil {
		return err
	}
	if closeErr != nil {
		return closeErr
	}
}
```

## Pipelined Reference Processing

You can also scan finalized references in one goroutine and process them with a
worker pool. This overlaps sequential boundary discovery with concurrent lazy
block reads. The channel should be bounded so slow workers apply backpressure
to the scanner instead of accumulating every reference in memory.

This pattern still re-reads and re-decompresses compressed data in the workers.
Use `NextRecord` instead when the main goal is one-pass gzip processing.

```go
source := unwarc.NewFileSource("crawl.warc.gz")
scanner, err := unwarc.NewScannerFromSource(source, unwarc.DefaultScannerOptions())
if err != nil {
	return err
}
defer scanner.Close()

const workers = 8
refs := make(chan *unwarc.RecordRef, workers*2)
errc := make(chan error, workers+1)

var wg sync.WaitGroup
for i := 0; i < workers; i++ {
	wg.Add(1)
	go func() {
		defer wg.Done()
		for ref := range refs {
			block, err := ref.OpenBlock()
			if err != nil {
				errc <- err
				return
			}

			_, readErr := io.Copy(io.Discard, block)
			closeErr := block.Close()
			if readErr != nil {
				errc <- readErr
				return
			}
			if closeErr != nil {
				errc <- closeErr
				return
			}
		}
	}()
}

for scanner.Next() {
	select {
	case refs <- scanner.RecordRef():
	case err := <-errc:
		close(refs)
		wg.Wait()
		return err
	}
}
scanErr := scanner.Err()
close(refs)
wg.Wait()

select {
case err := <-errc:
	return err
default:
	return scanErr
}
```

If downstream work must commit only after the entire file validates, write
worker results to a staging area and publish them after `scanner.Err()` returns
nil. When validation requirements are enabled, a later scan error can otherwise
leave earlier records already processed.

## WARC-zstd Seek Index

`OpenWARCZstdSeekIndex` supports an optional enhanced WARC-zstd profile for
fast reverse indexing. In this profile, each record is encoded as:

```text
zstd frame: WARC record-header bytes
one or more zstd frames: record-block bytes, optionally chunked,
                         plus record trailer
skippable frame: record-local zstd seek table for the frames above
```

Here, "WARC record-header bytes" means the complete record header: version
line, WARC named fields, and the terminating empty CRLF line. The seek table is
local to the record, so a record copied into another WARC file still carries
meaningful frame sizes. The index builder walks backward from the file tail,
reads each record-local seek table, and decodes only the record-header frame.
Block frames are not decoded while building the index; `OpenBlock` can later
reopen only the block frame ranges.

Small records can use a single block frame. Large records can split block bytes
across many smaller frames. When available, `RecordRef.BlockIndex()` maps each
block-producing compressed frame to its block-relative byte range, and
`OpenBlockRange` uses those mappings to reopen only overlapping frames. A frame
that contains only the WARC record trailer is not part of the block index
because it contributes no block bytes. Without a block index, block reads fall
back to the record's general decode plan.

For HTTP response/request records, the WARC record block contains an HTTP
message. Writers may split that block at the HTTP header/body boundary as a
best-effort optimization:

```text
zstd frame: WARC record-header bytes
zstd frame: HTTP header bytes
one or more zstd frames: HTTP body bytes
optional zstd frame: WARC record trailer
skippable frame: record-local zstd seek table
```

The table still stores only generic frame sizes. The reader treats these as
ordinary block frames; higher layers that parse HTTP can use
`RecordRef.BlockIndex()` plus their own parsed HTTP header length to find the
first body frame. The reader does not label frames as HTTP header or body.

Writer recommendation:

- For small records, prefer the compact layout: one WARC record-header frame
  and one block-plus-trailer frame. The extra frame boundaries are rarely
  worth it.
- For large HTTP responses, split best-effort at the HTTP message boundary and
  then chunk the HTTP body into independently seekable frames. This gives
  viewers and extractors a cheap body starting point and lets `OpenBlockRange`
  decode only the body chunks that overlap a requested range.
- Splitting only the HTTP header from a single large body frame can slightly
  improve compression and records useful structure, but it does not materially
  speed up random body ranges by itself. Body chunking is what changes range
  access cost.
- If the HTTP boundary cannot be identified confidently, fall back to the
  generic block-frame layout and preserve the record-block bytes unchanged.

For `Content-Length: 0` records, the recommended compact form is one zstd frame
containing the WARC record header plus record trailer, followed by a one-entry
record-local seek table. The reader also accepts the two-frame form with a WARC
record-header frame and a trailer-only frame, but `OpenBlock` returns an empty
reader without reopening either frame.

```go
source := unwarc.NewFileSource("crawl.seek.warc.zst")
index, err := unwarc.OpenWARCZstdSeekIndex(source)
if errors.Is(err, unwarc.ErrNotSeekIndexed) {
	// Fall back to NewScannerFromSource when the input is ordinary WARC-zstd
	// or a mixed stream.
	return scanForward(source)
}
if err != nil {
	return err
}

for _, ref := range index.Records() {
	block, err := ref.OpenBlock()
	if err != nil {
		return err
	}
	_, err = io.Copy(io.Discard, block)
	closeErr := block.Close()
	if err != nil {
		return err
	}
	if closeErr != nil {
		return closeErr
	}
}
```

This first implementation intentionally rejects mixed streams instead of
combining reverse indexing with a forward scan. If any suffix does not match the
record-local profile, callers get `ErrNotSeekIndexed` and can choose their own
fallback policy.

## Stream-Only Usage

Use `NewScanner` for stream-only validation or record listing. A stream-only
scanner cannot lazy-open record bytes after a record has passed, so do not call
`OpenRaw` or `OpenBlock` on its references.

```go
f, err := os.Open("crawl.warc.gz")
if err != nil {
	return err
}
defer f.Close()

scanner, err := unwarc.NewScanner(f, unwarc.DefaultScannerOptions())
if err != nil {
	return err
}

for scanner.Next() {
	ref := scanner.RecordRef()
	warcType, _ := ref.Header.Get("WARC-Type")
	location, ok := ref.Location()
	if !ok {
		return fmt.Errorf("record was not finalized")
	}
	fmt.Println(warcType, ref.ContentLength, location.Access)
}
if err := scanner.Err(); err != nil {
	return err
}
```

## Error Handling

Sentinel errors are exported for `errors.Is`, including:

- `ErrInvalidWARCHeader`
- `ErrInvalidWARCFields`
- `ErrInvalidWARCField`
- `ErrMissingContentLength`
- `ErrInvalidContentLength`
- `ErrFoldedWARCField`
- `ErrMissingRecordTrailer`
- `ErrUnsupportedCompression`
- `ErrInvalidWARCZstd`
- `ErrRecordLocationPending`
- `ErrNotSeekIndexed`

## Verification

```bash
make verify
```

The verify target runs formatting checks, tests, race tests, vet, build, and a
short fuzz smoke. If `golangci-lint` is installed, it is included
automatically.

Useful focused commands:

```bash
make test
make race
make fuzz-smoke
```

## Corpus Regression

Small real-world fixtures live under `testdata/corpus` and cover Common Crawl,
gowarc, and Zeno outputs, including damaged `.open` files and a Zeno WARC-zstd
sample that the permissive zero-value policies can scan but
`RequireZstdFrameContentSize` rejects.

Large local corpora can be scanned without checking them into the repository:

```bash
UNWARC_CORPUS_DIR=/path/to/warcs go test -run TestExternalCorpusSmoke ./...
UNWARC_CORPUS_PATHS="/path/a.warc.gz:/path/b.warc.zst" go test -run TestExternalCorpusSmoke ./...
UNWARC_CORPUS_LIMIT=10 UNWARC_CORPUS_RECORD_LIMIT=25 UNWARC_CORPUS_DIR=/path/to/warcs go test -run TestExternalCorpusSmoke ./...
```

## Corpus Benchmarks

The checked-in corpus benchmark is intended for long-term regression tracking
without external files:

```bash
make bench-corpus
```

It runs stream block access, source-backed stream block access, and
source-backed scan-then-lazy-reopen block access over small gzip and zstd
fixtures, including dictionary and no-Frame_Content_Size zstd cases. Use the
larger real corpus benchmark below when you need absolute throughput numbers on
production-sized inputs.

The `Benchmark` GitHub Actions workflow runs the same corpus benchmark on pull
requests, pushes to `main`, and manual dispatch. Pure Go benchmarks run on
Linux, macOS, and Windows with a fixed `-cpu=1`, seven samples, and a shorter
per-sample benchtime to reduce hosted runner scheduling noise. Pushes to `main`
publish benchmark history to the `gh-pages` branch under `dev/bench/v2/*`
without alert comments; benchmark collection runs in parallel, while the short
history-publishing step is serialized to avoid concurrent `gh-pages` pushes.
Pull requests compare against the stored history and leave job summaries
without updating history.

This repository serves the benchmark dashboard from the `gh-pages` branch. For
a fork or a fresh repository, initialize that branch once and configure GitHub
Pages to serve it:

```bash
git switch --orphan gh-pages
git commit --allow-empty -m "Initialize benchmark pages"
git push origin gh-pages:gh-pages
git switch -
```

## Real Corpus Benchmarks

Benchmarks for large local corpora are gated by an environment variable:

```bash
UNWARC_BENCH_WARC=/path/to/input.warc.gz go test -run '^$' -bench BenchmarkRealWARC -benchtime=1x -benchmem
```

The benchmark compares stream block access, source-backed stream block access,
and source-backed scan-then-lazy-reopen block access. The first two
are the one-pass paths; the lazy reopening benchmark intentionally measures the
cost of re-reading compressed bytes. Use `-bench
'BenchmarkRealWARC/source_stream_block$'` or another sub-benchmark suffix to
run one path at a time.
