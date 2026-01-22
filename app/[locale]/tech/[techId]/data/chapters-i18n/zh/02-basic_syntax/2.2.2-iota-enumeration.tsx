import React from 'react';

interface Props {
  className?: string;
}

export default function Iota枚举({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">2.2.2 iota枚举</h3>
      <p><code>iota</code>是Go语言的常量计数器，从0开始，每行递增1：</p>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

func main() {
    // 基本用法
    const (
        a = iota  // 0
        b         // 1
        c         // 2
    )

    // 从1开始
    const (
        January = iota + 1  // 1
        February            // 2
        March               // 3
    )

    // 跳过某些值
    const (
        x = iota  // 0
        y         // 1
        _         // 2（跳过）
        z         // 3
    )

    // 位运算
    const (
        ReadPerm   = 1 << iota  // 1 << 0 = 1
        WritePerm               // 1 << 1 = 2
        ExecutePerm             // 1 << 2 = 4
    )

    // 表达式
    const (
        KB = 1 << (10 * iota)  // 1 << 0 = 1
        MB                      // 1 << 10 = 1024
        GB                      // 1 << 20 = 1048576
        TB                      // 1 << 30 = 1073741824
    )

    fmt.Println(a, b, c)
    fmt.Println(January, February, March)
    fmt.Println(x, y, z)
    fmt.Println(ReadPerm, WritePerm, ExecutePerm)
    fmt.Println(KB, MB, GB, TB)
}`}</code>
      </pre>
      <p>## 2.3 基本数据类型</p>

    </div>
  );
}

export const metadata = {
  id: '2-2-2',
  title: 'iota枚举',
  section: '2.2.2'
};
