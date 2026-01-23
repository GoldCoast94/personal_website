import React from 'react';

interface Props {
  className?: string;
}

export default function IotaEnumeration({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">2.2.2 iota Enumeration</h3>
      <p><code>iota</code> is Go's constant counter, starting from 0 and incrementing by 1 for each line:</p>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

func main() {
    // Basic usage
    const (
        a = iota  // 0
        b         // 1
        c         // 2
    )

    // Starting from 1
    const (
        January = iota + 1  // 1
        February            // 2
        March               // 3
    )

    // Skipping certain values
    const (
        x = iota  // 0
        y         // 1
        _         // 2 (skipped)
        z         // 3
    )

    // Bit operations
    const (
        ReadPerm   = 1 << iota  // 1 << 0 = 1
        WritePerm               // 1 << 1 = 2
        ExecutePerm             // 1 << 2 = 4
    )

    // Expressions
    const (
        KB = 1 << (10 * iota)  // 1 << 0 = 1
        MB                      // 1 << 10 = 1024
        GB                      // 1 << 20 = 1048576
        TB                      // 1 << 30 = 1073741824
    )

    fmt.Println(a, b, c)
    fmt.Println(January, February, March)
    fmt.Println(x, y, z)
    fmt.Println(ReadPerm, WritePerm, ExecutePerm)
    fmt.Println(KB, MB, GB, TB)
}`}</code>
      </pre>
      <p>## 2.3 Basic Data Types</p>

    </div>
  );
}

export const metadata = {
  id: '2-2-2',
  title: 'iota Enumeration',
  section: '2.2.2'
};
