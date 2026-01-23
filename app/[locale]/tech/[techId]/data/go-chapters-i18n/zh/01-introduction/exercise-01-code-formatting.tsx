import React from 'react';

interface Props {
  className?: string;
}

export default function 练习4代码格式化({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 练习4：代码格式化</h3>

      <ul>
        <li>*题目：** 编写一段格式混乱的Go代码，然后使用go fmt格式化。</li>
      </ul>

      <pre className="code-block">
        <code className="language-go">{`// 混乱的代码示例
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
        <li>*要求：**</li>
        <li>将上述代码保存为messy.go</li>
        <li>使用go fmt格式化</li>
        <li>观察格式化后的变化</li>
      </ul>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '练习4：代码格式化',
  section: '0'
};
