import React from 'react';

interface Props {
  className?: string;
}

export default function 方法定义({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">5.2.1 方法定义</h3>
      <p>方法是作用在特定类型上的函数。</p>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "math"
)

type Circle struct {
    Radius float64
}

type Rectangle struct {
    Width  float64
    Height float64
}

// Circle的方法（值接收者）
func (c Circle) Area() float64 {
    return math.Pi * c.Radius * c.Radius
}

func (c Circle) Circumference() float64 {
    return 2 * math.Pi * c.Radius
}

// Rectangle的方法（指针接收者）
func (r *Rectangle) Area() float64 {
    return r.Width * r.Height
}

func (r *Rectangle) Scale(factor float64) {
    r.Width *= factor
    r.Height *= factor
}

func main() {
    // 使用Circle的方法
    c := Circle{Radius: 5}
    fmt.Printf("Circle area: %.2f\n", c.Area())
    fmt.Printf("Circle circumference: %.2f\n", c.Circumference())

    // 使用Rectangle的方法
    r := Rectangle{Width: 10, Height: 20}
    fmt.Printf("Rectangle area: %.2f\n", r.Area())

    // 修改Rectangle
    r.Scale(2)
    fmt.Printf("Scaled rectangle: %+v\n", r)
    fmt.Printf("New area: %.2f\n", r.Area())
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '5-2-1',
  title: '方法定义',
  section: '5.2.1'
};
