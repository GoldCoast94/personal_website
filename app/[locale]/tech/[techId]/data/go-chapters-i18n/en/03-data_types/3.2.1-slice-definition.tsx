import React from 'react';

interface Props {
  className?: string;
}

export default function SliceDefinition({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">3.2.1 Slice Definition</h3>
      <p>Slices are dynamic arrays and the most commonly used data structure in Go.</p>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

func main() {
    // Method 1: Direct declaration
    var slice1 []int
    fmt.Println("slice1:", slice1, "length:", len(slice1), "capacity:", cap(slice1))

    // Method 2: Create using make
    slice2 := make([]int, 5)  // length is 5, capacity is 5
    fmt.Println("slice2:", slice2)

    slice3 := make([]int, 5, 10)  // length is 5, capacity is 10
    fmt.Println("slice3:", slice3, "length:", len(slice3), "capacity:", cap(slice3))

    // Method 3: Literal initialization
    slice4 := []int{1, 2, 3, 4, 5}
    fmt.Println("slice4:", slice4)

    // Method 4: Create from array
    arr := [5]int{1, 2, 3, 4, 5}
    slice5 := arr[1:4]  // Extract elements from index 1 to 3
    fmt.Println("slice5:", slice5)
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '3-2-1',
  title: 'Slice Definition',
  section: '3.2.1'
};
