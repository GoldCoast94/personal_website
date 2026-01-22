import React from 'react';

interface Props {
  className?: string;
}

export default function CodeOrganization({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">1.5.3 Code Organization</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    // Standard library
    "fmt"
    "os"

    // Third-party libraries
    "github.com/gin-gonic/gin"

    // Local packages
    "myproject/models"
)

// Constant group
const (
    StatusOK = 200
    StatusError = 500
)

// Variable group
var (
    count int
    name  string
)

// Type definition
type Config struct {
    Port int
    Host string
}

// init function
func init() {
    // Initialization operations
}

// main function
func main() {
    // Program entry point
}

// Other functions
func helper() {
    // Helper function
}`}</code>
      </pre>
      <p>## 1.6 Exercises</p>

    </div>
  );
}

export const metadata = {
  id: '1-5-3',
  title: 'Code Organization',
  section: '1.5.3'
};
