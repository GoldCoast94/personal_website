import React from 'react';

interface Props {
  className?: string;
}

export default function Stringer接口({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">6.3.1 Stringer接口</h3>
      <p>实现String()方法可以自定义打印格式。</p>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

type Person struct {
    Name string
    Age  int
}

// 实现fmt.Stringer接口
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

    // 自动调用String()方法
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
  title: 'Stringer接口',
  section: '6.3.1'
};
