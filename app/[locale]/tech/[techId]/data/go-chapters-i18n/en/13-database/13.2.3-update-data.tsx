import React from 'react';

interface Props {
  className?: string;
}

export default function UpdateData({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">13.2.3 Update Data</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "database/sql"
    "fmt"
)

func updateUser(db *sql.DB, id int, username, email string) error {
    query := "UPDATE users SET username = ?, email = ? WHERE id = ?"

    result, err := db.Exec(query, username, email, id)
    if err != nil {
        return err
    }

    // Check affected rows
    rowsAffected, err := result.RowsAffected()
    if err != nil {
        return err
    }

    if rowsAffected == 0 {
        return fmt.Errorf("user not found")
    }

    fmt.Printf("Updated %d row(s)\n", rowsAffected)
    return nil
}

func updateUserEmail(db *sql.DB, id int, email string) error {
    query := "UPDATE users SET email = ? WHERE id = ?"

    _, err := db.Exec(query, email, id)
    return err
}

func main() {
    db, _ := sql.Open("mysql", "root:password@tcp(localhost:3306)/testdb")
    defer db.Close()

    updateUser(db, 1, "alice_updated", "alice_new@example.com")
    updateUserEmail(db, 2, "bob_new@example.com")
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '13-2-3',
  title: 'Update Data',
  section: '13.2.3'
};
