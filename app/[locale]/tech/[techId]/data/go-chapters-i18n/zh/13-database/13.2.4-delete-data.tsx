import React from 'react';

interface Props {
  className?: string;
}

export default function 删除数据({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">13.2.4 删除数据</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "database/sql"
    "fmt"
)

func deleteUser(db *sql.DB, id int) error {
    query := "DELETE FROM users WHERE id = ?"

    result, err := db.Exec(query, id)
    if err != nil {
        return err
    }

    rowsAffected, err := result.RowsAffected()
    if err != nil {
        return err
    }

    if rowsAffected == 0 {
        return fmt.Errorf("user not found")
    }

    fmt.Printf("Deleted %d row(s)\n", rowsAffected)
    return nil
}

func deleteAllUsers(db *sql.DB) error {
    query := "DELETE FROM users"

    result, err := db.Exec(query)
    if err != nil {
        return err
    }

    rowsAffected, _ := result.RowsAffected()
    fmt.Printf("Deleted %d row(s)\n", rowsAffected)

    return nil
}

func main() {
    db, _ := sql.Open("mysql", "root:password@tcp(localhost:3306)/testdb")
    defer db.Close()

    deleteUser(db, 1)
}`}</code>
      </pre>
      <p>## 13.3 事务处理</p>

    </div>
  );
}

export const metadata = {
  id: '13-2-4',
  title: '删除数据',
  section: '13.2.4'
};
