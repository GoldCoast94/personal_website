import React from 'react';

interface Props {
  className?: string;
}

export default function LoggingMiddlewareMiddlewareloggergo({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">15.1.9 Logging Middleware (middleware/logger.go)</h3>

      <pre className="code-block">
        <code className="language-go">{`package middleware

import (
    "log"
    "net/http"
    "time"
)

type responseWriter struct {
    http.ResponseWriter
    statusCode int
}

func (rw *responseWriter) WriteHeader(code int) {
    rw.statusCode = code
    rw.ResponseWriter.WriteHeader(code)
}

func LoggerMiddleware(next http.Handler) http.Handler {
    return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
        start := time.Now()

        rw := &responseWriter{w, http.StatusOK}
        next.ServeHTTP(rw, r)

        log.Printf(
            "%s %s %d %s",
            r.Method,
            r.RequestURI,
            rw.statusCode,
            time.Since(start),
        )
    })
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '15-1-9',
  title: 'Logging Middleware (middleware/logger.go)',
  section: '15.1.9'
};
