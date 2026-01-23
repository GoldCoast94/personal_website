import React from 'react';

interface Props {
  className?: string;
}

export default function ArrayDefinition({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">3.1.1 Array Definition</h3>
      <p>An array is a sequence of elements of the same type with a fixed length.</p>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

func main() {
    // Method 1: Declare then assign
    var arr1 [5]int
    arr1[0] = 1
    arr1[1] = 2

    // Method 2: Declare and initialize
    var arr2 = [5]int{1, 2, 3, 4, 5}

    // Method 3: Auto-infer length
    arr3 := [...]int{1, 2, 3, 4, 5, 6}

    // Method 4: Initialize with specific indices
    arr4 := [5]int{0: 10, 2: 30, 4: 50}

    fmt.Println("arr1:", arr1)  // [1 2 0 0 0]
    fmt.Println("arr2:", arr2)  // [1 2 3 4 5]
    fmt.Println("arr3:", arr3)  // [1 2 3 4 5 6]
    fmt.Println("arr4:", arr4)  // [10 0 30 0 50]
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '3-1-1',
  title: 'Array Definition',
  section: '3.1.1'
};
