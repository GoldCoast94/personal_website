import React from 'react';

interface Props {
  className?: string;
}

export default function 练习2字符串处理函数({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 练习2：字符串处理函数</h3>

      <ul>
        <li>*题目：** 实现以下字符串处理函数：</li>
        <li><code>Reverse(s string) string</code> - 反转字符串</li>
        <li><code>IsPalindrome(s string) bool</code> - 判断是否为回文</li>
        <li><code>WordCount(s string) map[string]int</code> - 统计单词出现次数</li>
        <li><code>RemoveSpaces(s string) string</code> - 删除所有空格</li>
      </ul>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '练习2：字符串处理函数',
  section: '0'
};
