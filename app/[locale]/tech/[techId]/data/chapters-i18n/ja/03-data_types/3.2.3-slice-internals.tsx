import React from 'react';

interface Props {
  className?: string;
}

export default function スライスの内部構造({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">3.2.3 スライスの内部構造</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

func main() {
    // スライスの内部は配列
    arr := [5]int{1, 2, 3, 4, 5}
    slice1 := arr[1:4]
    slice2 := arr[2:5]

    fmt.Println("元の配列:", arr)
    fmt.Println("slice1:", slice1)  // [2 3 4]
    fmt.Println("slice2:", slice2)  // [3 4 5]

    // スライスを変更すると基底配列に影響する
    slice1[0] = 20
    fmt.Println("slice1を変更後:")
    fmt.Println("元の配列:", arr)      // [1 20 3 4 5]
    fmt.Println("slice1:", slice1)  // [20 3 4]
    fmt.Println("slice2:", slice2)  // [3 4 5]

    // 長さと容量
    fmt.Println("\n長さと容量:")
    fmt.Printf("slice1: len=%d, cap=%d\n", len(slice1), cap(slice1))
    fmt.Printf("slice2: len=%d, cap=%d\n", len(slice2), cap(slice2))

    // スライスの拡張
    fmt.Println("\nスライスの拡張:")
    s := make([]int, 0, 3)
    fmt.Printf("初期: len=%d, cap=%d\n", len(s), cap(s))

    s = append(s, 1, 2, 3)
    fmt.Printf("3つ追加: len=%d, cap=%d\n", len(s), cap(s))

    s = append(s, 4)  // 容量が不足すると拡張される
    fmt.Printf("さらに1つ追加: len=%d, cap=%d\n", len(s), cap(s))
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '3-2-3',
  title: 'スライスの内部構造',
  section: '3.2.3'
};
