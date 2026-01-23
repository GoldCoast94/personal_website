import React from 'react';

interface Props {
  className?: string;
}

export default function 構造体ポインタ({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">5.1.2 構造体ポインタ</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

type Point struct {
    X, Y int
}

func main() {
    // 方法1：newを使用
    p1 := new(Point)
    p1.X = 10
    p1.Y = 20
    fmt.Println(p1)  // &{10 20}

    // 方法2：&演算子を使用
    p2 := &Point{X: 30, Y: 40}
    fmt.Println(p2)  // &{30 40}

    // Goは自動的に参照を外す
    fmt.Println(p2.X)  // (*p2).Xと同等

    // 値を変更
    p2.X = 50
    fmt.Println(p2)  // &{50 40}

    // 構造体の比較
    p3 := Point{X: 10, Y: 20}
    p4 := Point{X: 10, Y: 20}
    fmt.Println(p3 == p4)  // true（すべてのフィールドが等しい）

    // ポインタの比較
    fmt.Println(p1 == p2)  // false（異なるポインタ）
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '5-1-2',
  title: '構造体ポインタ',
  section: '5.1.2'
};
