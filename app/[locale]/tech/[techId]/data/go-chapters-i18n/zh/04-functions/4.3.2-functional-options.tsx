import React from 'react';

interface Props {
  className?: string;
}

export default function 函数选项模式({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">4.3.2 函数选项模式</h3>
      <p>用于优雅地处理可选参数：</p>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

type Server struct {
    host    string
    port    int
    timeout int
    maxConn int
}

// 选项函数类型
type Option func(*Server)

// 选项函数
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

// 构造函数
func NewServer(options ...Option) *Server {
    // 默认值
    server := &Server{
        host:    "localhost",
        port:    8080,
        timeout: 30,
        maxConn: 100,
    }

    // 应用选项
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
    // 使用默认值
    s1 := NewServer()
    s1.Start()
    fmt.Println()

    // 自定义部分选项
    s2 := NewServer(
        WithHost("0.0.0.0"),
        WithPort(9000),
    )
    s2.Start()
    fmt.Println()

    // 自定义所有选项
    s3 := NewServer(
        WithHost("192.168.1.100"),
        WithPort(3000),
        WithTimeout(60),
        WithMaxConnections(500),
    )
    s3.Start()
}`}</code>
      </pre>
      <p>## 4.4 错误处理</p>

    </div>
  );
}

export const metadata = {
  id: '4-3-2',
  title: '函数选项模式',
  section: '4.3.2'
};
