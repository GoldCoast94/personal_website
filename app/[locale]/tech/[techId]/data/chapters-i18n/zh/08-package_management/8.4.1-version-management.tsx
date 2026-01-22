import React from 'react';

interface Props {
  className?: string;
}

export default function 版本管理({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">8.4.1 版本管理</h3>

      <pre className="code-block">
        <code className="language-go">{`// 使用语义化版本
// v1.2.3
// 主版本.次版本.修订号

// 示例：使用不同版本
require (
    github.com/pkg/errors v0.9.1      // 稳定版本
    github.com/newpkg/test v2.0.0+incompatible  // 不兼容的v2
    github.com/experimental/pkg v0.0.0-20230101120000-abcdef123456 // 伪版本
)`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '8-4-1',
  title: '版本管理',
  section: '8.4.1'
};
