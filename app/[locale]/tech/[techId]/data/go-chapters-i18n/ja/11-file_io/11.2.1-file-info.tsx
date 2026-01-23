import React from 'react';

interface Props {
  className?: string;
}

export default function ファイル情報の取得({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">11.2.1 ファイル情報の取得</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "os"
    "time"
)

func fileInfo(filename string) error {
    info, err := os.Stat(filename)
    if err != nil {
        if os.IsNotExist(err) {
            return fmt.Errorf("file does not exist: %s", filename)
        }
        return err
    }

    fmt.Println("Name:", info.Name())
    fmt.Println("Size:", info.Size(), "bytes")
    fmt.Println("Permissions:", info.Mode())
    fmt.Println("Last modified:", info.ModTime())
    fmt.Println("Is directory:", info.IsDir())

    return nil
}

func checkFileExists(filename string) bool {
    _, err := os.Stat(filename)
    return !os.IsNotExist(err)
}

func main() {
    fileInfo("test.txt")

    if checkFileExists("test.txt") {
        fmt.Println("File exists")
    }
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '11-2-1',
  title: 'ファイル情報の取得',
  section: '11.2.1'
};
