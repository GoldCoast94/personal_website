import React from 'react';

interface Props {
  className?: string;
}

export default function SliceAsParameters({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">3.2.4 Slice as Function Parameters</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

// Slice as parameter (pass by reference)
func modifySlice(s []int) {
    s[0] = 100
    fmt.Println("Inside function:", s)
}

// Append element (return new slice)
func appendSlice(s []int, value int) []int {
    s = append(s, value)
    return s
}

func main() {
    slice := []int{1, 2, 3, 4, 5}

    fmt.Println("Original slice:", slice)
    modifySlice(slice)
    fmt.Println("After call:", slice)  // Changed

    fmt.Println("\nAppend element:")
    slice = appendSlice(slice, 6)
    fmt.Println("After append:", slice)
}`}</code>
      </pre>
      <p>## 3.3 Maps</p>

    </div>
  );
}

export const metadata = {
  id: '3-2-4',
  title: 'Slice as Function Parameters',
  section: '3.2.4'
};
