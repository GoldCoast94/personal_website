import React from 'react';

interface Props {
  className?: string;
}

export default function インターフェース値({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">6.5.1 インターフェース値</h3>
      <p>インターフェース値は型と値の2つの部分で構成されます。</p>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

type I interface {
    M()
}

type T struct {
    S string
}

func (t *T) M() {
    if t == nil {
        fmt.Println("<nil>")
        return
    }
    fmt.Println(t.S)
}

func describe(i I) {
    fmt.Printf("(%v, %T)\n", i, i)
}

func main() {
    var i I

    // Interface value is nil
    describe(i)  // (<nil>, <nil>)
    // i.M()     // panic: nil pointer dereference

    // Interface value contains nil pointer
    var t *T
    i = t
    describe(i)  // (<nil>, *main.T)
    i.M()        // won't panic, outputs <nil>

    // Interface value contains non-nil value
    i = &T{"hello"}
    describe(i)  // (&{hello}, *main.T)
    i.M()        // outputs hello
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '6-5-1',
  title: 'インターフェース値',
  section: '6.5.1'
};
