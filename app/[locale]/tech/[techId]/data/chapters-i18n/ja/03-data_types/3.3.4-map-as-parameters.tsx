import React from 'react';

interface Props {
  className?: string;
}

export default function Mapを関数パラメータとして使用({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">3.3.4 Mapを関数パラメータとして使用</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

// mapをパラメータとして使用(参照渡し)
func modifyMap(m map[string]int) {
    m["new"] = 100
    delete(m, "Alice")
}

func main() {
    scores := map[string]int{
        "Alice": 90,
        "Bob":   85,
    }

    fmt.Println("元のmap:", scores)
    modifyMap(scores)
    fmt.Println("呼び出し後:", scores)  // 変更されています
}`}</code>
      </pre>
      <p>## 3.4 文字列処理</p>

    </div>
  );
}

export const metadata = {
  id: '3-3-4',
  title: 'Mapを関数パラメータとして使用',
  section: '3.3.4'
};
