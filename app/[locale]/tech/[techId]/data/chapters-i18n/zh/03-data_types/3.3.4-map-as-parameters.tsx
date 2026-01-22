import React from 'react';

interface Props {
  className?: string;
}

export default function Map作为函数参数({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">3.3.4 Map作为函数参数</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

// map作为参数（引用传递）
func modifyMap(m map[string]int) {
    m["new"] = 100
    delete(m, "Alice")
}

func main() {
    scores := map[string]int{
        "Alice": 90,
        "Bob":   85,
    }

    fmt.Println("原map:", scores)
    modifyMap(scores)
    fmt.Println("调用后:", scores)  // 已改变
}`}</code>
      </pre>
      <p>## 3.4 字符串处理</p>

    </div>
  );
}

export const metadata = {
  id: '3-3-4',
  title: 'Map作为函数参数',
  section: '3.3.4'
};
