import React from 'react';

interface Props {
  className?: string;
}

export default function 查找文件({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">11.3.2 查找文件</h3>

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
    // 查找所有.go文件
    goFiles, err := findFiles(".", ".go")
    if err != nil {
        fmt.Println("Error:", err)
        return
    }

    fmt.Println("Go files found:")
    for _, file := range goFiles {
        fmt.Println(file)
    }

    // 查找大于1MB的文件
    largeFiles, _ := findLargeFiles(".", 1024*1024)
    fmt.Println("\nLarge files:")
    for _, file := range largeFiles {
        fmt.Println(file)
    }
}`}</code>
      </pre>
      <p>## 11.4 路径操作</p>

    </div>
  );
}

export const metadata = {
  id: '11-3-2',
  title: '查找文件',
  section: '11.3.2'
};
