import React from 'react';

interface Props {
  className?: string;
}

export default function 练习2创建配置管理包({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 练习2：创建配置管理包</h3>
      <p>创建一个config包，能够读取和解析配置文件（JSON或YAML格式）。</p>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '练习2：创建配置管理包',
  section: '0'
};
