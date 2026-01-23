import React from 'react';

interface Props {
  className?: string;
}

export default function 基本的なジェネリクス({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">14.2.1 基本的なジェネリクス</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

// ジェネリック関数
func Print[T any](value T) {
    fmt.Println(value)
}

// ジェネリックスライス操作
func Contains[T comparable](slice []T, item T) bool {
    for _, v := range slice {
        if v == item {
            return true
        }
    }
    return false
}

// ジェネリック最小値関数
func Min[T interface{ ~int | ~float64 }](a, b T) T {
    if a < b {
        return a
    }
    return b
}

func main() {
    // ジェネリック関数を使用
    Print(42)
    Print("Hello")
    Print(3.14)

    // ジェネリックスライス操作
    numbers := []int{1, 2, 3, 4, 5}
    fmt.Println(Contains(numbers, 3))  // true
    fmt.Println(Contains(numbers, 10)) // false

    strings := []string{"apple", "banana", "cherry"}
    fmt.Println(Contains(strings, "banana"))  // true

    // 最小値
    fmt.Println(Min(10, 20))     // 10
    fmt.Println(Min(3.14, 2.71)) // 2.71
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '14-2-1',
  title: '基本的なジェネリクス',
  section: '14.2.1'
};
