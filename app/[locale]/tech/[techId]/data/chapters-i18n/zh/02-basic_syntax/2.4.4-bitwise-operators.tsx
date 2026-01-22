import React from 'react';

interface Props {
  className?: string;
}

export default function 位运算符({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">2.4.4 位运算符</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

func main() {
    a, b := 60, 13  // 二进制：a = 0011 1100, b = 0000 1101

    fmt.Printf("与(&): %d\n", a&b)    // 12 = 0000 1100
    fmt.Printf("或(|): %d\n", a|b)    // 61 = 0011 1101
    fmt.Printf("异或(^): %d\n", a^b)  // 49 = 0011 0001
    fmt.Printf("左移(<<): %d\n", a<<2)  // 240 = 1111 0000
    fmt.Printf("右移(>>): %d\n", a>>2)  // 15 = 0000 1111

    // 按位取反（一元运算符）
    fmt.Printf("取反(^): %d\n", ^a)  // -61

    // 位清除
    fmt.Printf("位清除(&^): %d\n", a&^b)  // 48 = 0011 0000
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '2-4-4',
  title: '位运算符',
  section: '2.4.4'
};
