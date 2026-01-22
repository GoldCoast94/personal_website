import React from 'react';

interface Props {
  className?: string;
}

export default function Errorsnew({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">9.2.1 errors.New</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "errors"
    "fmt"
)

func validateAge(age int) error {
    if age < 0 {
        return errors.New("age cannot be negative")
    }
    if age > 150 {
        return errors.New("age is too large")
    }
    return nil
}

func main() {
    if err := validateAge(-5); err != nil {
        fmt.Println(err)
    }
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '9-2-1',
  title: 'errors.New',
  section: '9.2.1'
};
