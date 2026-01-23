import React from 'react';

interface Props {
  className?: string;
}

export default function スライスの定義({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">3.2.1 スライスの定義</h3>
      <p>スライスは動的配列であり、Goで最もよく使用されるデータ構造です。</p>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

func main() {
    // 方法1: 直接宣言
    var slice1 []int
    fmt.Println("slice1:", slice1, "長さ:", len(slice1), "容量:", cap(slice1))

    // 方法2: makeを使用して作成
    slice2 := make([]int, 5)  // 長さ5、容量5
    fmt.Println("slice2:", slice2)

    slice3 := make([]int, 5, 10)  // 長さ5、容量10
    fmt.Println("slice3:", slice3, "長さ:", len(slice3), "容量:", cap(slice3))

    // 方法3: リテラル初期化
    slice4 := []int{1, 2, 3, 4, 5}
    fmt.Println("slice4:", slice4)

    // 方法4: 配列から作成
    arr := [5]int{1, 2, 3, 4, 5}
    slice5 := arr[1:4]  // インデックス1から3の要素を抽出
    fmt.Println("slice5:", slice5)
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '3-2-1',
  title: 'スライスの定義',
  section: '3.2.1'
};
