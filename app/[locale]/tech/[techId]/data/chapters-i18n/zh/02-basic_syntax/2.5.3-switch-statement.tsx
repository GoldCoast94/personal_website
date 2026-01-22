import React from 'react';

interface Props {
  className?: string;
}

export default function Switch语句({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">2.5.3 switch语句</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "time"
)

func main() {
    // 基本用法
    day := 3
    switch day {
    case 1:
        fmt.Println("星期一")
    case 2:
        fmt.Println("星期二")
    case 3:
        fmt.Println("星期三")
    default:
        fmt.Println("其他")
    }

    // 多个条件
    score := 85
    switch {
    case score >= 90:
        fmt.Println("优秀")
    case score >= 60:
        fmt.Println("及格")
    default:
        fmt.Println("不及格")
    }

    // 包含初始化语句
    switch num := 7; num {
    case 1, 3, 5, 7, 9:
        fmt.Println("奇数")
    case 2, 4, 6, 8:
        fmt.Println("偶数")
    }

    // 类型switch
    var x interface{} = "hello"
    switch v := x.(type) {
    case string:
        fmt.Println("字符串:", v)
    case int:
        fmt.Println("整数:", v)
    default:
        fmt.Println("其他类型")
    }

    // fallthrough：强制执行下一个case
    switch time.Now().Weekday() {
    case time.Saturday:
        fmt.Println("今天是周六")
        fallthrough
    case time.Sunday:
        fmt.Println("周末愉快！")
    }
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '2-5-3',
  title: 'switch语句',
  section: '2.5.3'
};
