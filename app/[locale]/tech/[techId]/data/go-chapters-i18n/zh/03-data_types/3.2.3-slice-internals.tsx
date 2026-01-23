import React from 'react';

interface Props {
  className?: string;
}

export default function 切片的底层原理({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">3.2.3 切片的底层原理</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

func main() {
    // 切片的底层是数组
    arr := [5]int{1, 2, 3, 4, 5}
    slice1 := arr[1:4]
    slice2 := arr[2:5]

    fmt.Println("原数组:", arr)
    fmt.Println("slice1:", slice1)  // [2 3 4]
    fmt.Println("slice2:", slice2)  // [3 4 5]

    // 修改切片会影响底层数组
    slice1[0] = 20
    fmt.Println("修改slice1后:")
    fmt.Println("原数组:", arr)      // [1 20 3 4 5]
    fmt.Println("slice1:", slice1)  // [20 3 4]
    fmt.Println("slice2:", slice2)  // [3 4 5]

    // 长度和容量
    fmt.Println("\n长度和容量:")
    fmt.Printf("slice1: len=%d, cap=%d\n", len(slice1), cap(slice1))
    fmt.Printf("slice2: len=%d, cap=%d\n", len(slice2), cap(slice2))

    // 切片扩容
    fmt.Println("\n切片扩容:")
    s := make([]int, 0, 3)
    fmt.Printf("初始: len=%d, cap=%d\n", len(s), cap(s))

    s = append(s, 1, 2, 3)
    fmt.Printf("追加3个: len=%d, cap=%d\n", len(s), cap(s))

    s = append(s, 4)  // 容量不够，会扩容
    fmt.Printf("再追加1个: len=%d, cap=%d\n", len(s), cap(s))
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '3-2-3',
  title: '切片的底层原理',
  section: '3.2.3'
};
