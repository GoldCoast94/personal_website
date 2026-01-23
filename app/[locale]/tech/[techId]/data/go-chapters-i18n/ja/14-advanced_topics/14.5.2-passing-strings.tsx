import React from 'react';

interface Props {
  className?: string;
}

export default function 文字列の受け渡し({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">14.5.2 文字列の受け渡し</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

/*
#include <string.h>

int stringLength(char* str) {
    return strlen(str);
}
*/
import "C"
import (
    "fmt"
    "unsafe"
)

func main() {
    str := "Hello, CGO!"

    // Go文字列をC文字列に変換
    cStr := C.CString(str)
    defer C.free(unsafe.Pointer(cStr))

    // C関数を呼び出し
    length := C.stringLength(cStr)
    fmt.Printf("String length: %d\n", length)
}`}</code>
      </pre>
      <p>## 14.6 unsafeパッケージ</p>

    </div>
  );
}

export const metadata = {
  id: '14-5-2',
  title: '文字列の受け渡し',
  section: '14.5.2'
};
