import React from 'react';

interface Props {
  className?: string;
}

export default function ForLoop({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">2.5.2 for Loop</h3>
      <p>Go has only for loops, no while loops:</p>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

func main() {
    // Standard for loop
    for i := 0; i < 5; i++ {
        fmt.Println(i)
    }

    // while-style
    j := 0
    for j < 5 {
        fmt.Println(j)
        j++
    }

    // Infinite loop
    k := 0
    for {
        if k >= 3 {
            break
        }
        fmt.Println(k)
        k++
    }

    // for range iteration
    nums := []int{1, 2, 3, 4, 5}
    for index, value := range nums {
        fmt.Printf("Index:%d, Value:%d\n", index, value)
    }

    // Index only
    for index := range nums {
        fmt.Println("Index:", index)
    }

    // Value only
    for _, value := range nums {
        fmt.Println("Value:", value)
    }

    // continue and break
    for i := 0; i < 10; i++ {
        if i%2 == 0 {
            continue  // Skip even numbers
        }
        if i > 7 {
            break  // Exit when greater than 7
        }
        fmt.Println(i)
    }
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '2-5-2',
  title: 'for Loop',
  section: '2.5.2'
};
