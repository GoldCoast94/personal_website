import React from 'react';

interface Props {
  className?: string;
}

export default function Strings文字列処理({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">8.6.2 strings - 文字列処理</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "strings"
)

func main() {
    s := "Hello, Go Programming"

    // よく使う関数
    fmt.Println(strings.Contains(s, "Go"))        // true
    fmt.Println(strings.HasPrefix(s, "Hello"))    // true
    fmt.Println(strings.HasSuffix(s, "ing"))      // true
    fmt.Println(strings.Index(s, "Go"))           // 7
    fmt.Println(strings.ToUpper(s))
    fmt.Println(strings.ToLower(s))
    fmt.Println(strings.Replace(s, "Go", "Golang", 1))
    fmt.Println(strings.Split(s, ", "))
    fmt.Println(strings.Join([]string{"a", "b"}, "-"))
    fmt.Println(strings.Repeat("Go", 3))
    fmt.Println(strings.TrimSpace("  text  "))
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '8-6-2',
  title: 'strings - 文字列処理',
  section: '8.6.2'
};
