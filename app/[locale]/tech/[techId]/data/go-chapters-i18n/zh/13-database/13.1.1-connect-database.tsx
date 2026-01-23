import React from 'react';

interface Props {
  className?: string;
}

export default function 连接数据库({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">13.1.1 连接数据库</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "database/sql"
    "fmt"
    "log"

    _ "github.com/go-sql-driver/mysql"  // MySQL驱动
)

func main() {
    // 连接字符串格式: username:password@tcp(host:port)/database
    dsn := "root:password@tcp(localhost:3306)/testdb"

    db, err := sql.Open("mysql", dsn)
    if err != nil {
        log.Fatal(err)
    }
    defer db.Close()

    // 测试连接
    err = db.Ping()
    if err != nil {
        log.Fatal(err)
    }

    fmt.Println("Connected to database!")

    // 设置连接池参数
    db.SetMaxOpenConns(25)                 // 最大打开连接数
    db.SetMaxIdleConns(5)                  // 最大空闲连接数
    db.SetConnMaxLifetime(5 * time.Minute) // 连接最大生存时间
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '13-1-1',
  title: '连接数据库',
  section: '13.1.1'
};
