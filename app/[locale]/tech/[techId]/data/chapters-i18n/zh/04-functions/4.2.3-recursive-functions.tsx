import React from 'react';

interface Props {
  className?: string;
}

export default function 递归函数({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">4.2.3 递归函数</h3>
      <p>函数可以调用自己：</p>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

// 计算阶乘
func factorial(n int) int {
    if n <= 1 {
        return 1
    }
    return n * factorial(n-1)
}

// 斐波那契数列
func fibonacci(n int) int {
    if n <= 1 {
        return n
    }
    return fibonacci(n-1) + fibonacci(n-2)
}

// 优化的斐波那契（使用记忆化）
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

// 二分查找（递归）
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
    // 阶乘
    fmt.Println("5! =", factorial(5))  // 120

    // 斐波那契
    fmt.Println("Fibonacci(10) =", fibonacci(10))  // 55

    // 优化的斐波那契
    memo := make(map[int]int)
    fmt.Println("Fibonacci(40) =", fibonacciMemo(40, memo))  // 102334155

    // 二分查找
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
  title: '递归函数',
  section: '4.2.3'
};
