import React from 'react';

interface Props {
  className?: string;
}

export default function SwitchStatement({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">2.5.3 switch Statement</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "time"
)

func main() {
    // Basic usage
    day := 3
    switch day {
    case 1:
        fmt.Println("Monday")
    case 2:
        fmt.Println("Tuesday")
    case 3:
        fmt.Println("Wednesday")
    default:
        fmt.Println("Other")
    }

    // Multiple conditions
    score := 85
    switch {
    case score >= 90:
        fmt.Println("Excellent")
    case score >= 60:
        fmt.Println("Pass")
    default:
        fmt.Println("Fail")
    }

    // With initialization statement
    switch num := 7; num {
    case 1, 3, 5, 7, 9:
        fmt.Println("Odd number")
    case 2, 4, 6, 8:
        fmt.Println("Even number")
    }

    // Type switch
    var x interface{} = "hello"
    switch v := x.(type) {
    case string:
        fmt.Println("String:", v)
    case int:
        fmt.Println("Integer:", v)
    default:
        fmt.Println("Other type")
    }

    // fallthrough: force execution of next case
    switch time.Now().Weekday() {
    case time.Saturday:
        fmt.Println("Today is Saturday")
        fallthrough
    case time.Sunday:
        fmt.Println("Have a nice weekend!")
    }
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '2-5-3',
  title: 'switch Statement',
  section: '2.5.3'
};
