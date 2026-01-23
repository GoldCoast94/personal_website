import React from 'react';

interface Props {
  className?: string;
}

export default function 传递字符串({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">14.5.2 传递字符串</h3>

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

    // Go字符串转C字符串
    cStr := C.CString(str)
    defer C.free(unsafe.Pointer(cStr))

    // 调用C函数
    length := C.stringLength(cStr)
    fmt.Printf("String length: %d\n", length)
}`}</code>
      </pre>
      <p>## 14.6 unsafe包</p>

    </div>
  );
}

export const metadata = {
  id: '14-5-2',
  title: '传递字符串',
  section: '14.5.2'
};
