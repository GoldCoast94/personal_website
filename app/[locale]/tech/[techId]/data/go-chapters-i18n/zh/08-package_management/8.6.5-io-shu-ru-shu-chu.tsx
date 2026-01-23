import React from 'react';

interface Props {
  className?: string;
}

export default function Io输入输出({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">8.6.5 io - 输入输出</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "io"
    "os"
    "strings"
)

func main() {
    // Reader接口
    reader := strings.NewReader("Hello, Reader!")
    buf := make([]byte, 5)
    for {
        n, err := reader.Read(buf)
        if err == io.EOF {
            break
        }
        fmt.Print(string(buf[:n]))
    }
    fmt.Println()

    // Writer接口
    writer := os.Stdout
    io.WriteString(writer, "Hello, Writer!\n")

    // Copy
    src := strings.NewReader("Copy this content")
    dst := os.Stdout
    io.Copy(dst, src)
    fmt.Println()
}`}</code>
      </pre>
      <p>## 8.7 实战项目：任务管理系统</p>

    </div>
  );
}

export const metadata = {
  id: '8-6-5',
  title: 'io - 输入输出',
  section: '8.6.5'
};
