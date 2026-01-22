import React from 'react';

interface Props {
  className?: string;
}

export default function 自定义路由器({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">12.4.1 自定义路由器</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "net/http"
    "strings"
)

type Router struct {
    routes map[string]http.HandlerFunc
}

func NewRouter() *Router {
    return &Router{
        routes: make(map[string]http.HandlerFunc),
    }
}

func (r *Router) Handle(pattern string, handler http.HandlerFunc) {
    r.routes[pattern] = handler
}

func (r *Router) ServeHTTP(w http.ResponseWriter, req *http.Request) {
    path := req.URL.Path

    if handler, ok := r.routes[path]; ok {
        handler(w, req)
        return
    }

    // 检查动态路由 (简单实现)
    for pattern, handler := range r.routes {
        if strings.Contains(pattern, ":") {
            if matchDynamicRoute(pattern, path) {
                handler(w, req)
                return
            }
        }
    }

    http.NotFound(w, req)
}

func matchDynamicRoute(pattern, path string) bool {
    patternParts := strings.Split(pattern, "/")
    pathParts := strings.Split(path, "/")

    if len(patternParts) != len(pathParts) {
        return false
    }

    for i := range patternParts {
        if patternParts[i] != pathParts[i] && !strings.HasPrefix(patternParts[i], ":") {
            return false
        }
    }

    return true
}

func main() {
    router := NewRouter()

    router.Handle("/", func(w http.ResponseWriter, r *http.Request) {
        fmt.Fprintf(w, "Home")
    })

    router.Handle("/users/:id", func(w http.ResponseWriter, r *http.Request) {
        fmt.Fprintf(w, "User profile")
    })

    http.ListenAndServe(":8080", router)
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '12-4-1',
  title: '自定义路由器',
  section: '12.4.1'
};
