import React from 'react';

interface Props {
  className?: string;
}

export default function StringConcatenation({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">3.4.3 String Concatenation</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "bytes"
    "fmt"
    "strings"
)

func main() {
    // Method 1: + operator (not recommended, inefficient)
    s1 := "Hello" + " " + "World"
    fmt.Println("Method 1:", s1)

    // Method 2: fmt.Sprintf
    s2 := fmt.Sprintf("%s %s", "Hello", "World")
    fmt.Println("Method 2:", s2)

    // Method 3: strings.Join
    parts := []string{"Hello", "World", "Go"}
    s3 := strings.Join(parts, " ")
    fmt.Println("Method 3:", s3)

    // Method 4: strings.Builder (recommended)
    var builder strings.Builder
    builder.WriteString("Hello")
    builder.WriteString(" ")
    builder.WriteString("World")
    s4 := builder.String()
    fmt.Println("Method 4:", s4)

    // Method 5: bytes.Buffer
    var buffer bytes.Buffer
    buffer.WriteString("Hello")
    buffer.WriteString(" ")
    buffer.WriteString("World")
    s5 := buffer.String()
    fmt.Println("Method 5:", s5)
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '3-4-3',
  title: 'String Concatenation',
  section: '3.4.3'
};
