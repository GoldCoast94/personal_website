import React from 'react';

interface Props {
  className?: string;
}

export default function 练习1图书管理系统({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 练习1：图书管理系统</h3>
      <p>创建图书管理系统的数据库操作，包括图书、作者、分类的CRUD。</p>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '练习1：图书管理系统',
  section: '0'
};
