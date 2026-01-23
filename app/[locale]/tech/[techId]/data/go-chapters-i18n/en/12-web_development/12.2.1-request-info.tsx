import React from 'react';

interface Props {
  className?: string;
}

export default function RequestInfo({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">12.2.1 Request Information</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "net/http"
)

func requestInfoHandler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "Method: %s\n", r.Method)
    fmt.Fprintf(w, "URL: %s\n", r.URL)
    fmt.Fprintf(w, "Protocol: %s\n", r.Proto)
    fmt.Fprintf(w, "Host: %s\n", r.Host)
    fmt.Fprintf(w, "Remote Address: %s\n", r.RemoteAddr)

    fmt.Fprintf(w, "\nHeaders:\n")
    for key, values := range r.Header {
        for _, value := range values {
            fmt.Fprintf(w, "%s: %s\n", key, value)
        }
    }
}

func main() {
    http.HandleFunc("/info", requestInfoHandler)
    http.ListenAndServe(":8080", nil)
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '12-2-1',
  title: 'Request Information',
  section: '12.2.1'
};
