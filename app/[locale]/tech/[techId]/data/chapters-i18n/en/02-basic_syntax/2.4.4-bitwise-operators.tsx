import React from 'react';

interface Props {
  className?: string;
}

export default function BitwiseOperators({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">2.4.4 Bitwise Operators</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

func main() {
    a, b := 60, 13  // Binary: a = 0011 1100, b = 0000 1101

    fmt.Printf("AND (&): %d\n", a&b)    // 12 = 0000 1100
    fmt.Printf("OR (|): %d\n", a|b)    // 61 = 0011 1101
    fmt.Printf("XOR (^): %d\n", a^b)  // 49 = 0011 0001
    fmt.Printf("Left shift (<<): %d\n", a<<2)  // 240 = 1111 0000
    fmt.Printf("Right shift (>>): %d\n", a>>2)  // 15 = 0000 1111

    // Bitwise NOT (unary operator)
    fmt.Printf("NOT (^): %d\n", ^a)  // -61

    // Bit clear
    fmt.Printf("Bit clear (&^): %d\n", a&^b)  // 48 = 0011 0000
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '2-4-4',
  title: 'Bitwise Operators',
  section: '2.4.4'
};
