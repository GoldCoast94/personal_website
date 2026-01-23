import React from 'react';

interface Props {
  className?: string;
}

export default function 練習3解答({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 練習3解答</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "math"
)

type Shape interface {
    Area() float64
    Perimeter() float64
    Name() string
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

func (c Circle) Name() string {
    return "Circle"
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

func (r Rectangle) Name() string {
    return "Rectangle"
}

type Triangle struct {
    A, B, C float64
}

func (t Triangle) Area() float64 {
    s := (t.A + t.B + t.C) / 2
    return math.Sqrt(s * (s - t.A) * (s - t.B) * (s - t.C))
}

func (t Triangle) Perimeter() float64 {
    return t.A + t.B + t.C
}

func (t Triangle) Name() string {
    return "Triangle"
}

type Square struct {
    Side float64
}

func (s Square) Area() float64 {
    return s.Side * s.Side
}

func (s Square) Perimeter() float64 {
    return 4 * s.Side
}

func (s Square) Name() string {
    return "Square"
}

type ShapeCollection struct {
    shapes []Shape
}

func (sc *ShapeCollection) Add(shape Shape) {
    sc.shapes = append(sc.shapes, shape)
}

func (sc *ShapeCollection) TotalArea() float64 {
    total := 0.0
    for _, shape := range sc.shapes {
        total += shape.Area()
    }
    return total
}

func (sc *ShapeCollection) AverageArea() float64 {
    if len(sc.shapes) == 0 {
        return 0
    }
    return sc.TotalArea() / float64(len(sc.shapes))
}

func (sc *ShapeCollection) Largest() Shape {
    if len(sc.shapes) == 0 {
        return nil
    }

    largest := sc.shapes[0]
    maxArea := largest.Area()

    for _, shape := range sc.shapes[1:] {
        area := shape.Area()
        if area > maxArea {
            maxArea = area
            largest = shape
        }
    }

    return largest
}

func (sc *ShapeCollection) PrintAll() {
    fmt.Println("All shapes:")
    for i, shape := range sc.shapes {
        fmt.Printf("%d. %s - Area: %.2f, Perimeter: %.2f\n",
            i+1, shape.Name(), shape.Area(), shape.Perimeter())
    }
}

func main() {
    collection := &ShapeCollection{}

    collection.Add(Circle{Radius: 5})
    collection.Add(Rectangle{Width: 10, Height: 20})
    collection.Add(Triangle{A: 3, B: 4, C: 5})
    collection.Add(Square{Side: 8})

    collection.PrintAll()

    fmt.Printf("\nTotal Area: %.2f\n", collection.TotalArea())
    fmt.Printf("Average Area: %.2f\n", collection.AverageArea())

    largest := collection.Largest()
    if largest != nil {
        fmt.Printf("Largest Shape: %s with area %.2f\n",
            largest.Name(), largest.Area())
    }
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '練習3解答',
  section: '0'
};
