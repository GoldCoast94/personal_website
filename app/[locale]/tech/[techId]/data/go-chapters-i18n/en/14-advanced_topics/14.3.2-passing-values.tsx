import React from 'react';

interface Props {
  className?: string;
}

export default function PassingValues({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">14.3.2 Passing Values</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "context"
    "fmt"
)

type keyType string

const (
    userKey    keyType = "user"
    requestKey keyType = "request_id"
)

func processRequest(ctx context.Context) {
    if user, ok := ctx.Value(userKey).(string); ok {
        fmt.Println("User:", user)
    }

    if reqID, ok := ctx.Value(requestKey).(string); ok {
        fmt.Println("Request ID:", reqID)
    }
}

func main() {
    ctx := context.Background()

    // Add values
    ctx = context.WithValue(ctx, userKey, "alice")
    ctx = context.WithValue(ctx, requestKey, "req-123")

    processRequest(ctx)
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '14-3-2',
  title: 'Passing Values',
  section: '14.3.2'
};
