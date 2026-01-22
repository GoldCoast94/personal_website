import React from 'react';

interface Props {
  className?: string;
}

export default function RuneAndCharacters({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">3.4.4 rune and Characters</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "unicode/utf8"
)

func main() {
    s := "Hello, 世界"

    // Byte length vs character length
    fmt.Println("Byte length:", len(s))
    fmt.Println("Character length:", utf8.RuneCountInString(s))

    // Iterate over bytes
    fmt.Println("\nIterate over bytes:")
    for i := 0; i < len(s); i++ {
        fmt.Printf("%x ", s[i])
    }
    fmt.Println()

    // Iterate over characters (rune)
    fmt.Println("\nIterate over characters:")
    for i, r := range s {
        fmt.Printf("Index:%d, Character:%c, Unicode:%U\n", i, r, r)
    }

    // String to rune slice
    runes := []rune(s)
    fmt.Println("\nRune slice:", runes)
    fmt.Println("7th character:", string(runes[7]))

    // Rune slice to string
    runes2 := []rune{'H', 'e', 'l', 'l', 'o', ',', ' ', '世', '界'}
    s2 := string(runes2)
    fmt.Println("Converted string:", s2)
}`}</code>
      </pre>
      <p>## 3.5 Exercises</p>

    </div>
  );
}

export const metadata = {
  id: '3-4-4',
  title: 'rune and Characters',
  section: '3.4.4'
};
