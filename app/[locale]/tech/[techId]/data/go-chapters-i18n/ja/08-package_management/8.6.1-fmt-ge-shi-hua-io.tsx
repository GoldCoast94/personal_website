import React from 'react';

interface Props {
  className?: string;
}

export default function Fmt書式付きIO({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">8.6.1 fmt - 書式付きI/O</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

func main() {
    // 基本的な出力
    fmt.Println("Hello, World!")
    fmt.Printf("Name: %s, Age: %d\n", "Alice", 30)

    // 文字列のフォーマット
    s := fmt.Sprintf("Temperature: %.2f°C", 23.456)
    fmt.Println(s)

    // 入力のスキャン
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
  title: 'fmt - 書式付きI/O',
  section: '8.6.1'
};
