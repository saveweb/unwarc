//go:build !unwarc_libz || !cgo

package unwarc

type nativeGzipReader struct{}

func newNativeGzipReader(cr *countingReader) (*nativeGzipReader, bool, error) {
	return nil, false, nil
}

func (r *nativeGzipReader) Reset(cr *countingReader) error {
	return nil
}

func (r *nativeGzipReader) Read(p []byte) (int, error) {
	return 0, nil
}

func (r *nativeGzipReader) Close() error {
	return nil
}
