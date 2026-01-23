import React from 'react';

interface Props {
  className?: string;
}

export default function MapDefinition({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">3.3.1 Map Definition</h3>
      <p>A Map is an unordered collection of key-value pairs.</p>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

func main() {
    // Method 1: Create using make
    var map1 = make(map[string]int)
    map1["apple"] = 10
    map1["banana"] = 20

    // Method 2: Literal initialization
    map2 := map[string]int{
        "apple":  10,
        "banana": 20,
        "orange": 30,
    }

    // Method 3: Empty map
    map3 := map[string]int{}

    fmt.Println("map1:", map1)
    fmt.Println("map2:", map2)
    fmt.Println("map3:", map3)

    // Note: nil map cannot be used directly
    var map4 map[string]int
    fmt.Println("map4 is nil:", map4 == nil)
    // map4["key"] = 1  // This will panic
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '3-3-1',
  title: 'Map Definition',
  section: '3.3.1'
};
