import React from 'react';

interface Props {
  className?: string;
}

export default function 基本的なCGO({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">14.5.1 基本的なCGO</h3>

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
    // C関数を呼び出し
    C.sayHello()

    // パラメータ付きのC関数を呼び出し
    result := C.add(10, 20)
    fmt.Println("Result from C:", result)
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '14-5-1',
  title: '基本的なCGO',
  section: '14.5.1'
};
