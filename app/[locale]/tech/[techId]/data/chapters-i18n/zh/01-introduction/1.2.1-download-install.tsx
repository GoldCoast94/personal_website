import React from 'react';

interface Props {
  className?: string;
}

export default function 下载安装({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">1.2.1 下载安装</h3>

      <ul>
        <li>访问官网：https://golang.org/dl/ （国内可访问 https://golang.google.cn/dl/）</li>
        <li>下载对应操作系统的安装包</li>
        <li>按照安装向导完成安装</li>
      </ul>

      <ul>
        <li>*macOS**</li>
      </ul>

      <pre className="code-block">
        <code className="language-bash">{`# 使用Homebrew安装
brew install go`}</code>
      </pre>

      <ul>
        <li>*Linux**</li>
      </ul>

      <pre className="code-block">
        <code className="language-bash">{`# 下载并解压
wget https://golang.org/dl/go1.21.0.linux-amd64.tar.gz
sudo tar -C /usr/local -xzf go1.21.0.linux-amd64.tar.gz

# 配置环境变量
echo 'export PATH=$PATH:/usr/local/go/bin' >> ~/.bashrc
source ~/.bashrc`}</code>
      </pre>

      <ul>
        <li>*Windows**</li>
        <li>下载MSI安装包，双击安装即可</li>
      </ul>

    </div>
  );
}

export const metadata = {
  id: '1-2-1',
  title: '下载安装',
  section: '1.2.1'
};
