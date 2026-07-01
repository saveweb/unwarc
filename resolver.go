package unwarc

func (s *Scanner) resolveLocation(record Range) RecordLocation {
	loc := RecordLocation{
		Uncomp: record,
		Access: AccessPending,
		Final:  true,
	}

	if s.stream.Compression() == CompressionPlain {
		loc.Access = AccessExact
		loc.CompRanges = []Range{{Off: record.Off, Size: record.Size}}
		return loc
	}

	compression := s.stream.Compression()
	switch compression {
	case CompressionGzip, CompressionZstd:
		return s.resolveFramedLocation(loc, record)
	case CompressionBzip2, CompressionXZ:
		if s.source != nil {
			loc.Access = AccessFromFileStart
		} else {
			loc.Access = AccessStreamOnly
		}
		return loc
	default:
		loc.Access = AccessInvalid
		loc.Issues = append(loc.Issues, Issue{
			Code:    IssueUnsupportedCompression,
			Message: "unsupported compression",
		})
		return loc
	}
}

func (s *Scanner) resolveFramedLocation(loc RecordLocation, record Range) RecordLocation {
	var overlapping []Segment
	for _, seg := range s.stream.CompletedSegments() {
		if !seg.ProducesWARCBytes {
			continue
		}
		if rangesOverlap(seg.Uncomp, record) {
			overlapping = append(overlapping, seg)
		}
	}
	if cur := s.stream.CurrentSegment(); cur != nil && cur.ProducesWARCBytes && rangesOverlap(cur.Uncomp, record) {
		overlapping = append(overlapping, *cur)
	}
	if len(overlapping) == 0 {
		loc.Access = AccessInvalid
		return loc
	}
	if s.stream.Compression() == CompressionZstd {
		loc.Issues = append(loc.Issues, zstdFrameRequirementIssues(overlapping)...)
	}

	first := overlapping[0]
	last := overlapping[len(overlapping)-1]
	recordEnd := record.End()
	startsAtSegmentBoundary := record.Off == first.Uncomp.Off
	endsAtSegmentBoundary := last.Uncomp.Valid() && recordEnd == last.Uncomp.End() && last.Comp.Size >= 0
	coversWholeSegments := startsAtSegmentBoundary && endsAtSegmentBoundary
	for i, seg := range overlapping {
		if i == 0 || i == len(overlapping)-1 {
			continue
		}
		if !seg.Uncomp.Valid() || seg.Comp.Size < 0 {
			coversWholeSegments = false
			break
		}
	}

	if coversWholeSegments {
		loc.Access = AccessExact
		for _, seg := range overlapping {
			loc.CompRanges = append(loc.CompRanges, seg.Comp)
		}
		if s.stream.Compression() == CompressionGzip && len(overlapping) > 1 {
			loc.Issues = append(loc.Issues, Issue{
				Code:    IssueRecordSpansGzipMembers,
				Message: "WARC record spans multiple gzip members",
			})
		}
		return loc
	}

	restart := Range{Off: first.Comp.Off, Size: first.Comp.Size}
	if restart.Size < 0 {
		restart.Size = -1
	}
	loc.RestartRange = &restart
	// RestartRange.Off is the compressed segment start. RestartUncompOff is the
	// same point expressed in the global decoded WARC stream.
	loc.RestartUncompOff = first.Uncomp.Off
	if s.source != nil {
		loc.Access = AccessFromSegmentStart
	} else {
		loc.Access = AccessStreamOnly
	}

	switch first.Kind {
	case SegmentGzipMember:
		loc.Issues = append(loc.Issues, Issue{
			Code:    IssueSolidGzipMember,
			Message: "gzip member contains a partial record or multiple records",
		})
	case SegmentZstdFrame:
		loc.Issues = append(loc.Issues, Issue{
			Code:    IssueFrameContainsMultipleRecords,
			Message: "zstd frame contains a partial record boundary or multiple records",
		})
	}

	return loc
}

func zstdFrameRequirementIssues(segments []Segment) []Issue {
	var issues []Issue
	for _, seg := range segments {
		if seg.Kind != SegmentZstdFrame {
			continue
		}
		if !seg.ZstdHasFrameContentSize {
			issues = append(issues, Issue{
				Code:    IssueZstdFrameMissingContentSize,
				Message: "zstd frame is missing Frame_Content_Size",
			})
		}
		if !seg.ZstdHasContentChecksum {
			issues = append(issues, Issue{
				Code:    IssueZstdFrameMissingChecksum,
				Message: "zstd frame is missing Content_Checksum",
			})
		}
	}
	return issues
}
