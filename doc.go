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
// WARC 1.0/1.1 folded named fields are accepted and unfolded by default in
// record headers and ParseWARCFields. WARCField.Folded reports their presence,
// while the relevant options can reject them when required.
//
// OpenWARCZstdSeekIndex supports an optional record-local WARC-zstd seek
// profile. It walks backward through seekable-table skippable frames and builds
// finalized references by decoding only WARC record-header frames; payload
// frames are reopened lazily by range when needed.
//
// WARC version lines, header CRLF framing, and named-field syntax are parsed
// strictly by default. ScannerOptions.Resynchronize can explicitly permit extra
// CRLF lines at record boundaries. Strict mode additionally upgrades malformed
// record trailers and WARC-zstd layout violations, including missing
// Frame_Content_Size or Content_Checksum and multiple logical records in one
// frame, to fatal errors.
package unwarc
