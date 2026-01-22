import React from 'react';

interface Props {
  className?: string;
}

export default function 练习1博客系统({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 练习1：博客系统</h3>
      <p>创建一个简单的博客API，支持文章的CRUD操作。</p>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '练习1：博客系统',
  section: '0'
};
