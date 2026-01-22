import React from 'react';

interface Props {
  className?: string;
}

export default function GoFmt({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">1.4.5 go fmt</h3>

      <pre className="code-block">
        <code className="language-bash">{`# 格式化当前目录所有文件
go fmt ./...

# 格式化指定文件
go fmt main.go

# 使用gofmt（更多选项）
gofmt -w main.go  # -w表示直接写入文件`}</code>
      </pre>
      <p>## 1.5 Go代码规范</p>

    </div>
  );
}

export const metadata = {
  id: '1-4-5',
  title: 'go fmt',
  section: '1.4.5'
};
