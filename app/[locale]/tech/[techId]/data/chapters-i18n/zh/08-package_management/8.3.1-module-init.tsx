import React from 'react';

interface Props {
  className?: string;
}

export default function 初始化模块({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">8.3.1 初始化模块</h3>

      <pre className="code-block">
        <code className="language-bash">{`# 初始化新模块
go mod init github.com/username/myproject

# 生成的 go.mod 文件
module github.com/username/myproject

go 1.21

require (
    github.com/gin-gonic/gin v1.9.1
    github.com/google/uuid v1.3.0
)`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '8-3-1',
  title: '初始化模块',
  section: '8.3.1'
};
