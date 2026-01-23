import React from 'react';

interface Props {
  className?: string;
}

export default function インターフェースのポリモーフィズム({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">6.2.2 インターフェースのポリモーフィズム</h3>
      <p></p>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "math"
)

type Shape interface {
    Area() float64
    Perimeter() float64
}

type Circle struct {
    Radius float64
}

func (c Circle) Area() float64 {
    return math.Pi * c.Radius * c.Radius
}

func (c Circle) Perimeter() float64 {
    return 2 * math.Pi * c.Radius
}

type Rectangle struct {
    Width, Height float64
}

func (r Rectangle) Area() float64 {
    return r.Width * r.Height
}

func (r Rectangle) Perimeter() float64 {
    return 2 * (r.Width + r.Height)
}

// Polymorphic function
func PrintShapeInfo(s Shape) {
    fmt.Printf("Type: %T\n", s)
    fmt.Printf("Area: %.2f\n", s.Area())
    fmt.Printf("Perimeter: %.2f\n", s.Perimeter())
    fmt.Println()
}

func TotalArea(shapes []Shape) float64 {
    total := 0.0
    for _, shape := range shapes {
        total += shape.Area()
    }
    return total
}

func main() {
    circle := Circle{Radius: 5}
    rectangle := Rectangle{Width: 10, Height: 20}

    // Polymorphic calls
    PrintShapeInfo(circle)
    PrintShapeInfo(rectangle)

    // Storing different types of Shape
    shapes := []Shape{
        Circle{Radius: 3},
        Rectangle{Width: 4, Height: 5},
        Circle{Radius: 7},
    }

    fmt.Printf("Total area: %.2f\n", TotalArea(shapes))
}`}</code>
      </pre>

      <p>## 6.3 一般的なインターフェース</p>

    </div>
  );
}

export const metadata = {
  id: '6-2-2',
  title: 'インターフェースのポリモーフィズム',
  section: '6.2.2'
};
