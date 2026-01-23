import React from 'react';

interface Props {
  className?: string;
}

export default function EmptyInterface({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">6.1.2 Empty Interface</h3>
      <p>The empty interface <code>{'interface{}'}</code> can accept values of any type.</p>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

// Empty interface can accept any type
func PrintAnything(v interface{}) {
    fmt.Printf("Value: %v, Type: %T\n", v, v)
}

func main() {
    PrintAnything(42)
    PrintAnything("hello")
    PrintAnything(3.14)
    PrintAnything(true)
    PrintAnything([]int{1, 2, 3})

    // Using empty interface to store different types of values
    var anything interface{}

    anything = 100
    fmt.Printf("%v, %T\n", anything, anything)

    anything = "string"
    fmt.Printf("%v, %T\n", anything, anything)

    anything = struct{ Name string }{"Go"}
    fmt.Printf("%v, %T\n", anything, anything)
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '6-1-2',
  title: 'Empty Interface',
  section: '6.1.2'
};
