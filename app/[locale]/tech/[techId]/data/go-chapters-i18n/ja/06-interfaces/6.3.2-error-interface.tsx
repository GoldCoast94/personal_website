import React from 'react';

interface Props {
  className?: string;
}

export default function Errorインターフェース({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">6.3.2 Errorインターフェース</h3>
      <p>Goのエラー処理はerrorインターフェースを通じて実装されます。</p>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "time"
)

// Custom error type
type MyError struct {
    When time.Time
    What string
}

// Implement error interface
func (e *MyError) Error() string {
    return fmt.Sprintf("at %v, %s", e.When, e.What)
}

func run() error {
    return &MyError{
        When: time.Now(),
        What: "it didn't work",
    }
}

// More complex error type
type ValidationError struct {
    Field   string
    Message string
}

func (ve ValidationError) Error() string {
    return fmt.Sprintf("validation error on field '%s': %s", ve.Field, ve.Message)
}

func validateAge(age int) error {
    if age < 0 {
        return ValidationError{
            Field:   "age",
            Message: "age cannot be negative",
        }
    }
    if age > 150 {
        return ValidationError{
            Field:   "age",
            Message: "age is unrealistic",
        }
    }
    return nil
}

func main() {
    if err := run(); err != nil {
        fmt.Println(err)
    }

    // Test validation
    if err := validateAge(-5); err != nil {
        fmt.Println("Error:", err)

        // Type assertion to get detailed information
        if ve, ok := err.(ValidationError); ok {
            fmt.Printf("Field: %s, Message: %s\n", ve.Field, ve.Message)
        }
    }

    if err := validateAge(200); err != nil {
        fmt.Println("Error:", err)
    }
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '6-3-2',
  title: 'Errorインターフェース',
  section: '6.3.2'
};
