import React from 'react';

interface Props {
  className?: string;
}

export default function 練習6解答({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 練習6解答</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

// reverseString 英語文字列を反転（バイト反転）
func reverseString(s string) string {
    bytes := []byte(s)
    for i, j := 0, len(bytes)-1; i < j; i, j = i+1, j-1 {
        bytes[i], bytes[j] = bytes[j], bytes[i]
    }
    return string(bytes)
}

// reverseStringRune 文字列を反転（文字反転、中国語対応）
func reverseStringRune(s string) string {
    runes := []rune(s)
    for i, j := 0, len(runes)-1; i < j; i, j = i+1, j-1 {
        runes[i], runes[j] = runes[j], runes[i]
    }
    return string(runes)
}

func main() {
    // 英語のテスト
    s1 := "Hello, World!"
    fmt.Println("元の文字列:", s1)
    fmt.Println("反転後:", reverseString(s1))
    fmt.Println()

    // 中国語のテスト
    s2 := "你好，世界！"
    fmt.Println("元の文字列:", s2)
    fmt.Println("反転後:", reverseStringRune(s2))
    fmt.Println()

    // 混合のテスト
    s3 := "Hello, 世界！"
    fmt.Println("元の文字列:", s3)
    fmt.Println("反転後:", reverseStringRune(s3))
}`}</code>
      </pre>

      <ul>
        <li>**出力：**</li>
      </ul>

      <pre className="code-block">
        <code className="language-go">{`元の文字列: Hello, World!
反転後: !dlroW ,olleH

元の文字列: 你好，世界！
反転後: ！界世，好你

元の文字列: Hello, 世界！
反転後: ！界世 ,olleH`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '練習6解答',
  section: '0'
};
