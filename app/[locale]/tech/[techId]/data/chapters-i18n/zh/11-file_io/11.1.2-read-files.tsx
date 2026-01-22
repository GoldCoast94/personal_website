import React from 'react';

interface Props {
  className?: string;
}

export default function 读取文件({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">11.1.2 读取文件</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "bufio"
    "fmt"
    "io"
    "os"
)

func readEntireFile(filename string) error {
    // 方法1: 读取整个文件
    data, err := os.ReadFile(filename)
    if err != nil {
        return err
    }
    fmt.Println("File content:", string(data))
    return nil
}

func readWithReader(filename string) error {
    // 方法2: 使用Reader
    file, err := os.Open(filename)
    if err != nil {
        return err
    }
    defer file.Close()

    buf := make([]byte, 1024)
    for {
        n, err := file.Read(buf)
        if err == io.EOF {
            break
        }
        if err != nil {
            return err
        }
        fmt.Print(string(buf[:n]))
    }
    return nil
}

func readLineByLine(filename string) error {
    // 方法3: 按行读取
    file, err := os.Open(filename)
    if err != nil {
        return err
    }
    defer file.Close()

    scanner := bufio.NewScanner(file)
    lineNum := 1
    for scanner.Scan() {
        fmt.Printf("Line %d: %s\n", lineNum, scanner.Text())
        lineNum++
    }

    return scanner.Err()
}

func main() {
    readEntireFile("test.txt")
    readWithReader("test.txt")
    readLineByLine("test.txt")
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '11-1-2',
  title: '读取文件',
  section: '11.1.2'
};
