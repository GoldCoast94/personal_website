import React from 'react';

interface Props {
  className?: string;
}

export default function ArrayOperations({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">3.1.2 Array Operations</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

func main() {
    arr := [5]int{1, 2, 3, 4, 5}

    // Access elements
    fmt.Println("First element:", arr[0])
    fmt.Println("Last element:", arr[len(arr)-1])

    // Modify elements
    arr[2] = 30
    fmt.Println("After modification:", arr)

    // Array length
    fmt.Println("Array length:", len(arr))

    // Iterate over array
    fmt.Println("Method 1: Using index")
    for i := 0; i < len(arr); i++ {
        fmt.Printf("arr[%d] = %d\n", i, arr[i])
    }

    fmt.Println("Method 2: Using range")
    for index, value := range arr {
        fmt.Printf("Index:%d, Value:%d\n", index, value)
    }

    // Only values
    fmt.Println("Iterate values only:")
    for _, value := range arr {
        fmt.Println(value)
    }
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '3-1-2',
  title: 'Array Operations',
  section: '3.1.2'
};
