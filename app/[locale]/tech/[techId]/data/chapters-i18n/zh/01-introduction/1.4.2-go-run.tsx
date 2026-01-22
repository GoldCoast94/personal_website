import React from 'react';

interface Props {
  className?: string;
}

export default function GoRun({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">1.4.2 go run</h3>

      <pre className="code-block">
        <code className="language-bash">{`# 运行单个文件
go run main.go

# 运行多个文件
go run main.go util.go

# 运行整个目录
go run .`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '1-4-2',
  title: 'go run',
  section: '1.4.2'
};
