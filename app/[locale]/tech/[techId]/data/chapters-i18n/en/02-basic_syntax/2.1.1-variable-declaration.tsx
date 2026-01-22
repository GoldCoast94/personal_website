import React from 'react';

interface Props {
  className?: string;
}

export default function VariableDeclaration({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">2.1.1 Variable Declaration</h3>
      <p>Go provides multiple ways to declare variables:</p>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

func main() {
    // Method 1: Standard declaration
    var name string
    name = "Go"

    // Method 2: Declaration with initialization
    var age int = 25

    // Method 3: Type inference
    var city = "Beijing"  // Automatically inferred as string type

    // Method 4: Short variable declaration (only inside functions)
    country := "China"    // Recommended method

    // Method 5: Batch declaration
    var (
        a int
        b string
        c bool
    )

    // Method 6: Batch declaration with initialization
    var x, y, z int = 1, 2, 3

    // Method 7: Multiple variables with different types
    var m, n, o = 1, "hello", true

    fmt.Println(name, age, city, country, a, b, c, x, y, z, m, n, o)
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '2-1-1',
  title: 'Variable Declaration',
  section: '2.1.1'
};
