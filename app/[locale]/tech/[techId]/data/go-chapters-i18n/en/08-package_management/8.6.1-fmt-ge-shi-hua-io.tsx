import React from 'react';

interface Props {
  className?: string;
}

export default function FmtFormattedIO({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">8.6.1 fmt - Formatted I/O</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

func main() {
    // Basic printing
    fmt.Println("Hello, World!")
    fmt.Printf("Name: %s, Age: %d\n", "Alice", 30)

    // Format string
    s := fmt.Sprintf("Temperature: %.2f°C", 23.456)
    fmt.Println(s)

    // Scan input
    var name string
    var age int
    fmt.Print("Enter name and age: ")
    fmt.Scan(&name, &age)
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '8-6-1',
  title: 'fmt - Formatted I/O',
  section: '8.6.1'
};
