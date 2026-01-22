import React from 'react';

interface Props {
  className?: string;
}

export default function 基本基准测试({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">10.4.1 基本基准测试</h3>

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
      <p>运行基准测试：</p>

      <pre className="code-block">
        <code className="language-bash">{`go test -bench=.
go test -bench=. -benchmem      # 显示内存分配
go test -bench=. -benchtime=3s  # 运行3秒
go test -bench=Fibonacci20      # 运行特定基准测试`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '10-4-1',
  title: '基本基准测试',
  section: '10.4.1'
};
