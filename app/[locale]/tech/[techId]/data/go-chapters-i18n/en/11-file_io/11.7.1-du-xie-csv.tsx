import React from 'react';

interface Props {
  className?: string;
}

export default function ReadWriteCsv({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">11.7.1 Reading and Writing CSV</h3>

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

    // Write header
    writer.Write([]string{"Name", "Age", "Email"})

    // Write data
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
      <p>## 11.8 Buffered IO</p>

    </div>
  );
}

export const metadata = {
  id: '11-7-1',
  title: 'Reading and Writing CSV',
  section: '11.7.1'
};
