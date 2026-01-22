import React from 'react';

interface Props {
  className?: string;
}

export default function 练习4数据库抽象层({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 练习4：数据库抽象层</h3>

      <ul>
        <li>*题目：** 创建数据库抽象层：</li>
        <li>定义<code>Database</code>接口：Connect、Close、Query、Execute</li>
        <li>实现<code>MockDB</code>用于测试</li>
        <li>实现<code>UserRepository</code>，依赖<code>Database</code>接口</li>
        <li>演示依赖注入和测试</li>
      </ul>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '练习4：数据库抽象层',
  section: '0'
};
