package unwarc

import (
	"io"
	"os"
)

// Source opens a fresh reader for a WARC input.
type Source interface {
	Open() (io.ReadCloser, error)
}

// RandomAccessSource opens whole-file and byte-range readers for lazy record
// access. Implementations must return independent readers from each Open,
// OpenRange, and OpenAt call; RecordRef.OpenRaw and RecordRef.OpenPayload may
// call them concurrently after scanning has finished. The backing bytes must
// remain stable until every reader opened from the collected RecordRef values
// has been closed.
type RandomAccessSource interface {
	Source
	OpenRange(off, size int64) (io.ReadCloser, error)
	OpenAt(off int64) (io.ReadCloser, error)
	Size() (int64, error)
}

// ReaderAtSource adapts an io.ReaderAt into a RandomAccessSource. If Closer is
// set, call Close only after all scanners and RecordRef readers using the
// source have finished.
type ReaderAtSource struct {
	ReaderAt io.ReaderAt
	Reader   func() (io.ReadCloser, error)
	Length   int64
	Closer   io.Closer
}

// NewReaderAtSource returns a source backed by readerAt. The open function is
// optional; when nil, Open uses a section reader over readerAt.
func NewReaderAtSource(readerAt io.ReaderAt, size int64, open func() (io.ReadCloser, error)) ReaderAtSource {
	return ReaderAtSource{
		ReaderAt: readerAt,
		Reader:   open,
		Length:   size,
	}
}

func (s ReaderAtSource) Open() (io.ReadCloser, error) {
	if s.Reader != nil {
		return s.Reader()
	}
	return io.NopCloser(io.NewSectionReader(s.ReaderAt, 0, s.Length)), nil
}

func (s ReaderAtSource) OpenRange(off, size int64) (io.ReadCloser, error) {
	return io.NopCloser(io.NewSectionReader(s.ReaderAt, off, size)), nil
}

func (s ReaderAtSource) OpenAt(off int64) (io.ReadCloser, error) {
	if off > s.Length {
		off = s.Length
	}
	return io.NopCloser(io.NewSectionReader(s.ReaderAt, off, s.Length-off)), nil
}

func (s ReaderAtSource) Size() (int64, error) {
	return s.Length, nil
}

func (s ReaderAtSource) Close() error {
	if s.Closer == nil {
		return nil
	}
	return s.Closer.Close()
}

// FileSource opens ranges from a file path. The path must continue to refer to
// the same file contents while lazy RecordRef readers are in use.
type FileSource struct {
	Path string
}

// NewFileSource returns a source backed by path.
func NewFileSource(path string) FileSource {
	return FileSource{Path: path}
}

func (s FileSource) Open() (io.ReadCloser, error) {
	return os.Open(s.Path)
}

func (s FileSource) OpenRange(off, size int64) (io.ReadCloser, error) {
	f, err := os.Open(s.Path)
	if err != nil {
		return nil, err
	}
	return &readCloser{
		Reader: io.NewSectionReader(f, off, size),
		close:  f.Close,
	}, nil
}

func (s FileSource) OpenAt(off int64) (io.ReadCloser, error) {
	f, err := os.Open(s.Path)
	if err != nil {
		return nil, err
	}
	st, err := f.Stat()
	if err != nil {
		_ = f.Close()
		return nil, err
	}
	size := st.Size()
	if off > size {
		off = size
	}
	return &readCloser{
		Reader: io.NewSectionReader(f, off, size-off),
		close:  f.Close,
	}, nil
}

func (s FileSource) Size() (int64, error) {
	st, err := os.Stat(s.Path)
	if err != nil {
		return 0, err
	}
	return st.Size(), nil
}

type readCloser struct {
	io.Reader
	close func() error
}

func (r *readCloser) Close() error {
	if r.close == nil {
		return nil
	}
	return r.close()
}
