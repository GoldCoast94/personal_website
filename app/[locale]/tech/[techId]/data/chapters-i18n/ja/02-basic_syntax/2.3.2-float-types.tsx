import React from 'react';

interface Props {
  className?: string;
}

export default function 浮動小数点型({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">2.3.2 浮動小数点型</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "math"
)

func main() {
    var f32 float32 = 3.14
    var f64 float64 = 3.141592653589793

    // 科学的記数法
    var e1 = 1.23e4   // 12300
    var e2 = 1.23e-4  // 0.000123

    // 特殊値
    var inf = math.Inf(1)    // 正の無限大
    var negInf = math.Inf(-1)  // 負の無限大
    var nan = math.NaN()     // NaN (Not a Number)

    fmt.Printf("float32: %f\n", f32)
    fmt.Printf("float64: %.15f\n", f64)
    fmt.Printf("科学的記数法: %e, %e\n", e1, e2)
    fmt.Printf("特殊値: %v, %v, %v\n", inf, negInf, nan)

    // 浮動小数点数の比較
    if math.Abs(f32-3.14) < 1e-6 {
        fmt.Println("f32 は約 3.14 です")
    }
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '2-3-2',
  title: '浮動小数点型',
  section: '2.3.2'
};
