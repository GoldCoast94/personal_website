import React from 'react';

interface Props {
  className?: string;
}

export default function VariadicParameters({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">4.1.3 Variadic Parameters</h3>
      <p>Functions can accept a variable number of parameters:</p>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

// Variadic parameter must be the last parameter
func sum(nums ...int) int {
    total := 0
    for _, num := range nums {
        total += num
    }
    return total
}

// Mixing fixed and variadic parameters
func printInfo(prefix string, values ...interface{}) {
    fmt.Print(prefix, ": ")
    for _, v := range values {
        fmt.Print(v, " ")
    }
    fmt.Println()
}

func main() {
    // Pass any number of arguments
    fmt.Println(sum(1, 2, 3))           // 6
    fmt.Println(sum(1, 2, 3, 4, 5))     // 15

    // Pass a slice
    numbers := []int{10, 20, 30}
    fmt.Println(sum(numbers...))        // 60

    // Mixed parameters
    printInfo("Numbers", 1, 2, 3)
    printInfo("Mixed", "hello", 42, true)
}`}</code>
      </pre>
      <p>## 4.2 Advanced Function Features</p>

    </div>
  );
}

export const metadata = {
  id: '4-1-3',
  title: 'Variadic Parameters',
  section: '4.1.3'
};
