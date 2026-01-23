import React from 'react';

interface Props {
  className?: string;
}

export default function Go语言的特点({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">1.1.2 Go语言的特点</h3>

      <ul>
        <li>**简洁性**：语法简单，关键字仅25个</li>
        <li>**并发性**：原生支持并发编程（goroutine和channel）</li>
        <li>**高性能**：编译型语言，接近C语言的执行效率</li>
        <li>**垃圾回收**：自动内存管理</li>
        <li>**静态类型**：编译时类型检查</li>
        <li>**快速编译**：编译速度极快</li>
        <li>**跨平台**：支持多种操作系统和架构</li>
        <li>**丰富的标准库**：提供完善的标准库</li>
      </ul>

    </div>
  );
}

export const metadata = {
  id: '1-1-2',
  title: 'Go语言的特点',
  section: '1.1.2'
};
