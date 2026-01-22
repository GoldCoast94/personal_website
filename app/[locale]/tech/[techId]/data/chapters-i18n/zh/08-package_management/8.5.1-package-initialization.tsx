import React from 'react';

interface Props {
  className?: string;
}

export default function 包的初始化({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">8.5.1 包的初始化</h3>

      <pre className="code-block">
        <code className="language-go">{`package database

import (
    "database/sql"
    "log"
)

var DB *sql.DB

// init函数在包导入时自动执行
func init() {
    log.Println("Initializing database package")
    var err error
    DB, err = sql.Open("mysql", "user:pass@/dbname")
    if err != nil {
        log.Fatal(err)
    }
}

// 多个init函数按声明顺序执行
func init() {
    log.Println("Second init function")
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '8-5-1',
  title: '包的初始化',
  section: '8.5.1'
};
