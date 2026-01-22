import React from 'react';

interface Props {
  className?: string;
}

export default function 文字列型({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">2.3.4 文字列型</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "strings"
)

func main() {
    // 文字列の定義
    var s1 string = "Hello, Go!"
    s2 := "你好，Go！"

    // 生文字列（エスケープしない）
    s3 := \`1行目
2行目
3行目\n エスケープされません\`

    // 文字列操作
    fmt.Println("長さ:", len(s1))  // バイト数
    fmt.Println("連結:", s1 + " " + s2)
    fmt.Println("含む:", strings.Contains(s1, "Go"))
    fmt.Println("接頭辞:", strings.HasPrefix(s1, "Hello"))
    fmt.Println("接尾辞:", strings.HasSuffix(s1, "!"))
    fmt.Println("インデックス:", strings.Index(s1, "Go"))
    fmt.Println("置換:", strings.Replace(s1, "Go", "Golang", 1))
    fmt.Println("分割:", strings.Split(s1, ","))
    fmt.Println("大文字:", strings.ToUpper(s1))
    fmt.Println("小文字:", strings.ToLower(s1))
    fmt.Println("トリム:", strings.Trim("  space  ", " "))

    // 文字列の走査
    for i := 0; i < len(s1); i++ {
        fmt.Printf("%c ", s1[i])  // バイト単位で走査
    }
    fmt.Println()

    for _, r := range s2 {
        fmt.Printf("%c ", r)  // Unicode文字単位で走査
    }
    fmt.Println()

    // 生文字列
    fmt.Println(s3)
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '2-3-4',
  title: '文字列型',
  section: '2.3.4'
};
