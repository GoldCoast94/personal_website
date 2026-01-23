import React from 'react';

interface Props {
  className?: string;
}

export default function PackageInitialization({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">8.5.1 Package Initialization</h3>

      <pre className="code-block">
        <code className="language-go">{`package database

import (
    "database/sql"
    "log"
)

var DB *sql.DB

// init function executes automatically when package is imported
func init() {
    log.Println("Initializing database package")
    var err error
    DB, err = sql.Open("mysql", "user:pass@/dbname")
    if err != nil {
        log.Fatal(err)
    }
}

// Multiple init functions execute in declaration order
func init() {
    log.Println("Second init function")
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '8-5-1',
  title: 'Package Initialization',
  section: '8.5.1'
};
