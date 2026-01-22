import React from 'react';

interface Props {
  className?: string;
}

export default function Fmterrorf({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">9.2.2 fmt.Errorf</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
)

func processUser(id int, name string) error {
    if name == "" {
        return fmt.Errorf("user %d has empty name", id)
    }
    return nil
}

func main() {
    err := processUser(123, "")
    if err != nil {
        fmt.Println(err)  // user 123 has empty name
    }
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '9-2-2',
  title: 'fmt.Errorf',
  section: '9.2.2'
};
