import React from 'react';

interface Props {
  className?: string;
}

export default function Strconv包({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">3.4.2 strconv包</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "strconv"
)

func main() {
    // 整数转字符串
    i := 123
    s1 := strconv.Itoa(i)
    s2 := strconv.FormatInt(int64(i), 10)
    fmt.Printf("Itoa: %s, FormatInt: %s\n", s1, s2)

    // 字符串转整数
    str := "456"
    num, _ := strconv.Atoi(str)
    num2, _ := strconv.ParseInt(str, 10, 64)
    fmt.Printf("Atoi: %d, ParseInt: %d\n", num, num2)

    // 浮点数转字符串
    f := 3.14159
    s3 := strconv.FormatFloat(f, 'f', 2, 64)
    s4 := strconv.FormatFloat(f, 'e', 2, 64)
    fmt.Printf("FormatFloat 'f': %s, 'e': %s\n", s3, s4)

    // 字符串转浮点数
    fstr := "3.14"
    fnum, _ := strconv.ParseFloat(fstr, 64)
    fmt.Printf("ParseFloat: %f\n", fnum)

    // 布尔转字符串
    b := true
    bstr := strconv.FormatBool(b)
    fmt.Printf("FormatBool: %s\n", bstr)

    // 字符串转布尔
    bstr2 := "false"
    b2, _ := strconv.ParseBool(bstr2)
    fmt.Printf("ParseBool: %v\n", b2)

    // 进制转换
    n := 42
    bin := strconv.FormatInt(int64(n), 2)  // 二进制
    oct := strconv.FormatInt(int64(n), 8)  // 八进制
    hex := strconv.FormatInt(int64(n), 16) // 十六进制
    fmt.Printf("十进制%d: 二进制=%s, 八进制=%s, 十六进制=%s\n", n, bin, oct, hex)
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '3-4-2',
  title: 'strconv包',
  section: '3.4.2'
};
