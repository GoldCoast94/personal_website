import React from 'react';

interface Props {
  className?: string;
}

export default function 练习4缓存系统({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 练习4：缓存系统</h3>

      <ul>
        <li>*题目：** 实现一个并发安全的缓存系统：</li>
        <li>支持Get、Set、Delete操作</li>
        <li>实现TTL（过期时间）</li>
        <li>定期清理过期数据</li>
        <li>使用读写锁优化性能</li>
        <li>实现缓存统计（命中率）</li>
      </ul>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '练习4：缓存系统',
  section: '0'
};
