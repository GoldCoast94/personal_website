import React from 'react';

interface Props {
  className?: string;
}

export default function 类型断言({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">9.3.1 类型断言</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "os"
)

type TemporaryError interface {
    Temporary() bool
}

func handleError(err error) {
    // 检查特定错误类型
    if pathErr, ok := err.(*os.PathError); ok {
        fmt.Println("Path error:")
        fmt.Println("  Operation:", pathErr.Op)
        fmt.Println("  Path:", pathErr.Path)
        fmt.Println("  Error:", pathErr.Err)
    }

    // 检查是否实现特定接口
    if tempErr, ok := err.(TemporaryError); ok && tempErr.Temporary() {
        fmt.Println("This is a temporary error, retry later")
    }
}

func main() {
    _, err := os.Open("nonexistent.txt")
    if err != nil {
        handleError(err)
    }
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '9-3-1',
  title: '类型断言',
  section: '9.3.1'
};
