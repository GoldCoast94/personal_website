import React from 'react';

interface Props {
  className?: string;
}

export default function TypeConversion({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">2.3.5 Type Conversion</h3>
      <p>Go does not support implicit type conversion; explicit conversion is required:</p>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "strconv"
)

func main() {
    // Numeric type conversion
    var i int = 100
    var f float64 = float64(i)
    var u uint = uint(i)

    fmt.Printf("int: %d, float64: %f, uint: %d\n", i, f, u)

    // Integer to string
    num := 123
    str1 := strconv.Itoa(num)
    str2 := fmt.Sprintf("%d", num)
    fmt.Printf("str1: %s, str2: %s\n", str1, str2)

    // String to integer
    str := "456"
    num2, err := strconv.Atoi(str)
    if err != nil {
        fmt.Println("Conversion failed:", err)
    } else {
        fmt.Println("num2:", num2)
    }

    // String to float
    fstr := "3.14"
    fnum, _ := strconv.ParseFloat(fstr, 64)
    fmt.Println("fnum:", fnum)

    // Boolean to string
    b := true
    bstr := strconv.FormatBool(b)
    fmt.Println("bstr:", bstr)

    // String to boolean
    bstr2 := "true"
    b2, _ := strconv.ParseBool(bstr2)
    fmt.Println("b2:", b2)
}`}</code>
      </pre>
      <p>## 2.4 Operators</p>

    </div>
  );
}

export const metadata = {
  id: '2-3-5',
  title: 'Type Conversion',
  section: '2.3.5'
};
