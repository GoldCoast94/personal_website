import React from 'react';

interface Props {
  className?: string;
}

export default function Vendor目录({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">8.4.2 vendor 目录</h3>

      <pre className="code-block">
        <code className="language-bash">{`# 创建vendor目录
go mod vendor

# 使用vendor目录构建
go build -mod=vendor`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '8-4-2',
  title: 'vendor 目录',
  section: '8.4.2'
};
