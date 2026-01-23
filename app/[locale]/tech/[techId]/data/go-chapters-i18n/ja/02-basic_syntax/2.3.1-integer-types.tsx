import React from 'react';

interface Props {
  className?: string;
}

export default function 整数型({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">2.3.1 整数型</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "unsafe"
)

func main() {
    // 符号付き整数
    var i8 int8 = 127           // -128 から 127
    var i16 int16 = 32767       // -32768 から 32767
    var i32 int32 = 2147483647  // -2^31 から 2^31-1
    var i64 int64 = 9223372036854775807  // -2^63 から 2^63-1

    // 符号なし整数
    var ui8 uint8 = 255         // 0 から 255
    var ui16 uint16 = 65535     // 0 から 65535
    var ui32 uint32 = 4294967295  // 0 から 2^32-1
    var ui64 uint64 = 18446744073709551615  // 0 から 2^64-1

    // プラットフォーム依存
    var i int = 10       // 32ビットシステムではint32、64ビットシステムではint64
    var ui uint = 20     // 32ビットシステムではuint32、64ビットシステムではuint64

    // 特殊型
    var b byte = 'A'      // uint8のエイリアス
    var r rune = '中'     // int32のエイリアス、Unicodeコードポイントを表すために使用

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
  title: '整数型',
  section: '2.3.1'
};
