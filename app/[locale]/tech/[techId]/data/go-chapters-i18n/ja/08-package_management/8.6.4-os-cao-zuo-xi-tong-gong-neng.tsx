import React from 'react';

interface Props {
  className?: string;
}

export default function Osオペレーティングシステム機能({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">8.6.4 os - オペレーティングシステム機能</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "os"
)

func main() {
    // 環境変数
    os.Setenv("MY_VAR", "value")
    fmt.Println(os.Getenv("MY_VAR"))
    fmt.Println(os.Environ())

    // コマンドライン引数
    fmt.Println(os.Args)

    // ファイル操作
    file, err := os.Create("test.txt")
    if err != nil {
        fmt.Println(err)
        return
    }
    defer file.Close()

    file.WriteString("Hello, File!")

    // ファイル情報
    info, _ := os.Stat("test.txt")
    fmt.Println("Size:", info.Size())
    fmt.Println("IsDir:", info.IsDir())
    fmt.Println("ModTime:", info.ModTime())

    // ファイルの削除
    os.Remove("test.txt")
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '8-6-4',
  title: 'os - オペレーティングシステム機能',
  section: '8.6.4'
};
