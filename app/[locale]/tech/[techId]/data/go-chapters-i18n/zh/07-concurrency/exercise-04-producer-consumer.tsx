import React from 'react';

interface Props {
  className?: string;
}

export default function 练习2生产者消费者({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 练习2：生产者-消费者</h3>

      <ul>
        <li>*题目：** 实现生产者-消费者模式：</li>
        <li>多个生产者产生随机数</li>
        <li>多个消费者处理数据（计算平方）</li>
        <li>使用buffered channel作为队列</li>
        <li>实现优雅关闭</li>
        <li>统计处理的数据总数</li>
      </ul>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '练习2：生产者-消费者',
  section: '0'
};
