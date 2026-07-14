package unwarc

import (
	"errors"
	"io"
	"maps"
	"os"
	"path/filepath"
	"slices"
	"strconv"
	"strings"
	"testing"

	"github.com/klauspost/compress/gzip"
)

type corpusExpectation struct {
	records     int
	types       []string
	access      map[AccessMode]int
	issues      map[IssueCode]int
	errIs       error
	errContains string
}

type corpusFixture struct {
	name       string
	path       string
	reported   corpusExpectation
	required   *corpusExpectation
	lazyChecks int
}

func TestCorpusRegressionFixtures(t *testing.T) {
	fixtures := []corpusFixture{
		{
			name: "commoncrawl first gzip member",
			path: "commoncrawl/cc-main-2024-10-first-warcinfo.warc.gz",
			reported: corpusExpectation{
				records: 1,
				types:   []string{"warcinfo"},
				access:  map[AccessMode]int{AccessExact: 1},
				issues:  map[IssueCode]int{},
			},
		},
		{
			name: "gowarc gzip record-per-member",
			path: "gowarc/gowarc-test.warc.gz",
			reported: corpusExpectation{
				records: 3,
				types:   []string{"warcinfo", "request", "response"},
				access:  map[AccessMode]int{AccessExact: 3},
				issues:  map[IssueCode]int{},
			},
		},
		{
			name: "gowarc solid gzip",
			path: "gowarc/gowarc-solid-gzip.warc.gz",
			reported: corpusExpectation{
				records: 10,
				access:  map[AccessMode]int{AccessFromCompressionUnitStart: 10},
				issues:  map[IssueCode]int{IssueSolidGzipMember: 10},
			},
		},
		{
			name: "gowarc single zstd",
			path: "gowarc/gowarc-single-record.warc.zst",
			reported: corpusExpectation{
				records: 1,
				types:   []string{"warcinfo"},
				access:  map[AccessMode]int{AccessExact: 1},
				issues:  map[IssueCode]int{},
			},
		},
		{
			name: "gowarc multiple zstd records",
			path: "gowarc/gowarc-multi-record.warc.zst",
			reported: corpusExpectation{
				records: 3,
				types:   []string{"warcinfo", "response", "response"},
				access:  map[AccessMode]int{AccessExact: 3},
				issues:  map[IssueCode]int{},
			},
		},
		{
			name: "gowarc dictionary zstd",
			path: "gowarc/gowarc-dict-record.warc.zst",
			reported: corpusExpectation{
				records: 1,
				types:   []string{"response"},
				access:  map[AccessMode]int{AccessExact: 1},
				issues:  map[IssueCode]int{},
			},
		},
		{
			name: "gowarc corrupted zstd mid-frame",
			path: "gowarc/gowarc-corrupted-mid-frame.warc.zst.open",
			reported: corpusExpectation{
				records: 1,
				types:   []string{"warcinfo"},
				access:  map[AccessMode]int{AccessExact: 1},
				issues:  map[IssueCode]int{},
				errIs:   io.ErrUnexpectedEOF,
			},
		},
		{
			name: "gowarc corrupted zstd header",
			path: "gowarc/gowarc-corrupted-header.warc.zst.open",
			reported: corpusExpectation{
				records:     2,
				types:       []string{"warcinfo", "response"},
				access:      map[AccessMode]int{AccessExact: 2},
				issues:      map[IssueCode]int{},
				errContains: "zstd frame reserved bit set",
			},
		},
		{
			name: "gowarc truncated zstd",
			path: "gowarc/gowarc-truncated.warc.zst.open",
			reported: corpusExpectation{
				records: 0,
				errIs:   io.ErrUnexpectedEOF,
			},
			required: &corpusExpectation{
				records:     0,
				errIs:       ErrInvalidWARCZstd,
				errContains: "Frame_Content_Size",
			},
		},
		{
			name: "gowarc corrupted gzip mid-record",
			path: "gowarc/gowarc-corrupted-mid-record.warc.gz.open",
			reported: corpusExpectation{
				records: 12,
				access:  map[AccessMode]int{AccessFromCompressionUnitStart: 12},
				issues:  map[IssueCode]int{IssueSolidGzipMember: 12},
				errIs:   gzip.ErrHeader,
			},
			lazyChecks: 3,
		},
		{
			name: "zeno zstd missing frame content size",
			path: "zeno/zeno-fcs-missing.warc.zst",
			reported: corpusExpectation{
				records: 14,
				types: []string{
					"warcinfo", "resource", "request", "response", "request", "response", "metadata",
					"metadata", "request", "response", "request", "response", "metadata", "metadata",
				},
				access: map[AccessMode]int{AccessExact: 14},
				issues: map[IssueCode]int{IssueZstdFrameMissingContentSize: 4},
			},
			required: &corpusExpectation{
				records:     6,
				access:      map[AccessMode]int{AccessExact: 6},
				issues:      map[IssueCode]int{},
				errIs:       ErrInvalidWARCZstd,
				errContains: "Frame_Content_Size",
			},
		},
		{
			name: "zeno gzip small",
			path: "zeno/zeno-small.warc.gz",
			reported: corpusExpectation{
				records: 4,
				types:   []string{"warcinfo", "resource", "response", "request"},
				access:  map[AccessMode]int{AccessExact: 4},
				issues:  map[IssueCode]int{},
			},
		},
	}

	for _, fixture := range fixtures {
		t.Run(fixture.name+"/reported", func(t *testing.T) {
			refs, err := scanCorpusFixture(t, fixture.path, false)
			assertCorpusExpectation(t, refs, err, fixture.reported)
			assertLazyReadable(t, refs, fixture.lazyChecks)
		})

		t.Run(fixture.name+"/required", func(t *testing.T) {
			want := fixture.reported
			if fixture.required != nil {
				want = *fixture.required
			}
			refs, err := scanCorpusFixture(t, fixture.path, true)
			assertCorpusExpectation(t, refs, err, want)
			assertLazyReadable(t, refs, fixture.lazyChecks)
		})
	}
}

