import React from 'react';

interface Props {
  className?: string;
}

export default function 包的命名规则({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">8.1.2 包的命名规则</h3>

      <pre className="code-block">
        <code className="language-go">{`// 好的包名示例
package user       // 简短、清晰
package http       // 描述性强
package strings    // 复数形式（如果合适）

// 避免的包名
package my_package // 不要使用下划线
package MyPackage  // 不要使用大写
package util       // 太宽泛`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '8-1-2',
  title: '包的命名规则',
  section: '8.1.2'
};
