import React from 'react';

interface Props {
  className?: string;
}

export default function 练习2结构体标签解析器({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 练习2：结构体标签解析器</h3>
      <p>使用反射解析结构体标签并进行验证。</p>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '练习2：结构体标签解析器',
  section: '0'
};
