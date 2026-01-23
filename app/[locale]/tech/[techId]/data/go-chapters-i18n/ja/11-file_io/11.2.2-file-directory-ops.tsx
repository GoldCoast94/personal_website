import React from 'react';

interface Props {
  className?: string;
}

export default function ファイルとディレクトリの操作({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">11.2.2 ファイルとディレクトリの操作</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "os"
    "path/filepath"
)

func fileOperations() {
    // ファイル名を変更
    err := os.Rename("old.txt", "new.txt")
    if err != nil {
        fmt.Println("Error:", err)
    }

    // ファイルを削除
    err = os.Remove("test.txt")
    if err != nil {
        fmt.Println("Error:", err)
    }

    // ディレクトリを作成
    err = os.Mkdir("testdir", 0755)
    if err != nil {
        fmt.Println("Error:", err)
    }

    // 複数階層のディレクトリを作成
    err = os.MkdirAll("path/to/dir", 0755)
    if err != nil {
        fmt.Println("Error:", err)
    }

    // 空のディレクトリを削除
    err = os.Remove("testdir")
    if err != nil {
        fmt.Println("Error:", err)
    }

    // ディレクトリとその内容を削除
    err = os.RemoveAll("path")
    if err != nil {
        fmt.Println("Error:", err)
    }

    // ファイルのパーミッションを変更
    err = os.Chmod("file.txt", 0644)
    if err != nil {
        fmt.Println("Error:", err)
    }
}

func main() {
    fileOperations()
}`}</code>
      </pre>
      <p>## 11.3 ディレクトリの走査</p>

    </div>
  );
}

export const metadata = {
  id: '11-2-2',
  title: 'ファイルとディレクトリの操作',
  section: '11.2.2'
};
