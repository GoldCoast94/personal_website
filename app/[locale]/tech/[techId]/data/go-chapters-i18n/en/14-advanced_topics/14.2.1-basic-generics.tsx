import React from 'react';

interface Props {
  className?: string;
}

export default function BasicGenerics({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">14.2.1 Basic Generics</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

// Generic function
func Print[T any](value T) {
    fmt.Println(value)
}

// Generic slice operations
func Contains[T comparable](slice []T, item T) bool {
    for _, v := range slice {
        if v == item {
            return true
        }
    }
    return false
}

// Generic minimum function
func Min[T interface{ ~int | ~float64 }](a, b T) T {
    if a < b {
        return a
    }
    return b
}

func main() {
    // Using generic functions
    Print(42)
    Print("Hello")
    Print(3.14)

    // Generic slice operations
    numbers := []int{1, 2, 3, 4, 5}
    fmt.Println(Contains(numbers, 3))  // true
    fmt.Println(Contains(numbers, 10)) // false

    strings := []string{"apple", "banana", "cherry"}
    fmt.Println(Contains(strings, "banana"))  // true

    // Minimum value
    fmt.Println(Min(10, 20))     // 10
    fmt.Println(Min(3.14, 2.71)) // 2.71
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '14-2-1',
  title: 'Basic Generics',
  section: '14.2.1'
};
