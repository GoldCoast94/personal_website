import React from 'react';

interface Props {
  className?: string;
}

export default function InterfaceValues({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">6.5.1 Interface Values</h3>
      <p>Interface values consist of two parts: type and value.</p>

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
  title: 'Interface Values',
  section: '6.5.1'
};
