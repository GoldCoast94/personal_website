import React from 'react';

interface Props {
  className?: string;
}

export default function 练习3函数式编程({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 练习3：函数式编程</h3>

      <ul>
        <li>*题目：** 实现以下高阶函数：</li>
        <li><code>Map(slice []int, fn func(int) int) []int</code> - 映射</li>
        <li><code>Filter(slice []int, fn func(int) bool) []int</code> - 过滤</li>
        <li><code>Reduce(slice []int, initial int, fn func(int, int) int) int</code> - 归约</li>
        <li>使用这些函数实现：将切片中所有偶数乘以2后求和</li>
      </ul>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '练习3：函数式编程',
  section: '0'
};
