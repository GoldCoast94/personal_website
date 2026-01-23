import React from 'react';

interface Props {
  className?: string;
}

export default function 関数型オプションパターン({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">6.5.2 関数型オプションパターン</h3>
      <p>インターフェースを使用して柔軟な設定を実装します。</p>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

type Server struct {
    host    string
    port    int
    timeout int
}

// Option interface
type Option interface {
    Apply(*Server)
}

// Concrete option types
type hostOption string

func (h hostOption) Apply(s *Server) {
    s.host = string(h)
}

type portOption int

func (p portOption) Apply(s *Server) {
    s.port = int(p)
}

type timeoutOption int

func (t timeoutOption) Apply(s *Server) {
    s.timeout = int(t)
}

// Option constructors
func WithHost(host string) Option {
    return hostOption(host)
}

func WithPort(port int) Option {
    return portOption(port)
}

func WithTimeout(timeout int) Option {
    return timeoutOption(timeout)
}

// Constructor
func NewServer(options ...Option) *Server {
    server := &Server{
        host:    "localhost",
        port:    8080,
        timeout: 30,
    }

    for _, option := range options {
        option.Apply(server)
    }

    return server
}

func (s *Server) Start() {
    fmt.Printf("Server starting on %s:%d (timeout: %ds)\n",
        s.host, s.port, s.timeout)
}

func main() {
    // Using default configuration
    s1 := NewServer()
    s1.Start()

    // Custom configuration
    s2 := NewServer(
        WithHost("0.0.0.0"),
        WithPort(9000),
        WithTimeout(60),
    )
    s2.Start()
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '6-5-2',
  title: '関数型オプションパターン',
  section: '6.5.2'
};
