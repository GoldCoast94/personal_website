import React from 'react';

interface Props {
  className?: string;
}

export default function Fmt格式化io({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">8.6.1 fmt - 格式化I/O</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

func main() {
    // 基本打印
    fmt.Println("Hello, World!")
    fmt.Printf("Name: %s, Age: %d\n", "Alice", 30)

    // 格式化字符串
    s := fmt.Sprintf("Temperature: %.2f°C", 23.456)
    fmt.Println(s)

    // 扫描输入
    var name string
    var age int
    fmt.Print("Enter name and age: ")
    fmt.Scan(&name, &age)
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '8-6-1',
  title: 'fmt - 格式化I/O',
  section: '8.6.1'
};
