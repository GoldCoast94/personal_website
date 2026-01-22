import React from 'react';

interface Props {
  className?: string;
}

export default function Stringsパッケージ({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">3.4.1 stringsパッケージ</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "strings"
)

func main() {
    s := "Hello, Go Programming!"

    // 含む
    fmt.Println("Contains:", strings.Contains(s, "Go"))

    // 部分文字列の出現回数を数える
    fmt.Println("Count:", strings.Count(s, "o"))

    // プレフィックス/サフィックス
    fmt.Println("HasPrefix:", strings.HasPrefix(s, "Hello"))
    fmt.Println("HasSuffix:", strings.HasSuffix(s, "!"))

    // 部分文字列の位置を検索
    fmt.Println("Index:", strings.Index(s, "Go"))
    fmt.Println("LastIndex:", strings.LastIndex(s, "o"))

    // 置換
    fmt.Println("Replace:", strings.Replace(s, "Go", "Golang", 1))
    fmt.Println("ReplaceAll:", strings.ReplaceAll(s, "o", "0"))

    // 分割
    s2 := "a,b,c,d,e"
    parts := strings.Split(s2, ",")
    fmt.Println("Split:", parts)

    // 結合
    fmt.Println("Join:", strings.Join(parts, "-"))

    // 大文字小文字変換
    fmt.Println("ToUpper:", strings.ToUpper(s))
    fmt.Println("ToLower:", strings.ToLower(s))

    // 空白を削除
    s3 := "  hello world  "
    fmt.Println("Trim:", strings.Trim(s3, " "))
    fmt.Println("TrimSpace:", strings.TrimSpace(s3))
    fmt.Println("TrimLeft:", strings.TrimLeft(s3, " "))
    fmt.Println("TrimRight:", strings.TrimRight(s3, " "))

    // 繰り返し
    fmt.Println("Repeat:", strings.Repeat("Go", 3))
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '3-4-1',
  title: 'stringsパッケージ',
  section: '3.4.1'
};
