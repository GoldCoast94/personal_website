import React from 'react';

interface Props {
  className?: string;
}

export default function 练习3配置文件管理({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 练习3：配置文件管理</h3>
      <p>创建一个配置文件管理器，支持读取、修改和保存配置。</p>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '练习3：配置文件管理',
  section: '0'
};
