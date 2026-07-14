// Package unwarc scans WARC files and returns lightweight record references.
//
// The scanner supports uncompressed WARC, record-at-a-time gzip, WARC-zstd
// including prefix dictionary frames, and whole-file bzip2/xz streams. When a
// random-access source is provided, finalized record references can lazily
// reopen raw records or record-block bytes without materializing the whole input.
// Scanner.NextRecord returns a RecordReader for one-pass in-order processing.
// RecordReader.Block exposes the WARC record block, and RecordReader.Ref is
// finalized after the block reaches EOF or the record is closed.
// Scanner.RecordRef returns only finalized references. Lazy reopening from a
// source may re-read and re-decompress compressed bytes. The package does not
// infer the WARC payload, which may be a record-type-specific subset of the
// record block.
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
// finalized references by decoding only WARC record-header frames; block
// frames are reopened lazily by range when needed.
//
// WARC version lines, header CRLF framing, and named-field syntax are parsed
// strictly by default. ScannerOptions.Resynchronize can explicitly permit extra
// CRLF lines at record boundaries. Independent ScannerOptions requirements can
// make malformed record trailers, missing zstd Frame_Content_Size or
// Content_Checksum fields, and zstd frames shared by multiple records fatal.
package unwarc
