import React from 'react';

interface Props {
  className?: string;
}

export default function Time时间处理({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">8.6.3 time - 时间处理</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "time"
)

func main() {
    // 当前时间
    now := time.Now()
    fmt.Println(now)

    // 创建时间
    date := time.Date(2024, time.January, 1, 0, 0, 0, 0, time.UTC)
    fmt.Println(date)

    // 格式化时间（使用Go的特殊格式：2006-01-02 15:04:05）
    fmt.Println(now.Format("2006-01-02 15:04:05"))
    fmt.Println(now.Format("2006/01/02"))
    fmt.Println(now.Format("15:04:05"))

    // 解析时间
    t, _ := time.Parse("2006-01-02", "2024-01-01")
    fmt.Println(t)

    // 时间运算
    tomorrow := now.Add(24 * time.Hour)
    fmt.Println(tomorrow)

    // 时间比较
    if tomorrow.After(now) {
        fmt.Println("Tomorrow is after now")
    }

    // 睡眠
    time.Sleep(1 * time.Second)
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '8-6-3',
  title: 'time - 时间处理',
  section: '8.6.3'
};
