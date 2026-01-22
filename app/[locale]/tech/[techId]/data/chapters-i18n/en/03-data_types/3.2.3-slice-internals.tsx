import React from 'react';

interface Props {
  className?: string;
}

export default function SliceInternals({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">3.2.3 Slice Internals</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

func main() {
    // Slices are backed by arrays
    arr := [5]int{1, 2, 3, 4, 5}
    slice1 := arr[1:4]
    slice2 := arr[2:5]

    fmt.Println("Original array:", arr)
    fmt.Println("slice1:", slice1)  // [2 3 4]
    fmt.Println("slice2:", slice2)  // [3 4 5]

    // Modifying slice affects underlying array
    slice1[0] = 20
    fmt.Println("After modifying slice1:")
    fmt.Println("Original array:", arr)      // [1 20 3 4 5]
    fmt.Println("slice1:", slice1)  // [20 3 4]
    fmt.Println("slice2:", slice2)  // [3 4 5]

    // Length and capacity
    fmt.Println("\nLength and capacity:")
    fmt.Printf("slice1: len=%d, cap=%d\n", len(slice1), cap(slice1))
    fmt.Printf("slice2: len=%d, cap=%d\n", len(slice2), cap(slice2))

    // Slice expansion
    fmt.Println("\nSlice expansion:")
    s := make([]int, 0, 3)
    fmt.Printf("Initial: len=%d, cap=%d\n", len(s), cap(s))

    s = append(s, 1, 2, 3)
    fmt.Printf("Append 3: len=%d, cap=%d\n", len(s), cap(s))

    s = append(s, 4)  // Not enough capacity, will expand
    fmt.Printf("Append 1 more: len=%d, cap=%d\n", len(s), cap(s))
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '3-2-3',
  title: 'Slice Internals',
  section: '3.2.3'
};
