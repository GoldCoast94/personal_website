import React from 'react';

interface Props {
  className?: string;
}

export default function PointerOperations({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">14.6.1 Pointer Operations</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "unsafe"
)

func main() {
    var x int64 = 10

    // Get pointer
    ptr := unsafe.Pointer(&x)

    // Convert to different type pointer
    intPtr := (*int64)(ptr)

    // Modify value
    *intPtr = 20

    fmt.Println("x:", x)  // x: 20

    // Get size
    fmt.Println("Size of int64:", unsafe.Sizeof(x))

    // Struct field offset
    type Person struct {
        Name string
        Age  int
    }

    person := Person{Name: "Alice", Age: 30}
    nameOffset := unsafe.Offsetof(person.Name)
    ageOffset := unsafe.Offsetof(person.Age)

    fmt.Printf("Name offset: %d, Age offset: %d\n", nameOffset, ageOffset)
}`}</code>
      </pre>
      <p>## 14.7 Exercises</p>

    </div>
  );
}

export const metadata = {
  id: '14-6-1',
  title: 'Pointer Operations',
  section: '14.6.1'
};
