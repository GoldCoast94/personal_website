import React from 'react';

interface Props {
  className?: string;
}

export default function 接口嵌入({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">6.2.1 接口嵌入</h3>
      <p>接口可以嵌入其他接口，形成新的接口。</p>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

// 基础接口
type Reader interface {
    Read() string
}

type Writer interface {
    Write(data string)
}

type Closer interface {
    Close()
}

// 组合接口
type ReadWriter interface {
    Reader
    Writer
}

type ReadWriteCloser interface {
    Reader
    Writer
    Closer
}

// 实现组合接口
type File struct {
    content string
    name    string
}

func (f *File) Read() string {
    return f.content
}

func (f *File) Write(data string) {
    f.content = data
}

func (f *File) Close() {
    fmt.Printf("Closing file: %s\n", f.name)
}

func ProcessReadWriter(rw ReadWriter) {
    rw.Write("Hello, World!")
    fmt.Println("Content:", rw.Read())
}

func main() {
    file := &File{name: "test.txt"}

    // File实现了ReadWriteCloser接口
    var rwc ReadWriteCloser = file
    rwc.Write("Sample content")
    fmt.Println(rwc.Read())
    rwc.Close()

    // File也实现了ReadWriter接口
    ProcessReadWriter(file)
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '6-2-1',
  title: '接口嵌入',
  section: '6.2.1'
};
