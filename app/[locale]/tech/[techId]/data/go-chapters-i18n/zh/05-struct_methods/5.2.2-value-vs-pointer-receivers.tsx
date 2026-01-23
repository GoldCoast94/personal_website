import React from 'react';

interface Props {
  className?: string;
}

export default function 值接收者Vs指针接收者({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">5.2.2 值接收者 vs 指针接收者</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

type Counter struct {
    Count int
}

// 值接收者：不会修改原始值
func (c Counter) IncrementByValue() {
    c.Count++
}

// 指针接收者：会修改原始值
func (c *Counter) IncrementByPointer() {
    c.Count++
}

// 值接收者：返回新值
func (c Counter) Add(n int) Counter {
    c.Count += n
    return c
}

func main() {
    counter := Counter{Count: 0}

    // 值接收者不会修改原始值
    counter.IncrementByValue()
    fmt.Println("After IncrementByValue:", counter.Count)  // 0

    // 指针接收者会修改原始值
    counter.IncrementByPointer()
    fmt.Println("After IncrementByPointer:", counter.Count)  // 1

    // 使用返回新值的方法
    newCounter := counter.Add(10)
    fmt.Println("Original:", counter.Count)     // 1
    fmt.Println("New:", newCounter.Count)       // 11

    // Go会自动转换
    counterPtr := &Counter{Count: 5}
    counterPtr.IncrementByValue()   // Go会自动解引用
    counterPtr.IncrementByPointer() // 直接调用

    fmt.Println("CounterPtr:", counterPtr.Count)  // 6
}`}</code>
      </pre>

      <ul>
        <li>*选择指南：**</li>
        <li>使用指针接收者的情况：</li>
        <li>需要修改接收者</li>
        <li>接收者是大型结构体，避免复制</li>
        <li>需要保持一致性（如果某个方法需要指针接收者，其他方法也应该使用指针接收者）</li>
      </ul>

      <ul>
        <li>使用值接收者的情况：</li>
        <li>不需要修改接收者</li>
        <li>接收者是小型结构体或基本类型</li>
        <li>需要并发安全（值拷贝天然线程安全）</li>
      </ul>

    </div>
  );
}

export const metadata = {
  id: '5-2-2',
  title: '值接收者 vs 指针接收者',
  section: '5.2.2'
};
