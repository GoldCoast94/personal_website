import React from 'react';

interface Props {
  className?: string;
}

export default function MapOperations({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">3.3.2 Map Operations</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

func main() {
    // Create map
    scores := map[string]int{
        "Alice": 90,
        "Bob":   85,
        "Carol": 95,
    }

    // Access elements
    fmt.Println("Alice's score:", scores["Alice"])

    // Add/modify elements
    scores["David"] = 88
    scores["Alice"] = 92
    fmt.Println("After modification:", scores)

    // Delete elements
    delete(scores, "Bob")
    fmt.Println("After deleting Bob:", scores)

    // Check if key exists
    value, ok := scores["Bob"]
    if ok {
        fmt.Println("Bob's score:", value)
    } else {
        fmt.Println("Bob does not exist")
    }

    // Iterate over map
    fmt.Println("\nIterating over map:")
    for key, value := range scores {
        fmt.Printf("%s: %d\n", key, value)
    }

    // Iterate over keys only
    fmt.Println("\nIterating over keys only:")
    for key := range scores {
        fmt.Println(key)
    }

    // Iterate over values only
    fmt.Println("\nIterating over values only:")
    for _, value := range scores {
        fmt.Println(value)
    }

    // Map length
    fmt.Println("\nMap length:", len(scores))
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '3-3-2',
  title: 'Map Operations',
  section: '3.3.2'
};
