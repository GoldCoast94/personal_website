import React from 'react';

interface Props {
  className?: string;
}

export default function PackageImport({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">8.5.2 Package Import</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    // Standard import
    "fmt"
    "net/http"

    // Aliased import
    str "strings"

    // Dot import (not recommended)
    . "math"

    // Blank import (only executes init)
    _ "github.com/go-sql-driver/mysql"

    // Third-party packages
    "github.com/gin-gonic/gin"
)

func main() {
    fmt.Println(str.ToUpper("hello"))  // Using alias
    fmt.Println(Sqrt(16))               // Dot import allows direct use
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '8-5-2',
  title: 'Package Import',
  section: '8.5.2'
};
