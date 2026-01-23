import React from 'react';

interface Props {
  className?: string;
}

export default function 练习4文件搜索工具({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 练习4：文件搜索工具</h3>
      <p>实现一个文件搜索工具，支持按名称、大小、修改时间搜索。</p>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '练习4：文件搜索工具',
  section: '0'
};
