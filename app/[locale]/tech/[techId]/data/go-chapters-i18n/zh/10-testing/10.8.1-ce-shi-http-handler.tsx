import React from 'react';

interface Props {
  className?: string;
}

export default function 测试httpHandler({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">10.8.1 测试HTTP Handler</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "encoding/json"
    "net/http"
)

type User struct {
    ID   int    <code>json:"id"</code>
    Name string <code>json:"name"</code>
}

func UserHandler(w http.ResponseWriter, r *http.Request) {
    if r.Method != http.MethodGet {
        http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
        return
    }

    user := User{ID: 1, Name: "Alice"}
    w.Header().Set("Content-Type", "application/json")
    json.NewEncoder(w).Encode(user)
}`}</code>
      </pre>

      <ul>
        <li>*测试代码:**</li>
      </ul>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "encoding/json"
    "net/http"
    "net/http/httptest"
    "testing"
)

func TestUserHandler(t *testing.T) {
    req := httptest.NewRequest(http.MethodGet, "/user", nil)
    w := httptest.NewRecorder()

    UserHandler(w, req)

    resp := w.Result()
    defer resp.Body.Close()

    // 检查状态码
    if resp.StatusCode != http.StatusOK {
        t.Errorf("got status %d, want %d", resp.StatusCode, http.StatusOK)
    }

    // 检查Content-Type
    contentType := resp.Header.Get("Content-Type")
    if contentType != "application/json" {
        t.Errorf("got content-type %s, want application/json", contentType)
    }

    // 检查响应体
    var user User
    if err := json.NewDecoder(resp.Body).Decode(&user); err != nil {
        t.Fatalf("failed to decode response: %v", err)
    }

    if user.ID != 1 || user.Name != "Alice" {
        t.Errorf("got user %+v, want {ID:1 Name:Alice}", user)
    }
}

func TestUserHandlerMethodNotAllowed(t *testing.T) {
    req := httptest.NewRequest(http.MethodPost, "/user", nil)
    w := httptest.NewRecorder()

    UserHandler(w, req)

    resp := w.Result()
    if resp.StatusCode != http.StatusMethodNotAllowed {
        t.Errorf("got status %d, want %d",
            resp.StatusCode, http.StatusMethodNotAllowed)
    }
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '10-8-1',
  title: '测试HTTP Handler',
  section: '10.8.1'
};
