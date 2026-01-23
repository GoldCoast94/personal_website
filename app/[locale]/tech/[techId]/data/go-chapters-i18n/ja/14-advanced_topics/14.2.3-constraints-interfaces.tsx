import React from 'react';

interface Props {
  className?: string;
}

export default function 制約とインターフェース({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">14.2.3 制約とインターフェース</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

// 制約を定義
type Numeric interface {
    ~int | ~int64 | ~float32 | ~float64
}

type Ordered interface {
    ~int | ~int64 | ~float32 | ~float64 | ~string
}

// ジェネリック合計
func Sum[T Numeric](numbers []T) T {
    var sum T
    for _, n := range numbers {
        sum += n
    }
    return sum
}

// ジェネリック最大値
func Max[T Ordered](a, b T) T {
    if a > b {
        return a
    }
    return b
}

// ジェネリックソート
func BubbleSort[T Ordered](slice []T) {
    n := len(slice)
    for i := 0; i < n-1; i++ {
        for j := 0; j < n-i-1; j++ {
            if slice[j] > slice[j+1] {
                slice[j], slice[j+1] = slice[j+1], slice[j]
            }
        }
    }
}

func main() {
    // 整数の合計
    intSum := Sum([]int{1, 2, 3, 4, 5})
    fmt.Println("Int sum:", intSum)

    // 浮動小数点数の合計
    floatSum := Sum([]float64{1.1, 2.2, 3.3})
    fmt.Println("Float sum:", floatSum)

    // 最大値
    fmt.Println("Max int:", Max(10, 20))
    fmt.Println("Max string:", Max("apple", "banana"))

    // ソート
    numbers := []int{5, 2, 8, 1, 9}
    BubbleSort(numbers)
    fmt.Println("Sorted:", numbers)
}`}</code>
      </pre>
      <p>## 14.3 Contextパッケージ</p>

    </div>
  );
}

export const metadata = {
  id: '14-2-3',
  title: '制約とインターフェース',
  section: '14.2.3'
};
