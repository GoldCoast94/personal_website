import React from 'react';

interface Props {
  className?: string;
}

export default function ConnectionPoolConfiguration({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">13.4.1 Connection Pool Configuration</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "database/sql"
    "time"
)

func configureConnectionPool(db *sql.DB) {
    // Set maximum open connections
    db.SetMaxOpenConns(25)

    // Set maximum idle connections
    db.SetMaxIdleConns(5)

    // Set maximum connection lifetime
    db.SetConnMaxLifetime(5 * time.Minute)

    // Set maximum idle time for connections
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
      <p>## 13.5 Prepared Statements</p>

    </div>
  );
}

export const metadata = {
  id: '13-4-1',
  title: 'Connection Pool Configuration',
  section: '13.4.1'
};
