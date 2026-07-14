package unwarc

import (
	"bytes"
	"errors"
	"io"
	"sync"
	"testing"
)

func TestPlainSourceLazyAccess(t *testing.T) {
	blocks := [][]byte{
		[]byte("alpha"),
		nil,
		[]byte("omega"),
	}
	records := [][]byte{
		makeRecord("warcinfo", "<urn:uuid:plain-source-1>", blocks[0]),
		makeRecord("resource", "<urn:uuid:plain-source-zero>", blocks[1]),
		makeRecord("response", "<urn:uuid:plain-source-2>", blocks[2]),
	}
	data := bytes.Join(records, nil)

	for _, tc := range plainSourceCases(t, data) {
		t.Run(tc.name, func(t *testing.T) {
			refs := scanPlainSourceRefs(t, tc.source, CompressionPlain)
			if len(refs) != len(records) {
				t.Fatalf("expected %d records, got %d", len(records), len(refs))
			}

			var off int64
			for i, ref := range refs {
				wantRange := Range{Off: off, Size: int64(len(records[i]))}
				if ref.Location.Uncomp != wantRange {
					t.Fatalf("record %d uncomp range = %+v, want %+v", i, ref.Location.Uncomp, wantRange)
				}
				assertExactRanges(t, ref, wantRange)
				if ref.ContentLength != int64(len(blocks[i])) {
					t.Fatalf("record %d content length = %d, want %d", i, ref.ContentLength, len(blocks[i]))
				}
				if ref.HeaderLen != int64(len(records[i])-len(blocks[i])-4) {
					t.Fatalf("record %d header length = %d, want %d", i, ref.HeaderLen, len(records[i])-len(blocks[i])-4)
				}
				if ref.TrailerLen != 4 {
					t.Fatalf("record %d trailer length = %d, want 4", i, ref.TrailerLen)
				}

				raw := readAllFrom(t, ref.OpenRaw)
				if !bytes.Equal(raw, records[i]) {
					t.Fatalf("record %d raw = %q, want %q", i, raw, records[i])
				}

				block := readAllFrom(t, ref.OpenBlock)
				if !bytes.Equal(block, blocks[i]) {
					t.Fatalf("record %d block = %q, want %q", i, block, blocks[i])
				}

				materialized, err := ref.Materialize()
				if err != nil {
					t.Fatalf("record %d materialize: %v", i, err)
				}
				if materialized.Ref != ref {
					t.Fatalf("record %d materialized ref was not preserved", i)
				}
				if !bytes.Equal(materialized.Data, records[i]) {
					t.Fatalf("record %d materialized data = %q, want %q", i, materialized.Data, records[i])
				}

				off += int64(len(records[i]))
			}
		})
	}
}

func TestOpenBlockReturnsEntireHTTPMessageBlock(t *testing.T) {
	block := []byte("HTTP/1.1 200 OK\r\nContent-Type: text/plain\r\n\r\nhello")
	record := makeRecord("response", "<urn:uuid:http-message-block>", block)
	refs := scanPlainSourceRefs(t, newBytesSource(record), CompressionPlain)
	if len(refs) != 1 {
		t.Fatalf("records = %d, want 1", len(refs))
	}

	got := readAllFrom(t, refs[0].OpenBlock)
	if !bytes.Equal(got, block) {
		t.Fatalf("block = %q, want entire HTTP message %q", got, block)
	}
}

func TestPlainSourceCompressionUnknownFallsBackToPlain(t *testing.T) {
	records := [][]byte{
		makeRecord("warcinfo", "<urn:uuid:unknown-plain-1>", []byte("abcd")),
		makeRecord("response", "<urn:uuid:unknown-plain-2>", []byte("efgh")),
	}
	data := bytes.Join(records, nil)

	for _, tc := range plainSourceCases(t, data) {
		t.Run(tc.name, func(t *testing.T) {
			refs := scanPlainSourceRefs(t, tc.source, CompressionUnknown)
			if len(refs) != len(records) {
				t.Fatalf("expected %d records, got %d", len(records), len(refs))
			}

			var off int64
			for i, ref := range refs {
				wantRange := Range{Off: off, Size: int64(len(records[i]))}
				assertExactRanges(t, ref, wantRange)

				raw := readAllFrom(t, ref.OpenRaw)
				if !bytes.Equal(raw, records[i]) {
					t.Fatalf("record %d raw = %q, want %q", i, raw, records[i])
				}

				off += int64(len(records[i]))
			}
		})
	}
}

