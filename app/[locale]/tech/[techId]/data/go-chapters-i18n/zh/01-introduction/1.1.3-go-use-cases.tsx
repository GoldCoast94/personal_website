import React from 'react';

interface Props {
  className?: string;
}

export default function Go语言的应用场景({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">1.1.3 Go语言的应用场景</h3>

      <ul>
        <li>服务器端开发</li>
        <li>云计算和微服务</li>
        <li>网络编程</li>
        <li>分布式系统</li>
        <li>区块链开发</li>
        <li>DevOps工具</li>
        <li>命令行工具</li>
      </ul>
      <p>## 1.2 环境搭建</p>

    </div>
  );
}

export const metadata = {
  id: '1-1-3',
  title: 'Go语言的应用场景',
  section: '1.1.3'
};
