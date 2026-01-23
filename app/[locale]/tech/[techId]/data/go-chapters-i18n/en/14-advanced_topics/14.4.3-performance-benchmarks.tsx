import React from 'react';

interface Props {
  className?: string;
}

export default function PerformanceBenchmarks({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">14.4.3 Performance Benchmarks</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "strings"
    "testing"
)

func BenchmarkStringConcat(b *testing.B) {
    for i := 0; i < b.N; i++ {
        result := ""
        for j := 0; j < 100; j++ {
            result += "x"
        }
    }
}

func BenchmarkStringBuilder(b *testing.B) {
    for i := 0; i < b.N; i++ {
        var builder strings.Builder
        for j := 0; j < 100; j++ {
            builder.WriteString("x")
        }
        _ = builder.String()
    }
}

func BenchmarkByteSlice(b *testing.B) {
    for i := 0; i < b.N; i++ {
        bytes := make([]byte, 100)
        for j := 0; j < 100; j++ {
            bytes[j] = 'x'
        }
        _ = string(bytes)
    }
}`}</code>
      </pre>
      <p>## 14.5 CGO - Calling C Code</p>

    </div>
  );
}

export const metadata = {
  id: '14-4-3',
  title: 'Performance Benchmarks',
  section: '14.4.3'
};
