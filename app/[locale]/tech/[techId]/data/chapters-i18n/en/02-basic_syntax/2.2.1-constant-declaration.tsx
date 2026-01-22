import React from 'react';

interface Props {
  className?: string;
}

export default function ConstantDeclaration({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">2.2.1 Constant Declaration</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

func main() {
    // Single constant
    const PI = 3.14159

    // Batch declaration
    const (
        StatusOK    = 200
        StatusError = 500
    )

    // Typed constants
    const Width int = 100
    const Height int = 200

    // Multiple constants
    const a, b, c = 1, 2, 3

    fmt.Println(PI, StatusOK, StatusError, Width, Height, a, b, c)
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '2-2-1',
  title: 'Constant Declaration',
  section: '2.2.1'
};
