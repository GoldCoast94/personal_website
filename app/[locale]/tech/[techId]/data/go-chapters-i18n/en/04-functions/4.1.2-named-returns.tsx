import React from 'react';

interface Props {
  className?: string;
}

export default function NamedReturns({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">4.1.2 Named Return Values</h3>
      <p>Go supports naming return values. Once named, return values are treated as variables defined at the top of the function:</p>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

// Named return values
func calculate(a, b int) (sum int, diff int) {
    sum = a + b
    diff = a - b
    return  // Naked return, automatically returns sum and diff
}

// Named return values can be modified within the function
func divide(dividend, divisor int) (result int, err error) {
    if divisor == 0 {
        err = fmt.Errorf("division by zero")
        return
    }
    result = dividend / divisor
    return
}

func main() {
    sum, diff := calculate(10, 3)
    fmt.Printf("Sum: %d, Diff: %d\n", sum, diff)

    res, err := divide(10, 2)
    if err != nil {
        fmt.Println("Error:", err)
    } else {
        fmt.Println("Result:", res)
    }
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '4-1-2',
  title: 'Named Return Values',
  section: '4.1.2'
};
