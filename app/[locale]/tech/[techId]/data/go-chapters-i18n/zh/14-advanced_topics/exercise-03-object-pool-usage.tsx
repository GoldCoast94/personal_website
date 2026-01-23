import React from 'react';

interface Props {
  className?: string;
}

export default function 练习4对象池应用({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 练习4：对象池应用</h3>
      <p>为数据库连接实现对象池。</p>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '练习4：对象池应用',
  section: '0'
};
