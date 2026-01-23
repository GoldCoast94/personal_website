import React from 'react';

interface Props {
  className?: string;
}

export default function 字符串拼接({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">3.4.3 字符串拼接</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "bytes"
    "fmt"
    "strings"
)

func main() {
    // 方法1：+ 运算符（不推荐，效率低）
    s1 := "Hello" + " " + "World"
    fmt.Println("方法1:", s1)

    // 方法2：fmt.Sprintf
    s2 := fmt.Sprintf("%s %s", "Hello", "World")
    fmt.Println("方法2:", s2)

    // 方法3：strings.Join
    parts := []string{"Hello", "World", "Go"}
    s3 := strings.Join(parts, " ")
    fmt.Println("方法3:", s3)

    // 方法4：strings.Builder（推荐）
    var builder strings.Builder
    builder.WriteString("Hello")
    builder.WriteString(" ")
    builder.WriteString("World")
    s4 := builder.String()
    fmt.Println("方法4:", s4)

    // 方法5：bytes.Buffer
    var buffer bytes.Buffer
    buffer.WriteString("Hello")
    buffer.WriteString(" ")
    buffer.WriteString("World")
    s5 := buffer.String()
    fmt.Println("方法5:", s5)
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '3-4-3',
  title: '字符串拼接',
  section: '3.4.3'
};
