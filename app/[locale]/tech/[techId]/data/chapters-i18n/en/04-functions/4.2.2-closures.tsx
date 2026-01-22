import React from 'react';

interface Props {
  className?: string;
}

export default function Closures({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">4.2.2 Closures</h3>
      <p>A closure is a function that references variables from outside its body:</p>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

// Closure example 1: Counter
func counter() func() int {
    count := 0
    return func() int {
        count++
        return count
    }
}

// Closure example 2: Accumulator
func adder() func(int) int {
    sum := 0
    return func(x int) int {
        sum += x
        return sum
    }
}

// Closure example 3: Generator
func makeMultiplier(factor int) func(int) int {
    return func(n int) int {
        return n * factor
    }
}

func main() {
    // Using counter
    c1 := counter()
    fmt.Println(c1())  // 1
    fmt.Println(c1())  // 2
    fmt.Println(c1())  // 3

    c2 := counter()    // New closure with independent count
    fmt.Println(c2())  // 1

    // Using accumulator
    acc := adder()
    fmt.Println(acc(1))   // 1
    fmt.Println(acc(2))   // 3
    fmt.Println(acc(3))   // 6

    // Using generator
    double := makeMultiplier(2)
    triple := makeMultiplier(3)
    fmt.Println(double(5))  // 10
    fmt.Println(triple(5))  // 15
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '4-2-2',
  title: 'Closures',
  section: '4.2.2'
};
