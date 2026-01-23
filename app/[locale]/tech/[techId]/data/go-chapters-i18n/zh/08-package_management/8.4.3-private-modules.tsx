import React from 'react';

interface Props {
  className?: string;
}

export default function 私有模块({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">8.4.3 私有模块</h3>

      <pre className="code-block">
        <code className="language-bash">{`# 配置私有仓库
export GOPRIVATE=github.com/mycompany/*

# 配置git凭证
git config --global url."git@github.com:".insteadOf "https://github.com/"`}</code>
      </pre>
      <p>## 8.5 包的内部结构</p>

    </div>
  );
}

export const metadata = {
  id: '8-4-3',
  title: '私有模块',
  section: '8.4.3'
};
