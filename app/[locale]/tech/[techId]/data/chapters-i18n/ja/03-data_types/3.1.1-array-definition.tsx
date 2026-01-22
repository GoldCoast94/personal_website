import React from 'react';

interface Props {
  className?: string;
}

export default function 配列定義({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">3.1.1 配列定義</h3>
      <p>配列は固定長で、同じ型の要素のシーケンスです。</p>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

func main() {
    // 方法1：宣言後に代入
    var arr1 [5]int
    arr1[0] = 1
    arr1[1] = 2

    // 方法2：宣言と初期化
    var arr2 = [5]int{1, 2, 3, 4, 5}

    // 方法3：長さの自動推論
    arr3 := [...]int{1, 2, 3, 4, 5, 6}

    // 方法4：特定のインデックスで初期化
    arr4 := [5]int{0: 10, 2: 30, 4: 50}

    fmt.Println("arr1:", arr1)  // [1 2 0 0 0]
    fmt.Println("arr2:", arr2)  // [1 2 3 4 5]
    fmt.Println("arr3:", arr3)  // [1 2 3 4 5 6]
    fmt.Println("arr4:", arr4)  // [10 0 30 0 50]
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '3-1-1',
  title: '配列定義',
  section: '3.1.1'
};
