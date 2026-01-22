import React from 'react';

interface Props {
  className?: string;
}

export default function Rune和字符({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">3.4.4 rune和字符</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "unicode/utf8"
)

func main() {
    s := "Hello, 世界"

    // 字节长度vs字符长度
    fmt.Println("字节长度:", len(s))
    fmt.Println("字符长度:", utf8.RuneCountInString(s))

    // 遍历字节
    fmt.Println("\n遍历字节:")
    for i := 0; i < len(s); i++ {
        fmt.Printf("%x ", s[i])
    }
    fmt.Println()

    // 遍历字符（rune）
    fmt.Println("\n遍历字符:")
    for i, r := range s {
        fmt.Printf("索引:%d, 字符:%c, Unicode:%U\n", i, r, r)
    }

    // 字符串转rune切片
    runes := []rune(s)
    fmt.Println("\nrune切片:", runes)
    fmt.Println("第6个字符:", string(runes[7]))

    // rune切片转字符串
    runes2 := []rune{'H', 'e', 'l', 'l', 'o', ',', ' ', '世', '界'}
    s2 := string(runes2)
    fmt.Println("转换后的字符串:", s2)
}`}</code>
      </pre>
      <p>## 3.5 练习题</p>

    </div>
  );
}

export const metadata = {
  id: '3-4-4',
  title: 'rune和字符',
  section: '3.4.4'
};
