import React from 'react';

interface Props {
  className?: string;
}

export default function 基本cgo({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">14.5.1 基本CGO</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

/*
#include <stdio.h>
#include <stdlib.h>

void sayHello() {
    printf("Hello from C!\n");
}

int add(int a, int b) {
    return a + b;
}
*/
import "C"
import "fmt"

func main() {
    // 调用C函数
    C.sayHello()

    // 调用带参数的C函数
    result := C.add(10, 20)
    fmt.Println("Result from C:", result)
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '14-5-1',
  title: '基本CGO',
  section: '14.5.1'
};
