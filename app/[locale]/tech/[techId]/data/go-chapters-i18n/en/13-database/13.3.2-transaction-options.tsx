import React from 'react';

interface Props {
  className?: string;
}

export default function TransactionOptions({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">13.3.2 Transaction Options</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "context"
    "database/sql"
)

func transactionWithOptions(db *sql.DB) error {
    ctx := context.Background()

    // Set transaction options
    txOpts := &sql.TxOptions{
        Isolation: sql.LevelSerializable,
        ReadOnly:  false,
    }

    tx, err := db.BeginTx(ctx, txOpts)
    if err != nil {
        return err
    }
    defer tx.Rollback()

    // Execute operations
    _, err = tx.Exec("INSERT INTO users (username, email) VALUES (?, ?)", "user", "user@example.com")
    if err != nil {
        return err
    }

    return tx.Commit()
}`}</code>
      </pre>
      <p>## 13.4 Connection Pool Management</p>

    </div>
  );
}

export const metadata = {
  id: '13-3-2',
  title: 'Transaction Options',
  section: '13.3.2'
};
