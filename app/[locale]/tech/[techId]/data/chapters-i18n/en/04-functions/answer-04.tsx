import React from 'react';

interface Props {
  className?: string;
}

export default function Answer04({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">Exercise 3 Answer</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

// Map mapping function
func Map(slice []int, fn func(int) int) []int {
    result := make([]int, len(slice))
    for i, v := range slice {
        result[i] = fn(v)
    }
    return result
}

// Filter filtering function
func Filter(slice []int, fn func(int) bool) []int {
    result := make([]int, 0)
    for _, v := range slice {
        if fn(v) {
            result = append(result, v)
        }
    }
    return result
}

// Reduce reduction function
func Reduce(slice []int, initial int, fn func(int, int) int) int {
    result := initial
    for _, v := range slice {
        result = fn(result, v)
    }
    return result
}

func main() {
    numbers := []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}

    // Test Map: multiply all numbers by 2
    doubled := Map(numbers, func(n int) int {
        return n * 2
    })
    fmt.Println("Doubled:", doubled)

    // Test Filter: filter even numbers
    evens := Filter(numbers, func(n int) bool {
        return n%2 == 0
    })
    fmt.Println("Evens:", evens)

    // Test Reduce: sum
    sum := Reduce(numbers, 0, func(acc, n int) int {
        return acc + n
    })
    fmt.Println("Sum:", sum)

    // Combined usage: multiply all even numbers by 2 and then sum
    result := Reduce(
        Map(
            Filter(numbers, func(n int) bool {
                return n%2 == 0
            }),
            func(n int) int {
                return n * 2
            },
        ),
        0,
        func(acc, n int) int {
            return acc + n
        },
    )
    fmt.Println("Even numbers * 2, then sum:", result)

    // Clearer step-by-step version
    filtered := Filter(numbers, func(n int) bool { return n%2 == 0 })
    fmt.Println("Step 1 - Filtered:", filtered)

    mapped := Map(filtered, func(n int) int { return n * 2 })
    fmt.Println("Step 2 - Mapped:", mapped)

    reduced := Reduce(mapped, 0, func(acc, n int) int { return acc + n })
    fmt.Println("Step 3 - Reduced:", reduced)
}`}</code>
      </pre>

      <ul>
        <li>**Output:**</li>
      </ul>

      <pre className="code-block">
        <code className="language-go">{`Doubled: [2 4 6 8 10 12 14 16 18 20]
Evens: [2 4 6 8 10]
Sum: 55
Even numbers * 2, then sum: 60
Step 1 - Filtered: [2 4 6 8 10]
Step 2 - Mapped: [4 8 12 16 20]
Step 3 - Reduced: 60`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: 'Exercise 3 Answer',
  section: '0'
};
