import React from 'react';

interface Props {
  className?: string;
}

export default function 练习5任务调度器({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 练习5：任务调度器</h3>

      <ul>
        <li>*题目：** 实现一个简单的任务调度器：</li>
        <li>支持添加定时任务</li>
        <li>使用goroutine池执行任务</li>
        <li>支持任务取消</li>
        <li>实现任务优先级</li>
        <li>记录任务执行历史</li>
      </ul>
      <p>## 7.7 练习答案</p>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '练习5：任务调度器',
  section: '0'
};
