import React from 'react';

interface Props {
  className?: string;
}

export default function HelperFunctions({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">10.3.1 Helper Functions</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import "testing"

func assertEqual(t *testing.T, got, want interface{}) {
    t.Helper()  // Mark as helper function
    if got != want {
        t.Errorf("got %v, want %v", got, want)
    }
}

func assertNoError(t *testing.T, err error) {
    t.Helper()
    if err != nil {
        t.Fatalf("unexpected error: %v", err)
    }
}

func TestWithHelpers(t *testing.T) {
    result := Add(2, 3)
    assertEqual(t, result, 5)

    _, err := Divide(10, 2)
    assertNoError(t, err)
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '10-3-1',
  title: 'Helper Functions',
  section: '10.3.1'
};
