import React from 'react';

interface Props {
  className?: string;
}

export default function NamedExamples({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">10.5.2 Named Examples</h3>

      <pre className="code-block">
        <code className="language-go">{`package calculator

import "fmt"

func ExampleAdd_positive() {
    fmt.Println(Add(2, 3))
    // Output: 5
}

func ExampleAdd_negative() {
    fmt.Println(Add(-2, -3))
    // Output: -5
}`}</code>
      </pre>
      <p>## 10.6 Mocking and Interfaces</p>

    </div>
  );
}

export const metadata = {
  id: '10-5-2',
  title: 'Named Examples',
  section: '10.5.2'
};
