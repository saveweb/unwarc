GO := env -u GOROOT go

.PHONY: verify fmt-check test race vet build lint fuzz-smoke

verify: fmt-check test race vet build lint fuzz-smoke

fmt-check:
	@test -z "$$(gofmt -l .)"

test:
	$(GO) test -count=1 ./...

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
