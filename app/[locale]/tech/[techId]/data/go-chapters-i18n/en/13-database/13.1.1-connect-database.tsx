import React from 'react';

interface Props {
  className?: string;
}

export default function ConnectDatabase({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">13.1.1 Connect to Database</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "database/sql"
    "fmt"
    "log"

    _ "github.com/go-sql-driver/mysql"  // MySQL driver
)

func main() {
    // Connection string format: username:password@tcp(host:port)/database
    dsn := "root:password@tcp(localhost:3306)/testdb"

    db, err := sql.Open("mysql", dsn)
    if err != nil {
        log.Fatal(err)
    }
    defer db.Close()

    // Test connection
    err = db.Ping()
    if err != nil {
        log.Fatal(err)
    }

    fmt.Println("Connected to database!")

    // Configure connection pool parameters
    db.SetMaxOpenConns(25)                 // Maximum open connections
    db.SetMaxIdleConns(5)                  // Maximum idle connections
    db.SetConnMaxLifetime(5 * time.Minute) // Maximum connection lifetime
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '13-1-1',
  title: 'Connect to Database',
  section: '13.1.1'
};
