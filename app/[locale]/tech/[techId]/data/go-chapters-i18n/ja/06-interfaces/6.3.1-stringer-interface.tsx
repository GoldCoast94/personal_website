import React from 'react';

interface Props {
  className?: string;
}

export default function Stringerインターフェース({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">6.3.1 Stringerインターフェース</h3>
      <p>String()メソッドを実装することで、出力形式をカスタマイズできます。</p>

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
  title: 'Stringerインターフェース',
  section: '6.3.1'
};
