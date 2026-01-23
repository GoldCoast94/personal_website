import React from 'react';

interface Props {
  className?: string;
}

export default function 命名返回值({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">4.1.2 命名返回值</h3>
      <p>Go支持给返回值命名，命名后的返回值会被视为函数顶部定义的变量：</p>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

// 命名返回值
func calculate(a, b int) (sum int, diff int) {
    sum = a + b
    diff = a - b
    return  // 裸返回，自动返回sum和diff
}

// 命名返回值可以在函数中被修改
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
  title: '命名返回值',
  section: '4.1.2'
};
