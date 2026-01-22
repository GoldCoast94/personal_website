import React from 'react';

interface Props {
  className?: string;
}

export default function 配列操作({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">3.1.2 配列操作</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

func main() {
    arr := [5]int{1, 2, 3, 4, 5}

    // 要素へのアクセス
    fmt.Println("最初の要素:", arr[0])
    fmt.Println("最後の要素:", arr[len(arr)-1])

    // 要素の変更
    arr[2] = 30
    fmt.Println("変更後:", arr)

    // 配列の長さ
    fmt.Println("配列の長さ:", len(arr))

    // 配列の走査
    fmt.Println("方法1：インデックスを使用")
    for i := 0; i < len(arr); i++ {
        fmt.Printf("arr[%d] = %d\n", i, arr[i])
    }

    fmt.Println("方法2：rangeを使用")
    for index, value := range arr {
        fmt.Printf("インデックス:%d, 値:%d\n", index, value)
    }

    // 値のみ
    fmt.Println("値のみ走査:")
    for _, value := range arr {
        fmt.Println(value)
    }
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '3-1-2',
  title: '配列操作',
  section: '3.1.2'
};
