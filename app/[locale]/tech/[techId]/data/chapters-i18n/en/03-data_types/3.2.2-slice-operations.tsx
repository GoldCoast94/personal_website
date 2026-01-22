import React from 'react';

interface Props {
  className?: string;
}

export default function SliceOperations({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">3.2.2 Slice Operations</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

func main() {
    // Create slice
    slice := []int{1, 2, 3, 4, 5}

    // Access element
    fmt.Println("First element:", slice[0])

    // Modify element
    slice[0] = 10
    fmt.Println("After modification:", slice)

    // Append element
    slice = append(slice, 6)
    fmt.Println("Append one:", slice)

    slice = append(slice, 7, 8, 9)
    fmt.Println("Append multiple:", slice)

    // Append another slice
    slice2 := []int{10, 11, 12}
    slice = append(slice, slice2...)
    fmt.Println("Append slice:", slice)

    // Slice slicing
    fmt.Println("slice[2:5] =", slice[2:5])   // [3 4 5]
    fmt.Println("slice[:3] =", slice[:3])     // [10 2 3]
    fmt.Println("slice[3:] =", slice[3:])     // [4 5 6 7 8 9 10 11 12]
    fmt.Println("slice[:] =", slice[:])       // All elements

    // Copy slice
    slice3 := make([]int, len(slice))
    copy(slice3, slice)
    fmt.Println("Copied slice:", slice3)

    // Delete element (delete element at index 2)
    index := 2
    slice = append(slice[:index], slice[index+1:]...)
    fmt.Println("After deletion:", slice)
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '3-2-2',
  title: 'Slice Operations',
  section: '3.2.2'
};
