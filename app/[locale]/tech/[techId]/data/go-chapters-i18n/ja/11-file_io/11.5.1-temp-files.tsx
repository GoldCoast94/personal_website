import React from 'react';

interface Props {
  className?: string;
}

export default function 一時ファイルの作成({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">11.5.1 一時ファイルの作成</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "os"
)

func tempFileExample() error {
    // 一時ファイルを作成
    tmpFile, err := os.CreateTemp("", "example-*.txt")
    if err != nil {
        return err
    }
    defer os.Remove(tmpFile.Name())  // クリーンアップ
    defer tmpFile.Close()

    fmt.Println("Temp file:", tmpFile.Name())

    // 一時ファイルに書き込む
    _, err = tmpFile.WriteString("temporary content")
    return err
}

func tempDirExample() error {
    // 一時ディレクトリを作成
    tmpDir, err := os.MkdirTemp("", "example-dir-")
    if err != nil {
        return err
    }
    defer os.RemoveAll(tmpDir)  // クリーンアップ

    fmt.Println("Temp directory:", tmpDir)

    // 一時ディレクトリ内にファイルを作成
    filePath := tmpDir + "/test.txt"
    err = os.WriteFile(filePath, []byte("content"), 0644)
    return err
}

func main() {
    tempFileExample()
    tempDirExample()
}`}</code>
      </pre>
      <p>## 11.6 JSONとファイル</p>

    </div>
  );
}

export const metadata = {
  id: '11-5-1',
  title: '一時ファイルの作成',
  section: '11.5.1'
};
