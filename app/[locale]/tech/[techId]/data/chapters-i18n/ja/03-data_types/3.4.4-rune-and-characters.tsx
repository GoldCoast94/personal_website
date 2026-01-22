import React from 'react';

interface Props {
  className?: string;
}

export default function Runeと文字({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">3.4.4 runeと文字</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "unicode/utf8"
)

func main() {
    s := "Hello, 世界"

    // バイト長と文字長
    fmt.Println("バイト長:", len(s))
    fmt.Println("文字長:", utf8.RuneCountInString(s))

    // バイトを反復処理
    fmt.Println("\nバイトを反復処理:")
    for i := 0; i < len(s); i++ {
        fmt.Printf("%x ", s[i])
    }
    fmt.Println()

    // 文字(rune)を反復処理
    fmt.Println("\n文字を反復処理:")
    for i, r := range s {
        fmt.Printf("インデックス:%d, 文字:%c, Unicode:%U\n", i, r, r)
    }

    // 文字列をruneスライスに変換
    runes := []rune(s)
    fmt.Println("\nruneスライス:", runes)
    fmt.Println("7番目の文字:", string(runes[7]))

    // runeスライスを文字列に変換
    runes2 := []rune{'H', 'e', 'l', 'l', 'o', ',', ' ', '世', '界'}
    s2 := string(runes2)
    fmt.Println("変換後の文字列:", s2)
}`}</code>
      </pre>
      <p>## 3.5 練習問題</p>

    </div>
  );
}

export const metadata = {
  id: '3-4-4',
  title: 'runeと文字',
  section: '3.4.4'
};
