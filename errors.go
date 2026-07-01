package unwarc

import "errors"

var (
	// ErrInvalidWARCHeader reports a record header that does not start with a
	// supported WARC version line.
	ErrInvalidWARCHeader = errors.New("invalid WARC header")

	// ErrMissingContentLength reports a WARC record without Content-Length.
	ErrMissingContentLength = errors.New("missing Content-Length")

	// ErrInvalidContentLength reports a negative or unparsable Content-Length.
	ErrInvalidContentLength = errors.New("invalid Content-Length")

	// ErrMissingRecordTrailer reports a missing or invalid record trailer.
	ErrMissingRecordTrailer = errors.New("missing record trailer")

	// ErrUnsupportedCompression reports an unknown compression enum value.
	ErrUnsupportedCompression = errors.New("unsupported compression")

	// ErrSegmentedCompressionNotImplemented reports unsupported independent
	// segment access for bzip2/xz compressed records.
	ErrSegmentedCompressionNotImplemented = errors.New("independent bzip2/xz compressed segment access is not implemented")

	// ErrInvalidWARCZstd reports a WARC-zstd layout violation in strict mode.
	ErrInvalidWARCZstd = errors.New("invalid WARC-zstd")

	// ErrRecordLocationPending reports an attempt to lazily reopen a record
	// before the scanner has finalized its compressed and uncompressed ranges.
	ErrRecordLocationPending = errors.New("record location is pending")

	// ErrNotSeekIndexed reports input that does not fully match the
	// record-local WARC-zstd seek index profile.
	ErrNotSeekIndexed = errors.New("not a record-local WARC-zstd seek-indexed stream")
)
