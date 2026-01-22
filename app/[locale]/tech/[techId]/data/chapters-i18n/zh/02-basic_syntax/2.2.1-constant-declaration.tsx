import React from 'react';

interface Props {
  className?: string;
}

export default function 常量声明({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">2.2.1 常量声明</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

func main() {
    // 单个常量
    const PI = 3.14159

    // 批量声明
    const (
        StatusOK    = 200
        StatusError = 500
    )

    // 类型化常量
    const Width int = 100
    const Height int = 200

    // 多个常量
    const a, b, c = 1, 2, 3

    fmt.Println(PI, StatusOK, StatusError, Width, Height, a, b, c)
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '2-2-1',
  title: '常量声明',
  section: '2.2.1'
};
