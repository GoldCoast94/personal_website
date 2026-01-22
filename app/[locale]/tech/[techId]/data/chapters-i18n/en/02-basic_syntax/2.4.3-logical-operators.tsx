import React from 'react';

interface Props {
  className?: string;
}

export default function LogicalOperators({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">2.4.3 Logical Operators</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

func main() {
    a, b := true, false

    fmt.Println("AND (&&):", a && b)  // false
    fmt.Println("OR (||):", a || b)   // true
    fmt.Println("NOT (!):", !a)       // false

    // Short-circuit evaluation
    x := 5
    if x > 0 && x < 10 {
        fmt.Println("x is between 0 and 10")
    }
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '2-4-3',
  title: 'Logical Operators',
  section: '2.4.3'
};
