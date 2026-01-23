import React from 'react';

interface Props {
  className?: string;
}

export default function インターフェース埋め込み({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">6.2.1 インターフェース埋め込み</h3>
      <p>インターフェースは他のインターフェースを埋め込んで新しいインターフェースを形成できます。</p>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

// Basic interfaces
type Reader interface {
    Read() string
}

type Writer interface {
    Write(data string)
}

type Closer interface {
    Close()
}

// Composite interfaces
type ReadWriter interface {
    Reader
    Writer
}

type ReadWriteCloser interface {
    Reader
    Writer
    Closer
}

// Implementing composite interface
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

    // File implements ReadWriteCloser interface
    var rwc ReadWriteCloser = file
    rwc.Write("Sample content")
    fmt.Println(rwc.Read())
    rwc.Close()

    // File also implements ReadWriter interface
    ProcessReadWriter(file)
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '6-2-1',
  title: 'インターフェース埋め込み',
  section: '6.2.1'
};