func TestPlainStreamCompressionUnknownFallsBackToPlain(t *testing.T) {
	data := makeRecord("response", "<urn:uuid:unknown-stream-plain>", []byte("plain"))

	scanner, err := NewScanner(bytes.NewReader(data), ScannerOptions{Compression: CompressionUnknown})
	if err != nil {
		t.Fatal(err)
	}
	if !scanner.Next() {
		t.Fatalf("expected record: %v", scanner.Err())
	}
	ref := scanner.RecordRef()
	if ref.compression != CompressionPlain {
		t.Fatalf("compression = %s, want %s", ref.compression, CompressionPlain)
	}
	wantRange := Range{Off: 0, Size: int64(len(data))}
	assertExactRanges(t, ref, wantRange)
	if scanner.Next() {
		t.Fatal("unexpected extra record")
	}
	if err := scanner.Err(); err != nil {
		t.Fatal(err)
	}
}

func TestNewRecordFromBytesParsesPlainRecord(t *testing.T) {
	block := []byte("from bytes")
	data := makeRecord("response", "<urn:uuid:from-bytes>", block)

	record, err := NewRecordFromBytes(data)
	if err != nil {
		t.Fatal(err)
	}
	if record.Ref == nil {
		t.Fatal("expected record ref")
	}
	if !bytes.Equal(record.Data, data) {
		t.Fatalf("data = %q, want %q", record.Data, data)
	}
	if record.Ref.ContentLength != int64(len(block)) {
		t.Fatalf("content length = %d, want %d", record.Ref.ContentLength, len(block))
	}
	wantRange := Range{Off: 0, Size: int64(len(data))}
	assertExactRanges(t, record.Ref, wantRange)
}

func TestNewRecordFromBytesReturnsFirstRawRecord(t *testing.T) {
	first := makeRecord("response", "<urn:uuid:from-bytes-first>", []byte("first"))
	second := makeRecord("response", "<urn:uuid:from-bytes-second>", []byte("second"))

	record, err := NewRecordFromBytes(append(append([]byte{}, first...), second...))
	if err != nil {
		t.Fatal(err)
	}
	if !bytes.Equal(record.Data, first) {
		t.Fatalf("data = %q, want first raw record %q", record.Data, first)
	}
}

func TestNewRecordFromBytesEmptyReturnsEOF(t *testing.T) {
	_, err := NewRecordFromBytes(nil)
	if !errors.Is(err, io.EOF) {
		t.Fatalf("error = %v, want %v", err, io.EOF)
	}
}

func TestCompressedExactOpenRawOpensRangesOnDemand(t *testing.T) {
	block := bytes.Repeat([]byte("0123456789abcdef"), 512)
	record := makeRecord("response", "<urn:uuid:lazy-ranges>", block)
	cut := bytes.Index(record, block) + len(block)/2
	if cut <= 0 {
		t.Fatal("bad test fixture")
	}

	member1 := gzipMember(t, record[:cut])
	member2 := gzipMember(t, record[cut:])
	stream := append(append([]byte{}, member1...), member2...)
	source := &trackingRangeSource{data: stream}
	ref := &RecordRef{
		Location: RecordLocation{
			Access: AccessExact,
			Final:  true,
			CompRanges: []Range{
				{Off: 0, Size: int64(len(member1))},
				{Off: int64(len(member1)), Size: int64(len(member2))},
			},
		},
		source:      source,
		compression: CompressionGzip,
	}

	raw, err := ref.OpenRaw()
	if err != nil {
		t.Fatal(err)
	}
	if len(source.opened) != 1 {
		t.Fatalf("OpenRaw opened %d ranges, want 1", len(source.opened))
	}

	var got bytes.Buffer
	one := make([]byte, 1)
	n, err := raw.Read(one)
	if err != nil {
		t.Fatal(err)
	}
	got.Write(one[:n])
	if len(source.opened) != 1 {
		t.Fatalf("first byte read opened %d ranges, want 1", len(source.opened))
	}

	rest, err := io.ReadAll(raw)
	if err != nil {
		t.Fatal(err)
	}
	got.Write(rest)
	if !bytes.Equal(got.Bytes(), record) {
		t.Fatalf("raw record = %q, want %q", got.Bytes(), record)
	}
	if len(source.opened) != 2 {
		t.Fatalf("read opened ranges %+v, want both compressed members", source.opened)
	}
	if source.maxOpen != 1 {
		t.Fatalf("max simultaneously open ranges = %d, want 1", source.maxOpen)
	}
	if err := raw.Close(); err != nil {
		t.Fatal(err)
	}
	if source.open != 0 {
		t.Fatalf("open ranges after Close = %d, want 0", source.open)
	}
}

