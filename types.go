package unwarc

import "fmt"

// Range describes a byte range. A negative Size means the end is unknown.
type Range struct {
	// Off is the first byte offset in the range.
	Off int64
	// Size is the number of bytes in the range, or -1 when the end is unknown.
	Size int64
}

// End returns the first byte offset after the range, or -1 when Size is
// unknown.
func (r Range) End() int64 {
	if r.Size < 0 {
		return -1
	}
	return r.Off + r.Size
}

// Valid reports whether the range has a non-negative offset and known size.
func (r Range) Valid() bool {
	return r.Off >= 0 && r.Size >= 0
}

func rangesOverlap(a, b Range) bool {
	return a.Valid() && b.Valid() && a.Off < b.End() && b.Off < a.End()
}

// Compression identifies the compression envelope around a WARC stream.
type Compression int

const (
	// CompressionPlain is an uncompressed WARC stream.
	CompressionPlain Compression = iota
	// CompressionGzip is a gzip-compressed WARC stream.
	CompressionGzip
	// CompressionZstd is a WARC-zstd stream.
	CompressionZstd
	// CompressionUnknown asks the scanner to detect compression when possible.
	CompressionUnknown
)

func (c Compression) String() string {
	switch c {
	case CompressionPlain:
		return "plain"
	case CompressionGzip:
		return "gzip"
	case CompressionZstd:
		return "zstd"
	default:
		return "unknown"
	}
}

type compressionUnitKind int

const (
	compressionUnitPlain compressionUnitKind = iota
	compressionUnitGzipMember
	compressionUnitZstdFrame
	compressionUnitZstdDict
	compressionUnitZstdSkippable
)

func (k compressionUnitKind) String() string {
	switch k {
	case compressionUnitPlain:
		return "plain"
	case compressionUnitGzipMember:
		return "gzip-member"
	case compressionUnitZstdFrame:
		return "zstd-frame"
	case compressionUnitZstdDict:
		return "zstd-dict"
	case compressionUnitZstdSkippable:
		return "zstd-skippable"
	default:
		return fmt.Sprintf("compression-unit-kind-%d", int(k))
	}
}

// compressionUnit records the relationship between compressed and
// uncompressed bytes for one storage-layer unit. It is unrelated to WARC
// logical segmentation and WARC-Segment-* fields.
type compressionUnit struct {
	Kind compressionUnitKind

	Comp   Range
	Uncomp Range

	ProducesWARCBytes       bool
	ZstdHasFrameContentSize bool
	ZstdHasContentChecksum  bool
}

// AccessMode describes how a RecordRef can be lazily reopened.
type AccessMode int

const (
	// AccessInvalid means the scanner could not resolve a usable location.
	AccessInvalid AccessMode = iota
	// AccessExact means the compressed ranges map exactly to the record.
	AccessExact
	// AccessFromCompressionUnitStart means lazy reads restart at a compression
	// unit boundary and discard preceding uncompressed bytes.
	AccessFromCompressionUnitStart
	// AccessStreamOnly means the record was found but cannot be lazily reopened.
	AccessStreamOnly
)

func (m AccessMode) String() string {
	switch m {
	case AccessInvalid:
		return "invalid"
	case AccessExact:
		return "exact"
	case AccessFromCompressionUnitStart:
		return "from-compression-unit-start"
	case AccessStreamOnly:
		return "stream-only"
	default:
		return fmt.Sprintf("access-mode-%d", int(m))
	}
}

// IssueCode identifies a non-fatal record or compression layout issue.
type IssueCode int

const (
	// IssueMissingContentLength is reserved for callers that classify missing
	// Content-Length. The scanner currently treats it as fatal.
	IssueMissingContentLength IssueCode = iota + 1
	// IssueInvalidContentLength is reserved for callers that classify invalid
	// Content-Length. The scanner currently treats it as fatal.
	IssueInvalidContentLength
	// IssueMissingRecordTrailer means the record trailer was missing or invalid.
	IssueMissingRecordTrailer
	// IssueFrameContainsMultipleRecords means a zstd frame does not align with
	// a single WARC record boundary.
	IssueFrameContainsMultipleRecords
	// IssueSolidGzipMember means a gzip member contains a partial record or
	// more than one record.
	IssueSolidGzipMember
	// IssueRecordSpansGzipMembers means one WARC record spans multiple gzip
	// members.
	IssueRecordSpansGzipMembers
	// IssueZstdSkippableFrame is reserved for zstd skippable-frame diagnostics.
	IssueZstdSkippableFrame
	// IssueUnsupportedCompression means the compression mode is not supported.
	IssueUnsupportedCompression
	// IssueZstdFrameMissingContentSize means a WARC-zstd frame lacks
	// Frame_Content_Size.
	IssueZstdFrameMissingContentSize
	// IssueZstdFrameMissingChecksum means a WARC-zstd frame lacks
	// Content_Checksum.
	IssueZstdFrameMissingChecksum
)

