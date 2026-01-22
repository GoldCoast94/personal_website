import React from 'react';

interface Props {
  className?: string;
}

export default function 使用预处理语句({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">13.5.1 使用预处理语句</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "database/sql"
    "fmt"
)

func batchInsertWithPrepared(db *sql.DB, users []User) error {
    // 准备语句
    stmt, err := db.Prepare("INSERT INTO users (username, email) VALUES (?, ?)")
    if err != nil {
        return err
    }
    defer stmt.Close()

    // 批量插入
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
      <p>## 13.6 NULL值处理</p>

    </div>
  );
}

export const metadata = {
  id: '13-5-1',
  title: '使用预处理语句',
  section: '13.5.1'
};
