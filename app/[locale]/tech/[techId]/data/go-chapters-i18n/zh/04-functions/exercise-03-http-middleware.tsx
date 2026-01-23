import React from 'react';

interface Props {
  className?: string;
}

export default function 练习5http中间件({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 练习5：HTTP中间件</h3>

      <ul>
        <li>*题目：** 实现一个简单的HTTP中间件系统：</li>
        <li>定义中间件类型：<code>type Middleware func(HandlerFunc) HandlerFunc</code></li>
        <li>定义处理函数类型：<code>type HandlerFunc func(string) string</code></li>
        <li>实现日志中间件</li>
        <li>实现认证中间件</li>
        <li>将多个中间件链式组合</li>
      </ul>
      <p>## 4.6 练习答案</p>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '练习5：HTTP中间件',
  section: '0'
};
