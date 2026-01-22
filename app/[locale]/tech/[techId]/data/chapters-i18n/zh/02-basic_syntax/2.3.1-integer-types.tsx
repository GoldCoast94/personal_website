import React from 'react';

interface Props {
  className?: string;
}

export default function 整数类型({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">2.3.1 整数类型</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "unsafe"
)

func main() {
    // 有符号整数
    var i8 int8 = 127           // -128 到 127
    var i16 int16 = 32767       // -32768 到 32767
    var i32 int32 = 2147483647  // -2^31 到 2^31-1
    var i64 int64 = 9223372036854775807  // -2^63 到 2^63-1

    // 无符号整数
    var ui8 uint8 = 255         // 0 到 255
    var ui16 uint16 = 65535     // 0 到 65535
    var ui32 uint32 = 4294967295  // 0 到 2^32-1
    var ui64 uint64 = 18446744073709551615  // 0 到 2^64-1

    // 平台相关
    var i int = 10       // 32位系统是int32，64位系统是int64
    var ui uint = 20     // 32位系统是uint32，64位系统是uint64

    // 特殊类型
    var b byte = 'A'      // uint8的别名
    var r rune = '中'     // int32的别名，用于表示Unicode码点

    fmt.Printf("int8: %d, size: %d\n", i8, unsafe.Sizeof(i8))
    fmt.Printf("int16: %d, size: %d\n", i16, unsafe.Sizeof(i16))
    fmt.Printf("int32: %d, size: %d\n", i32, unsafe.Sizeof(i32))
    fmt.Printf("int64: %d, size: %d\n", i64, unsafe.Sizeof(i64))
    fmt.Printf("uint8: %d, size: %d\n", ui8, unsafe.Sizeof(ui8))
    fmt.Printf("int: %d, size: %d\n", i, unsafe.Sizeof(i))
    fmt.Printf("byte: %c (%d)\n", b, b)
    fmt.Printf("rune: %c (%d)\n", r, r)
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '2-3-1',
  title: '整数类型',
  section: '2.3.1'
};
