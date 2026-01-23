import React from 'react';

interface Props {
  className?: string;
}

export default function MethodChaining({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">5.2.3 Method Chaining</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

type Builder struct {
    str string
}

// All methods return *Builder, supporting chaining
func (b *Builder) Append(s string) *Builder {
    b.str += s
    return b
}

func (b *Builder) AppendInt(n int) *Builder {
    b.str += fmt.Sprintf("%d", n)
    return b
}

func (b *Builder) AppendNewLine() *Builder {
    b.str += "\n"
    return b
}

func (b *Builder) Clear() *Builder {
    b.str = ""
    return b
}

func (b *Builder) String() string {
    return b.str
}

func main() {
    builder := &Builder{}

    // Method chaining
    result := builder.
        Append("Hello, ").
        Append("World!").
        AppendNewLine().
        Append("Number: ").
        AppendInt(42).
        String()

    fmt.Println(result)
}`}</code>
      </pre>
      <p>## 5.3 Struct Embedding</p>

    </div>
  );
}

export const metadata = {
  id: '5-2-3',
  title: 'Method Chaining',
  section: '5.2.3'
};
