import React from 'react';

interface Props {
  className?: string;
}

export default function テーブルを作成({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">13.1.2 テーブルを作成</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "database/sql"
    "fmt"

    _ "github.com/go-sql-driver/mysql"
)

func createTable(db *sql.DB) error {
    query := \`
    CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(50) NOT NULL UNIQUE,
        email VARCHAR(100) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )\`

    _, err := db.Exec(query)
    if err != nil {
        return err
    }

    fmt.Println("Table created successfully")
    return nil
}

func main() {
    db, err := sql.Open("mysql", "root:password@tcp(localhost:3306)/testdb")
    if err != nil {
        panic(err)
    }
    defer db.Close()

    createTable(db)
}`}</code>
      </pre>
      <p>## 13.2 CRUD操作</p>

    </div>
  );
}

export const metadata = {
  id: '13-1-2',
  title: 'テーブルを作成',
  section: '13.1.2'
};
