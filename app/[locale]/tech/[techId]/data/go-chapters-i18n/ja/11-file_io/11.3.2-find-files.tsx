import React from 'react';

interface Props {
  className?: string;
}

export default function ファイルの検索({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">11.3.2 ファイルの検索</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "os"
    "path/filepath"
    "strings"
)

func findFiles(root, extension string) ([]string, error) {
    var files []string

    err := filepath.Walk(root, func(path string, info os.FileInfo, err error) error {
        if err != nil {
            return err
        }

        if !info.IsDir() && strings.HasSuffix(path, extension) {
            files = append(files, path)
        }

        return nil
    })

    return files, err
}

func findLargeFiles(root string, minSize int64) ([]string, error) {
    var files []string

    err := filepath.Walk(root, func(path string, info os.FileInfo, err error) error {
        if err != nil {
            return err
        }

        if !info.IsDir() && info.Size() > minSize {
            files = append(files, path)
        }

        return nil
    })

    return files, err
}

func main() {
    // すべての.goファイルを検索
    goFiles, err := findFiles(".", ".go")
    if err != nil {
        fmt.Println("Error:", err)
        return
    }

    fmt.Println("Go files found:")
    for _, file := range goFiles {
        fmt.Println(file)
    }

    // 1MBより大きいファイルを検索
    largeFiles, _ := findLargeFiles(".", 1024*1024)
    fmt.Println("\nLarge files:")
    for _, file := range largeFiles {
        fmt.Println(file)
    }
}`}</code>
      </pre>
      <p>## 11.4 パス操作</p>

    </div>
  );
}

export const metadata = {
  id: '11-3-2',
  title: 'ファイルの検索',
  section: '11.3.2'
};
