import React from 'react';

interface Props {
  className?: string;
}

export default function 事务选项({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">13.3.2 事务选项</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "context"
    "database/sql"
)

func transactionWithOptions(db *sql.DB) error {
    ctx := context.Background()

    // 设置事务选项
    txOpts := &sql.TxOptions{
        Isolation: sql.LevelSerializable,
        ReadOnly:  false,
    }

    tx, err := db.BeginTx(ctx, txOpts)
    if err != nil {
        return err
    }
    defer tx.Rollback()

    // 执行操作
    _, err = tx.Exec("INSERT INTO users (username, email) VALUES (?, ?)", "user", "user@example.com")
    if err != nil {
        return err
    }

    return tx.Commit()
}`}</code>
      </pre>
      <p>## 13.4 连接池管理</p>

    </div>
  );
}

export const metadata = {
  id: '13-3-2',
  title: '事务选项',
  section: '13.3.2'
};
