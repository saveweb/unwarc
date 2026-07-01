package unwarc

import (
	"bytes"
	"io"
	"testing"
)

func TestCountingReaderTellTracksConsumedBytesWithBufferedSource(t *testing.T) {
	data := []byte("abcdefghijklmnopqrstuvwxyz")
	source := &readOnlyBytes{r: bytes.NewReader(data)}
	cr := newCountingReader(source)

	if _, err := cr.ReadByte(); err != nil {
		t.Fatal(err)
	}
	if got := cr.Tell(); got != 1 {
		t.Fatalf("Tell() after ReadByte = %d, want 1", got)
	}
	if source.read <= cr.Tell() {
		t.Fatalf("test source read %d bytes, want more than Tell()=%d to exercise prefetch", source.read, cr.Tell())
	}

	buf := make([]byte, 3)
	if _, err := io.ReadFull(cr, buf); err != nil {
		t.Fatal(err)
	}
	if got := cr.Tell(); got != 4 {
		t.Fatalf("Tell() after ReadFull = %d, want 4", got)
	}
}

type readOnlyBytes struct {
	r    *bytes.Reader
	read int64
}

func (r *readOnlyBytes) Read(p []byte) (int, error) {
	n, err := r.r.Read(p)
	r.read += int64(n)
	return n, err
}
