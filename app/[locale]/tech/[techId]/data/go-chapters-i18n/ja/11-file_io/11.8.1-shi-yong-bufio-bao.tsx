import React from 'react';

interface Props {
  className?: string;
}

export default function Bufioパッケージの使用({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">11.8.1 bufioパッケージの使用</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "bufio"
    "fmt"
    "os"
)

func bufferedRead(filename string) error {
    file, err := os.Open(filename)
    if err != nil {
        return err
    }
    defer file.Close()

    reader := bufio.NewReader(file)

    // 区切り文字まで読み取る
    line, err := reader.ReadString('\n')
    fmt.Println("First line:", line)

    // 行ごとにスキャン
    scanner := bufio.NewScanner(reader)
    for scanner.Scan() {
        fmt.Println(scanner.Text())
    }

    return scanner.Err()
}

func bufferedWrite(filename string) error {
    file, err := os.Create(filename)
    if err != nil {
        return err
    }
    defer file.Close()

    writer := bufio.NewWriter(file)
    defer writer.Flush()  // 重要: バッファをフラッシュ

    for i := 0; i < 10; i++ {
        fmt.Fprintf(writer, "Line %d\n", i)
    }

    return nil
}

func main() {
    bufferedWrite("buffered.txt")
    bufferedRead("buffered.txt")
}`}</code>
      </pre>
      <p>## 11.9 実践例：ログファイルマネージャー</p>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "bufio"
    "fmt"
    "os"
    "path/filepath"
    "time"
)

type LogManager struct {
    logDir      string
    maxFileSize int64
    currentFile *os.File
}

func NewLogManager(logDir string, maxFileSize int64) (*LogManager, error) {
    if err := os.MkdirAll(logDir, 0755); err != nil {
        return nil, err
    }

    return &LogManager{
        logDir:      logDir,
        maxFileSize: maxFileSize,
    }, nil
}

func (lm *LogManager) getLogFilename() string {
    timestamp := time.Now().Format("2006-01-02")
    return filepath.Join(lm.logDir, fmt.Sprintf("app-%s.log", timestamp))
}

func (lm *LogManager) rotateIfNeeded() error {
    filename := lm.getLogFilename()

    // 現在のファイルサイズを確認
    info, err := os.Stat(filename)
    if err == nil && info.Size() >= lm.maxFileSize {
        // ローテーションが必要
        timestamp := time.Now().Format("2006-01-02-150405")
        newName := filepath.Join(lm.logDir, fmt.Sprintf("app-%s.log", timestamp))
        os.Rename(filename, newName)
    }

    return nil
}

func (lm *LogManager) Write(message string) error {
    lm.rotateIfNeeded()

    filename := lm.getLogFilename()

    file, err := os.OpenFile(filename, os.O_APPEND|os.O_CREATE|os.O_WRONLY, 0644)
    if err != nil {
        return err
    }
    defer file.Close()

    timestamp := time.Now().Format("2006-01-02 15:04:05")
    logLine := fmt.Sprintf("[%s] %s\n", timestamp, message)

    _, err = file.WriteString(logLine)
    return err
}

func (lm *LogManager) ReadLogs(date string) ([]string, error) {
    filename := filepath.Join(lm.logDir, fmt.Sprintf("app-%s.log", date))

    file, err := os.Open(filename)
    if err != nil {
        return nil, err
    }
    defer file.Close()

    var lines []string
    scanner := bufio.NewScanner(file)
    for scanner.Scan() {
        lines = append(lines, scanner.Text())
    }

    return lines, scanner.Err()
}

func (lm *LogManager) CleanOldLogs(daysToKeep int) error {
    cutoff := time.Now().AddDate(0, 0, -daysToKeep)

    return filepath.Walk(lm.logDir, func(path string, info os.FileInfo, err error) error {
        if err != nil {
            return err
        }

        if !info.IsDir() && info.ModTime().Before(cutoff) {
            fmt.Printf("Deleting old log: %s\n", path)
            return os.Remove(path)
        }

        return nil
    })
}

func main() {
    lm, err := NewLogManager("logs", 1024*1024) // 1MB
    if err != nil {
        fmt.Println("Error:", err)
        return
    }

    // ログを書き込む
    lm.Write("Application started")
    lm.Write("Processing request")
    lm.Write("Request completed")

    // ログを読み取る
    today := time.Now().Format("2006-01-02")
    logs, err := lm.ReadLogs(today)
    if err != nil {
        fmt.Println("Error:", err)
        return
    }

    fmt.Println("Today's logs:")
    for _, log := range logs {
        fmt.Println(log)
    }

    // 古いログをクリーンアップ
    lm.CleanOldLogs(7)
}`}</code>
      </pre>
      <p>## 11.10 練習問題</p>

    </div>
  );
}

export const metadata = {
  id: '11-8-1',
  title: 'bufioパッケージの使用',
  section: '11.8.1'
};
