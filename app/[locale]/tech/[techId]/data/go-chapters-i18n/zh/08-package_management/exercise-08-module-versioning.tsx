import React from 'react';

interface Props {
  className?: string;
}

export default function 练习4模块版本管理({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 练习4：模块版本管理</h3>
      <p>创建一个项目，使用go modules管理依赖，并尝试使用replace指令替换某个依赖。</p>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '练习4：模块版本管理',
  section: '0'
};
