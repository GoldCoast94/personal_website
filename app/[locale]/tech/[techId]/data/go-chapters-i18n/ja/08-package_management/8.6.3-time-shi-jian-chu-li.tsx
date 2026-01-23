import React from 'react';

interface Props {
  className?: string;
}

export default function Time時間処理({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">8.6.3 time - 時間処理</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "time"
)

func main() {
    // 現在時刻
    now := time.Now()
    fmt.Println(now)

    // 時刻の作成
    date := time.Date(2024, time.January, 1, 0, 0, 0, 0, time.UTC)
    fmt.Println(date)

    // 時刻のフォーマット（Goの特殊な形式を使用：2006-01-02 15:04:05）
    fmt.Println(now.Format("2006-01-02 15:04:05"))
    fmt.Println(now.Format("2006/01/02"))
    fmt.Println(now.Format("15:04:05"))

    // 時刻の解析
    t, _ := time.Parse("2006-01-02", "2024-01-01")
    fmt.Println(t)

    // 時刻の演算
    tomorrow := now.Add(24 * time.Hour)
    fmt.Println(tomorrow)

    // 時刻の比較
    if tomorrow.After(now) {
        fmt.Println("Tomorrow is after now")
    }

    // スリープ
    time.Sleep(1 * time.Second)
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '8-6-3',
  title: 'time - 時間処理',
  section: '8.6.3'
};
