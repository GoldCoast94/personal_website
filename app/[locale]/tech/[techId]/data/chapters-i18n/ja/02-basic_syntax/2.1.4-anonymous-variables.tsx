import React from 'react';

interface Props {
  className?: string;
}

export default function 匿名変数({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">2.1.4 匿名変数</h3>
      <p>不要な値を無視するために<code>_</code>を使用して匿名変数を表します:</p>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

func getInfo() (string, int) {
    return "Alice", 25
}

func main() {
    // 名前のみ必要、年齢を無視
    name, _ := getInfo()
    fmt.Println("Name:", name)

    // 年齢のみ必要、名前を無視
    _, age := getInfo()
    fmt.Println("Age:", age)
}`}</code>
      </pre>
      <p>## 2.2 定数</p>

    </div>
  );
}

export const metadata = {
  id: '2-1-4',
  title: '匿名変数',
  section: '2.1.4'
};
