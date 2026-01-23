import React from 'react';

interface Props {
  className?: string;
}

export default function 练习2文件服务器({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 练习2：文件服务器</h3>
      <p>实现一个文件浏览和下载服务器。</p>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '练习2：文件服务器',
  section: '0'
};
