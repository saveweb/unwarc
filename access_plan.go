package unwarc

// decodePlan identifies compressed input and the desired byte range within its
// concatenated decoded output. It can represent exact record-aligned access,
// replay from an earlier compression-unit boundary, or replay from file start.
type decodePlan struct {
	compressed []Range
	decoded    Range
}

func newDecodePlan(compressed []Range, decoded Range) *decodePlan {
	return &decodePlan{
		compressed: append([]Range(nil), compressed...),
		decoded:    decoded,
	}
}

func (p *decodePlan) subrange(off, size int64) *decodePlan {
	if p == nil {
		return nil
	}
	return newDecodePlan(p.compressed, Range{
		Off:  p.decoded.Off + off,
		Size: size,
	})
}

type blockIndex struct {
	frames []BlockFrameMapping
}

func newBlockIndex(frames []BlockFrameMapping) *blockIndex {
	if len(frames) == 0 {
		return nil
	}
	return &blockIndex{frames: append([]BlockFrameMapping(nil), frames...)}
}

func (i *blockIndex) plan(off, size int64) (*decodePlan, bool) {
	if i == nil || size <= 0 {
		return nil, false
	}
	want := Range{Off: off, Size: size}
	compressed := make([]Range, 0, len(i.frames))
	var firstBlockOff int64
	found := false
	for idx := range i.frames {
		frame := i.frames[idx]
		if !rangesOverlap(frame.Block, want) {
			continue
		}
		if !found {
			firstBlockOff = frame.Block.Off
			found = true
		}
		compressed = append(compressed, frame.Compressed)
	}
	if !found {
		return nil, false
	}
	return newDecodePlan(compressed, Range{
		Off:  off - firstBlockOff,
		Size: size,
	}), true
}

func (i *blockIndex) snapshot() (BlockIndex, bool) {
	if i == nil {
		return BlockIndex{}, false
	}
	return BlockIndex{Frames: append([]BlockFrameMapping(nil), i.frames...)}, true
}

type recordResolution struct {
	location RecordLocation
	raw      *decodePlan
	block    *blockIndex
	issues   []Issue
}
