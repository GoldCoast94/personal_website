import React from 'react';

interface Props {
  className?: string;
}

export default function 関数オプションパターン({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">4.3.2 関数オプションパターン</h3>
      <p>オプショナルパラメータをエレガントに処理するために使用されます:</p>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

type Server struct {
    host    string
    port    int
    timeout int
    maxConn int
}

// オプション関数型
type Option func(*Server)

// オプション関数
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

// コンストラクタ関数
func NewServer(options ...Option) *Server {
    // デフォルト値
    server := &Server{
        host:    "localhost",
        port:    8080,
        timeout: 30,
        maxConn: 100,
    }

    // オプションを適用
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
    // デフォルト値を使用
    s1 := NewServer()
    s1.Start()
    fmt.Println()

    // 一部のオプションをカスタマイズ
    s2 := NewServer(
        WithHost("0.0.0.0"),
        WithPort(9000),
    )
    s2.Start()
    fmt.Println()

    // すべてのオプションをカスタマイズ
    s3 := NewServer(
        WithHost("192.168.1.100"),
        WithPort(3000),
        WithTimeout(60),
        WithMaxConnections(500),
    )
    s3.Start()
}`}</code>
      </pre>
      <p>## 4.4 エラー処理</p>

    </div>
  );
}

export const metadata = {
  id: '4-3-2',
  title: '関数オプションパターン',
  section: '4.3.2'
};
