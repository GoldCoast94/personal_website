import React from 'react';

interface Props {
  className?: string;
}

export default function Ide选择({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">1.2.3 IDE选择</h3>
      <p>推荐的开发工具：
1. <strong>Visual Studio Code</strong> + Go插件（推荐）
2. <strong>GoLand</strong>（JetBrains出品，功能强大）
3. <strong>Vim/Neovim</strong> + vim-go插件
4. <strong>Sublime Text</strong> + GoSublime插件</p>
      <p>## 1.3 第一个Go程序</p>

    </div>
  );
}

export const metadata = {
  id: '1-2-3',
  title: 'IDE选择',
  section: '1.2.3'
};
