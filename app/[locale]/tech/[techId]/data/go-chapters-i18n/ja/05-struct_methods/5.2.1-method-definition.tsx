import React from 'react';

interface Props {
  className?: string;
}

export default function メソッド定義({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">5.2.1 メソッド定義</h3>
      <p>メソッドは特定の型に作用する関数です。</p>

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

// Circleのメソッド（値レシーバ）
func (c Circle) Area() float64 {
    return math.Pi * c.Radius * c.Radius
}

func (c Circle) Circumference() float64 {
    return 2 * math.Pi * c.Radius
}

// Rectangleのメソッド（ポインタレシーバ）
func (r *Rectangle) Area() float64 {
    return r.Width * r.Height
}

func (r *Rectangle) Scale(factor float64) {
    r.Width *= factor
    r.Height *= factor
}

func main() {
    // Circleのメソッドを使用
    c := Circle{Radius: 5}
    fmt.Printf("Circle area: %.2f\n", c.Area())
    fmt.Printf("Circle circumference: %.2f\n", c.Circumference())

    // Rectangleのメソッドを使用
    r := Rectangle{Width: 10, Height: 20}
    fmt.Printf("Rectangle area: %.2f\n", r.Area())

    // Rectangleを変更
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
  title: 'メソッド定義',
  section: '5.2.1'
};
