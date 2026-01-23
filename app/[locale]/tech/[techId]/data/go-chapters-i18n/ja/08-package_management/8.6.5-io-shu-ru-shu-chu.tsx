import React from 'react';

interface Props {
  className?: string;
}

export default function Io入出力({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">8.6.5 io - 入出力</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "io"
    "os"
    "strings"
)

func main() {
    // Readerインターフェース
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

    // Writerインターフェース
    writer := os.Stdout
    io.WriteString(writer, "Hello, Writer!\n")

    // コピー
    src := strings.NewReader("Copy this content")
    dst := os.Stdout
    io.Copy(dst, src)
    fmt.Println()
}`}</code>
      </pre>
      <p>## 8.7 実践プロジェクト：タスク管理システム</p>

    </div>
  );
}

export const metadata = {
  id: '8-6-5',
  title: 'io - 入出力',
  section: '8.6.5'
};
