import React from 'react';

interface Props {
  className?: string;
}

export default function HelloWorld({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">1.3.1 Hello World</h3>
      <p>创建文件 <code>hello.go</code>：</p>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}`}</code>
      </pre>

      <ul>
        <li>*代码解析：**</li>
        <li><code>package main</code>：声明包名，main包是程序入口</li>
        <li><code>import "fmt"</code>：导入fmt格式化包</li>
        <li><code>func main()</code>：main函数是程序执行入口</li>
        <li><code>fmt.Println()</code>：打印输出</li>
      </ul>

    </div>
  );
}

export const metadata = {
  id: '1-3-1',
  title: 'Hello World',
  section: '1.3.1'
};
