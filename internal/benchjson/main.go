package main

import (
	"bufio"
	"encoding/json"
	"flag"
	"fmt"
	"os"
	"sort"
	"strconv"
	"strings"
)

type sample struct {
	name  string
	unit  string
	value float64
}

type result struct {
	Name  string  `json:"name"`
	Unit  string  `json:"unit"`
	Value float64 `json:"value"`
	Extra string  `json:"extra,omitempty"`
}

var metricDirection = map[string]bool{
	"ns/op":     false,
	"B/op":      false,
	"allocs/op": false,
	"MB/s":      true,
}

func main() {
	input := flag.String("input", "benchmark.txt", "Go benchmark output")
	smaller := flag.String("smaller", "benchmark-smaller.json", "smaller-is-better JSON output")
	bigger := flag.String("bigger", "benchmark-bigger.json", "bigger-is-better JSON output")
	flag.Parse()

	samples, err := readSamples(*input)
	if err != nil {
		fatal(err)
	}

	smallerResults, biggerResults := aggregate(samples)
	if err := writeResults(*smaller, smallerResults); err != nil {
		fatal(err)
	}
	if err := writeResults(*bigger, biggerResults); err != nil {
		fatal(err)
	}
}

func readSamples(path string) ([]sample, error) {
	f, err := os.Open(path)
	if err != nil {
		return nil, err
	}
	defer f.Close()

	var samples []sample
	scanner := bufio.NewScanner(f)
	for scanner.Scan() {
		fields := strings.Fields(scanner.Text())
		if len(fields) < 4 || !strings.HasPrefix(fields[0], "Benchmark") {
			continue
		}
		name := trimProcsSuffix(fields[0])
		for i := 2; i+1 < len(fields); i += 2 {
			if _, ok := metricDirection[fields[i+1]]; !ok {
				continue
			}
			value, err := strconv.ParseFloat(fields[i], 64)
			if err != nil {
				return nil, fmt.Errorf("parse %q in %q: %w", fields[i], scanner.Text(), err)
			}
			samples = append(samples, sample{name: name, unit: fields[i+1], value: value})
		}
	}
	if err := scanner.Err(); err != nil {
		return nil, err
	}
	if len(samples) == 0 {
		return nil, fmt.Errorf("no supported benchmark metrics found in %s", path)
	}
	return samples, nil
}

func trimProcsSuffix(name string) string {
	i := strings.LastIndexByte(name, '-')
	if i < 0 || i == len(name)-1 {
		return name
	}
	if _, err := strconv.Atoi(name[i+1:]); err != nil {
		return name
	}
	return name[:i]
}

func aggregate(samples []sample) (smaller, bigger []result) {
	groups := make(map[string][]float64)
	for _, s := range samples {
		groups[s.name+"\x00"+s.unit] = append(groups[s.name+"\x00"+s.unit], s.value)
	}

	keys := make([]string, 0, len(groups))
	for key := range groups {
		keys = append(keys, key)
	}
	sort.Strings(keys)

	for _, key := range keys {
		parts := strings.SplitN(key, "\x00", 2)
		values := groups[key]
		sort.Float64s(values)
		value := median(values)
		r := result{
			Name:  parts[0] + " - " + parts[1],
			Unit:  parts[1],
			Value: value,
			Extra: fmt.Sprintf("median of %d runs; min=%g; max=%g", len(values), values[0], values[len(values)-1]),
		}
		if metricDirection[parts[1]] {
			bigger = append(bigger, r)
		} else {
			smaller = append(smaller, r)
		}
	}
	return smaller, bigger
}

func median(values []float64) float64 {
	mid := len(values) / 2
	if len(values)%2 == 1 {
		return values[mid]
	}
	return (values[mid-1] + values[mid]) / 2
}

func writeResults(path string, results []result) error {
	f, err := os.Create(path)
	if err != nil {
		return err
	}
	defer f.Close()
	encoder := json.NewEncoder(f)
	encoder.SetIndent("", "  ")
	return encoder.Encode(results)
}

func fatal(err error) {
	fmt.Fprintln(os.Stderr, err)
	os.Exit(1)
}
