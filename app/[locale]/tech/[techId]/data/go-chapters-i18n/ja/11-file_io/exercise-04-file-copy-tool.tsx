import React from 'react';

interface Props {
  className?: string;
}

export default function 解答01ファイルコピーツール({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">解答1：ファイルコピーツール</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "io"
    "os"
)

func copyFile(src, dst string) error {
    sourceFile, err := os.Open(src)
    if err != nil {
        return err
    }
    defer sourceFile.Close()

    destFile, err := os.Create(dst)
    if err != nil {
        return err
    }
    defer destFile.Close()

    _, err = io.Copy(destFile, sourceFile)
    return err
}

func copyFileWithProgress(src, dst string) error {
    sourceFile, err := os.Open(src)
    if err != nil {
        return err
    }
    defer sourceFile.Close()

    destFile, err := os.Create(dst)
    if err != nil {
        return err
    }
    defer destFile.Close()

    // ファイルサイズを取得
    info, _ := sourceFile.Stat()
    fileSize := info.Size()

    buf := make([]byte, 32*1024) // 32KBバッファ
    var written int64

    for {
        nr, err := sourceFile.Read(buf)
        if nr > 0 {
            nw, err := destFile.Write(buf[:nr])
            if err != nil {
                return err
            }
            written += int64(nw)

            // 進捗を表示
            progress := float64(written) / float64(fileSize) * 100
            fmt.Printf("\rProgress: %.2f%%", progress)
        }
        if err == io.EOF {
            break
        }
        if err != nil {
            return err
        }
    }

    fmt.Println()
    return nil
}

func main() {
    err := copyFileWithProgress("source.txt", "destination.txt")
    if err != nil {
        fmt.Println("Error:", err)
    }
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '解答1：ファイルコピーツール',
  section: '0'
};
