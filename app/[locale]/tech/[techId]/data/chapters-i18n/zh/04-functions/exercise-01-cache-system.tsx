import React from 'react';

interface Props {
  className?: string;
}

export default function 练习4缓存系统({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 练习4：缓存系统</h3>

      <ul>
        <li>*题目：** 使用闭包实现一个简单的缓存系统：</li>
        <li>创建一个缓存函数，记忆昂贵计算的结果</li>
        <li>实现 <code>MakeCache(fn func(int) int) func(int) int</code></li>
        <li>测试：使用递归的斐波那契函数</li>
        <li>对比缓存前后的性能差异</li>
      </ul>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '练习4：缓存系统',
  section: '0'
};
