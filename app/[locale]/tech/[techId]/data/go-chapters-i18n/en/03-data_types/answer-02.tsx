import React from 'react';

interface Props {
  className?: string;
}

export default function Exercise6Answer({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 Exercise 6 Answer</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

// reverseString reverses an English string (byte reversal)
func reverseString(s string) string {
    bytes := []byte(s)
    for i, j := 0, len(bytes)-1; i < j; i, j = i+1, j-1 {
        bytes[i], bytes[j] = bytes[j], bytes[i]
    }
    return string(bytes)
}

// reverseStringRune reverses a string (character reversal, supports Chinese)
func reverseStringRune(s string) string {
    runes := []rune(s)
    for i, j := 0, len(runes)-1; i < j; i, j = i+1, j-1 {
        runes[i], runes[j] = runes[j], runes[i]
    }
    return string(runes)
}

func main() {
    // Test English
    s1 := "Hello, World!"
    fmt.Println("Original string:", s1)
    fmt.Println("Reversed:", reverseString(s1))
    fmt.Println()

    // Test Chinese
    s2 := "你好，世界！"
    fmt.Println("Original string:", s2)
    fmt.Println("Reversed:", reverseStringRune(s2))
    fmt.Println()

    // Test mixed
    s3 := "Hello, 世界！"
    fmt.Println("Original string:", s3)
    fmt.Println("Reversed:", reverseStringRune(s3))
}`}</code>
      </pre>

      <ul>
        <li>**Output:**</li>
      </ul>

      <pre className="code-block">
        <code className="language-go">{`Original string: Hello, World!
Reversed: !dlroW ,olleH

Original string: 你好，世界！
Reversed: ！界世，好你

Original string: Hello, 世界！
Reversed: ！界世 ,olleH`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: 'Exercise 6 Answer',
  section: '0'
};
