GO := env -u GOROOT go
CORPUS_BENCH_FLAGS := -run '^$$' -bench '^BenchmarkCorpusWARC' -benchmem -benchtime=500ms -count=7 -cpu=1

.PHONY: verify fmt-check test test-native test-native-gzip test-native-zstd test-native-all bench-corpus bench-corpus-native bench-corpus-all race vet build lint fuzz-smoke

verify: fmt-check test race vet build lint fuzz-smoke

fmt-check:
	@test -z "$$(gofmt -l .)"

test:
	$(GO) test -count=1 ./...

test-native: test-native-gzip test-native-zstd

test-native-gzip:
	$(GO) test -tags='unwarc_libz' -count=1 ./...

test-native-zstd:
	$(GO) test -tags='unwarc_libzstd' -count=1 ./...

test-native-all:
	$(GO) test -tags='unwarc_libz unwarc_libzstd' -count=1 ./...

bench-corpus:
	$(GO) test $(CORPUS_BENCH_FLAGS) .

bench-corpus-native:
	$(GO) test -tags='unwarc_libz unwarc_libzstd' $(CORPUS_BENCH_FLAGS) .

bench-corpus-all: bench-corpus bench-corpus-native

race:
	$(GO) test -race -timeout 30s -count=1 ./...

vet:
	$(GO) vet ./...

build:
	$(GO) build ./...

lint:
	@if command -v golangci-lint >/dev/null 2>&1; then env -u GOROOT golangci-lint run; else echo "golangci-lint not found; skipping"; fi

fuzz-smoke:
	$(GO) test -run '^$$' -fuzz=FuzzScannerInputs -fuzztime=5s .
