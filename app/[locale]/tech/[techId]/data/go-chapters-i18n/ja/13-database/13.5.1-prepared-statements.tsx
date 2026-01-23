import React from 'react';

interface Props {
  className?: string;
}

export default function プリペアドステートメントを使用({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">13.5.1 プリペアドステートメントを使用</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "database/sql"
    "fmt"
)

func batchInsertWithPrepared(db *sql.DB, users []User) error {
    // ステートメントを準備
    stmt, err := db.Prepare("INSERT INTO users (username, email) VALUES (?, ?)")
    if err != nil {
        return err
    }
    defer stmt.Close()

    // バッチ挿入
    for _, user := range users {
        _, err := stmt.Exec(user.Username, user.Email)
        if err != nil {
            return err
        }
    }

    fmt.Printf("Inserted %d users\n", len(users))
    return nil
}

func queryWithPrepared(db *sql.DB, ids []int) ([]User, error) {
    stmt, err := db.Prepare("SELECT id, username, email FROM users WHERE id = ?")
    if err != nil {
        return nil, err
    }
    defer stmt.Close()

    var users []User
    for _, id := range ids {
        var user User
        err := stmt.QueryRow(id).Scan(&user.ID, &user.Username, &user.Email)
        if err != nil {
            continue
        }
        users = append(users, user)
    }

    return users, nil
}`}</code>
      </pre>
      <p>## 13.6 NULL値の処理</p>

    </div>
  );
}

export const metadata = {
  id: '13-5-1',
  title: 'プリペアドステートメントを使用',
  section: '13.5.1'
};
