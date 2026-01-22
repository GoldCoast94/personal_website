import React from 'react';

interface Props {
  className?: string;
}

export default function 练习3创建日志包({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 练习3：创建日志包</h3>
      <p>创建一个自定义日志包，支持不同日志级别（DEBUG、INFO、WARN、ERROR）。</p>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '练习3：创建日志包',
  section: '0'
};
