package unwarc

func (s *Scanner) resolveRecord(record Range) recordResolution {
	resolution := recordResolution{
		location: RecordLocation{
			Uncompressed: record,
			Access:       AccessInvalid,
		},
	}

	if s.stream.Compression() == CompressionPlain {
		if s.source == nil {
			resolution.location.Access = AccessStreamOnly
			return resolution
		}
		resolution.location.Access = AccessExact
		resolution.raw = newDecodePlan(
			[]Range{{Off: record.Off, Size: record.Size}},
			Range{Off: 0, Size: record.Size},
		)
		return resolution
	}

	switch s.stream.Compression() {
	case CompressionGzip, CompressionZstd:
		return s.resolveCompressionUnitRecord(resolution, record)
	case CompressionBzip2, CompressionXZ:
		if s.source == nil {
			resolution.location.Access = AccessStreamOnly
			return resolution
		}
		resolution.location.Access = AccessFromFileStart
		resolution.raw = newDecodePlan(
			[]Range{{Off: 0, Size: -1}},
			Range{Off: record.Off, Size: record.Size},
		)
		return resolution
	default:
		resolution.issues = append(resolution.issues, Issue{
			Code:    IssueUnsupportedCompression,
			Message: "unsupported compression",
		})
		return resolution
	}
}

func (s *Scanner) resolveCompressionUnitRecord(resolution recordResolution, record Range) recordResolution {
	var overlapping []compressionUnit
	for _, unit := range s.stream.CompletedUnits() {
		if unit.ProducesWARCBytes && rangesOverlap(unit.Uncomp, record) {
			overlapping = append(overlapping, unit)
		}
	}
	if current := s.stream.CurrentUnit(); current != nil && current.ProducesWARCBytes && rangesOverlap(current.Uncomp, record) {
		overlapping = append(overlapping, *current)
	}
	if len(overlapping) == 0 {
		return resolution
	}
	if s.stream.Compression() == CompressionZstd {
		resolution.issues = append(resolution.issues, zstdFrameRequirementIssues(overlapping)...)
	}

	first := overlapping[0]
	last := overlapping[len(overlapping)-1]
	startsAtUnitBoundary := record.Off == first.Uncomp.Off
	endsAtUnitBoundary := last.Uncomp.Valid() && record.End() == last.Uncomp.End() && last.Comp.Size >= 0
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
		if s.source == nil {
			resolution.location.Access = AccessStreamOnly
		} else {
			compressed := make([]Range, 0, len(overlapping))
			for _, unit := range overlapping {
				compressed = append(compressed, unit.Comp)
			}
			resolution.location.Access = AccessExact
			resolution.raw = newDecodePlan(compressed, Range{Off: 0, Size: record.Size})
		}
		if s.stream.Compression() == CompressionGzip && len(overlapping) > 1 {
			resolution.issues = append(resolution.issues, Issue{
				Code:    IssueRecordSpansGzipMembers,
				Message: "WARC record spans multiple gzip members",
			})
		}
		return resolution
	}

	if s.source == nil {
		resolution.location.Access = AccessStreamOnly
	} else {
		resolution.location.Access = AccessFromCompressionUnitStart
		resolution.raw = newDecodePlan(
			[]Range{{Off: first.Comp.Off, Size: -1}},
			Range{Off: record.Off - first.Uncomp.Off, Size: record.Size},
		)
	}

	switch first.Kind {
	case compressionUnitGzipMember:
		resolution.issues = append(resolution.issues, Issue{
			Code:    IssueSolidGzipMember,
			Message: "gzip member contains a partial record or multiple records",
		})
	case compressionUnitZstdFrame:
		resolution.issues = append(resolution.issues, Issue{
			Code:    IssueFrameContainsMultipleRecords,
			Message: "zstd frame contains a partial record boundary or multiple records",
		})
	}

	return resolution
}

func zstdFrameRequirementIssues(units []compressionUnit) []Issue {
	var issues []Issue
	for _, unit := range units {
		if unit.Kind != compressionUnitZstdFrame {
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
