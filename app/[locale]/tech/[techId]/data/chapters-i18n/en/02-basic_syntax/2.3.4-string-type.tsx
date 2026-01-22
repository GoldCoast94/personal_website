import React from 'react';

interface Props {
  className?: string;
}

export default function StringType({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">2.3.4 String Type</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "strings"
)

func main() {
    // String definition
    var s1 string = "Hello, Go!"
    s2 := "你好，Go！"

    // Raw strings (no escape)
    s3 := \`Line 1
Line 2
Line 3\n not escaped\`

    // String operations
    fmt.Println("Length:", len(s1))  // Number of bytes
    fmt.Println("Concatenation:", s1 + " " + s2)
    fmt.Println("Contains:", strings.Contains(s1, "Go"))
    fmt.Println("Prefix:", strings.HasPrefix(s1, "Hello"))
    fmt.Println("Suffix:", strings.HasSuffix(s1, "!"))
    fmt.Println("Index:", strings.Index(s1, "Go"))
    fmt.Println("Replace:", strings.Replace(s1, "Go", "Golang", 1))
    fmt.Println("Split:", strings.Split(s1, ","))
    fmt.Println("Upper:", strings.ToUpper(s1))
    fmt.Println("Lower:", strings.ToLower(s1))
    fmt.Println("Trim:", strings.Trim("  space  ", " "))

    // String traversal
    for i := 0; i < len(s1); i++ {
        fmt.Printf("%c ", s1[i])  // Iterate by byte
    }
    fmt.Println()

    for _, r := range s2 {
        fmt.Printf("%c ", r)  // Iterate by Unicode character
    }
    fmt.Println()

    // Raw string
    fmt.Println(s3)
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '2-3-4',
  title: 'String Type',
  section: '2.3.4'
};
