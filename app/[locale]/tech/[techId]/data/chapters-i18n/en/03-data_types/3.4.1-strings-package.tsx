import React from 'react';

interface Props {
  className?: string;
}

export default function StringsPackage({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">3.4.1 strings Package</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "strings"
)

func main() {
    s := "Hello, Go Programming!"

    // Contains
    fmt.Println("Contains:", strings.Contains(s, "Go"))

    // Count substring occurrences
    fmt.Println("Count:", strings.Count(s, "o"))

    // Prefix/Suffix
    fmt.Println("HasPrefix:", strings.HasPrefix(s, "Hello"))
    fmt.Println("HasSuffix:", strings.HasSuffix(s, "!"))

    // Find substring position
    fmt.Println("Index:", strings.Index(s, "Go"))
    fmt.Println("LastIndex:", strings.LastIndex(s, "o"))

    // Replace
    fmt.Println("Replace:", strings.Replace(s, "Go", "Golang", 1))
    fmt.Println("ReplaceAll:", strings.ReplaceAll(s, "o", "0"))

    // Split
    s2 := "a,b,c,d,e"
    parts := strings.Split(s2, ",")
    fmt.Println("Split:", parts)

    // Join
    fmt.Println("Join:", strings.Join(parts, "-"))

    // Case conversion
    fmt.Println("ToUpper:", strings.ToUpper(s))
    fmt.Println("ToLower:", strings.ToLower(s))

    // Trim whitespace
    s3 := "  hello world  "
    fmt.Println("Trim:", strings.Trim(s3, " "))
    fmt.Println("TrimSpace:", strings.TrimSpace(s3))
    fmt.Println("TrimLeft:", strings.TrimLeft(s3, " "))
    fmt.Println("TrimRight:", strings.TrimRight(s3, " "))

    // Repeat
    fmt.Println("Repeat:", strings.Repeat("Go", 3))
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '3-4-1',
  title: 'strings Package',
  section: '3.4.1'
};
