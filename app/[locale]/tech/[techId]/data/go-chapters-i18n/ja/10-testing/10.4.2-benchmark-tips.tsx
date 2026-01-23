import React from 'react';

interface Props {
  className?: string;
}

export default function ベンチマークのコツ({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">10.4.2 ベンチマークのコツ</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "testing"
)

func BenchmarkSprintfInt(b *testing.B) {
    b.ResetTimer()  // タイマーをリセット
    for i := 0; i < b.N; i++ {
        fmt.Sprintf("%d", 42)
    }
}

func BenchmarkSprintfString(b *testing.B) {
    for i := 0; i < b.N; i++ {
        fmt.Sprintf("%s", "hello")
    }
}

// 並列ベンチマーク
func BenchmarkParallel(b *testing.B) {
    b.RunParallel(func(pb *testing.PB) {
        for pb.Next() {
            // テストコード
            Add(2, 3)
        }
    })
}

// サブベンチマーク
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
      <p>## 10.5 サンプルテスト</p>

    </div>
  );
}

export const metadata = {
  id: '10-4-2',
  title: 'ベンチマークのコツ',
  section: '10.4.2'
};
