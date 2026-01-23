import React from 'react';

interface Props {
  className?: string;
}

export default function パス処理({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">11.4.1 パス処理</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "path/filepath"
)

func pathOperations() {
    // パスを連結
    path := filepath.Join("dir", "subdir", "file.txt")
    fmt.Println("Joined path:", path)

    // ディレクトリを取得
    dir := filepath.Dir("/path/to/file.txt")
    fmt.Println("Directory:", dir)

    // ファイル名を取得
    base := filepath.Base("/path/to/file.txt")
    fmt.Println("Basename:", base)

    // 拡張子を取得
    ext := filepath.Ext("file.txt")
    fmt.Println("Extension:", ext)

    // ディレクトリとファイル名を分離
    dir, file := filepath.Split("/path/to/file.txt")
    fmt.Println("Dir:", dir, "File:", file)

    // 絶対パスを取得
    absPath, _ := filepath.Abs("test.txt")
    fmt.Println("Absolute path:", absPath)

    // 相対パスを取得
    relPath, _ := filepath.Rel("/a/b", "/a/b/c/d")
    fmt.Println("Relative path:", relPath)

    // パスをクリーン
    clean := filepath.Clean("path//to/../file.txt")
    fmt.Println("Cleaned path:", clean)

    // パターンマッチ
    matched, _ := filepath.Match("*.txt", "file.txt")
    fmt.Println("Matched:", matched)

    // Globパターン
    files, _ := filepath.Glob("*.go")
    fmt.Println("Go files:", files)
}

func main() {
    pathOperations()
}`}</code>
      </pre>
      <p>## 11.5 一時ファイルとディレクトリ</p>

    </div>
  );
}

export const metadata = {
  id: '11-4-1',
  title: 'パス処理',
  section: '11.4.1'
};
