import React from 'react';

interface Props {
  className?: string;
}

export default function Recover回復({ className }: Props) {
  return (
    <div className={`section-content \${className || ''}`}>
      <h3 className="section-title">9.5.2 recover による回復</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

func mayPanic() {
    panic("a problem occurred")
}

func safeCall() {
    defer func() {
        if r := recover(); r != nil {
            fmt.Println("Recovered from panic:", r)
        }
    }()

    mayPanic()
    fmt.Println("This won't print")
}

func main() {
    safeCall()
    fmt.Println("Program continues")
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '9-5-2',
  title: 'recover による回復',
  section: '9.5.2'
};
