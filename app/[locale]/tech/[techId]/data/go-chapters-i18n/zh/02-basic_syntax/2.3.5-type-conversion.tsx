import React from 'react';

interface Props {
  className?: string;
}

export default function 类型转换({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">2.3.5 类型转换</h3>
      <p>Go语言不支持隐式类型转换，必须显式转换：</p>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "strconv"
)

func main() {
    // 数值类型转换
    var i int = 100
    var f float64 = float64(i)
    var u uint = uint(i)

    fmt.Printf("int: %d, float64: %f, uint: %d\n", i, f, u)

    // 整数转字符串
    num := 123
    str1 := strconv.Itoa(num)
    str2 := fmt.Sprintf("%d", num)
    fmt.Printf("str1: %s, str2: %s\n", str1, str2)

    // 字符串转整数
    str := "456"
    num2, err := strconv.Atoi(str)
    if err != nil {
        fmt.Println("转换失败:", err)
    } else {
        fmt.Println("num2:", num2)
    }

    // 字符串转浮点数
    fstr := "3.14"
    fnum, _ := strconv.ParseFloat(fstr, 64)
    fmt.Println("fnum:", fnum)

    // 布尔转字符串
    b := true
    bstr := strconv.FormatBool(b)
    fmt.Println("bstr:", bstr)

    // 字符串转布尔
    bstr2 := "true"
    b2, _ := strconv.ParseBool(bstr2)
    fmt.Println("b2:", b2)
}`}</code>
      </pre>
      <p>## 2.4 运算符</p>

    </div>
  );
}

export const metadata = {
  id: '2-3-5',
  title: '类型转换',
  section: '2.3.5'
};
