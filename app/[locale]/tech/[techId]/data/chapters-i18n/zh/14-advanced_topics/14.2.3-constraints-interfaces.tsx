import React from 'react';

interface Props {
  className?: string;
}

export default function 约束和接口({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">14.2.3 约束和接口</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

// 定义约束
type Numeric interface {
    ~int | ~int64 | ~float32 | ~float64
}

type Ordered interface {
    ~int | ~int64 | ~float32 | ~float64 | ~string
}

// 泛型求和
func Sum[T Numeric](numbers []T) T {
    var sum T
    for _, n := range numbers {
        sum += n
    }
    return sum
}

// 泛型最大值
func Max[T Ordered](a, b T) T {
    if a > b {
        return a
    }
    return b
}

// 泛型排序
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
    // 整数求和
    intSum := Sum([]int{1, 2, 3, 4, 5})
    fmt.Println("Int sum:", intSum)

    // 浮点数求和
    floatSum := Sum([]float64{1.1, 2.2, 3.3})
    fmt.Println("Float sum:", floatSum)

    // 最大值
    fmt.Println("Max int:", Max(10, 20))
    fmt.Println("Max string:", Max("apple", "banana"))

    // 排序
    numbers := []int{5, 2, 8, 1, 9}
    BubbleSort(numbers)
    fmt.Println("Sorted:", numbers)
}`}</code>
      </pre>
      <p>## 14.3 Context包</p>

    </div>
  );
}

export const metadata = {
  id: '14-2-3',
  title: '约束和接口',
  section: '14.2.3'
};
