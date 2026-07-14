# unwarc

`unwarc` is a Go library for scanning WARC files and lazily reopening records
from random-access sources.

It is aimed at readers, validators, indexers, and extraction pipelines that
need precise record boundaries without loading entire WARC files into memory.

## Status

This repository is an internal production candidate. The core scanner paths are
covered by unit tests, race tests, and fuzz entry points, but the public API
should still be treated as evolving until a first tagged release.

## Supported Inputs

- Plain `.warc`
- Record-at-a-time gzip `.warc.gz`
- WARC-zstd `.warc.zst` / `.warc.zstd`, including prefix dictionary frames
- Whole-file bzip2 `.bz2`
- Whole-file xz `.xz`

Lazy random access is strongest for plain, gzip, and zstd. bzip2 and xz are
decoded as whole-file streams; independent per-segment lazy access for those
formats intentionally returns `ErrSegmentedCompressionNotImplemented`.

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
- The record terminator is the `CRLF CRLF` following the record block.

Record headers and `application/warc-fields` blocks therefore share named-field
syntax, but they are not the same structure.

## Strict Mode

`ScannerOptions.Strict` makes malformed record trailers fatal. For WARC-zstd it
also enforces the proposed format rules that each zstd frame must include
`Frame_Content_Size` and `Content_Checksum`, and that a single zstd frame must
not contain multiple WARC records.

Non-strict scans keep parsing when possible and record diagnostics in
`RecordRef.Location.Issues`. In non-strict mode, zstd frames without
`Frame_Content_Size` are decoded as streams and can still be lazy-opened after
finalization when their compressed range is known and the record covers the
whole frame.

WARC version lines, header CRLF framing, and named-field syntax are always
parsed strictly. `ScannerOptions.Strict` controls whether malformed record
trailers and compression-layout violations are fatal rather than diagnostic.
Set `ScannerOptions.Resynchronize` to permit extra complete CRLF lines at record
boundaries. It is disabled by default and never skips arbitrary bytes or
relaxes parsing inside a record header.

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

## One-Pass Payload Usage

Use `NextPayload` when you want to process each payload in file order. This is
the fast path for gzip because each compressed member is decompressed once. It
works with both `NewScanner` and `NewScannerFromSource`.

```go
source := unwarc.NewFileSource("crawl.warc.gz")
scanner, err := unwarc.NewScannerFromSource(source, unwarc.ScannerOptions{
	Compression: unwarc.CompressionUnknown,
	Strict:      true,
})
if err != nil {
	return err
}
defer scanner.Close()

for {
	ref, payload, err := scanner.NextPayload()
	if errors.Is(err, io.EOF) {
		break
	}
	if err != nil {
		return err
	}

	warcType, _ := ref.Header.Get("WARC-Type")
	fmt.Println(warcType, ref.ContentLength)

	_, err = io.Copy(io.Discard, payload)
	closeErr := payload.Close()
	if err != nil {
		return err
	}
	if closeErr != nil {
		return closeErr
	}

	// After the payload has been read or closed, the same ref has final
	// location metadata and may be lazy-opened later if its access mode allows.
	if !ref.Finalized() {
		return fmt.Errorf("record was not finalized")
	}
}
if err := scanner.Err(); err != nil {
	return err
}
```

References returned by `NextPayload` may be unfinalized
(`RecordRef.Location.Final == false`) until the payload reader reaches EOF or
is closed. Calling `OpenRaw` or `OpenPayload` before finalization returns
`ErrRecordLocationPending`. While a `NextPayload` reader is active,
`Scanner.RecordRef()` returns `nil`; use the `ref` returned by `NextPayload` for
header inspection before finalization.

## Lazy Random-Access Usage

Use `NewScannerFromSource` with `Next` when you want to scan first and lazily
reopen records later. The source can reopen byte ranges, so finalized record
references remain usable after scanning. For compressed inputs this path may
re-read and re-decompress compressed data when `OpenRaw` or `OpenPayload` is
called. Keep the source backing bytes stable until all lazy readers are closed;
`FileSource` reopens by path, so the file must not be replaced while collected
references are being processed.

```go
source := unwarc.NewFileSource("crawl.warc.zst")
scanner, err := unwarc.NewScannerFromSource(source, unwarc.ScannerOptions{
	Compression: unwarc.CompressionUnknown,
	Strict:      true,
})
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
	payload, err := ref.OpenPayload()
	if err != nil {
		return err
	}
	_, err = io.Copy(io.Discard, payload)
	closeErr := payload.Close()
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
payload reads. The channel should be bounded so slow workers apply backpressure
to the scanner instead of accumulating every reference in memory.

This pattern still re-reads and re-decompresses compressed data in the workers.
Use `NextPayload` instead when the main goal is one-pass gzip processing.

```go
source := unwarc.NewFileSource("crawl.warc.gz")
scanner, err := unwarc.NewScannerFromSource(source, unwarc.ScannerOptions{
	Compression: unwarc.CompressionUnknown,
	Strict:      true,
})
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
			payload, err := ref.OpenPayload()
			if err != nil {
				errc <- err
				return
			}

			_, readErr := io.Copy(io.Discard, payload)
			closeErr := payload.Close()
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
nil. In strict mode, a later scan error can otherwise leave earlier records
already processed.

