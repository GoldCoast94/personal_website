import React from 'react';

interface Props {
  className?: string;
}

export default function ミドルウェア({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">12.4.2 ミドルウェア</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "log"
    "net/http"
    "time"
)

// ログミドルウェア
func loggingMiddleware(next http.Handler) http.Handler {
    return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
        start := time.Now()

        next.ServeHTTP(w, r)

        log.Printf(
            "%s %s %s",
            r.Method,
            r.RequestURI,
            time.Since(start),
        )
    })
}

// 認証ミドルウェア
func authMiddleware(next http.Handler) http.Handler {
    return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
        token := r.Header.Get("Authorization")

        if token != "secret-token" {
            http.Error(w, "Unauthorized", http.StatusUnauthorized)
            return
        }

        next.ServeHTTP(w, r)
    })
}

// CORSミドルウェア
func corsMiddleware(next http.Handler) http.Handler {
    return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
        w.Header().Set("Access-Control-Allow-Origin", "*")
        w.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
        w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")

        if r.Method == "OPTIONS" {
            w.WriteHeader(http.StatusOK)
            return
        }

        next.ServeHTTP(w, r)
    })
}

func mainHandler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "Hello from protected route!")
}

func main() {
    mux := http.NewServeMux()
    mux.HandleFunc("/", mainHandler)

    // ミドルウェアを適用
    handler := loggingMiddleware(corsMiddleware(authMiddleware(mux)))

    http.ListenAndServe(":8080", handler)
}`}</code>
      </pre>
      <p>## 12.5 ファイルのアップロードとダウンロード</p>

    </div>
  );
}

export const metadata = {
  id: '12-4-2',
  title: 'ミドルウェア',
  section: '12.4.2'
};
