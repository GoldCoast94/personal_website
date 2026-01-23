import React from 'react';

interface Props {
  className?: string;
}

export default function 練習問題04Panic回復ミドルウェア({ className }: Props) {
  return (
    <div className={`section-content \${className || ''}`}>
      <h3 className="section-title">0 答え4：panic回復ミドルウェア</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "log"
    "net/http"
)

func recoveryMiddleware(next http.HandlerFunc) http.HandlerFunc {
    return func(w http.ResponseWriter, r *http.Request) {
        defer func() {
            if err := recover(); err != nil {
                log.Printf("Panic recovered: %v", err)
                http.Error(w, "Internal Server Error", http.StatusInternalServerError)
            }
        }()

        next(w, r)
    }
}

func panicHandler(w http.ResponseWriter, r *http.Request) {
    panic("something went wrong!")
}

func normalHandler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "Hello, World!")
}

func main() {
    http.HandleFunc("/panic", recoveryMiddleware(panicHandler))
    http.HandleFunc("/normal", recoveryMiddleware(normalHandler))

    fmt.Println("Server starting on :8080")
    log.Fatal(http.ListenAndServe(":8080", nil))
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '答え4：panic回復ミドルウェア',
  section: '0'
};
