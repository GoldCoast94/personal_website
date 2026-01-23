import React from 'react';

interface Props {
  className?: string;
}

export default function UsePreparedStatements({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">13.5.1 Use Prepared Statements</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "database/sql"
    "fmt"
)

func batchInsertWithPrepared(db *sql.DB, users []User) error {
    // Prepare statement
    stmt, err := db.Prepare("INSERT INTO users (username, email) VALUES (?, ?)")
    if err != nil {
        return err
    }
    defer stmt.Close()

    // Batch insert
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
      <p>## 13.6 NULL Value Handling</p>

    </div>
  );
}

export const metadata = {
  id: '13-5-1',
  title: 'Use Prepared Statements',
  section: '13.5.1'
};
