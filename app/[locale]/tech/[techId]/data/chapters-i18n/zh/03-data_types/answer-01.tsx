import React from 'react';

interface Props {
  className?: string;
}

export default function 练习6答案({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 练习6答案</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

// reverseString 反转英文字符串（字节反转）
func reverseString(s string) string {
    bytes := []byte(s)
    for i, j := 0, len(bytes)-1; i < j; i, j = i+1, j-1 {
        bytes[i], bytes[j] = bytes[j], bytes[i]
    }
    return string(bytes)
}

// reverseStringRune 反转字符串（字符反转，支持中文）
func reverseStringRune(s string) string {
    runes := []rune(s)
    for i, j := 0, len(runes)-1; i < j; i, j = i+1, j-1 {
        runes[i], runes[j] = runes[j], runes[i]
    }
    return string(runes)
}

func main() {
    // 测试英文
    s1 := "Hello, World!"
    fmt.Println("原字符串:", s1)
    fmt.Println("反转后:", reverseString(s1))
    fmt.Println()

    // 测试中文
    s2 := "你好，世界！"
    fmt.Println("原字符串:", s2)
    fmt.Println("反转后:", reverseStringRune(s2))
    fmt.Println()

    // 测试混合
    s3 := "Hello, 世界！"
    fmt.Println("原字符串:", s3)
    fmt.Println("反转后:", reverseStringRune(s3))
}`}</code>
      </pre>

      <ul>
        <li>*输出：**</li>
      </ul>

      <pre className="code-block">
        <code className="language-go">{`原字符串: Hello, World!
反转后: !dlroW ,olleH

原字符串: 你好，世界！
反转后: ！界世，好你

原字符串: Hello, 世界！
反转后: ！界世 ,olleH`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '练习6答案',
  section: '0'
};
