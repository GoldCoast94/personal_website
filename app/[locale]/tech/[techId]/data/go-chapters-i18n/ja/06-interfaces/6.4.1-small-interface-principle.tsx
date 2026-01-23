import React from 'react';

interface Props {
  className?: string;
}

export default function 小さなインターフェースの原則({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">6.4.1 小さなインターフェースの原則</h3>
      <p>Goは小さく焦点を絞ったインターフェース設計を推奨しています。</p>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

// Good design: small interfaces
type Reader interface {
    Read(p []byte) (n int, err error)
}

type Writer interface {
    Write(p []byte) (n int, err error)
}

type Closer interface {
    Close() error
}

// Compose small interfaces
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

// Implementation example
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

    // Can be used as different interfaces
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
  title: '小さなインターフェースの原則',
  section: '6.4.1'
};