func TestCompressedExactOpenRawClosesRangeOnDecoderError(t *testing.T) {
	data := bytes.Repeat([]byte("not gzip data"), 128)
	source := &trackingRangeSource{data: data}
	ref := &RecordRef{
		Location: RecordLocation{
			Access:     AccessExact,
			Final:      true,
			CompRanges: []Range{{Off: 0, Size: int64(len(data))}},
		},
		source:      source,
		compression: CompressionGzip,
	}

	if _, err := ref.OpenRaw(); err == nil {
		t.Fatal("expected gzip decoder error")
	}
	if source.open != 0 {
		t.Fatalf("open ranges after decoder error = %d, want 0", source.open)
	}
}

func TestCollectedRecordRefsCanReopenBlocksConcurrently(t *testing.T) {
	var records [][]byte
	var blocks [][]byte
	for i := 0; i < 12; i++ {
		block := bytes.Repeat([]byte{byte('A' + i)}, 1024+i)
		blocks = append(blocks, block)
		records = append(records, makeRecord("response", "<urn:uuid:concurrent-reopen>", block))
	}
	data := bytes.Join(records, nil)

	for _, tc := range plainSourceCases(t, data) {
		t.Run(tc.name, func(t *testing.T) {
			refs := scanPlainSourceRefs(t, tc.source, CompressionPlain)
			var wg sync.WaitGroup
			for i, ref := range refs {
				i, ref := i, ref
				for j := 0; j < 4; j++ {
					wg.Add(1)
					go func() {
						defer wg.Done()
						rc, err := ref.OpenBlock()
						if err != nil {
							t.Errorf("OpenBlock(%d): %v", i, err)
							return
						}
						block, err := io.ReadAll(rc)
						closeErr := rc.Close()
						if err != nil {
							t.Errorf("ReadAll(%d): %v", i, err)
							return
						}
						if closeErr != nil {
							t.Errorf("Close(%d): %v", i, closeErr)
							return
						}
						if !bytes.Equal(block, blocks[i]) {
							t.Errorf("block %d = %q, want %q", i, block, blocks[i])
						}
					}()
				}
			}
			wg.Wait()
		})
	}
}

type plainSourceCase struct {
	name   string
	source RandomAccessSource
}

func plainSourceCases(t *testing.T, data []byte) []plainSourceCase {
	t.Helper()

	path := writeTemp(t, data)
	reader := bytes.NewReader(append([]byte(nil), data...))

	return []plainSourceCase{
		{name: "file-source", source: NewFileSource(path)},
		{name: "reader-at-source", source: NewReaderAtSource(reader, int64(len(data)), nil)},
	}
}

func scanPlainSourceRefs(t *testing.T, source RandomAccessSource, compression Compression) []*RecordRef {
	t.Helper()
	return scanSourceRefs(t, source, compression)
}

type trackingRangeSource struct {
	data     []byte
	open     int
	maxOpen  int
	opened   []Range
	openedAt []int64
}

func (s *trackingRangeSource) Open() (io.ReadCloser, error) {
	return io.NopCloser(bytes.NewReader(s.data)), nil
}

func (s *trackingRangeSource) OpenRange(off, size int64) (io.ReadCloser, error) {
	s.open++
	if s.open > s.maxOpen {
		s.maxOpen = s.open
	}
	s.opened = append(s.opened, Range{Off: off, Size: size})
	return &readCloser{
		Reader: io.NewSectionReader(bytes.NewReader(s.data), off, size),
		close: func() error {
			s.open--
			return nil
		},
	}, nil
}

func (s *trackingRangeSource) OpenAt(off int64) (io.ReadCloser, error) {
	if off > int64(len(s.data)) {
		off = int64(len(s.data))
	}
	s.openedAt = append(s.openedAt, off)
	return io.NopCloser(io.NewSectionReader(bytes.NewReader(s.data), off, int64(len(s.data))-off)), nil
}

func (s *trackingRangeSource) Size() (int64, error) {
	return int64(len(s.data)), nil
}
