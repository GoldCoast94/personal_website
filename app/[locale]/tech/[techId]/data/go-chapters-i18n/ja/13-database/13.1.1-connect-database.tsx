import React from 'react';

interface Props {
  className?: string;
}

export default function データベースに接続({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">13.1.1 データベースに接続</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "database/sql"
    "fmt"
    "log"

    _ "github.com/go-sql-driver/mysql"  // MySQLドライバ
)

func main() {
    // 接続文字列のフォーマット: username:password@tcp(host:port)/database
    dsn := "root:password@tcp(localhost:3306)/testdb"

    db, err := sql.Open("mysql", dsn)
    if err != nil {
        log.Fatal(err)
    }
    defer db.Close()

    // 接続をテスト
    err = db.Ping()
    if err != nil {
        log.Fatal(err)
    }

    fmt.Println("Connected to database!")

    // 接続プールパラメータを設定
    db.SetMaxOpenConns(25)                 // 最大オープン接続数
    db.SetMaxIdleConns(5)                  // 最大アイドル接続数
    db.SetConnMaxLifetime(5 * time.Minute) // 接続の最大生存時間
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '13-1-1',
  title: 'データベースに接続',
  section: '13.1.1'
};
