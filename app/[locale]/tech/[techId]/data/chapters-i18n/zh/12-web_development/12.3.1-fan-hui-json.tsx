import React from 'react';

interface Props {
  className?: string;
}

export default function 返回json({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">12.3.1 返回JSON</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "encoding/json"
    "net/http"
)

type User struct {
    ID    int    <code>json:"id"</code>
    Name  string <code>json:"name"</code>
    Email string <code>json:"email"</code>
}

func getUsersHandler(w http.ResponseWriter, r *http.Request) {
    users := []User{
        {ID: 1, Name: "Alice", Email: "alice@example.com"},
        {ID: 2, Name: "Bob", Email: "bob@example.com"},
    }

    w.Header().Set("Content-Type", "application/json")
    json.NewEncoder(w).Encode(users)
}

func main() {
    http.HandleFunc("/api/users", getUsersHandler)
    http.ListenAndServe(":8080", nil)
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '12-3-1',
  title: '返回JSON',
  section: '12.3.1'
};
