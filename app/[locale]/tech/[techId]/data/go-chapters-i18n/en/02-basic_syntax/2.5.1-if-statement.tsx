import React from 'react';

interface Props {
  className?: string;
}

export default function IfStatement({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">2.5.1 if Statement</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

func main() {
    // Basic usage
    score := 85
    if score >= 90 {
        fmt.Println("Excellent")
    } else if score >= 60 {
        fmt.Println("Pass")
    } else {
        fmt.Println("Fail")
    }

    // if statement can contain initialization statement
    if num := 10; num > 0 {
        fmt.Println("num is positive")
    }  // num's scope is only within the if block

    // Multiple conditions
    age := 20
    if age >= 18 && age < 60 {
        fmt.Println("Adult")
    }
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '2-5-1',
  title: 'if Statement',
  section: '2.5.1'
};
