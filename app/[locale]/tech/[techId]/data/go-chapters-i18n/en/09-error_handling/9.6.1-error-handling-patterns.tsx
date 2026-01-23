import React from 'react';

interface Props {
  className?: string;
}

export default function ErrorHandlingPatterns({ className }: Props) {
  return (
    <div className={`section-content \${className || ''}`}>
      <h3 className="section-title">9.6.1 Error Handling Patterns</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "os"
)

// Pattern 1: Early return
func processFile(filename string) error {
    file, err := os.Open(filename)
    if err != nil {
        return fmt.Errorf("failed to open file: %w", err)
    }
    defer file.Close()

    // Process file...
    return nil
}

// Pattern 2: Error variable
func parseData(data []byte) (result int, err error) {
    // Complex parsing logic
    // Use named return values
    if len(data) == 0 {
        err = fmt.Errorf("empty data")
        return
    }

    result = 42
    return
}

// Pattern 3: Error accumulation
type MultiError struct {
    Errors []error
}

func (m *MultiError) Error() string {
    return fmt.Sprintf("%d errors occurred", len(m.Errors))
}

func (m *MultiError) Add(err error) {
    if err != nil {
        m.Errors = append(m.Errors, err)
    }
}

func validateUser(username, email, password string) error {
    var errs MultiError

    if username == "" {
        errs.Add(fmt.Errorf("username is required"))
    }
    if email == "" {
        errs.Add(fmt.Errorf("email is required"))
    }
    if len(password) < 8 {
        errs.Add(fmt.Errorf("password too short"))
    }

    if len(errs.Errors) > 0 {
        return &errs
    }
    return nil
}

func main() {
    if err := validateUser("", "", "123"); err != nil {
        fmt.Println(err)
        if multiErr, ok := err.(*MultiError); ok {
            for i, e := range multiErr.Errors {
                fmt.Printf("  Error %d: %v\\n", i+1, e)
            }
        }
    }
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '9-6-1',
  title: 'Error Handling Patterns',
  section: '9.6.1'
};