## WARC-zstd Seek Index

`OpenWARCZstdSeekIndex` supports an optional enhanced WARC-zstd profile for
fast reverse indexing. In this profile, each record is encoded as:

```text
zstd frame: WARC record-header bytes
one or more zstd frames: payload bytes, optionally chunked, plus record trailer
skippable frame: record-local zstd seek table for the frames above
```

Here, "WARC record-header bytes" means the complete record header: version
line, WARC named fields, and the terminating empty CRLF line. The seek table is
local to the record, so a record copied into another WARC file still carries
meaningful frame sizes. The index builder walks backward from the file tail,
reads each record-local seek table, and decodes only the record-header frame.
Payload frames are not decoded while building the index; `OpenPayload` can
later reopen only the payload frame ranges.

Small records can use a single payload frame. Large media responses can split
payload bytes across many smaller frames; `RecordLocation.PayloadFrames` maps
each payload-producing compressed frame to its payload-relative byte range, and
`OpenPayloadRange` uses that map to reopen only overlapping frames. A trailing
frame that contains only the WARC record trailer may appear in
`PayloadCompRanges`, but it is not listed in `PayloadFrames` because it does
not contribute payload bytes.

For HTTP response/request records, writers may also split the WARC payload on
the HTTP message boundary as a best-effort optimization:

```text
zstd frame: WARC record-header bytes
zstd frame: HTTP header bytes
one or more zstd frames: HTTP body bytes
optional zstd frame: WARC record trailer
skippable frame: record-local zstd seek table
```

The table still stores only generic frame sizes. The reader treats these as
ordinary payload frames; higher layers that parse HTTP can use
`RecordLocation.PayloadFrames` plus their own parsed HTTP header length to find
the first body frame. The reader does not label frames as HTTP header or body.

Writer recommendation:

- For small records, prefer the compact layout: one WARC record-header frame
  and one payload-plus-trailer frame. The extra frame boundaries are rarely
  worth it.
- For large HTTP responses, especially media replay, split best-effort at the
  HTTP message boundary and then chunk the HTTP body into independently
  seekable frames. This gives replay code a cheap body starting point and lets
  `OpenPayloadRange` decode only the body chunks that overlap a requested
  range.
- Splitting only the HTTP header from a single large body frame can slightly
  improve compression and records useful structure, but it does not materially
  speed up random body ranges by itself. Body chunking is what changes range
  access cost.
- If the HTTP boundary cannot be identified confidently, fall back to the
  generic payload frame layout and preserve the payload bytes unchanged.

For `Content-Length: 0` records, the recommended compact form is one zstd frame
containing the WARC record header plus record trailer, followed by a one-entry
record-local seek table. The reader also accepts the two-frame form with a WARC
record-header frame and a trailer-only frame, but `OpenPayload` returns an empty reader
without reopening either frame.

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
	payload, err := ref.OpenPayload()
	if err != nil {
		return err
	}
	_, err = io.Copy(io.Discard, payload)
	closeErr := payload.Close()
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
`OpenRaw` or `OpenPayload` on its references.

```go
f, err := os.Open("crawl.warc.gz")
if err != nil {
	return err
}
defer f.Close()

scanner, err := unwarc.NewScanner(f, unwarc.ScannerOptions{
	Compression: unwarc.CompressionUnknown,
	Strict:      true,
})
if err != nil {
	return err
}

for scanner.Next() {
	ref := scanner.RecordRef()
	warcType, _ := ref.Header.Get("WARC-Type")
	fmt.Println(warcType, ref.ContentLength, ref.Location.Access)
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
- `ErrSegmentedCompressionNotImplemented`
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
sample that non-strict mode can scan but strict mode rejects for missing frame
content size.

Large local corpora can be scanned without checking them into the repository:

```bash
UNWARC_CORPUS_DIR=/path/to/warcs go test -run TestExternalCorpusSmoke ./...
UNWARC_CORPUS_PATHS="/path/a.warc.gz:/path/b.warc.zst" go test -run TestExternalCorpusSmoke ./...
UNWARC_CORPUS_LIMIT=10 UNWARC_CORPUS_RECORD_LIMIT=25 UNWARC_CORPUS_DIR=/path/to/warcs go test -run TestExternalCorpusSmoke ./...
```

## Real Corpus Benchmarks

Benchmarks for large local corpora are gated by an environment variable:

```bash
UNWARC_BENCH_WARC=/path/to/input.warc.gz go test -run '^$' -bench BenchmarkRealWARC -benchtime=1x -benchmem
```

The benchmark compares stream payload access, source-backed stream payload
access, and source-backed scan-then-lazy-reopen payload access. The first two
are the one-pass paths; the lazy reopening benchmark intentionally measures the
cost of re-reading compressed bytes. Use `-bench
'BenchmarkRealWARC/source_stream_payload$'` or another sub-benchmark suffix to
run one path at a time.

## Production Checklist Before Tagging

- Run the scanner over representative WARC corpora from the intended pipeline.
- Promote any new corrupt or unusual files found in that pass to minimized
  fixtures under `testdata/corpus`.
- Decide which issue codes and access modes are part of the stable public API.
- Tag a release only after downstream integration has exercised lazy
  `OpenRaw`/`OpenPayload` on real files.
