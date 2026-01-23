import React from 'react';

interface Props {
  className?: string;
}

export default function AnonymousVariables({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">2.1.4 Anonymous Variables</h3>
      <p>Use <code>_</code> to represent anonymous variables for ignoring unwanted values:</p>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

func getInfo() (string, int) {
    return "Alice", 25
}

func main() {
    // Only need name, ignore age
    name, _ := getInfo()
    fmt.Println("Name:", name)

    // Only need age, ignore name
    _, age := getInfo()
    fmt.Println("Age:", age)
}`}</code>
      </pre>
      <p>## 2.2 Constants</p>

    </div>
  );
}

export const metadata = {
  id: '2-1-4',
  title: 'Anonymous Variables',
  section: '2.1.4'
};
