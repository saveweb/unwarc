package unwarc

import "testing"

func TestDefaultScannerOptions(t *testing.T) {
	opts := DefaultScannerOptions()

	if opts.Compression != CompressionUnknown {
		t.Fatalf("Compression = %s, want %s", opts.Compression, CompressionUnknown)
	}
	if !opts.RequireRecordTrailer {
		t.Fatal("RequireRecordTrailer = false, want true")
	}
	if !opts.RequireZstdFrameContentSize {
		t.Fatal("RequireZstdFrameContentSize = false, want true")
	}
	if !opts.RequireZstdFrameChecksum {
		t.Fatal("RequireZstdFrameChecksum = false, want true")
	}
	if !opts.RequireZstdRecordIsolation {
		t.Fatal("RequireZstdRecordIsolation = false, want true")
	}
	if opts.FoldedFields != FoldedFieldAccept {
		t.Fatalf("FoldedFields = %d, want %d", opts.FoldedFields, FoldedFieldAccept)
	}
	if opts.Resynchronize {
		t.Fatal("Resynchronize = true, want false")
	}
	if opts.MaxBufferedZstdFrameSize != 0 {
		t.Fatalf("MaxBufferedZstdFrameSize = %d, want zero value default", opts.MaxBufferedZstdFrameSize)
	}
}
