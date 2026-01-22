import React from 'react';

interface Props {
  className?: string;
}

export default function 什么是包({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">8.1.1 什么是包</h3>
      <p>包是Go语言中组织代码的基本单位。每个Go源文件都属于一个包，包提供了代码的模块化和可重用性。</p>

      <pre className="code-block">
        <code className="language-go">{`// 在文件开头声明包名
package main

import "fmt"

func main() {
    fmt.Println("Hello, Package!")
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '8-1-1',
  title: '什么是包',
  section: '8.1.1'
};
