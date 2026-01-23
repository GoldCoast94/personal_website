import React from 'react';

interface Props {
  className?: string;
}

export default function 基准测试技巧({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">10.4.2 基准测试技巧</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "testing"
)

func BenchmarkSprintfInt(b *testing.B) {
    b.ResetTimer()  // 重置计时器
    for i := 0; i < b.N; i++ {
        fmt.Sprintf("%d", 42)
    }
}

func BenchmarkSprintfString(b *testing.B) {
    for i := 0; i < b.N; i++ {
        fmt.Sprintf("%s", "hello")
    }
}

// 并行基准测试
func BenchmarkParallel(b *testing.B) {
    b.RunParallel(func(pb *testing.PB) {
        for pb.Next() {
            // 测试代码
            Add(2, 3)
        }
    })
}

// 子基准测试
func BenchmarkStringOperations(b *testing.B) {
    b.Run("concat", func(b *testing.B) {
        for i := 0; i < b.N; i++ {
            _ = "hello" + "world"
        }
    })

    b.Run("sprintf", func(b *testing.B) {
        for i := 0; i < b.N; i++ {
            _ = fmt.Sprintf("%s%s", "hello", "world")
        }
    })
}`}</code>
      </pre>
      <p>## 10.5 示例测试</p>

    </div>
  );
}

export const metadata = {
  id: '10-4-2',
  title: '基准测试技巧',
  section: '10.4.2'
};
