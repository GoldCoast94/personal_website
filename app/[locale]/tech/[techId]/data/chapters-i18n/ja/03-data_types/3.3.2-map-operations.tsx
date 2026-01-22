import React from 'react';

interface Props {
  className?: string;
}

export default function Mapの操作({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">3.3.2 Mapの操作</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

func main() {
    // mapを作成
    scores := map[string]int{
        "Alice": 90,
        "Bob":   85,
        "Carol": 95,
    }

    // 要素にアクセス
    fmt.Println("Aliceのスコア:", scores["Alice"])

    // 要素を追加/変更
    scores["David"] = 88
    scores["Alice"] = 92
    fmt.Println("変更後:", scores)

    // 要素を削除
    delete(scores, "Bob")
    fmt.Println("Bobを削除後:", scores)

    // キーが存在するか確認
    value, ok := scores["Bob"]
    if ok {
        fmt.Println("Bobのスコア:", value)
    } else {
        fmt.Println("Bobは存在しません")
    }

    // mapを反復処理
    fmt.Println("\nmapを反復処理:")
    for key, value := range scores {
        fmt.Printf("%s: %d\n", key, value)
    }

    // キーのみを反復処理
    fmt.Println("\nキーのみを反復処理:")
    for key := range scores {
        fmt.Println(key)
    }

    // 値のみを反復処理
    fmt.Println("\n値のみを反復処理:")
    for _, value := range scores {
        fmt.Println(value)
    }

    // mapの長さ
    fmt.Println("\nmapの長さ:", len(scores))
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '3-3-2',
  title: 'Mapの操作',
  section: '3.3.2'
};
