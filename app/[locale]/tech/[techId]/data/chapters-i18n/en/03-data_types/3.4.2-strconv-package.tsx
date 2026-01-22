import React from 'react';

interface Props {
  className?: string;
}

export default function StrconvPackage({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">3.4.2 strconv Package</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "strconv"
)

func main() {
    // Integer to string
    i := 123
    s1 := strconv.Itoa(i)
    s2 := strconv.FormatInt(int64(i), 10)
    fmt.Printf("Itoa: %s, FormatInt: %s\n", s1, s2)

    // String to integer
    str := "456"
    num, _ := strconv.Atoi(str)
    num2, _ := strconv.ParseInt(str, 10, 64)
    fmt.Printf("Atoi: %d, ParseInt: %d\n", num, num2)

    // Float to string
    f := 3.14159
    s3 := strconv.FormatFloat(f, 'f', 2, 64)
    s4 := strconv.FormatFloat(f, 'e', 2, 64)
    fmt.Printf("FormatFloat 'f': %s, 'e': %s\n", s3, s4)

    // String to float
    fstr := "3.14"
    fnum, _ := strconv.ParseFloat(fstr, 64)
    fmt.Printf("ParseFloat: %f\n", fnum)

    // Boolean to string
    b := true
    bstr := strconv.FormatBool(b)
    fmt.Printf("FormatBool: %s\n", bstr)

    // String to boolean
    bstr2 := "false"
    b2, _ := strconv.ParseBool(bstr2)
    fmt.Printf("ParseBool: %v\n", b2)

    // Base conversion
    n := 42
    bin := strconv.FormatInt(int64(n), 2)  // Binary
    oct := strconv.FormatInt(int64(n), 8)  // Octal
    hex := strconv.FormatInt(int64(n), 16) // Hexadecimal
    fmt.Printf("Decimal %d: Binary=%s, Octal=%s, Hex=%s\n", n, bin, oct, hex)
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '3-4-2',
  title: 'strconv Package',
  section: '3.4.2'
};
