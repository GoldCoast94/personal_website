import React from 'react';

interface Props {
  className?: string;
}

export default function PassingStrings({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">14.5.2 Passing Strings</h3>

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

    // Convert Go string to C string
    cStr := C.CString(str)
    defer C.free(unsafe.Pointer(cStr))

    // Call C function
    length := C.stringLength(cStr)
    fmt.Printf("String length: %d\n", length)
}`}</code>
      </pre>
      <p>## 14.6 unsafe Package</p>

    </div>
  );
}

export const metadata = {
  id: '14-5-2',
  title: 'Passing Strings',
  section: '14.5.2'
};
