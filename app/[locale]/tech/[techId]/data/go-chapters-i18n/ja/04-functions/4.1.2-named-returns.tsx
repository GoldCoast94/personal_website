import React from 'react';

interface Props {
  className?: string;
}

export default function 名前付き戻り値({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">4.1.2 名前付き戻り値</h3>
      <p>Goは戻り値に名前を付けることをサポートしています。名前を付けると、戻り値は関数の先頭で定義された変数として扱われます：</p>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

// 名前付き戻り値
func calculate(a, b int) (sum int, diff int) {
    sum = a + b
    diff = a - b
    return  // 裸のreturn、sumとdiffを自動的に返す
}

// 名前付き戻り値は関数内で変更できる
func divide(dividend, divisor int) (result int, err error) {
    if divisor == 0 {
        err = fmt.Errorf("division by zero")
        return
    }
    result = dividend / divisor
    return
}

func main() {
    sum, diff := calculate(10, 3)
    fmt.Printf("Sum: %d, Diff: %d\n", sum, diff)

    res, err := divide(10, 2)
    if err != nil {
        fmt.Println("Error:", err)
    } else {
        fmt.Println("Result:", res)
    }
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '4-1-2',
  title: '名前付き戻り値',
  section: '4.1.2'
};
