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
		return s.resolveCompressionUnitLocation(loc, record)
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

func (s *Scanner) resolveCompressionUnitLocation(loc RecordLocation, record Range) RecordLocation {
	var overlapping []CompressionUnit
	for _, unit := range s.stream.CompletedUnits() {
		if !unit.ProducesWARCBytes {
			continue
		}
		if rangesOverlap(unit.Uncomp, record) {
			overlapping = append(overlapping, unit)
		}
	}
	if cur := s.stream.CurrentUnit(); cur != nil && cur.ProducesWARCBytes && rangesOverlap(cur.Uncomp, record) {
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
	startsAtUnitBoundary := record.Off == first.Uncomp.Off
	endsAtUnitBoundary := last.Uncomp.Valid() && recordEnd == last.Uncomp.End() && last.Comp.Size >= 0
	coversWholeUnits := startsAtUnitBoundary && endsAtUnitBoundary
	for i, unit := range overlapping {
		if i == 0 || i == len(overlapping)-1 {
			continue
		}
		if !unit.Uncomp.Valid() || unit.Comp.Size < 0 {
			coversWholeUnits = false
			break
		}
	}

	if coversWholeUnits {
		loc.Access = AccessExact
		for _, unit := range overlapping {
			loc.CompRanges = append(loc.CompRanges, unit.Comp)
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
	// RestartRange.Off is the compression-unit start. RestartUncompOff is the
	// same point expressed in the global decoded WARC stream.
	loc.RestartUncompOff = first.Uncomp.Off
	if s.source != nil {
		loc.Access = AccessFromCompressionUnitStart
	} else {
		loc.Access = AccessStreamOnly
	}

	switch first.Kind {
	case CompressionUnitGzipMember:
		loc.Issues = append(loc.Issues, Issue{
			Code:    IssueSolidGzipMember,
			Message: "gzip member contains a partial record or multiple records",
		})
	case CompressionUnitZstdFrame:
		loc.Issues = append(loc.Issues, Issue{
			Code:    IssueFrameContainsMultipleRecords,
			Message: "zstd frame contains a partial record boundary or multiple records",
		})
	}

	return loc
}

func zstdFrameRequirementIssues(units []CompressionUnit) []Issue {
	var issues []Issue
	for _, unit := range units {
		if unit.Kind != CompressionUnitZstdFrame {
			continue
		}
		if !unit.ZstdHasFrameContentSize {
			issues = append(issues, Issue{
				Code:    IssueZstdFrameMissingContentSize,
				Message: "zstd frame is missing Frame_Content_Size",
			})
		}
		if !unit.ZstdHasContentChecksum {
			issues = append(issues, Issue{
				Code:    IssueZstdFrameMissingChecksum,
				Message: "zstd frame is missing Content_Checksum",
			})
		}
	}
	return issues
}
