import React from 'react';

interface Props {
  className?: string;
}

export default function IntegerTypes({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">2.3.1 Integer Types</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "unsafe"
)

func main() {
    // Signed integers
    var i8 int8 = 127           // -128 to 127
    var i16 int16 = 32767       // -32768 to 32767
    var i32 int32 = 2147483647  // -2^31 to 2^31-1
    var i64 int64 = 9223372036854775807  // -2^63 to 2^63-1

    // Unsigned integers
    var ui8 uint8 = 255         // 0 to 255
    var ui16 uint16 = 65535     // 0 to 65535
    var ui32 uint32 = 4294967295  // 0 to 2^32-1
    var ui64 uint64 = 18446744073709551615  // 0 to 2^64-1

    // Platform-dependent
    var i int = 10       // int32 on 32-bit systems, int64 on 64-bit systems
    var ui uint = 20     // uint32 on 32-bit systems, uint64 on 64-bit systems

    // Special types
    var b byte = 'A'      // Alias for uint8
    var r rune = '中'     // Alias for int32, used to represent Unicode code points

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
  title: 'Integer Types',
  section: '2.3.1'
};
