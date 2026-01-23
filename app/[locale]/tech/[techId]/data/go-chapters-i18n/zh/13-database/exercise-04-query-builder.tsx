import React from 'react';

interface Props {
  className?: string;
}

export default function 练习5查询构建器({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 练习5：查询构建器</h3>
      <p>创建一个简单的SQL查询构建器。</p>
      <p>## 13.10 本章小结</p>
      <p>本章全面介绍了Go语言的数据库编程：</p>

      <ul>
        <li>**database/sql包**：Go标准库的数据库接口</li>
        <li>**CRUD操作**：增删改查的基本操作</li>
        <li>**事务处理**：保证数据一致性</li>
        <li>**连接池**：管理数据库连接</li>
        <li>**预处理语句**：提高性能和安全性</li>
        <li>**NULL值处理**：处理可空字段</li>
        <li>**数据库迁移**：版本控制和模式演化</li>
        <li>**实战项目**：完整的用户管理系统</li>
      </ul>
      <p>掌握数据库编程是构建实用应用的基础。</p>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '练习5：查询构建器',
  section: '0'
};
