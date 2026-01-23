import React from 'react';

interface Props {
  className?: string;
}

export default function 练习4数据导入导出({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 练习4：数据导入导出</h3>
      <p>实现CSV数据导入到数据库和从数据库导出到CSV。</p>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '练习4：数据导入导出',
  section: '0'
};
