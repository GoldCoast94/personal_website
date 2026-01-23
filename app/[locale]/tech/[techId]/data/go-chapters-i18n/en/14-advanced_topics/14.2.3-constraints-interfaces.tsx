import React from 'react';

interface Props {
  className?: string;
}

export default function ConstraintsAndInterfaces({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">14.2.3 Constraints and Interfaces</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

// Define constraints
type Numeric interface {
    ~int | ~int64 | ~float32 | ~float64
}

type Ordered interface {
    ~int | ~int64 | ~float32 | ~float64 | ~string
}

// Generic sum
func Sum[T Numeric](numbers []T) T {
    var sum T
    for _, n := range numbers {
        sum += n
    }
    return sum
}

// Generic max
func Max[T Ordered](a, b T) T {
    if a > b {
        return a
    }
    return b
}

// Generic sorting
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
    // Integer sum
    intSum := Sum([]int{1, 2, 3, 4, 5})
    fmt.Println("Int sum:", intSum)

    // Float sum
    floatSum := Sum([]float64{1.1, 2.2, 3.3})
    fmt.Println("Float sum:", floatSum)

    // Maximum value
    fmt.Println("Max int:", Max(10, 20))
    fmt.Println("Max string:", Max("apple", "banana"))

    // Sorting
    numbers := []int{5, 2, 8, 1, 9}
    BubbleSort(numbers)
    fmt.Println("Sorted:", numbers)
}`}</code>
      </pre>
      <p>## 14.3 Context Package</p>

    </div>
  );
}

export const metadata = {
  id: '14-2-3',
  title: 'Constraints and Interfaces',
  section: '14.2.3'
};
