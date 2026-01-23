import React from 'react';

interface Props {
  className?: string;
}

export default function 生成覆盖率报告({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">10.7.1 生成覆盖率报告</h3>

      <pre className="code-block">
        <code className="language-bash">{`# 运行测试并生成覆盖率
go test -cover

# 生成详细覆盖率报告
go test -coverprofile=coverage.out

# 查看覆盖率详情
go tool cover -func=coverage.out

# 生成HTML报告
go tool cover -html=coverage.out`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '10-7-1',
  title: '生成覆盖率报告',
  section: '10.7.1'
};
