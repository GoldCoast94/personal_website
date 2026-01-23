import React from 'react';

interface Props {
  className?: string;
}

export default function トランザクションオプション({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">13.3.2 トランザクションオプション</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "context"
    "database/sql"
)

func transactionWithOptions(db *sql.DB) error {
    ctx := context.Background()

    // トランザクションオプションを設定
    txOpts := &sql.TxOptions{
        Isolation: sql.LevelSerializable,
        ReadOnly:  false,
    }

    tx, err := db.BeginTx(ctx, txOpts)
    if err != nil {
        return err
    }
    defer tx.Rollback()

    // 操作を実行
    _, err = tx.Exec("INSERT INTO users (username, email) VALUES (?, ?)", "user", "user@example.com")
    if err != nil {
        return err
    }

    return tx.Commit()
}`}</code>
      </pre>
      <p>## 13.4 接続プール管理</p>

    </div>
  );
}

export const metadata = {
  id: '13-3-2',
  title: 'トランザクションオプション',
  section: '13.3.2'
};
