import React from 'react';

interface Props {
  className?: string;
}

export default function 字符串类型({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">2.3.4 字符串类型</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "strings"
)

func main() {
    // 字符串定义
    var s1 string = "Hello, Go!"
    s2 := "你好，Go！"

    // 原始字符串（不转义）
    s3 := \`第一行
第二行
第三行\n不转义\`

    // 字符串操作
    fmt.Println("长度:", len(s1))  // 字节数
    fmt.Println("拼接:", s1 + " " + s2)
    fmt.Println("包含:", strings.Contains(s1, "Go"))
    fmt.Println("前缀:", strings.HasPrefix(s1, "Hello"))
    fmt.Println("后缀:", strings.HasSuffix(s1, "!"))
    fmt.Println("索引:", strings.Index(s1, "Go"))
    fmt.Println("替换:", strings.Replace(s1, "Go", "Golang", 1))
    fmt.Println("分割:", strings.Split(s1, ","))
    fmt.Println("大写:", strings.ToUpper(s1))
    fmt.Println("小写:", strings.ToLower(s1))
    fmt.Println("修剪:", strings.Trim("  space  ", " "))

    // 字符串遍历
    for i := 0; i < len(s1); i++ {
        fmt.Printf("%c ", s1[i])  // 按字节遍历
    }
    fmt.Println()

    for _, r := range s2 {
        fmt.Printf("%c ", r)  // 按Unicode字符遍历
    }
    fmt.Println()

    // 原始字符串
    fmt.Println(s3)
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '2-3-4',
  title: '字符串类型',
  section: '2.3.4'
};
