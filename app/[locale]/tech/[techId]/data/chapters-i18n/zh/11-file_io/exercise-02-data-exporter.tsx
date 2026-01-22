import React from 'react';

interface Props {
  className?: string;
}

export default function 练习5数据导出器({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 练习5：数据导出器</h3>
      <p>创建一个程序，将数据导出为CSV和JSON格式。</p>
      <p>## 11.11 练习答案</p>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '练习5：数据导出器',
  section: '0'
};
