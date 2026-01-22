import React from 'react';

interface Props {
  className?: string;
}

export default function VariableScope({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">2.1.2 Variable Scope</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

// Package-level variable (global variable)
var globalVar = "I am global"

func main() {
    // Function-level variable (local variable)
    localVar := "I am local"

    if true {
        // Block-level variable
        blockVar := "I am in block"
        fmt.Println(blockVar)   // Accessible
        fmt.Println(localVar)   // Accessible
        fmt.Println(globalVar)  // Accessible
    }

    // fmt.Println(blockVar)    // Error: blockVar undefined
    fmt.Println(localVar)       // Accessible
    fmt.Println(globalVar)      // Accessible
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '2-1-2',
  title: 'Variable Scope',
  section: '2.1.2'
};
