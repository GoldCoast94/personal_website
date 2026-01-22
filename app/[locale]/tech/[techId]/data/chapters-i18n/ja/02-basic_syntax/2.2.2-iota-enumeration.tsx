import React from 'react';

interface Props {
  className?: string;
}

export default function Iota列挙({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">2.2.2 iota列挙</h3>
      <p><code>iota</code>はGoの定数カウンターで、0から始まり、各行で1ずつ増加します:</p>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

func main() {
    // 基本的な使用法
    const (
        a = iota  // 0
        b         // 1
        c         // 2
    )

    // 1から始める
    const (
        January = iota + 1  // 1
        February            // 2
        March               // 3
    )

    // 特定の値をスキップ
    const (
        x = iota  // 0
        y         // 1
        _         // 2（スキップ）
        z         // 3
    )

    // ビット演算
    const (
        ReadPerm   = 1 << iota  // 1 << 0 = 1
        WritePerm               // 1 << 1 = 2
        ExecutePerm             // 1 << 2 = 4
    )

    // 式
    const (
        KB = 1 << (10 * iota)  // 1 << 0 = 1
        MB                      // 1 << 10 = 1024
        GB                      // 1 << 20 = 1048576
        TB                      // 1 << 30 = 1073741824
    )

    fmt.Println(a, b, c)
    fmt.Println(January, February, March)
    fmt.Println(x, y, z)
    fmt.Println(ReadPerm, WritePerm, ExecutePerm)
    fmt.Println(KB, MB, GB, TB)
}`}</code>
      </pre>
      <p>## 2.3 基本データ型</p>

    </div>
  );
}

export const metadata = {
  id: '2-2-2',
  title: 'iota列挙',
  section: '2.2.2'
};
