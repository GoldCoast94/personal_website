import React from 'react';

interface Props {
  className?: string;
}

export default function 练习3mock测试({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 练习3：Mock测试</h3>
      <p>创建一个文件系统接口并使用mock进行测试。</p>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '练习3：Mock测试',
  section: '0'
};
