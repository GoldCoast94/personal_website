import React from 'react';

interface Props {
  className?: string;
}

export default function FunctionalOptions({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">4.3.2 Functional Options Pattern</h3>
      <p>Used to elegantly handle optional parameters:</p>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

type Server struct {
    host    string
    port    int
    timeout int
    maxConn int
}

// Option function type
type Option func(*Server)

// Option functions
func WithHost(host string) Option {
    return func(s *Server) {
        s.host = host
    }
}

func WithPort(port int) Option {
    return func(s *Server) {
        s.port = port
    }
}

func WithTimeout(timeout int) Option {
    return func(s *Server) {
        s.timeout = timeout
    }
}

func WithMaxConnections(maxConn int) Option {
    return func(s *Server) {
        s.maxConn = maxConn
    }
}

// Constructor function
func NewServer(options ...Option) *Server {
    // Default values
    server := &Server{
        host:    "localhost",
        port:    8080,
        timeout: 30,
        maxConn: 100,
    }

    // Apply options
    for _, option := range options {
        option(server)
    }

    return server
}

func (s *Server) Start() {
    fmt.Printf("Server starting on %s:%d\n", s.host, s.port)
    fmt.Printf("Timeout: %ds, MaxConn: %d\n", s.timeout, s.maxConn)
}

func main() {
    // Use default values
    s1 := NewServer()
    s1.Start()
    fmt.Println()

    // Customize some options
    s2 := NewServer(
        WithHost("0.0.0.0"),
        WithPort(9000),
    )
    s2.Start()
    fmt.Println()

    // Customize all options
    s3 := NewServer(
        WithHost("192.168.1.100"),
        WithPort(3000),
        WithTimeout(60),
        WithMaxConnections(500),
    )
    s3.Start()
}`}</code>
      </pre>
      <p>## 4.4 Error Handling</p>

    </div>
  );
}

export const metadata = {
  id: '4-3-2',
  title: 'Functional Options Pattern',
  section: '4.3.2'
};
