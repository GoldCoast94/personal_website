import React from 'react';

interface Props {
  className?: string;
}

export default function 连接池配置({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">13.4.1 连接池配置</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "database/sql"
    "time"
)

func configureConnectionPool(db *sql.DB) {
    // 设置最大打开连接数
    db.SetMaxOpenConns(25)

    // 设置最大空闲连接数
    db.SetMaxIdleConns(5)

    // 设置连接最大生存时间
    db.SetConnMaxLifetime(5 * time.Minute)

    // 设置连接最大空闲时间
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
      <p>## 13.5 预处理语句</p>

    </div>
  );
}

export const metadata = {
  id: '13-4-1',
  title: '连接池配置',
  section: '13.4.1'
};
