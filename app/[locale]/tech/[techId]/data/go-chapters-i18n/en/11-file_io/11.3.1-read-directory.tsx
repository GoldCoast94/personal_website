import React from 'react';

interface Props {
  className?: string;
}

export default function ReadDirectory({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">11.3.1 Reading Directory Contents</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "os"
    "path/filepath"
)

func listDirectory(dirname string) error {
    // Method 1: ReadDir
    entries, err := os.ReadDir(dirname)
    if err != nil {
        return err
    }

    for _, entry := range entries {
        fmt.Printf("Name: %s, IsDir: %v\n", entry.Name(), entry.IsDir())
    }

    return nil
}

func walkDirectory(dirname string) error {
    // Method 2: filepath.Walk
    return filepath.Walk(dirname, func(path string, info os.FileInfo, err error) error {
        if err != nil {
            return err
        }

        fmt.Printf("Path: %s, Size: %d bytes\n", path, info.Size())
        return nil
    })
}

func walkDirectoryV2(dirname string) error {
    // Method 3: filepath.WalkDir (more efficient)
    return filepath.WalkDir(dirname, func(path string, d os.DirEntry, err error) error {
        if err != nil {
            return err
        }

        fmt.Printf("Path: %s, IsDir: %v\n", path, d.IsDir())
        return nil
    })
}

func main() {
    listDirectory(".")
    walkDirectory(".")
    walkDirectoryV2(".")
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '11-3-1',
  title: 'Reading Directory Contents',
  section: '11.3.1'
};
