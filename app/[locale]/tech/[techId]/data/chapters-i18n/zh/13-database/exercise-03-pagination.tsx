import React from 'react';

interface Props {
  className?: string;
}

export default function 练习2分页查询({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 练习2：分页查询</h3>
      <p>实现通用的分页查询功能。</p>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '练习2：分页查询',
  section: '0'
};
