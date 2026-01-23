import React from 'react';

interface Props {
  className?: string;
}

export default function メソッドセット規則({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">5.5.1 メソッドセット規則</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

type Printer interface {
    Print()
}

type Document struct {
    Content string
}

// 値レシーバメソッド
func (d Document) Print() {
    fmt.Println("Document:", d.Content)
}

// ポインタレシーバメソッド
func (d *Document) Edit(newContent string) {
    d.Content = newContent
}

func main() {
    // 値型は値レシーバとポインタレシーバの両方のメソッドを呼び出すことができる（Goは自動的にアドレスを取得）
    doc1 := Document{Content: "Hello"}
    doc1.Print()
    doc1.Edit("World")  // Goは自動的に(&doc1).Edit("World")に変換

    // ポインタ型も値レシーバとポインタレシーバの両方のメソッドを呼び出すことができる
    doc2 := &Document{Content: "Foo"}
    doc2.Print()  // Goは自動的に参照を外す
    doc2.Edit("Bar")

    // インターフェース割り当て
    var p Printer

    // 値型はインターフェースを実装（値レシーバのPrintメソッドがあるため）
    p = doc1
    p.Print()

    // ポインタ型もインターフェースを実装
    p = doc2
    p.Print()

    // 注意：Printがポインタレシーバの場合、ポインタ型のみがインターフェースを実装
}`}</code>
      </pre>
      <p>## 5.6 練習問題</p>

    </div>
  );
}

export const metadata = {
  id: '5-5-1',
  title: 'メソッドセット規則',
  section: '5.5.1'
};
