import React from 'react';

interface Props {
  className?: string;
}

export default function 接続プール設定({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">13.4.1 接続プール設定</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "database/sql"
    "time"
)

func configureConnectionPool(db *sql.DB) {
    // 最大オープン接続数を設定
    db.SetMaxOpenConns(25)

    // 最大アイドル接続数を設定
    db.SetMaxIdleConns(5)

    // 接続の最大生存時間を設定
    db.SetConnMaxLifetime(5 * time.Minute)

    // 接続の最大アイドル時間を設定
    db.SetConnMaxIdleTime(10 * time.Minute)
}

func getConnectionStats(db *sql.DB) {
    stats := db.Stats()

    fmt.Printf("Open connections: %d\n", stats.OpenConnections)
    fmt.Printf("In use: %d\n", stats.InUse)
    fmt.Printf("Idle: %d\n", stats.Idle)
    fmt.Printf("Wait count: %d\n", stats.WaitCount)
    fmt.Printf("Wait duration: %v\n", stats.WaitDuration)
}`}</code>
      </pre>
      <p>## 13.5 プリペアドステートメント</p>

    </div>
  );
}

export const metadata = {
  id: '13-4-1',
  title: '接続プール設定',
  section: '13.4.1'
};
