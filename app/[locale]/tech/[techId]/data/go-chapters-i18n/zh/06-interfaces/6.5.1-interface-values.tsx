import React from 'react';

interface Props {
  className?: string;
}

export default function 接口值({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">6.5.1 接口值</h3>
      <p>接口值包含类型和值两部分。</p>

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

    // 接口值为nil
    describe(i)  // (<nil>, <nil>)
    // i.M()     // panic: nil pointer dereference

    // 接口值包含nil指针
    var t *T
    i = t
    describe(i)  // (<nil>, *main.T)
    i.M()        // 不会panic，输出<nil>

    // 接口值包含非nil值
    i = &T{"hello"}
    describe(i)  // (&{hello}, *main.T)
    i.M()        // 输出hello
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '6-5-1',
  title: '接口值',
  section: '6.5.1'
};
