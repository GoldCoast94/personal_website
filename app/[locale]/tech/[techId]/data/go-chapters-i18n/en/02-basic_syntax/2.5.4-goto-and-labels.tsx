import React from 'react';

interface Props {
  className?: string;
}

export default function GotoAndLabels({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">2.5.4 goto and Labels</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

func main() {
    // goto jump
    i := 0
Loop:
    if i < 5 {
        fmt.Println(i)
        i++
        goto Loop
    }

    // break with label
    fmt.Println("break label example:")
OuterLoop:
    for i := 0; i < 3; i++ {
        for j := 0; j < 3; j++ {
            if i == 1 && j == 1 {
                break OuterLoop  // Break out of outer loop
            }
            fmt.Printf("i=%d, j=%d\n", i, j)
        }
    }

    // continue with label
    fmt.Println("continue label example:")
Outer:
    for i := 0; i < 3; i++ {
        for j := 0; j < 3; j++ {
            if j == 1 {
                continue Outer  // Continue outer loop
            }
            fmt.Printf("i=%d, j=%d\n", i, j)
        }
    }
}`}</code>
      </pre>
      <p>## 2.6 Exercises</p>

    </div>
  );
}

export const metadata = {
  id: '2-5-4',
  title: 'goto and Labels',
  section: '2.5.4'
};
