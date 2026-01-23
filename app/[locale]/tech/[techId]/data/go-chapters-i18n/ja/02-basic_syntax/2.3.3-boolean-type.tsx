import React from 'react';

interface Props {
  className?: string;
}

export default function ブール型({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">2.3.3 ブール型</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

func main() {
    var b1 bool = true
    var b2 bool = false
    var b3 = (10 > 5)  // true

    // ブール演算
    fmt.Println("AND:", b1 && b2)  // false
    fmt.Println("OR:", b1 || b2)   // true
    fmt.Println("NOT:", !b1)       // false

    // 注意：数値でブール値を表すことはできません
    // var b4 bool = 1  // エラー
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '2-3-3',
  title: 'ブール型',
  section: '2.3.3'
};
