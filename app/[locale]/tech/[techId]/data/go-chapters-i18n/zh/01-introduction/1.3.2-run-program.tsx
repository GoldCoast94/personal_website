import React from 'react';

interface Props {
  className?: string;
}

export default function 运行程序({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">1.3.2 运行程序</h3>

      <pre className="code-block">
        <code className="language-bash">{`# 方法1：直接运行
go run hello.go

# 方法2：编译后运行
go build hello.go
./hello

# 方法3：编译并指定输出名称
go build -o myapp hello.go
./myapp`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '1-3-2',
  title: '运行程序',
  section: '1.3.2'
};
