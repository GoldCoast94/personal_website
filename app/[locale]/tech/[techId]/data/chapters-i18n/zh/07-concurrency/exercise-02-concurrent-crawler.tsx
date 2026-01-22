import React from 'react';

interface Props {
  className?: string;
}

export default function 练习3并发爬虫({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 练习3：并发爬虫</h3>

      <ul>
        <li>*题目：** 实现一个简单的并发爬虫：</li>
        <li>给定URL列表</li>
        <li>并发爬取每个URL（模拟）</li>
        <li>实现URL去重</li>
        <li>限制最大并发数</li>
        <li>收集爬取结果</li>
      </ul>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '练习3：并发爬虫',
  section: '0'
};
