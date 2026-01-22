import React from 'react';

interface Props {
  className?: string;
}

export default function Strings包({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">3.4.1 strings包</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "strings"
)

func main() {
    s := "Hello, Go Programming!"

    // 包含
    fmt.Println("Contains:", strings.Contains(s, "Go"))

    // 统计子串出现次数
    fmt.Println("Count:", strings.Count(s, "o"))

    // 前缀/后缀
    fmt.Println("HasPrefix:", strings.HasPrefix(s, "Hello"))
    fmt.Println("HasSuffix:", strings.HasSuffix(s, "!"))

    // 查找子串位置
    fmt.Println("Index:", strings.Index(s, "Go"))
    fmt.Println("LastIndex:", strings.LastIndex(s, "o"))

    // 替换
    fmt.Println("Replace:", strings.Replace(s, "Go", "Golang", 1))
    fmt.Println("ReplaceAll:", strings.ReplaceAll(s, "o", "0"))

    // 分割
    s2 := "a,b,c,d,e"
    parts := strings.Split(s2, ",")
    fmt.Println("Split:", parts)

    // 连接
    fmt.Println("Join:", strings.Join(parts, "-"))

    // 大小写转换
    fmt.Println("ToUpper:", strings.ToUpper(s))
    fmt.Println("ToLower:", strings.ToLower(s))

    // 去除空白
    s3 := "  hello world  "
    fmt.Println("Trim:", strings.Trim(s3, " "))
    fmt.Println("TrimSpace:", strings.TrimSpace(s3))
    fmt.Println("TrimLeft:", strings.TrimLeft(s3, " "))
    fmt.Println("TrimRight:", strings.TrimRight(s3, " "))

    // 重复
    fmt.Println("Repeat:", strings.Repeat("Go", 3))
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '3-4-1',
  title: 'strings包',
  section: '3.4.1'
};
