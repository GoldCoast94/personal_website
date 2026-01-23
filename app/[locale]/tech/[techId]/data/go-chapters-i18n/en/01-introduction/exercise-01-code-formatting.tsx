import React from 'react';

interface Props {
  className?: string;
}

export default function Exercise4CodeFormatting({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 Exercise 4: Code Formatting</h3>

      <ul>
        <li>**Question:** Write a messy Go code snippet, then format it using go fmt.</li>
      </ul>

      <pre className="code-block">
        <code className="language-go">{`// Messy code example
package main
import "fmt"
func main(){
fmt.Println("Hello")
x:=10
y:=20
fmt.Println(x+y)
}`}</code>
      </pre>

      <ul>
        <li>**Requirements:**</li>
        <li>Save the above code as messy.go</li>
        <li>Format it using go fmt</li>
        <li>Observe the changes after formatting</li>
      </ul>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: 'Exercise 4: Code Formatting',
  section: '0'
};
