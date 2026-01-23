import React from 'react';

interface Props {
  className?: string;
}

export default function If语句({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">2.5.1 if语句</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

func main() {
    // 基本用法
    score := 85
    if score >= 90 {
        fmt.Println("优秀")
    } else if score >= 60 {
        fmt.Println("及格")
    } else {
        fmt.Println("不及格")
    }

    // if语句可以包含初始化语句
    if num := 10; num > 0 {
        fmt.Println("num是正数")
    }  // num的作用域仅在if块内

    // 多条件判断
    age := 20
    if age >= 18 && age < 60 {
        fmt.Println("成年人")
    }
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '2-5-1',
  title: 'if语句',
  section: '2.5.1'
};
