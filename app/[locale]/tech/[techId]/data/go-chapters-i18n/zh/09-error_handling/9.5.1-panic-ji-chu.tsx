import React from 'react';

interface Props {
  className?: string;
}

export default function Panic基础({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">9.5.1 panic 基础</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

func causePanic() {
    panic("something went wrong!")
}

func main() {
    fmt.Println("Start")
    causePanic()
    fmt.Println("End")  // 不会执行
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '9-5-1',
  title: 'panic 基础',
  section: '9.5.1'
};
