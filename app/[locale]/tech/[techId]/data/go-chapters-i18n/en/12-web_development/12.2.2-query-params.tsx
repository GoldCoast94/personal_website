import React from 'react';

interface Props {
  className?: string;
}

export default function QueryParams({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">12.2.2 Query Parameters</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "net/http"
)

func searchHandler(w http.ResponseWriter, r *http.Request) {
    // Get URL query parameters
    query := r.URL.Query()

    // Get individual parameters
    keyword := query.Get("q")
    page := query.Get("page")

    fmt.Fprintf(w, "Search keyword: %s\n", keyword)
    fmt.Fprintf(w, "Page: %s\n", page)

    // Get all values
    if categories, ok := query["category"]; ok {
        fmt.Fprintf(w, "Categories: %v\n", categories)
    }
}

func main() {
    http.HandleFunc("/search", searchHandler)
    fmt.Println("Visit: http://localhost:8080/search?q=golang&page=1")
    http.ListenAndServe(":8080", nil)
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '12-2-2',
  title: 'Query Parameters',
  section: '12.2.2'
};
