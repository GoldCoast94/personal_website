import React from 'react';

interface Props {
  className?: string;
}

export default function 练习1学生管理系统({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 练习1：学生管理系统</h3>

      <ul>
        <li>*题目：** 创建一个学生管理系统，实现以下功能：</li>
        <li>定义<code>Student</code>结构体，包含：ID、姓名、年龄、成绩（多个科目）</li>
        <li>实现<code>NewStudent</code>构造函数</li>
        <li>实现方法：</li>
        <li><code>AddScore(subject string, score float64)</code> - 添加成绩</li>
        <li><code>AverageScore() float64</code> - 计算平均分</li>
        <li><code>GetGrade() string</code> - 根据平均分返回等级（A/B/C/D/F）</li>
        <li>实现<code>String()</code>方法，返回学生信息</li>
      </ul>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '练习1：学生管理系统',
  section: '0'
};