func TestExternalCorpusSmoke(t *testing.T) {
	fileLimit := externalCorpusLimit(t)
	paths := externalCorpusPaths(t, fileLimit)
	if len(paths) == 0 {
		t.Skip("set UNWARC_CORPUS_DIR or UNWARC_CORPUS_PATHS to scan external WARC corpora")
	}

	recordLimit := externalCorpusRecordLimit(t)
	maxFileBytes := externalCorpusMaxFileBytes(t)
	for _, path := range paths {
		t.Run(path, func(t *testing.T) {
			skipOversizedExternalCorpusFile(t, path, maxFileBytes)
			refs, err := scanCorpusPathN(t, path, false, recordLimit)
			if err != nil {
				t.Fatalf("external corpus scan failed after %d records: %v", len(refs), err)
			}
			if len(refs) == 0 {
				t.Fatalf("external corpus scan returned no records")
			}
			assertLazyPrefixReadable(t, refs[0])
		})
	}
}

func scanCorpusFixture(t *testing.T, rel string, requireAll bool) ([]*RecordRef, error) {
	t.Helper()
	return scanCorpusPath(t, filepath.Join("testdata", "corpus", rel), requireAll)
}

func scanCorpusPath(t *testing.T, path string, requireAll bool) ([]*RecordRef, error) {
	t.Helper()
	opts := ScannerOptions{Compression: CompressionUnknown}
	if requireAll {
		opts = requireAllValidation(CompressionUnknown)
	}
	scanner, err := NewScannerFromSource(NewFileSource(path), opts)
	if err != nil {
		return nil, err
	}
	defer closeTest(t, scanner)

	var refs []*RecordRef
	for scanner.Next() {
		refs = append(refs, scanner.RecordRef())
	}
	return refs, scanner.Err()
}

func scanCorpusPathN(t *testing.T, path string, requireAll bool, limit int) ([]*RecordRef, error) {
	t.Helper()
	opts := ScannerOptions{Compression: CompressionUnknown}
	if requireAll {
		opts = requireAllValidation(CompressionUnknown)
	}
	scanner, err := NewScannerFromSource(NewFileSource(path), opts)
	if err != nil {
		return nil, err
	}
	defer closeTest(t, scanner)

	refs := make([]*RecordRef, 0, min(limit, 16))
	for len(refs) < limit && scanner.Next() {
		refs = append(refs, scanner.RecordRef())
	}
	if len(refs) == limit {
		return refs, nil
	}
	return refs, scanner.Err()
}

func assertCorpusExpectation(t *testing.T, refs []*RecordRef, err error, want corpusExpectation) {
	t.Helper()
	if len(refs) != want.records {
		t.Fatalf("records = %d, want %d; err = %v", len(refs), want.records, err)
	}
	assertCorpusError(t, err, want)

	if len(want.types) > 0 {
		got := make([]string, len(refs))
		for i, ref := range refs {
			got[i], _ = ref.Header.Get("WARC-Type")
		}
		if !slices.Equal(got, want.types) {
			t.Fatalf("types = %v, want %v", got, want.types)
		}
	}
	if want.access != nil {
		if got := countAccessModes(refs); !maps.Equal(got, want.access) {
			t.Fatalf("access counts = %v, want %v", got, want.access)
		}
	}
	if want.issues != nil {
		if got := countIssueCodes(refs); !maps.Equal(got, want.issues) {
			t.Fatalf("issue counts = %v, want %v", got, want.issues)
		}
	}
}

func assertCorpusError(t *testing.T, err error, want corpusExpectation) {
	t.Helper()
	if want.errIs == nil && want.errContains == "" {
		if err != nil {
			t.Fatalf("err = %v, want nil", err)
		}
		return
	}
	if err == nil {
		t.Fatalf("err = nil, want %v containing %q", want.errIs, want.errContains)
	}
	if want.errIs != nil && !errors.Is(err, want.errIs) {
		t.Fatalf("err = %v, want errors.Is(..., %v)", err, want.errIs)
	}
	if want.errContains != "" && !strings.Contains(err.Error(), want.errContains) {
		t.Fatalf("err = %v, want substring %q", err, want.errContains)
	}
}

