import React from 'react';

interface Props {
  className?: string;
}

export default function FactoryPattern({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">5.4.2 Factory Pattern</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

// Interface
type Shape interface {
    Area() float64
    Perimeter() float64
}

// Concrete types
type Circle struct {
    Radius float64
}

func (c Circle) Area() float64 {
    return 3.14159 * c.Radius * c.Radius
}

func (c Circle) Perimeter() float64 {
    return 2 * 3.14159 * c.Radius
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

type Triangle struct {
    A, B, C float64
}

func (t Triangle) Area() float64 {
    s := (t.A + t.B + t.C) / 2
    return (s * (s - t.A) * (s - t.B) * (s - t.C))
}

func (t Triangle) Perimeter() float64 {
    return t.A + t.B + t.C
}

// Factory function
func NewShape(shapeType string, params ...float64) Shape {
    switch shapeType {
    case "circle":
        if len(params) >= 1 {
            return Circle{Radius: params[0]}
        }
    case "rectangle":
        if len(params) >= 2 {
            return Rectangle{Width: params[0], Height: params[1]}
        }
    case "triangle":
        if len(params) >= 3 {
            return Triangle{A: params[0], B: params[1], C: params[2]}
        }
    }
    return nil
}

func main() {
    shapes := []Shape{
        NewShape("circle", 5),
        NewShape("rectangle", 10, 20),
        NewShape("triangle", 3, 4, 5),
    }

    for i, shape := range shapes {
        if shape != nil {
            fmt.Printf("Shape %d:\n", i+1)
            fmt.Printf("  Area: %.2f\n", shape.Area())
            fmt.Printf("  Perimeter: %.2f\n", shape.Perimeter())
        }
    }
}`}</code>
      </pre>
      <p>## 5.5 Method Sets and Interfaces</p>

    </div>
  );
}

export const metadata = {
  id: '5-4-2',
  title: 'Factory Pattern',
  section: '5.4.2'
};
