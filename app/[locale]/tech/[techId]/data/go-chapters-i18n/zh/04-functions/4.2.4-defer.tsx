import React from 'react';

interface Props {
  className?: string;
}

export default function 延迟调用defer({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">4.2.4 延迟调用（defer）</h3>
      <p>defer语句会延迟函数的执行直到外层函数返回：</p>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "os"
)

func example1() {
    fmt.Println("Start")
    defer fmt.Println("End")  // 最后执行
    fmt.Println("Middle")
}

// 多个defer按照后进先出（LIFO）的顺序执行
func example2() {
    defer fmt.Println("1")
    defer fmt.Println("2")
    defer fmt.Println("3")
    fmt.Println("Start")
    // 输出：Start 3 2 1
}

// defer在函数返回后执行
func example3() int {
    x := 10
    defer func() {
        x = 20  // 修改x
    }()
    return x  // 返回10，因为return在defer之前执行
}

// defer访问命名返回值
func example4() (result int) {
    defer func() {
        result = 20  // 修改命名返回值
    }()
    return 10  // 返回20，因为defer修改了result
}

// defer的实际应用：资源清理
func readFile(filename string) error {
    file, err := os.Open(filename)
    if err != nil {
        return err
    }
    defer file.Close()  // 确保文件被关闭

    // 读取文件...
    // 无论函数如何退出，file.Close()都会被调用

    return nil
}

// defer捕获panic
func safeDivide(a, b int) {
    defer func() {
        if r := recover(); r != nil {
            fmt.Println("Recovered from panic:", r)
        }
    }()

    if b == 0 {
        panic("division by zero")
    }

    result := a / b
    fmt.Println("Result:", result)
}

func main() {
    example1()
    fmt.Println()

    example2()
    fmt.Println()

    fmt.Println("example3 returns:", example3())
    fmt.Println("example4 returns:", example4())
    fmt.Println()

    safeDivide(10, 2)
    safeDivide(10, 0)
    fmt.Println("Program continues...")
}`}</code>
      </pre>
      <p>## 4.3 函数类型和接口</p>

    </div>
  );
}

export const metadata = {
  id: '4-2-4',
  title: '延迟调用（defer）',
  section: '4.2.4'
};
