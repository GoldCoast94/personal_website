import React from 'react';

interface Props {
  className?: string;
}

export default function ReceivingJSON({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">12.3.2 Receiving JSON</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "encoding/json"
    "fmt"
    "net/http"
)

type CreateUserRequest struct {
    Name  string \`json:"name"\`
    Email string \`json:"email"\`
}

type Response struct {
    Success bool   \`json:"success"\`
    Message string \`json:"message"\`
    Data    interface{} \`json:"data,omitempty"\`
}

func createUserHandler(w http.ResponseWriter, r *http.Request) {
    if r.Method != http.MethodPost {
        w.WriteHeader(http.StatusMethodNotAllowed)
        return
    }

    var req CreateUserRequest
    if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
        w.WriteHeader(http.StatusBadRequest)
        json.NewEncoder(w).Encode(Response{
            Success: false,
            Message: "Invalid JSON",
        })
        return
    }

    // Create user (simulated)
    user := User{
        ID:    1,
        Name:  req.Name,
        Email: req.Email,
    }

    w.Header().Set("Content-Type", "application/json")
    w.WriteHeader(http.StatusCreated)
    json.NewEncoder(w).Encode(Response{
        Success: true,
        Message: "User created successfully",
        Data:    user,
    })
}

func main() {
    http.HandleFunc("/api/users", createUserHandler)
    fmt.Println("Server running on :8080")
    http.ListenAndServe(":8080", nil)
}`}</code>
      </pre>
      <p>## 12.4 Routing and Middleware</p>

    </div>
  );
}

export const metadata = {
  id: '12-3-2',
  title: 'Receiving JSON',
  section: '12.3.2'
};
