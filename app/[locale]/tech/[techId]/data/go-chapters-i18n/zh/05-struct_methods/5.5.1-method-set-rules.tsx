import React from 'react';

interface Props {
  className?: string;
}

export default function 方法集规则({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">5.5.1 方法集规则</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

type Printer interface {
    Print()
}

type Document struct {
    Content string
}

// 值接收者方法
func (d Document) Print() {
    fmt.Println("Document:", d.Content)
}

// 指针接收者方法
func (d *Document) Edit(newContent string) {
    d.Content = newContent
}

func main() {
    // 值类型可以调用值接收者和指针接收者的方法（Go会自动取地址）
    doc1 := Document{Content: "Hello"}
    doc1.Print()
    doc1.Edit("World")  // Go会自动转换为(&doc1).Edit("World")

    // 指针类型也可以调用值接收者和指针接收者的方法
    doc2 := &Document{Content: "Foo"}
    doc2.Print()  // Go会自动解引用
    doc2.Edit("Bar")

    // 接口赋值
    var p Printer

    // 值类型实现了接口（因为有值接收者的Print方法）
    p = doc1
    p.Print()

    // 指针类型也实现了接口
    p = doc2
    p.Print()

    // 注意：如果Print是指针接收者，则只有指针类型实现接口
}`}</code>
      </pre>
      <p>## 5.6 练习题</p>

    </div>
  );
}

export const metadata = {
  id: '5-5-1',
  title: '方法集规则',
  section: '5.5.1'
};
