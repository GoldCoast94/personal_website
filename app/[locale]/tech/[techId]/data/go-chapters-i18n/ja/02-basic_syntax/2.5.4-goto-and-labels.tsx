import React from 'react';

interface Props {
  className?: string;
}

export default function Gotoとラベル({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">2.5.4 gotoとラベル</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

func main() {
    // gotoジャンプ
    i := 0
Loop:
    if i < 5 {
        fmt.Println(i)
        i++
        goto Loop
    }

    // breakとラベル
    fmt.Println("breakラベルの例:")
OuterLoop:
    for i := 0; i < 3; i++ {
        for j := 0; j < 3; j++ {
            if i == 1 && j == 1 {
                break OuterLoop  // 外側のループを抜ける
            }
            fmt.Printf("i=%d, j=%d\n", i, j)
        }
    }

    // continueとラベル
    fmt.Println("continueラベルの例:")
Outer:
    for i := 0; i < 3; i++ {
        for j := 0; j < 3; j++ {
            if j == 1 {
                continue Outer  // 外側のループを続ける
            }
            fmt.Printf("i=%d, j=%d\n", i, j)
        }
    }
}`}</code>
      </pre>
      <p>## 2.6 練習問題</p>

    </div>
  );
}

export const metadata = {
  id: '2-5-4',
  title: 'gotoとラベル',
  section: '2.5.4'
};
