import React from 'react';

interface Props {
  className?: string;
}

export default function ModifyValues({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">14.1.2 Modifying Values</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "reflect"
)

func main() {
    var x float64 = 3.4

    // Must pass a pointer to modify
    v := reflect.ValueOf(&x)
    fmt.Println("Can set:", v.CanSet())  // false

    // Get the element the pointer points to
    v = v.Elem()
    fmt.Println("Can set:", v.CanSet())  // true

    // Modify the value
    v.SetFloat(7.1)
    fmt.Println("x:", x)  // x: 7.1
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '14-1-2',
  title: 'Modifying Values',
  section: '14.1.2'
};
