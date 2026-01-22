import React from 'react';

interface Props {
  className?: string;
}

export default function ProgramStructure({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">1.3.3 Program Structure</h3>
      <p>A standard Go program contains:</p>

      <pre className="code-block">
        <code className="language-go">{`// 1. Package declaration (required)
package main

// 2. Import packages
import (
    "fmt"
    "math"
)

// 3. Constants definition
const PI = 3.14159

// 4. Variables definition
var name string = "Go"

// 5. Type definition
type Person struct {
    Name string
    Age  int
}

// 6. Function definition
func main() {
    fmt.Println("Hello, Go!")
}

// 7. init function (optional, automatically executes before main)
func init() {
    fmt.Println("Initializing...")
}`}</code>
      </pre>
      <p>## 1.4 Go Commands Explained</p>

    </div>
  );
}

export const metadata = {
  id: '1-3-3',
  title: 'Program Structure',
  section: '1.3.3'
};
