import React from 'react';

interface Props {
  className?: string;
}

export default function 常用命令({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">1.4.1 常用命令</h3>

      <pre className="code-block">
        <code className="language-bash">{`go run      # 编译并运行Go程序
go build    # 编译Go程序
go install  # 编译并安装Go程序
go get      # 下载并安装包和依赖
go mod      # 模块维护
go test     # 运行测试
go fmt      # 格式化代码
go vet      # 检查代码错误
go doc      # 查看文档`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '1-4-1',
  title: '常用命令',
  section: '1.4.1'
};
