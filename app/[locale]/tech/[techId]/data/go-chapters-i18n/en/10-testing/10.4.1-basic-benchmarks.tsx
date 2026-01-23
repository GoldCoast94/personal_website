import React from 'react';

interface Props {
  className?: string;
}

export default function BasicBenchmarks({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">10.4.1 Basic Benchmarks</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "testing"
)

func Fibonacci(n int) int {
    if n < 2 {
        return n
    }
    return Fibonacci(n-1) + Fibonacci(n-2)
}

func BenchmarkFibonacci(b *testing.B) {
    for i := 0; i < b.N; i++ {
        Fibonacci(10)
    }
}

func BenchmarkFibonacci20(b *testing.B) {
    for i := 0; i < b.N; i++ {
        Fibonacci(20)
    }
}`}</code>
      </pre>
      <p>Running benchmarks:</p>

      <pre className="code-block">
        <code className="language-bash">{`go test -bench=.
go test -bench=. -benchmem      # Show memory allocations
go test -bench=. -benchtime=3s  # Run for 3 seconds
go test -bench=Fibonacci20      # Run specific benchmark`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '10-4-1',
  title: 'Basic Benchmarks',
  section: '10.4.1'
};
