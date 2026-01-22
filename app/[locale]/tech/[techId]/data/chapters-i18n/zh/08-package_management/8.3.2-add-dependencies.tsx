import React from 'react';

interface Props {
  className?: string;
}

export default function 添加依赖({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">8.3.2 添加依赖</h3>

      <pre className="code-block">
        <code className="language-bash">{`# 添加依赖
go get github.com/gin-gonic/gin

# 添加特定版本
go get github.com/gin-gonic/gin@v1.9.1

# 升级依赖
go get -u github.com/gin-gonic/gin

# 升级所有依赖
go get -u ./...

# 移除未使用的依赖
go mod tidy`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '8-3-2',
  title: '添加依赖',
  section: '8.3.2'
};
