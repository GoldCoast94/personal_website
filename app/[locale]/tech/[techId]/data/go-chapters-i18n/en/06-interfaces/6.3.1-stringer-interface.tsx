import React from 'react';

interface Props {
  className?: string;
}

export default function StringerInterface({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">6.3.1 Stringer Interface</h3>
      <p>Implementing the String() method allows you to customize the print format.</p>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

type Person struct {
    Name string
    Age  int
}

// Implement fmt.Stringer interface
func (p Person) String() string {
    return fmt.Sprintf("%s (%d years old)", p.Name, p.Age)
}

type Point struct {
    X, Y int
}

func (p Point) String() string {
    return fmt.Sprintf("Point(%d, %d)", p.X, p.Y)
}

func main() {
    person := Person{Name: "Alice", Age: 30}
    point := Point{X: 10, Y: 20}

    // Automatically calls String() method
    fmt.Println(person)
    fmt.Println(point)

    fmt.Printf("Person: %v\n", person)
    fmt.Printf("Point: %s\n", point)
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '6-3-1',
  title: 'Stringer Interface',
  section: '6.3.1'
};
