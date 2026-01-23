import React from 'react';

interface Props {
  className?: string;
}

export default function 练习4单词频率统计({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 练习4：单词频率统计</h3>

      <ul>
        <li>*题目：** 统计一段文本中每个单词出现的次数。</li>
      </ul>

      <ul>
        <li>*要求：**</li>
        <li>忽略大小写</li>
        <li>去除标点符号</li>
        <li>按频率降序输出</li>
      </ul>

      <ul>
        <li>*测试文本：** "Go is a great language. Go is simple and efficient. I love Go!"</li>
      </ul>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '练习4：单词频率统计',
  section: '0'
};
