import React from 'react';

interface Props {
  className?: string;
}

export default function 包的可见性({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">8.1.3 包的可见性</h3>

      <pre className="code-block">
        <code className="language-go">{`package calculator

// 导出的（公开的）- 首字母大写
func Add(a, b int) int {
    return a + b
}

// 未导出的（私有的）- 首字母小写
func multiply(a, b int) int {
    return a * b
}

// 导出的常量
const MaxValue = 100

// 未导出的常量
const minValue = 0

// 导出的类型
type Calculator struct {
    Name string        // 导出的字段
    version string     // 未导出的字段
}`}</code>
      </pre>
      <p>## 8.2 创建和使用自定义包</p>

    </div>
  );
}

export const metadata = {
  id: '8-1-3',
  title: '包的可见性',
  section: '8.1.3'
};
