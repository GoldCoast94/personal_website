import React from 'react';

interface Props {
  className?: string;
}

export default function 型アサーション({ className }: Props) {
  return (
    <div className={`section-content \${className || ''}`}>
      <h3 className="section-title">9.3.1 型アサーション</h3>

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
    // 特定のエラー型をチェック
    if pathErr, ok := err.(*os.PathError); ok {
        fmt.Println("Path error:")
        fmt.Println("  Operation:", pathErr.Op)
        fmt.Println("  Path:", pathErr.Path)
        fmt.Println("  Error:", pathErr.Err)
    }

    // 特定のインターフェースを実装しているかチェック
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
  title: '型アサーション',
  section: '9.3.1'
};
