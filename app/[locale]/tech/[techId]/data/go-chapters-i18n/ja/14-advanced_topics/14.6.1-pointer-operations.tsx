import React from 'react';

interface Props {
  className?: string;
}

export default function ポインタ操作({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">14.6.1 ポインタ操作</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "unsafe"
)

func main() {
    var x int64 = 10

    // ポインタを取得
    ptr := unsafe.Pointer(&x)

    // 異なる型のポインタに変換
    intPtr := (*int64)(ptr)

    // 値を変更
    *intPtr = 20

    fmt.Println("x:", x)  // x: 20

    // サイズを取得
    fmt.Println("Size of int64:", unsafe.Sizeof(x))

    // 構造体フィールドのオフセット
    type Person struct {
        Name string
        Age  int
    }

    person := Person{Name: "Alice", Age: 30}
    nameOffset := unsafe.Offsetof(person.Name)
    ageOffset := unsafe.Offsetof(person.Age)

    fmt.Printf("Name offset: %d, Age offset: %d\n", nameOffset, ageOffset)
}`}</code>
      </pre>
      <p>## 14.7 練習問題</p>

    </div>
  );
}

export const metadata = {
  id: '14-6-1',
  title: 'ポインタ操作',
  section: '14.6.1'
};
