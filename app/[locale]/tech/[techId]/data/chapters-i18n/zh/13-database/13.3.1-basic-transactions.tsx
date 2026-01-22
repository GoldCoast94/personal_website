import React from 'react';

interface Props {
  className?: string;
}

export default function 基本事务({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">13.3.1 基本事务</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "database/sql"
    "fmt"
)

func transferMoney(db *sql.DB, fromID, toID int, amount float64) error {
    // 开始事务
    tx, err := db.Begin()
    if err != nil {
        return err
    }

    // 确保事务结束时提交或回滚
    defer func() {
        if err != nil {
            tx.Rollback()
            fmt.Println("Transaction rolled back")
        } else {
            tx.Commit()
            fmt.Println("Transaction committed")
        }
    }()

    // 扣款
    _, err = tx.Exec("UPDATE accounts SET balance = balance - ? WHERE id = ?", amount, fromID)
    if err != nil {
        return err
    }

    // 加款
    _, err = tx.Exec("UPDATE accounts SET balance = balance + ? WHERE id = ?", amount, toID)
    if err != nil {
        return err
    }

    return nil
}

func main() {
    db, _ := sql.Open("mysql", "root:password@tcp(localhost:3306)/testdb")
    defer db.Close()

    err := transferMoney(db, 1, 2, 100.0)
    if err != nil {
        fmt.Println("Transfer failed:", err)
    } else {
        fmt.Println("Transfer successful")
    }
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '13-3-1',
  title: '基本事务',
  section: '13.3.1'
};
