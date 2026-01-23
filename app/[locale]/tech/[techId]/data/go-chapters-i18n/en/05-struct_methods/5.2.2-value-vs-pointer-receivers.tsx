import React from 'react';

interface Props {
  className?: string;
}

export default function ValueVsPointerReceivers({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">5.2.2 Value Receivers vs Pointer Receivers</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

type Counter struct {
    Count int
}

// Value receiver: does not modify the original value
func (c Counter) IncrementByValue() {
    c.Count++
}

// Pointer receiver: modifies the original value
func (c *Counter) IncrementByPointer() {
    c.Count++
}

// Value receiver: returns new value
func (c Counter) Add(n int) Counter {
    c.Count += n
    return c
}

func main() {
    counter := Counter{Count: 0}

    // Value receiver does not modify original value
    counter.IncrementByValue()
    fmt.Println("After IncrementByValue:", counter.Count)  // 0

    // Pointer receiver modifies original value
    counter.IncrementByPointer()
    fmt.Println("After IncrementByPointer:", counter.Count)  // 1

    // Using method that returns new value
    newCounter := counter.Add(10)
    fmt.Println("Original:", counter.Count)     // 1
    fmt.Println("New:", newCounter.Count)       // 11

    // Go automatically converts
    counterPtr := &Counter{Count: 5}
    counterPtr.IncrementByValue()   // Go automatically dereferences
    counterPtr.IncrementByPointer() // Direct call

    fmt.Println("CounterPtr:", counterPtr.Count)  // 6
}`}</code>
      </pre>

      <ul>
        <li>**Selection Guide:**</li>
        <li>Use pointer receivers when:</li>
        <li>Need to modify the receiver</li>
        <li>Receiver is a large struct, avoid copying</li>
        <li>Need consistency (if one method needs a pointer receiver, other methods should also use pointer receivers)</li>
      </ul>

      <ul>
        <li>Use value receivers when:</li>
        <li>No need to modify the receiver</li>
        <li>Receiver is a small struct or basic type</li>
        <li>Need concurrency safety (value copying is naturally thread-safe)</li>
      </ul>

    </div>
  );
}

export const metadata = {
  id: '5-2-2',
  title: 'Value Receivers vs Pointer Receivers',
  section: '5.2.2'
};
