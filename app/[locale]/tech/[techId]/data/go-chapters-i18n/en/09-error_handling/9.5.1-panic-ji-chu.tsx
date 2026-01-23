import React from 'react';

interface Props {
  className?: string;
}

export default function PanicBasics({ className }: Props) {
  return (
    <div className={`section-content \${className || ''}`}>
      <h3 className="section-title">9.5.1 panic Basics</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

func causePanic() {
    panic("something went wrong!")
}

func main() {
    fmt.Println("Start")
    causePanic()
    fmt.Println("End")  // Will not execute
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '9-5-1',
  title: 'panic Basics',
  section: '9.5.1'
};
