import React from 'react';

interface Props {
  className?: string;
}

export default function GoBuild({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">1.4.3 go build</h3>

      <pre className="code-block">
        <code className="language-bash">{`# 编译当前目录
go build

# 编译指定文件
go build main.go

# 指定输出文件名
go build -o myapp

# 交叉编译（编译到其他平台）
GOOS=linux GOARCH=amd64 go build
GOOS=windows GOARCH=amd64 go build -o app.exe`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '1-4-3',
  title: 'go build',
  section: '1.4.3'
};
