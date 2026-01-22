import React from 'react';

interface Props {
  className?: string;
}

export default function 闭包({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">4.2.2 闭包</h3>
      <p>闭包是引用了外部变量的函数：</p>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

// 闭包示例1：计数器
func counter() func() int {
    count := 0
    return func() int {
        count++
        return count
    }
}

// 闭包示例2：累加器
func adder() func(int) int {
    sum := 0
    return func(x int) int {
        sum += x
        return sum
    }
}

// 闭包示例3：生成器
func makeMultiplier(factor int) func(int) int {
    return func(n int) int {
        return n * factor
    }
}

func main() {
    // 使用计数器
    c1 := counter()
    fmt.Println(c1())  // 1
    fmt.Println(c1())  // 2
    fmt.Println(c1())  // 3

    c2 := counter()    // 新的闭包，独立的count
    fmt.Println(c2())  // 1

    // 使用累加器
    acc := adder()
    fmt.Println(acc(1))   // 1
    fmt.Println(acc(2))   // 3
    fmt.Println(acc(3))   // 6

    // 使用生成器
    double := makeMultiplier(2)
    triple := makeMultiplier(3)
    fmt.Println(double(5))  // 10
    fmt.Println(triple(5))  // 15
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '4-2-2',
  title: '闭包',
  section: '4.2.2'
};
