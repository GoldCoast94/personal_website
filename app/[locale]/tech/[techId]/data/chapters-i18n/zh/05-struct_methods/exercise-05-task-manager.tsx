import React from 'react';

interface Props {
  className?: string;
}

export default function 练习4任务管理器({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 练习4：任务管理器</h3>

      <ul>
        <li>*题目：** 实现一个任务管理器：</li>
        <li>定义<code>Task</code>结构体，包含：ID、标题、描述、状态、优先级、创建时间</li>
        <li>定义<code>TaskStatus</code>类型（Pending/InProgress/Completed）</li>
        <li>定义<code>Priority</code>类型（Low/Medium/High）</li>
        <li>实现<code>TaskManager</code>结构体和方法：</li>
        <li><code>AddTask(title, desc string, priority Priority)</code> - 添加任务</li>
        <li><code>UpdateStatus(id int, status TaskStatus)</code> - 更新状态</li>
        <li><code>ListTasks(filter TaskStatus)</code> - 列出指定状态的任务</li>
        <li><code>DeleteTask(id int)</code> - 删除任务</li>
      </ul>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '练习4：任务管理器',
  section: '0'
};
