import React from 'react';

interface Props {
  className?: string;
}

export default function 値レシーバVsポインタレシーバ({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">5.2.2 値レシーバ vs ポインタレシーバ</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

type Counter struct {
    Count int
}

// 値レシーバ：元の値を変更しない
func (c Counter) IncrementByValue() {
    c.Count++
}

// ポインタレシーバ：元の値を変更する
func (c *Counter) IncrementByPointer() {
    c.Count++
}

// 値レシーバ：新しい値を返す
func (c Counter) Add(n int) Counter {
    c.Count += n
    return c
}

func main() {
    counter := Counter{Count: 0}

    // 値レシーバは元の値を変更しない
    counter.IncrementByValue()
    fmt.Println("After IncrementByValue:", counter.Count)  // 0

    // ポインタレシーバは元の値を変更する
    counter.IncrementByPointer()
    fmt.Println("After IncrementByPointer:", counter.Count)  // 1

    // 新しい値を返すメソッドを使用
    newCounter := counter.Add(10)
    fmt.Println("Original:", counter.Count)     // 1
    fmt.Println("New:", newCounter.Count)       // 11

    // Goは自動的に変換する
    counterPtr := &Counter{Count: 5}
    counterPtr.IncrementByValue()   // Goは自動的に参照を外す
    counterPtr.IncrementByPointer() // 直接呼び出し

    fmt.Println("CounterPtr:", counterPtr.Count)  // 6
}`}</code>
      </pre>

      <ul>
        <li>**選択ガイド：**</li>
        <li>ポインタレシーバを使用する場合：</li>
        <li>レシーバを変更する必要がある</li>
        <li>レシーバが大きな構造体で、コピーを避ける</li>
        <li>一貫性が必要（あるメソッドがポインタレシーバを必要とする場合、他のメソッドもポインタレシーバを使用すべき）</li>
      </ul>

      <ul>
        <li>値レシーバを使用する場合：</li>
        <li>レシーバを変更する必要がない</li>
        <li>レシーバが小さな構造体または基本型</li>
        <li>並行性の安全性が必要（値コピーは本質的にスレッドセーフ）</li>
      </ul>

    </div>
  );
}

export const metadata = {
  id: '5-2-2',
  title: '値レシーバ vs ポインタレシーバ',
  section: '5.2.2'
};
