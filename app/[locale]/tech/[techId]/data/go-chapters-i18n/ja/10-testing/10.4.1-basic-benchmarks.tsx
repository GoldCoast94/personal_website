import React from 'react';

interface Props {
  className?: string;
}

export default function 基本的なベンチマーク({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">10.4.1 基本的なベンチマーク</h3>

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
      <p>ベンチマークの実行：</p>

      <pre className="code-block">
        <code className="language-bash">{`go test -bench=.
go test -bench=. -benchmem      # メモリ割り当てを表示
go test -bench=. -benchtime=3s  # 3秒間実行
go test -bench=Fibonacci20      # 特定のベンチマークを実行`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '10-4-1',
  title: '基本的なベンチマーク',
  section: '10.4.1'
};
