import React from 'react';

interface Props {
  className?: string;
}

export default function CookieOperations({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">12.7.1 Cookie Operations</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "net/http"
    "time"
)

func setCookieHandler(w http.ResponseWriter, r *http.Request) {
    cookie := &http.Cookie{
        Name:     "username",
        Value:    "john",
        Expires:  time.Now().Add(24 * time.Hour),
        HttpOnly: true,
        Path:     "/",
    }

    http.SetCookie(w, cookie)
    fmt.Fprintf(w, "Cookie set successfully")
}

func getCookieHandler(w http.ResponseWriter, r *http.Request) {
    cookie, err := r.Cookie("username")
    if err != nil {
        fmt.Fprintf(w, "Cookie not found")
        return
    }

    fmt.Fprintf(w, "Username: %s", cookie.Value)
}

func deleteCookieHandler(w http.ResponseWriter, r *http.Request) {
    cookie := &http.Cookie{
        Name:    "username",
        Value:   "",
        Expires: time.Now().Add(-1 * time.Hour),
        Path:    "/",
    }

    http.SetCookie(w, cookie)
    fmt.Fprintf(w, "Cookie deleted")
}

func main() {
    http.HandleFunc("/set", setCookieHandler)
    http.HandleFunc("/get", getCookieHandler)
    http.HandleFunc("/delete", deleteCookieHandler)

    http.ListenAndServe(":8080", nil)
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '12-7-1',
  title: 'Cookie Operations',
  section: '12.7.1'
};
