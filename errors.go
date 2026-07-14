package unwarc

import "errors"

var (
	// ErrInvalidWARCHeader reports an invalid WARC record header, which consists
	// of a version line followed by WARC named fields.
	ErrInvalidWARCHeader = errors.New("invalid WARC record header")

	// ErrInvalidWARCFields reports malformed application/warc-fields content.
	ErrInvalidWARCFields = errors.New("invalid application/warc-fields block")

	// ErrInvalidWARCField reports malformed WARC named-field syntax. It may be
	// wrapped by ErrInvalidWARCHeader or ErrInvalidWARCFields depending on where
	// the field appeared.
	ErrInvalidWARCField = errors.New("invalid WARC named field")

	// ErrMissingContentLength reports a WARC record without Content-Length.
	ErrMissingContentLength = errors.New("missing Content-Length")

	// ErrInvalidContentLength reports a negative or unparsable Content-Length.
	ErrInvalidContentLength = errors.New("invalid Content-Length")

	// ErrDuplicateContentLength reports multiple Content-Length fields in a WARC
	// record.
	ErrDuplicateContentLength = errors.New("duplicate Content-Length")

	// ErrFoldedWARCField reports a folded WARC named field when the configured
	// folded-field policy rejects continuations.
	ErrFoldedWARCField = errors.New("folded WARC field")

	// ErrMissingRecordTrailer reports a missing or invalid record trailer.
	ErrMissingRecordTrailer = errors.New("missing record trailer")

	// ErrUnsupportedCompression reports an unknown compression enum value.
	ErrUnsupportedCompression = errors.New("unsupported compression")

	// ErrCompressionUnitAccessNotImplemented reports a compression layout whose
	// next compression unit cannot currently be scanned independently.
	ErrCompressionUnitAccessNotImplemented = errors.New("compression-unit access is not implemented")

	// ErrInvalidWARCZstd reports a required WARC-zstd validation failure.
	ErrInvalidWARCZstd = errors.New("invalid WARC-zstd")

	// ErrRecordLocationPending reports an attempt to lazily reopen a record
	// before the scanner has finalized its compressed and uncompressed ranges.
	ErrRecordLocationPending = errors.New("record location is pending")

	// ErrNotSeekIndexed reports input that does not fully match the
	// record-local WARC-zstd seek index profile.
	ErrNotSeekIndexed = errors.New("not a record-local WARC-zstd seek-indexed stream")
)
