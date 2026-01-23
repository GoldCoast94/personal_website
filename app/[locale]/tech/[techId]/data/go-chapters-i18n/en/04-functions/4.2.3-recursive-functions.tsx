import React from 'react';

interface Props {
  className?: string;
}

export default function RecursiveFunctions({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">4.2.3 Recursive Functions</h3>
      <p>Functions can call themselves:</p>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

// Calculate factorial
func factorial(n int) int {
    if n <= 1 {
        return 1
    }
    return n * factorial(n-1)
}

// Fibonacci sequence
func fibonacci(n int) int {
    if n <= 1 {
        return n
    }
    return fibonacci(n-1) + fibonacci(n-2)
}

// Optimized Fibonacci (using memoization)
func fibonacciMemo(n int, memo map[int]int) int {
    if n <= 1 {
        return n
    }

    if val, ok := memo[n]; ok {
        return val
    }

    memo[n] = fibonacciMemo(n-1, memo) + fibonacciMemo(n-2, memo)
    return memo[n]
}

// Binary search (recursive)
func binarySearch(arr []int, target, low, high int) int {
    if low > high {
        return -1
    }

    mid := (low + high) / 2
    if arr[mid] == target {
        return mid
    } else if arr[mid] > target {
        return binarySearch(arr, target, low, mid-1)
    } else {
        return binarySearch(arr, target, mid+1, high)
    }
}

func main() {
    // Factorial
    fmt.Println("5! =", factorial(5))  // 120

    // Fibonacci
    fmt.Println("Fibonacci(10) =", fibonacci(10))  // 55

    // Optimized Fibonacci
    memo := make(map[int]int)
    fmt.Println("Fibonacci(40) =", fibonacciMemo(40, memo))  // 102334155

    // Binary search
    arr := []int{1, 3, 5, 7, 9, 11, 13, 15}
    index := binarySearch(arr, 7, 0, len(arr)-1)
    fmt.Println("Index of 7:", index)  // 3
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '4-2-3',
  title: 'Recursive Functions',
  section: '4.2.3'
};
