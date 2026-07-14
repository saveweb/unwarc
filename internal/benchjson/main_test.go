package main

import "testing"

func TestAggregateUsesMedianAndSeparatesDirections(t *testing.T) {
	samples := []sample{
		{name: "BenchmarkA-3", unit: "ns/op", value: 300},
		{name: "BenchmarkA-3", unit: "ns/op", value: 100},
		{name: "BenchmarkA-3", unit: "ns/op", value: 200},
		{name: "BenchmarkA-3", unit: "MB/s", value: 10},
		{name: "BenchmarkA-3", unit: "MB/s", value: 30},
		{name: "BenchmarkA-3", unit: "MB/s", value: 20},
	}

	smaller, bigger := aggregate(samples)
	if len(smaller) != 1 || smaller[0].Value != 200 {
		t.Fatalf("smaller results = %#v", smaller)
	}
	if len(bigger) != 1 || bigger[0].Value != 20 {
		t.Fatalf("bigger results = %#v", bigger)
	}
}

func TestMedianEvenSampleCount(t *testing.T) {
	values := []float64{1, 2, 3, 4}
	if got := median(values); got != 2.5 {
		t.Fatalf("median() = %v, want 2.5", got)
	}
}

func TestTrimProcsSuffix(t *testing.T) {
	if got := trimProcsSuffix("BenchmarkCorpus/case-3"); got != "BenchmarkCorpus/case" {
		t.Fatalf("trimProcsSuffix() = %q", got)
	}
	if got := trimProcsSuffix("BenchmarkCorpus/case-name"); got != "BenchmarkCorpus/case-name" {
		t.Fatalf("trimProcsSuffix() = %q", got)
	}
}
