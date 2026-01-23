import React from 'react';

interface Props {
  className?: string;
}

export default function BasicCGO({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">14.5.1 Basic CGO</h3>

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
    // Call C function
    C.sayHello()

    // Call C function with parameters
    result := C.add(10, 20)
    fmt.Println("Result from C:", result)
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '14-5-1',
  title: 'Basic CGO',
  section: '14.5.1'
};
