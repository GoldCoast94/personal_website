import React from 'react';

interface Props {
  className?: string;
}

export default function Gomod文件详解({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">8.3.3 go.mod 文件详解</h3>

      <pre className="code-block">
        <code className="language-go">{`module github.com/username/myproject

go 1.21

// 直接依赖
require (
    github.com/gin-gonic/gin v1.9.1
    github.com/google/uuid v1.3.0
)

// 排除特定版本
exclude github.com/old/package v1.0.0

// 替换依赖
replace (
    github.com/old/package => github.com/new/package v2.0.0
    github.com/local/package => ./local/path
)

// 撤回版本
retract v1.0.0 // 有严重bug的版本`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '8-3-3',
  title: 'go.mod 文件详解',
  section: '8.3.3'
};
