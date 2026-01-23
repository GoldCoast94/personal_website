import React from 'react';

interface Props {
  className?: string;
}

export default function ファイルの作成と開く({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">11.1.1 ファイルの作成と開く</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "os"
)

func main() {
    // ファイルを作成
    file, err := os.Create("test.txt")
    if err != nil {
        fmt.Println("Error creating file:", err)
        return
    }
    defer file.Close()

    // 内容を書き込む
    file.WriteString("Hello, File!")

    // 既存のファイルを開く
    file2, err := os.Open("test.txt")
    if err != nil {
        fmt.Println("Error opening file:", err)
        return
    }
    defer file2.Close()

    // 読み書きモードで開く
    file3, err := os.OpenFile("test.txt", os.O_RDWR|os.O_APPEND, 0644)
    if err != nil {
        fmt.Println("Error:", err)
        return
    }
    defer file3.Close()
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '11-1-1',
  title: 'ファイルの作成と開く',
  section: '11.1.1'
};
