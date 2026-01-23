import React from 'react';

interface Props {
  className?: string;
}

export default function Exercise02ErrorWrapping({ className }: Props) {
  return (
    <div className={`section-content \${className || ''}`}>
      <h3 className="section-title">0 Answer 3: Error Wrapping</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "errors"
    "fmt"
)

var ErrDatabase = errors.New("database connection failed")

func connectDatabase() error {
    return ErrDatabase
}

func fetchUserData(userID int) error {
    if err := connectDatabase(); err != nil {
        return fmt.Errorf("failed to fetch user %d: %w", userID, err)
    }
    return nil
}

func processUserRequest(userID int) error {
    if err := fetchUserData(userID); err != nil {
        return fmt.Errorf("request processing failed: %w", err)
    }
    return nil
}

func handleHTTPRequest(userID int) error {
    if err := processUserRequest(userID); err != nil {
        return fmt.Errorf("HTTP handler error: %w", err)
    }
    return nil
}

func main() {
    err := handleHTTPRequest(123)
    if err != nil {
        fmt.Println("Error chain:")
        fmt.Println(err)

        // Check root cause
        if errors.Is(err, ErrDatabase) {
            fmt.Println("\\nRoot cause: database connection issue")
        }

        // Unwrap error chain
        fmt.Println("\\nUnwrapping:")
        for err != nil {
            fmt.Println("  -", err)
            err = errors.Unwrap(err)
        }
    }
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: 'Answer 3: Error Wrapping',
  section: '0'
};
