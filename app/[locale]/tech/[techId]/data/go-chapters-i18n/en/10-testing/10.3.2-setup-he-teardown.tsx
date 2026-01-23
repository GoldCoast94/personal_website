import React from 'react';

interface Props {
  className?: string;
}

export default function SetupAndTeardown({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">10.3.2 Setup and Teardown</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "os"
    "testing"
)

func TestMain(m *testing.M) {
    // Setup before tests
    setup()

    // Run tests
    code := m.Run()

    // Cleanup after tests
    teardown()

    os.Exit(code)
}

func setup() {
    // Initialize test environment
    println("Setup: preparing test environment")
}

func teardown() {
    // Clean up test environment
    println("Teardown: cleaning up test environment")
}

func TestExample(t *testing.T) {
    // Setup for each test
    t.Cleanup(func() {
        println("Cleaning up after TestExample")
    })

    // Test code
    t.Log("Running TestExample")
}`}</code>
      </pre>
      <p>## 10.4 Benchmarks</p>

    </div>
  );
}

export const metadata = {
  id: '10-3-2',
  title: 'Setup and Teardown',
  section: '10.3.2'
};
