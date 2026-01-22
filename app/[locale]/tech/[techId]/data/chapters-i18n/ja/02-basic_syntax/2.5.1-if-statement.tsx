import React from 'react';

interface Props {
  className?: string;
}

export default function If文({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">2.5.1 if文</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

func main() {
    // 基本的な使い方
    score := 85
    if score >= 90 {
        fmt.Println("優秀")
    } else if score >= 60 {
        fmt.Println("合格")
    } else {
        fmt.Println("不合格")
    }

    // if文は初期化文を含むことができる
    if num := 10; num > 0 {
        fmt.Println("numは正の数")
    }  // numのスコープはifブロック内のみ

    // 複数条件の判定
    age := 20
    if age >= 18 && age < 60 {
        fmt.Println("成人")
    }
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '2-5-1',
  title: 'if文',
  section: '2.5.1'
};
