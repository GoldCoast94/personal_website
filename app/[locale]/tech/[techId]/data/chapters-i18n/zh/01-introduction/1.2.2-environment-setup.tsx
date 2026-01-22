import React from 'react';

interface Props {
  className?: string;
}

export default function 环境变量配置({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">1.2.2 环境变量配置</h3>

      <pre className="code-block">
        <code className="language-bash">{`# 查看Go版本
go version

# 查看Go环境信息
go env

# 重要环境变量
export GOROOT=/usr/local/go           # Go安装目录
export GOPATH=$HOME/go                # Go工作目录
export PATH=$PATH:$GOROOT/bin:$GOPATH/bin

# Go 1.11+使用Go Modules，建议开启
export GO111MODULE=on
export GOPROXY=https://goproxy.cn,direct  # 国内代理加速`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '1-2-2',
  title: '环境变量配置',
  section: '1.2.2'
};
