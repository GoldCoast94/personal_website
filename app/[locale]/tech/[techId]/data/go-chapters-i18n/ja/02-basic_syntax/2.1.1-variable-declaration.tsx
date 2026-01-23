import React from 'react';

interface Props {
  className?: string;
}

export default function 変数宣言({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">2.1.1 変数宣言</h3>
      <p>Goは複数の変数宣言方法を提供しています:</p>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

func main() {
    // 方法1: 標準宣言
    var name string
    name = "Go"

    // 方法2: 宣言と初期化
    var age int = 25

    // 方法3: 型推論
    var city = "Beijing"  // 自動的にstring型として推論

    // 方法4: 短縮変数宣言（関数内のみ使用可能）
    country := "China"    // 推奨方法

    // 方法5: バッチ宣言
    var (
        a int
        b string
        c bool
    )

    // 方法6: バッチ宣言と初期化
    var x, y, z int = 1, 2, 3

    // 方法7: 異なる型の複数変数
    var m, n, o = 1, "hello", true

    fmt.Println(name, age, city, country, a, b, c, x, y, z, m, n, o)
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '2-1-1',
  title: '変数宣言',
  section: '2.1.1'
};