func assertLazyReadable(t *testing.T, refs []*RecordRef, limit int) {
	t.Helper()
	if limit <= 0 || limit > len(refs) {
		limit = len(refs)
	}
	for i, ref := range refs[:limit] {
		raw := readAllFrom(t, ref.OpenRaw)
		if int64(len(raw)) != ref.location.Uncompressed.Size {
			t.Fatalf("record %d raw bytes = %d, want %d", i, len(raw), ref.location.Uncompressed.Size)
		}
		block := readAllFrom(t, ref.OpenBlock)
		if int64(len(block)) != ref.ContentLength {
			t.Fatalf("record %d block bytes = %d, want %d", i, len(block), ref.ContentLength)
		}
	}
}

func assertLazyPrefixReadable(t *testing.T, ref *RecordRef) {
	t.Helper()
	const prefixLimit = 4096
	for name, open := range map[string]func() (io.ReadCloser, error){
		"raw":   ref.OpenRaw,
		"block": ref.OpenBlock,
	} {
		rc, err := open()
		if err != nil {
			t.Fatalf("open %s: %v", name, err)
		}
		_, err = io.CopyN(io.Discard, rc, prefixLimit)
		closeErr := rc.Close()
		if err != nil && !errors.Is(err, io.EOF) {
			t.Fatalf("read %s prefix: %v", name, err)
		}
		if closeErr != nil {
			t.Fatalf("close %s: %v", name, closeErr)
		}
	}
}

func countAccessModes(refs []*RecordRef) map[AccessMode]int {
	counts := make(map[AccessMode]int)
	for _, ref := range refs {
		counts[ref.location.Access]++
	}
	return counts
}

func countIssueCodes(refs []*RecordRef) map[IssueCode]int {
	counts := make(map[IssueCode]int)
	for _, ref := range refs {
		for _, issue := range ref.issues {
			counts[issue.Code]++
		}
	}
	return counts
}

func externalCorpusPaths(t *testing.T, limit int) []string {
	t.Helper()
	seen := make(map[string]bool)
	var paths []string
	add := func(path string) bool {
		if path == "" || seen[path] || !isExternalCorpusFile(path) {
			return false
		}
		seen[path] = true
		paths = append(paths, path)
		return limit > 0 && len(paths) >= limit
	}

	for _, path := range filepath.SplitList(os.Getenv("UNWARC_CORPUS_PATHS")) {
		if add(path) {
			return paths
		}
	}
	if root := os.Getenv("UNWARC_CORPUS_DIR"); root != "" {
		err := filepath.WalkDir(root, func(path string, entry os.DirEntry, err error) error {
			if err != nil {
				return err
			}
			if entry.IsDir() || !isExternalCorpusFile(path) {
				return nil
			}
			if add(path) {
				return filepath.SkipAll
			}
			return nil
		})
		if err != nil {
			t.Fatalf("walk external corpus dir: %v", err)
		}
	}
	return paths
}

func isExternalCorpusFile(path string) bool {
	path = strings.ToLower(path)
	if strings.HasSuffix(path, ".open") {
		return false
	}
	for _, suffix := range []string{".warc", ".warc.gz", ".warc.zst", ".warc.zstd", ".warc.bz2", ".warc.xz"} {
		if strings.HasSuffix(path, suffix) {
			return true
		}
	}
	return false
}

func externalCorpusLimit(t *testing.T) int {
	return readNonNegativeEnvInt(t, "UNWARC_CORPUS_LIMIT", 0)
}

func externalCorpusRecordLimit(t *testing.T) int {
	return readPositiveEnvInt(t, "UNWARC_CORPUS_RECORD_LIMIT", 100)
}

func externalCorpusMaxFileBytes(t *testing.T) int64 {
	return int64(readNonNegativeEnvInt(t, "UNWARC_CORPUS_MAX_FILE_BYTES", 256<<20))
}

func skipOversizedExternalCorpusFile(t *testing.T, path string, maxBytes int64) {
	t.Helper()
	if maxBytes == 0 {
		return
	}
	st, err := os.Stat(path)
	if err != nil {
		t.Fatalf("stat external corpus file: %v", err)
	}
	if st.Size() > maxBytes {
		t.Skipf("external corpus file is %d bytes; set UNWARC_CORPUS_MAX_FILE_BYTES=0 to scan it", st.Size())
	}
}

func readNonNegativeEnvInt(t *testing.T, name string, fallback int) int {
	t.Helper()
	value := os.Getenv(name)
	if value == "" {
		return fallback
	}
	n, err := strconv.Atoi(value)
	if err != nil || n < 0 {
		t.Fatalf("invalid %s %q", name, value)
	}
	return n
}

func readPositiveEnvInt(t *testing.T, name string, fallback int) int {
	t.Helper()
	value := os.Getenv(name)
	if value == "" {
		return fallback
	}
	n, err := strconv.Atoi(value)
	if err != nil || n <= 0 {
		t.Fatalf("invalid %s %q", name, value)
	}
	return n
}
