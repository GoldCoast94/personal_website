import React from 'react';

interface Props {
  className?: string;
}

export default function Forループ({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">2.5.2 forループ</h3>
      <p>Go言語にはforループのみがあり、whileループはありません：</p>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

func main() {
    // 標準的なforループ
    for i := 0; i < 5; i++ {
        fmt.Println(i)
    }

    // while風
    j := 0
    for j < 5 {
        fmt.Println(j)
        j++
    }

    // 無限ループ
    k := 0
    for {
        if k >= 3 {
            break
        }
        fmt.Println(k)
        k++
    }

    // for range イテレーション
    nums := []int{1, 2, 3, 4, 5}
    for index, value := range nums {
        fmt.Printf("インデックス:%d, 値:%d\n", index, value)
    }

    // インデックスのみ
    for index := range nums {
        fmt.Println("インデックス:", index)
    }

    // 値のみ
    for _, value := range nums {
        fmt.Println("値:", value)
    }

    // continue と break
    for i := 0; i < 10; i++ {
        if i%2 == 0 {
            continue  // 偶数をスキップ
        }
        if i > 7 {
            break  // 7より大きい場合は終了
        }
        fmt.Println(i)
    }
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '2-5-2',
  title: 'forループ',
  section: '2.5.2'
};
