import React from 'react';

interface Props {
  className?: string;
}

export default function MapAsParameters({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">3.3.4 Map as Function Parameters</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

// Map as parameter (passed by reference)
func modifyMap(m map[string]int) {
    m["new"] = 100
    delete(m, "Alice")
}

func main() {
    scores := map[string]int{
        "Alice": 90,
        "Bob":   85,
    }

    fmt.Println("Original map:", scores)
    modifyMap(scores)
    fmt.Println("After calling:", scores)  // Changed
}`}</code>
      </pre>
      <p>## 3.4 String Processing</p>

    </div>
  );
}

export const metadata = {
  id: '3-3-4',
  title: 'Map as Function Parameters',
  section: '3.3.4'
};
