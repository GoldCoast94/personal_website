import React from 'react';

interface Props {
  className?: string;
}

export default function ReadFiles({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">11.1.2 Reading Files</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "bufio"
    "fmt"
    "io"
    "os"
)

func readEntireFile(filename string) error {
    // Method 1: Read entire file
    data, err := os.ReadFile(filename)
    if err != nil {
        return err
    }
    fmt.Println("File content:", string(data))
    return nil
}

func readWithReader(filename string) error {
    // Method 2: Use Reader
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
    // Method 3: Read line by line
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
  title: 'Reading Files',
  section: '11.1.2'
};