// Issue describes a non-fatal condition found while scanning a record.
type Issue struct {
	Code    IssueCode
	Message string
}

// BlockFrameMapping maps one compressed frame to the record-block bytes it
// contributes. Block is relative to the WARC record block.
type BlockFrameMapping struct {
	Compressed Range
	Block      Range
}

// BlockIndex describes optional frame-level random access within a record
// block. It is available only when the input carries a recognized block index.
type BlockIndex struct {
	Frames []BlockFrameMapping
}

// RecordLocation describes where a finalized record appears in the scanner's
// decoded WARC stream and how it can be reopened.
type RecordLocation struct {
	// Uncompressed is the record's range in this Scanner's decoded stream. It is
	// relative to the point where the scanner started, so a Scanner created by
	// NewScannerAt reports its first record at or near offset zero. It is not an
	// absolute file offset and must not be passed to NewScannerAt.
	Uncompressed Range
	// Access describes the starting point required for lazy reopening.
	Access AccessMode
}

// DecodeCost describes the storage bytes reopened and decoded bytes discarded
// before a lazy read returns its requested output.
type DecodeCost struct {
	// EncodedRanges are absolute RandomAccessSource byte ranges to reopen.
	// Ranges may be discontiguous when a record spans multiple independently
	// compressed frames or members. A range with negative Size means decoding
	// starts at Off and continues until enough decoded output has been produced.
	// EncodedRanges[0].Off may be passed to NewScannerAt to start directly at
	// this record only when the corresponding RecordLocation.Access is
	// AccessExact. For AccessFromCompressionUnitStart it starts at an earlier
	// frame or member and DecodedDiscardBytes describes the intervening output.
	EncodedRanges []Range
	// DecodedDiscardBytes is the decoded byte count discarded before the
	// returned reader starts producing bytes.
	DecodedDiscardBytes int64
	// DecodedOutputBytes is the decoded byte count returned by the lazy reader.
	DecodedOutputBytes int64
}

// FoldedFieldPolicy controls whether WARC named-field continuation lines are
// accepted in record headers and application/warc-fields blocks. WARC 1.0 and
// 1.1 permit continuation lines that begin with space or tab.
//
// https://github.com/iipc/warc-specifications/issues/74
type FoldedFieldPolicy int

const (
	// FoldedFieldAccept unfolds continuation lines and marks the affected
	// WARCField values. This is the default for backward compatibility.
	FoldedFieldAccept FoldedFieldPolicy = iota
	// FoldedFieldReject returns ErrFoldedWARCField when a continuation line is
	// encountered.
	FoldedFieldReject
)

func (p FoldedFieldPolicy) valid() bool {
	return p == FoldedFieldAccept || p == FoldedFieldReject
}

// RecordHeader is a parsed WARC record header. A record header consists of the
// WARC version line followed by WARC named fields. It is distinct from an
// application/warc-fields record block, which contains fields without a
// version line.
type RecordHeader struct {
	Version string
	Fields  []WARCField
}

// WARCField is a parsed WARC named field. The same named-field syntax is used
// inside record headers and application/warc-fields blocks.
type WARCField struct {
	Name  string
	Value string

	// Folded reports whether Value was unfolded from one or more continuation
	// lines. RecordRef.RawHeader preserves original record-header bytes.
	Folded bool
}

// HasFoldedFields reports whether any named field used a continuation line.
func (h RecordHeader) HasFoldedFields() bool {
	return hasFoldedFields(h.Fields)
}

// Get returns the first WARC named-field value whose name matches case
// insensitively.
func (h RecordHeader) Get(name string) (string, bool) {
	return getNamedField(h.Fields, name)
}
