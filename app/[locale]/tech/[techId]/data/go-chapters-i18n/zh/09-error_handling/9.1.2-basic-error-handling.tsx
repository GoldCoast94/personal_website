import React from 'react';

interface Props {
  className?: string;
}

export default function 基本错误处理({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">9.1.2 基本错误处理</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "errors"
    "fmt"
    "strconv"
)

func divide(a, b float64) (float64, error) {
    if b == 0 {
        return 0, errors.New("division by zero")
    }
    return a / b, nil
}

func main() {
    // 基本错误处理
    result, err := divide(10, 0)
    if err != nil {
        fmt.Println("Error:", err)
        return
    }
    fmt.Println("Result:", result)

    // 成功的情况
    result, err = divide(10, 2)
    if err != nil {
        fmt.Println("Error:", err)
        return
    }
    fmt.Println("Result:", result)

    // 处理标准库错误
    num, err := strconv.Atoi("abc")
    if err != nil {
        fmt.Println("Conversion error:", err)
    } else {
        fmt.Println("Number:", num)
    }
}`}</code>
      </pre>
      <p>## 9.2 创建错误</p>

    </div>
  );
}

export const metadata = {
  id: '9-1-2',
  title: '基本错误处理',
  section: '9.1.2'
};
