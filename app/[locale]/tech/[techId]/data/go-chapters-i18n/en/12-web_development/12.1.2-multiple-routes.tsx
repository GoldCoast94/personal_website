import React from 'react';

interface Props {
  className?: string;
}

export default function MultipleRoutes({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">12.1.2 Multiple Routes</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "net/http"
)

func homeHandler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "Welcome to Home Page")
}

func aboutHandler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "About Us")
}

func contactHandler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "Contact: email@example.com")
}

func main() {
    http.HandleFunc("/", homeHandler)
    http.HandleFunc("/about", aboutHandler)
    http.HandleFunc("/contact", contactHandler)

    fmt.Println("Server running on :8080")
    http.ListenAndServe(":8080", nil)
}`}</code>
      </pre>
      <p>## 12.2 Handling HTTP Requests</p>

    </div>
  );
}

export const metadata = {
  id: '12-1-2',
  title: 'Multiple Routes',
  section: '12.1.2'
};
