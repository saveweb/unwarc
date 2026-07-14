package unwarc

import (
	"bytes"
	"io"
	"testing"
)

func TestCrossedCompressionUnitAndRecordBoundaries(t *testing.T) {
	blocks := [][]byte{
		[]byte("record-zero"),
		bytes.Repeat([]byte("record-one-"), 8),
		[]byte("record-two"),
	}
	records := [][]byte{
		makeRecord("warcinfo", "<urn:uuid:crossed-0>", blocks[0]),
		makeRecord("response", "<urn:uuid:crossed-1>", blocks[1]),
		makeRecord("response", "<urn:uuid:crossed-2>", blocks[2]),
	}
	cut := len(records[1]) / 2
	unitData := [][]byte{
		append(append([]byte{}, records[0]...), records[1][:cut]...),
		append(append([]byte{}, records[1][cut:]...), records[2]...),
	}

	tests := []struct {
		name        string
		compression Compression
		encode      func(*testing.T, []byte) []byte
		issues      []IssueCode
	}{
		{
			name:        "gzip",
			compression: CompressionGzip,
			encode:      gzipMember,
			issues:      []IssueCode{IssueSolidGzipMember},
		},
		{
			name:        "zstd",
			compression: CompressionZstd,
			encode:      zstdFrame,
			issues:      []IssueCode{IssueFrameContainsMultipleRecords},
		},
		{
			name:        "zstd without frame content size",
			compression: CompressionZstd,
			encode:      zstdFrameWithoutFCS,
			issues: []IssueCode{
				IssueFrameContainsMultipleRecords,
				IssueZstdFrameMissingContentSize,
			},
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			unit1 := tt.encode(t, unitData[0])
			unit2 := tt.encode(t, unitData[1])
			stream := append(append([]byte{}, unit1...), unit2...)
			refs := scanSourceRefs(t, newBytesSource(stream), tt.compression)
			if len(refs) != len(records) {
				t.Fatalf("records = %d, want %d", len(refs), len(records))
			}

			wantStarts := []int64{0, 0, int64(len(unit1))}
			wantSkips := []int64{0, int64(len(records[0])), int64(len(records[1]) - cut)}
			var wantRecordOff int64
			for i, ref := range refs {
				location, ok := ref.Location()
				if !ok {
					t.Fatalf("record %d location is not finalized", i)
				}
				wantLocation := RecordLocation{
					Uncompressed: Range{Off: wantRecordOff, Size: int64(len(records[i]))},
					Access:       AccessFromCompressionUnitStart,
				}
				if location != wantLocation {
					t.Fatalf("record %d location = %+v, want %+v", i, location, wantLocation)
				}
				wantRecordOff += int64(len(records[i]))
				if ref.rawPlan == nil || len(ref.rawPlan.compressed) != 1 {
					t.Fatalf("record %d raw plan = %+v", i, ref.rawPlan)
				}
				if got := ref.rawPlan.compressed[0]; got != (Range{Off: wantStarts[i], Size: -1}) {
					t.Fatalf("record %d compressed range = %+v, want off=%d to EOF", i, got, wantStarts[i])
				}
				if ref.rawPlan.decoded != (Range{Off: wantSkips[i], Size: int64(len(records[i]))}) {
					t.Fatalf("record %d decoded range = %+v, want off=%d size=%d", i, ref.rawPlan.decoded, wantSkips[i], len(records[i]))
				}
				for _, issue := range tt.issues {
					assertIssue(t, ref, issue)
				}
				if got := readAllFrom(t, ref.OpenRaw); !bytes.Equal(got, records[i]) {
					t.Fatalf("record %d raw = %q, want %q", i, got, records[i])
				}
				if got := readAllFrom(t, ref.OpenBlock); !bytes.Equal(got, blocks[i]) {
					t.Fatalf("record %d block = %q, want %q", i, got, blocks[i])
				}
				if got := readAllFrom(t, func() (io.ReadCloser, error) {
					return ref.OpenBlockRange(1, int64(len(blocks[i])-2))
				}); !bytes.Equal(got, blocks[i][1:len(blocks[i])-1]) {
					t.Fatalf("record %d block range = %q, want %q", i, got, blocks[i][1:len(blocks[i])-1])
				}
			}
		})
	}
}
