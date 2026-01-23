import React from 'react';

interface Props {
  className?: string;
}

export default function CsvファイルIOの読み書き({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">11.7.1 CSVの読み書き</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "encoding/csv"
    "fmt"
    "os"
)

func writeCSV(filename string) error {
    file, err := os.Create(filename)
    if err != nil {
        return err
    }
    defer file.Close()

    writer := csv.NewWriter(file)
    defer writer.Flush()

    // ヘッダーを書き込む
    writer.Write([]string{"Name", "Age", "Email"})

    // データを書き込む
    records := [][]string{
        {"Alice", "30", "alice@example.com"},
        {"Bob", "25", "bob@example.com"},
        {"Charlie", "35", "charlie@example.com"},
    }

    for _, record := range records {
        if err := writer.Write(record); err != nil {
            return err
        }
    }

    return nil
}

func readCSV(filename string) error {
    file, err := os.Open(filename)
    if err != nil {
        return err
    }
    defer file.Close()

    reader := csv.NewReader(file)
    records, err := reader.ReadAll()
    if err != nil {
        return err
    }

    for i, record := range records {
        fmt.Printf("Row %d: %v\n", i, record)
    }

    return nil
}

func main() {
    writeCSV("data.csv")
    readCSV("data.csv")
}`}</code>
      </pre>
      <p>## 11.8 バッファIO</p>

    </div>
  );
}

export const metadata = {
  id: '11-7-1',
  title: 'CSVの読み書き',
  section: '11.7.1'
};
