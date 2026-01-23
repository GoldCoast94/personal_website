import React from 'react';

interface Props {
  className?: string;
}

export default function TypeAssertion({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">6.1.3 Type Assertion</h3>
      <p>Type assertion is used to obtain the underlying concrete value of an interface value.</p>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

func main() {
    var i interface{} = "hello"

    // Type assertion
    s := i.(string)
    fmt.Println(s)  // hello

    // Safe type assertion (with check)
    s, ok := i.(string)
    if ok {
        fmt.Println("String:", s)
    }

    n, ok := i.(int)
    if !ok {
        fmt.Println("Not an int")
    } else {
        fmt.Println("Int:", n)
    }

    // Unsafe type assertion (will panic)
    // n := i.(int)  // panic: interface conversion
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '6-1-3',
  title: 'Type Assertion',
  section: '6.1.3'
};
