import React from 'react';

interface Props {
  className?: string;
}

export default function 练习4panic恢复({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 练习4：panic恢复</h3>
      <p>编写一个Web服务器中间件，捕获panic并转换为HTTP 500错误。</p>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '练习4：panic恢复',
  section: '0'
};
