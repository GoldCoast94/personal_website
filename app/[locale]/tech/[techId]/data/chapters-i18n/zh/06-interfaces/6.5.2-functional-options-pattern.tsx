import React from 'react';

interface Props {
  className?: string;
}

export default function 函数式选项模式({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">6.5.2 函数式选项模式</h3>
      <p>使用接口实现灵活的配置。</p>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

type Server struct {
    host    string
    port    int
    timeout int
}

// Option接口
type Option interface {
    Apply(*Server)
}

// 具体选项类型
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

// 选项构造函数
func WithHost(host string) Option {
    return hostOption(host)
}

func WithPort(port int) Option {
    return portOption(port)
}

func WithTimeout(timeout int) Option {
    return timeoutOption(timeout)
}

// 构造函数
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
    // 使用默认配置
    s1 := NewServer()
    s1.Start()

    // 自定义配置
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
  title: '函数式选项模式',
  section: '6.5.2'
};
