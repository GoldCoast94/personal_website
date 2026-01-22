import React from 'react';

interface Props {
  className?: string;
}

export default function Json文件操作({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">11.6.1 JSON文件操作</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "encoding/json"
    "fmt"
    "os"
)

type Person struct {
    Name  string <code>json:"name"</code>
    Age   int    <code>json:"age"</code>
    Email string <code>json:"email"</code>
}

func writeJSON(filename string, data interface{}) error {
    file, err := os.Create(filename)
    if err != nil {
        return err
    }
    defer file.Close()

    encoder := json.NewEncoder(file)
    encoder.SetIndent("", "  ")
    return encoder.Encode(data)
}

func readJSON(filename string, v interface{}) error {
    file, err := os.Open(filename)
    if err != nil {
        return err
    }
    defer file.Close()

    decoder := json.NewDecoder(file)
    return decoder.Decode(v)
}

func main() {
    // 写入JSON
    person := Person{
        Name:  "Alice",
        Age:   30,
        Email: "alice@example.com",
    }

    err := writeJSON("person.json", person)
    if err != nil {
        fmt.Println("Error writing JSON:", err)
        return
    }

    // 读取JSON
    var loadedPerson Person
    err = readJSON("person.json", &loadedPerson)
    if err != nil {
        fmt.Println("Error reading JSON:", err)
        return
    }

    fmt.Printf("Loaded: %+v\n", loadedPerson)
}`}</code>
      </pre>
      <p>## 11.7 CSV文件操作</p>

    </div>
  );
}

export const metadata = {
  id: '11-6-1',
  title: 'JSON文件操作',
  section: '11.6.1'
};
