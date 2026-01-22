import React from 'react';

interface Props {
  className?: string;
}

export default function 数据库层Databasedbgo({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">15.1.5 数据库层 (database/db.go)</h3>

      <pre className="code-block">
        <code className="language-go">{`package database

import (
    "database/sql"
    "fmt"

    _ "github.com/go-sql-driver/mysql"
)

type DB struct {
    *sql.DB
}

func New(dataSourceName string) (*DB, error) {
    db, err := sql.Open("mysql", dataSourceName)
    if err != nil {
        return nil, err
    }

    if err := db.Ping(); err != nil {
        return nil, err
    }

    db.SetMaxOpenConns(25)
    db.SetMaxIdleConns(5)

    return &DB{db}, nil
}

func (db *DB) InitSchema() error {
    queries := []string{
        \`CREATE TABLE IF NOT EXISTS users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            username VARCHAR(50) NOT NULL UNIQUE,
            email VARCHAR(100) NOT NULL UNIQUE,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        )\`,
        \`CREATE TABLE IF NOT EXISTS todos (
            id INT AUTO_INCREMENT PRIMARY KEY,
            user_id INT NOT NULL,
            title VARCHAR(200) NOT NULL,
            description TEXT,
            completed BOOLEAN DEFAULT FALSE,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
        )\`,
    }

    for _, query := range queries {
        if _, err := db.Exec(query); err != nil {
            return fmt.Errorf("failed to execute query: %w", err)
        }
    }

    return nil
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '15-1-5',
  title: '数据库层 (database/db.go)',
  section: '15.1.5'
};
