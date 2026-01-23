import React from 'react';

interface Props {
  className?: string;
}

export default function StructPointers({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">5.1.2 Struct Pointers</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

type Point struct {
    X, Y int
}

func main() {
    // Method 1: Using new
    p1 := new(Point)
    p1.X = 10
    p1.Y = 20
    fmt.Println(p1)  // &{10 20}

    // Method 2: Using & operator
    p2 := &Point{X: 30, Y: 40}
    fmt.Println(p2)  // &{30 40}

    // Go automatically dereferences
    fmt.Println(p2.X)  // Equivalent to (*p2).X

    // Modify values
    p2.X = 50
    fmt.Println(p2)  // &{50 40}

    // Struct comparison
    p3 := Point{X: 10, Y: 20}
    p4 := Point{X: 10, Y: 20}
    fmt.Println(p3 == p4)  // true (all fields are equal)

    // Pointer comparison
    fmt.Println(p1 == p2)  // false (different pointers)
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '5-1-2',
  title: 'Struct Pointers',
  section: '5.1.2'
};
