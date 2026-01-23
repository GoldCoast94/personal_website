import React from 'react';

interface Props {
  className?: string;
}

export default function ArrayAsParameters({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">3.1.4 Array as Function Parameters</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

// Array as parameter (pass by value)
func modifyArray(arr [5]int) {
    arr[0] = 100
    fmt.Println("Inside function:", arr)
}

// Pass array using pointer
func modifyArrayPtr(arr *[5]int) {
    arr[0] = 100
    fmt.Println("Inside function:", arr)
}

func main() {
    arr := [5]int{1, 2, 3, 4, 5}

    fmt.Println("Original array:", arr)
    modifyArray(arr)
    fmt.Println("After call:", arr)  // Unchanged

    fmt.Println("\nUsing pointer:")
    modifyArrayPtr(&arr)
    fmt.Println("After call:", arr)  // Changed
}`}</code>
      </pre>
      <p>## 3.2 Slice</p>

    </div>
  );
}

export const metadata = {
  id: '3-1-4',
  title: 'Array as Function Parameters',
  section: '3.1.4'
};
