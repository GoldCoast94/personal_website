import React from 'react';

interface Props {
  className?: string;
}

export default function パイプラインパターン({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">7.3.2 パイプラインパターン</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

// ジェネレーター
func generator(nums ...int) <-chan int {
    out := make(chan int)
    go func() {
        for _, n := range nums {
            out <- n
        }
        close(out)
    }()
    return out
}

// 平方
func square(in <-chan int) <-chan int {
    out := make(chan int)
    go func() {
        for n := range in {
            out <- n * n
        }
        close(out)
    }()
    return out
}

// 偶数をフィルター
func filterEven(in <-chan int) <-chan int {
    out := make(chan int)
    go func() {
        for n := range in {
            if n%2 == 0 {
                out <- n
            }
        }
        close(out)
    }()
    return out
}

func main() {
    // パイプラインを構築
    nums := generator(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
    squared := square(nums)
    evens := filterEven(squared)

    // 結果を消費
    for result := range evens {
        fmt.Println(result)
    }
}
`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '7.3.2',
  title: 'パイプラインパターン',
  section: '7.3.2'
};
