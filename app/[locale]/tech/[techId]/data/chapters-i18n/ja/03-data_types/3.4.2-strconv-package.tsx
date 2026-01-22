import React from 'react';

interface Props {
  className?: string;
}

export default function Strconvパッケージ({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">3.4.2 strconvパッケージ</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "strconv"
)

func main() {
    // 整数から文字列へ
    i := 123
    s1 := strconv.Itoa(i)
    s2 := strconv.FormatInt(int64(i), 10)
    fmt.Printf("Itoa: %s, FormatInt: %s\n", s1, s2)

    // 文字列から整数へ
    str := "456"
    num, _ := strconv.Atoi(str)
    num2, _ := strconv.ParseInt(str, 10, 64)
    fmt.Printf("Atoi: %d, ParseInt: %d\n", num, num2)

    // 浮動小数点数から文字列へ
    f := 3.14159
    s3 := strconv.FormatFloat(f, 'f', 2, 64)
    s4 := strconv.FormatFloat(f, 'e', 2, 64)
    fmt.Printf("FormatFloat 'f': %s, 'e': %s\n", s3, s4)

    // 文字列から浮動小数点数へ
    fstr := "3.14"
    fnum, _ := strconv.ParseFloat(fstr, 64)
    fmt.Printf("ParseFloat: %f\n", fnum)

    // ブール値から文字列へ
    b := true
    bstr := strconv.FormatBool(b)
    fmt.Printf("FormatBool: %s\n", bstr)

    // 文字列からブール値へ
    bstr2 := "false"
    b2, _ := strconv.ParseBool(bstr2)
    fmt.Printf("ParseBool: %v\n", b2)

    // 基数変換
    n := 42
    bin := strconv.FormatInt(int64(n), 2)  // 2進数
    oct := strconv.FormatInt(int64(n), 8)  // 8進数
    hex := strconv.FormatInt(int64(n), 16) // 16進数
    fmt.Printf("10進数%d: 2進数=%s, 8進数=%s, 16進数=%s\n", n, bin, oct, hex)
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '3-4-2',
  title: 'strconvパッケージ',
  section: '3.4.2'
};
