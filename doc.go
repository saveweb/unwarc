// Package unwarc scans WARC files and returns lightweight record references.
//
// The scanner supports uncompressed WARC, record-at-a-time gzip, WARC-zstd
// including prefix dictionary frames, and whole-file bzip2/xz streams. When a
// random-access source is provided, finalized record references can lazily
// reopen raw records or payload bytes without materializing the whole input.
// Scanner.NextPayload exposes each content block as the scanner advances; the
// returned reference is finalized after the payload reader reaches EOF or is
// closed. Scanner.RecordRef returns only finalized references. Use NextPayload
// for one-pass in-order payload processing; lazy reopening from a source may
// re-read and re-decompress compressed bytes.
//
// WARC-zstd scanning buffers only small known-size frames. Frames without
// Frame_Content_Size or beyond ScannerOptions.MaxBufferedZstdFrameSize are
// decoded with a streaming fallback.
//
// OpenWARCZstdSeekIndex supports an optional record-local WARC-zstd seek
// profile. It walks backward through seekable-table skippable frames and builds
// finalized references by decoding only WARC header frames; payload frames are
// reopened lazily by range when needed.
//
// Strict mode keeps normal WARC parsing permissive except for malformed record
// trailers, and additionally enforces WARC-zstd frame requirements such as
// Frame_Content_Size, Content_Checksum, and one logical record per zstd frame.
package unwarc
