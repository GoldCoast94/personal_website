import React from 'react';

interface Props {
  className?: string;
}

export default function GoMod({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">1.4.4 go mod</h3>

      <pre className="code-block">
        <code className="language-bash">{`# 初始化模块
go mod init example.com/myproject

# 下载依赖
go mod download

# 整理依赖（添加缺失的，删除未使用的）
go mod tidy

# 查看依赖
go mod graph

# 将依赖复制到vendor目录
go mod vendor`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '1-4-4',
  title: 'go mod',
  section: '1.4.4'
};
