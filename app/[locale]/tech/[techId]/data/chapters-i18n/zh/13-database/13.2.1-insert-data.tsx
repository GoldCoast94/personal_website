import React from 'react';

interface Props {
  className?: string;
}

export default function 插入数据({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">13.2.1 插入数据</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "database/sql"
    "fmt"
)

type User struct {
    ID       int
    Username string
    Email    string
}

func insertUser(db *sql.DB, username, email string) (int64, error) {
    query := "INSERT INTO users (username, email) VALUES (?, ?)"

    result, err := db.Exec(query, username, email)
    if err != nil {
        return 0, err
    }

    // 获取插入的ID
    id, err := result.LastInsertId()
    if err != nil {
        return 0, err
    }

    fmt.Printf("Inserted user with ID: %d\n", id)
    return id, nil
}

func insertUserWithPrepared(db *sql.DB, username, email string) error {
    // 使用预处理语句
    stmt, err := db.Prepare("INSERT INTO users (username, email) VALUES (?, ?)")
    if err != nil {
        return err
    }
    defer stmt.Close()

    _, err = stmt.Exec(username, email)
    return err
}

func main() {
    db, _ := sql.Open("mysql", "root:password@tcp(localhost:3306)/testdb")
    defer db.Close()

    insertUser(db, "alice", "alice@example.com")
    insertUser(db, "bob", "bob@example.com")
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '13-2-1',
  title: '插入数据',
  section: '13.2.1'
};
