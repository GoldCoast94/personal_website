import React from 'react';

interface Props {
  className?: string;
}

export default function 练习5中间件链({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 练习5：中间件链</h3>

      <ul>
        <li>*题目：** 实现HTTP中间件链：</li>
        <li>定义<code>Handler</code>和<code>Middleware</code>接口</li>
        <li>实现多个中间件：Logger、Auth、RateLimit、Recovery</li>
        <li>实现中间件链的组合</li>
        <li>创建示例HTTP请求处理流程</li>
      </ul>
      <p>## 6.7 练习答案</p>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '练习5：中间件链',
  section: '0'
};
