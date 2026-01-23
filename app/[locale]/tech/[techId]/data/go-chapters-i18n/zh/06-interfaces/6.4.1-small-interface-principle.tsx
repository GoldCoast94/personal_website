import React from 'react';

interface Props {
  className?: string;
}

export default function 小接口原则({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">6.4.1 小接口原则</h3>
      <p>Go推崇小而精的接口设计。</p>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

// 好的设计：小接口
type Reader interface {
    Read(p []byte) (n int, err error)
}

type Writer interface {
    Write(p []byte) (n int, err error)
}

type Closer interface {
    Close() error
}

// 组合小接口
type ReadCloser interface {
    Reader
    Closer
}

type WriteCloser interface {
    Writer
    Closer
}

type ReadWriteCloser interface {
    Reader
    Writer
    Closer
}

// 实现示例
type Buffer struct {
    data []byte
}

func (b *Buffer) Read(p []byte) (n int, err error) {
    n = copy(p, b.data)
    b.data = b.data[n:]
    return n, nil
}

func (b *Buffer) Write(p []byte) (n int, err error) {
    b.data = append(b.data, p...)
    return len(p), nil
}

func (b *Buffer) Close() error {
    b.data = nil
    return nil
}

func main() {
    buf := &Buffer{}

    // 可以作为不同的接口使用
    var r Reader = buf
    var w Writer = buf
    var rc ReadCloser = buf

    w.Write([]byte("Hello"))
    fmt.Println("Written")

    data := make([]byte, 5)
    r.Read(data)
    fmt.Println("Read:", string(data))

    rc.Close()
    fmt.Println("Closed")
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '6-4-1',
  title: '小接口原则',
  section: '6.4.1'
};
