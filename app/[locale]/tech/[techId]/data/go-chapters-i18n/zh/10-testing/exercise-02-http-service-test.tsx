import React from 'react';

interface Props {
  className?: string;
}

export default function 练习5http服务测试({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 练习5：HTTP服务测试</h3>
      <p>创建一个REST API并编写完整的测试套件。</p>
      <p>## 10.11 练习答案</p>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '练习5：HTTP服务测试',
  section: '0'
};
