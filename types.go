package unwarc

import "fmt"

// Range describes a byte range. A negative Size means the end is unknown.
type Range struct {
	Off  int64
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
	// CompressionXZ is an xz-compressed WARC stream.
	CompressionXZ
	// CompressionBzip2 is a bzip2-compressed WARC stream.
	CompressionBzip2
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
	case CompressionXZ:
		return "xz"
	case CompressionBzip2:
		return "bzip2"
	default:
		return "unknown"
	}
}

// SegmentKind identifies the compressed segment that produced bytes.
type SegmentKind int

const (
	SegmentPlain SegmentKind = iota
	SegmentGzipMember
	SegmentZstdFrame
	SegmentZstdDict
	SegmentZstdSkippable
	SegmentXZStream
	SegmentBzip2Stream
)

func (k SegmentKind) String() string {
	switch k {
	case SegmentPlain:
		return "plain"
	case SegmentGzipMember:
		return "gzip-member"
	case SegmentZstdFrame:
		return "zstd-frame"
	case SegmentZstdDict:
		return "zstd-dict"
	case SegmentZstdSkippable:
		return "zstd-skippable"
	case SegmentXZStream:
		return "xz-stream"
	case SegmentBzip2Stream:
		return "bzip2-stream"
	default:
		return fmt.Sprintf("segment-kind-%d", int(k))
	}
}

// Segment records the relationship between compressed and uncompressed bytes
// for a compression member, frame, dictionary, or whole-file stream.
type Segment struct {
	Kind SegmentKind

	Comp   Range
	Uncomp Range

	ProducesWARCBytes        bool
	IndependentlyDecodable   bool
	RequiresPrefixDictionary bool
	ZstdHasFrameContentSize  bool
	ZstdHasContentChecksum   bool
}

// AccessMode describes how a RecordRef can be lazily reopened.
type AccessMode int

const (
	// AccessPending is used before a record location has been resolved.
	AccessPending AccessMode = iota
	// AccessExact means the compressed ranges map exactly to the record.
	AccessExact
	// AccessFromSegmentStart means lazy reads restart at a compressed segment
	// boundary and discard preceding uncompressed bytes.
	AccessFromSegmentStart
	// AccessFromFileStart means lazy reads restart at the beginning of the file.
	AccessFromFileStart
	// AccessStreamOnly means the record was found but cannot be lazily reopened.
	AccessStreamOnly
	// AccessInvalid means the scanner could not resolve a usable location.
	AccessInvalid
)

func (m AccessMode) String() string {
	switch m {
	case AccessPending:
		return "pending"
	case AccessExact:
		return "exact"
	case AccessFromSegmentStart:
		return "from-segment-start"
	case AccessFromFileStart:
		return "from-file-start"
	case AccessStreamOnly:
		return "stream-only"
	case AccessInvalid:
		return "invalid"
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

// RecordPayloadFrame maps one compressed frame to the payload bytes it
// contributes. Payload is relative to the WARC record payload, not to the
// whole uncompressed WARC stream.
type RecordPayloadFrame struct {
	Comp    Range
	Payload Range
}

// RecordLocation describes a record in two coordinate systems:
//
//   - Uncomp is the record's range in the global uncompressed WARC byte stream.
//   - CompRanges and RestartRange are ranges in the compressed input bytes.
//
// Exact lazy access uses CompRanges when compressed segments map exactly to the
// record. Restart lazy access uses RestartRange and RestartUncompOff when the
// nearest independently decodable compressed segment starts before the record.
//
// Example restart mapping:
//
//	compressed input bytes:
//	0           80                  200
//	| member 1  | member 2          |
//	            ^
//	            RestartRange.Off
//
//	global uncompressed WARC bytes:
//	0                  500             900            1200
//	| earlier record   | record 2      | record 3      |
//	                   ^               ^
//	                   RestartUncompOff Uncomp.Off
//
// To lazily reopen record 3, decoding restarts at compressed offset 80 and
// discards 900-500 decoded bytes before returning the record.
type RecordLocation struct {
	// Uncomp is the record's location after decompressing the whole WARC stream.
	Uncomp Range

	// CompRanges are compressed byte ranges that decode exactly to this record.
	// They are populated for AccessExact records.
	CompRanges []Range

	// PayloadCompRanges are compressed byte ranges that decode directly to the
	// record payload, optionally followed by the record trailer. When present,
	// OpenPayload can avoid reopening and decoding header bytes.
	PayloadCompRanges []Range

	// PayloadFrames maps payload-producing compressed frames to payload-relative
	// uncompressed ranges. Seek-indexed WARC-zstd records populate it so callers
	// can choose the nearest frame for replay or range extraction.
	PayloadFrames []RecordPayloadFrame

	// RestartRange is a compressed byte range where lazy reopening can restart
	// decoding when the record starts inside a larger compressed segment.
	// RestartRange.Off is a compressed-file offset.
	//
	// RestartUncompOff is the global uncompressed offset produced by
	// RestartRange.Off. Reopen skips Uncomp.Off-RestartUncompOff decoded bytes
	// before returning this record.
	RestartRange     *Range
	RestartUncompOff int64

	Access AccessMode

	// Final reports whether the scanner has resolved this record's trailer,
	// access mode, and compressed/uncompressed ranges.
	Final  bool
	Issues []Issue
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
