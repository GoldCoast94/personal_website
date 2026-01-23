import React from 'react';

interface Props {
  className?: string;
}

export default function HelloWorld({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">1.3.1 Hello World</h3>
      <p>Create a file <code>hello.go</code>:</p>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}`}</code>
      </pre>

      <ul>
        <li>**Code Explanation:**</li>
        <li><code>package main</code>: Declares the package name, main package is the program entry point</li>
        <li><code>import "fmt"</code>: Imports the fmt formatting package</li>
        <li><code>func main()</code>: main function is the program execution entry point</li>
        <li><code>fmt.Println()</code>: Prints output</li>
      </ul>

    </div>
  );
}

export const metadata = {
  id: '1-3-1',
  title: 'Hello World',
  section: '1.3.1'
};
