import React from 'react';

interface Props {
  className?: string;
}

export default function 匿名变量({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">2.1.4 匿名变量</h3>
      <p>使用<code>_</code>表示匿名变量，用于忽略不需要的值：</p>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

func getInfo() (string, int) {
    return "Alice", 25
}

func main() {
    // 只需要名字，忽略年龄
    name, _ := getInfo()
    fmt.Println("Name:", name)

    // 只需要年龄，忽略名字
    _, age := getInfo()
    fmt.Println("Age:", age)
}`}</code>
      </pre>
      <p>## 2.2 常量</p>

    </div>
  );
}

export const metadata = {
  id: '2-1-4',
  title: '匿名变量',
  section: '2.1.4'
};
