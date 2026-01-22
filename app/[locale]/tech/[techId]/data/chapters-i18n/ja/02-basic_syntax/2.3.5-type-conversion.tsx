import React from 'react';

interface Props {
  className?: string;
}

export default function 型変換({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">2.3.5 型変換</h3>
      <p>Go言語は暗黙的な型変換をサポートしておらず、明示的な変換が必要です：</p>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "strconv"
)

func main() {
    // 数値型の変換
    var i int = 100
    var f float64 = float64(i)
    var u uint = uint(i)

    fmt.Printf("int: %d, float64: %f, uint: %d\n", i, f, u)

    // 整数から文字列
    num := 123
    str1 := strconv.Itoa(num)
    str2 := fmt.Sprintf("%d", num)
    fmt.Printf("str1: %s, str2: %s\n", str1, str2)

    // 文字列から整数
    str := "456"
    num2, err := strconv.Atoi(str)
    if err != nil {
        fmt.Println("変換に失敗しました:", err)
    } else {
        fmt.Println("num2:", num2)
    }

    // 文字列から浮動小数点数
    fstr := "3.14"
    fnum, _ := strconv.ParseFloat(fstr, 64)
    fmt.Println("fnum:", fnum)

    // ブールから文字列
    b := true
    bstr := strconv.FormatBool(b)
    fmt.Println("bstr:", bstr)

    // 文字列からブール
    bstr2 := "true"
    b2, _ := strconv.ParseBool(bstr2)
    fmt.Println("b2:", b2)
}`}</code>
      </pre>
      <p>## 2.4 演算子</p>

    </div>
  );
}

export const metadata = {
  id: '2-3-5',
  title: '型変換',
  section: '2.3.5'
};
