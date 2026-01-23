import React from 'react';

interface Props {
  className?: string;
}

export default function Answer03({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 Answer 3</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "time"
)

// Handler interface
type Handler interface {
    Handle(request string) string
}

// Middleware interface
type Middleware func(Handler) Handler

// Logger middleware
func LoggerMiddleware(next Handler) Handler {
    return HandlerFunc(func(request string) string {
        start := time.Now()
        fmt.Printf("[Logger] Request: %s\n", request)
        response := next.Handle(request)
        fmt.Printf("[Logger] Response time: %v\n", time.Since(start))
        return response
    })
}

// Auth middleware
func AuthMiddleware(next Handler) Handler {
    return HandlerFunc(func(request string) string {
        fmt.Println("[Auth] Checking authentication...")
        if request == "unauthorized" {
            return "401 Unauthorized"
        }
        fmt.Println("[Auth] Authentication passed")
        return next.Handle(request)
    })
}

// RateLimit middleware
func RateLimitMiddleware(next Handler) Handler {
    count := 0
    return HandlerFunc(func(request string) string {
        count++
        fmt.Printf("[RateLimit] Request count: %d\n", count)
        if count > 10 {
            return "429 Too Many Requests"
        }
        return next.Handle(request)
    })
}

// Recovery middleware
func RecoveryMiddleware(next Handler) Handler {
    return HandlerFunc(func(request string) string {
        defer func() {
            if err := recover(); err != nil {
                fmt.Printf("[Recovery] Recovered from panic: %v\n", err)
            }
        }()
        return next.Handle(request)
    })
}

// HandlerFunc type
type HandlerFunc func(string) string

func (f HandlerFunc) Handle(request string) string {
    return f(request)
}

// Base handler
type BaseHandler struct{}

func (h BaseHandler) Handle(request string) string {
    return fmt.Sprintf("Processed: %s", request)
}

// Chain middlewares
func Chain(handler Handler, middlewares ...Middleware) Handler {
    for i := len(middlewares) - 1; i >= 0; i-- {
        handler = middlewares[i](handler)
    }
    return handler
}

func main() {
    baseHandler := BaseHandler{}

    // Create handler with middleware chain
    handler := Chain(
        baseHandler,
        RecoveryMiddleware,
        LoggerMiddleware,
        AuthMiddleware,
        RateLimitMiddleware,
    )

    // Test requests
    fmt.Println("\n=== Request 1 ===")
    response1 := handler.Handle("GET /users")
    fmt.Printf("Final response: %s\n", response1)

    fmt.Println("\n=== Request 2 (unauthorized) ===")
    response2 := handler.Handle("unauthorized")
    fmt.Printf("Final response: %s\n", response2)
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: 'Answer 3',
  section: '0'
};
