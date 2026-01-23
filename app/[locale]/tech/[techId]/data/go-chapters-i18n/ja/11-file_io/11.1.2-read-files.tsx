import React from 'react';

interface Props {
  className?: string;
}

export default function ファイルの読み取り({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">11.1.2 ファイルの読み取り</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "bufio"
    "fmt"
    "io"
    "os"
)

func readEntireFile(filename string) error {
    // 方法1: ファイル全体を読み取る
    data, err := os.ReadFile(filename)
    if err != nil {
        return err
    }
    fmt.Println("File content:", string(data))
    return nil
}

func readWithReader(filename string) error {
    // 方法2: Readerを使用
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
    // 方法3: 行ごとに読み取る
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
  title: 'ファイルの読み取り',
  section: '11.1.2'
};
