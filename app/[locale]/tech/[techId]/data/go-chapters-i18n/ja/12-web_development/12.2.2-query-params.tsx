import React from 'react';

interface Props {
  className?: string;
}

export default function クエリパラメータ({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">12.2.2 クエリパラメータ</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "net/http"
)

func searchHandler(w http.ResponseWriter, r *http.Request) {
    // URLクエリパラメータを取得
    query := r.URL.Query()

    // 個別のパラメータを取得
    keyword := query.Get("q")
    page := query.Get("page")

    fmt.Fprintf(w, "Search keyword: %s\n", keyword)
    fmt.Fprintf(w, "Page: %s\n", page)

    // すべての値を取得
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
  title: 'クエリパラメータ',
  section: '12.2.2'
};
