import React from 'react';

interface Props {
  className?: string;
}

export default function パッケージの初期化({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">8.5.1 パッケージの初期化</h3>

      <pre className="code-block">
        <code className="language-go">{`package database

import (
    "database/sql"
    "log"
)

var DB *sql.DB

// init関数はパッケージのインポート時に自動的に実行される
func init() {
    log.Println("Initializing database package")
    var err error
    DB, err = sql.Open("mysql", "user:pass@/dbname")
    if err != nil {
        log.Fatal(err)
    }
}

// 複数のinit関数は宣言順に実行される
func init() {
    log.Println("Second init function")
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '8-5-1',
  title: 'パッケージの初期化',
  section: '8.5.1'
};
