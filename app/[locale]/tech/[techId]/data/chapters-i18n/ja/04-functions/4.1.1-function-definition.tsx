import React from 'react';

interface Props {
  className?: string;
}

export default function 関数定義({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">4.1.1 関数定義</h3>
      <p>関数は、整理された再利用可能なコードブロックです。Go言語における関数の基本構文：</p>

      <pre className="code-block">
        <code className="language-go">{`func 関数名(パラメータリスト) 戻り値の型 {
    関数本体
}`}</code>
      </pre>

      <ul>
        <li>**基本例：**</li>
      </ul>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

// パラメータなし、戻り値なし
func sayHello() {
    fmt.Println("Hello, World!")
}

// パラメータあり、戻り値なし
func greet(name string) {
    fmt.Printf("Hello, %s!\n", name)
}

// パラメータあり、戻り値あり
func add(a int, b int) int {
    return a + b
}

// 同じ型のパラメータの省略形
func multiply(a, b int) int {
    return a * b
}

// 複数の戻り値
func swap(a, b string) (string, string) {
    return b, a
}

func main() {
    sayHello()
    greet("Go")

    sum := add(3, 5)
    fmt.Println("Sum:", sum)

    product := multiply(4, 6)
    fmt.Println("Product:", product)

    x, y := swap("hello", "world")
    fmt.Println(x, y)
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '4-1-1',
  title: '関数定義',
  section: '4.1.1'
};
