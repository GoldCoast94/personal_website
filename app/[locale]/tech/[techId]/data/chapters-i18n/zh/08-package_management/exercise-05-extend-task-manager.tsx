import React from 'react';

interface Props {
  className?: string;
}

export default function 练习5扩展任务管理系统({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 练习5：扩展任务管理系统</h3>
      <p>在任务管理系统中添加：
- 任务优先级
- 任务标签
- 任务搜索功能
- 数据持久化（保存到文件）</p>
      <p>## 8.9 练习答案</p>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '练习5：扩展任务管理系统',
  section: '0'
};
