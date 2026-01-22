import React from 'react';

interface Props {
  className?: string;
}

export default function BooleanType({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">2.3.3 Boolean Type</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

func main() {
    var b1 bool = true
    var b2 bool = false
    var b3 = (10 > 5)  // true

    // Boolean operations
    fmt.Println("AND:", b1 && b2)  // false
    fmt.Println("OR:", b1 || b2)   // true
    fmt.Println("NOT:", !b1)       // false

    // Note: Cannot use numbers to represent boolean values
    // var b4 bool = 1  // Error
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '2-3-3',
  title: 'Boolean Type',
  section: '2.3.3'
};
