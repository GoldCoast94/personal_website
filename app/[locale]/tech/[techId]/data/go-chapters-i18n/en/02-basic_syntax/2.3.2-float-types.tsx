import React from 'react';

interface Props {
  className?: string;
}

export default function FloatTypes({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">2.3.2 Float Types</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "math"
)

func main() {
    var f32 float32 = 3.14
    var f64 float64 = 3.141592653589793

    // Scientific notation
    var e1 = 1.23e4   // 12300
    var e2 = 1.23e-4  // 0.000123

    // Special values
    var inf = math.Inf(1)    // Positive infinity
    var negInf = math.Inf(-1)  // Negative infinity
    var nan = math.NaN()     // NaN (Not a Number)

    fmt.Printf("float32: %f\n", f32)
    fmt.Printf("float64: %.15f\n", f64)
    fmt.Printf("Scientific notation: %e, %e\n", e1, e2)
    fmt.Printf("Special values: %v, %v, %v\n", inf, negInf, nan)

    // Float comparison
    if math.Abs(f32-3.14) < 1e-6 {
        fmt.Println("f32 is approximately equal to 3.14")
    }
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '2-3-2',
  title: 'Float Types',
  section: '2.3.2'
};
