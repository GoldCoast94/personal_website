import React from 'react';

interface Props {
  className?: string;
}

export default function 练习5学生成绩管理({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 练习5：学生成绩管理</h3>

      <ul>
        <li>*题目：** 使用map实现简单的学生成绩管理系统。</li>
      </ul>

      <ul>
        <li>*要求：**</li>
        <li>添加学生成绩</li>
        <li>查询学生成绩</li>
        <li>删除学生</li>
        <li>计算平均分</li>
        <li>找出最高分和最低分</li>
      </ul>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '练习5：学生成绩管理',
  section: '0'
};
