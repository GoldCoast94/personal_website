import React from 'react';

interface Props {
  className?: string;
}

export default function Switch文({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">2.5.3 switch文</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "time"
)

func main() {
    // 基本的な使い方
    day := 3
    switch day {
    case 1:
        fmt.Println("月曜日")
    case 2:
        fmt.Println("火曜日")
    case 3:
        fmt.Println("水曜日")
    default:
        fmt.Println("その他")
    }

    // 複数の条件
    score := 85
    switch {
    case score >= 90:
        fmt.Println("優秀")
    case score >= 60:
        fmt.Println("合格")
    default:
        fmt.Println("不合格")
    }

    // 初期化文を含む
    switch num := 7; num {
    case 1, 3, 5, 7, 9:
        fmt.Println("奇数")
    case 2, 4, 6, 8:
        fmt.Println("偶数")
    }

    // 型switch
    var x interface{} = "hello"
    switch v := x.(type) {
    case string:
        fmt.Println("文字列:", v)
    case int:
        fmt.Println("整数:", v)
    default:
        fmt.Println("その他の型")
    }

    // fallthrough：次のcaseを強制実行
    switch time.Now().Weekday() {
    case time.Saturday:
        fmt.Println("今日は土曜日")
        fallthrough
    case time.Sunday:
        fmt.Println("良い週末を！")
    }
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '2-5-3',
  title: 'switch文',
  section: '2.5.3'
};
