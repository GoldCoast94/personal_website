import React from 'react';

interface Props {
  className?: string;
}

export default function WhatIsPackage({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">8.1.1 What is a Package</h3>
      <p>A package is the basic unit for organizing code in Go. Every Go source file belongs to a package, and packages provide code modularity and reusability.</p>

      <pre className="code-block">
        <code className="language-go">{`// Declare package name at the beginning of the file
package main

import "fmt"

func main() {
    fmt.Println("Hello, Package!")
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '8-1-1',
  title: 'What is a Package',
  section: '8.1.1'
};
