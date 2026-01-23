import React from 'react';

interface Props {
  className?: string;
}

export default function 练习5交叉编译({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 练习5：交叉编译</h3>

      <ul>
        <li>*题目：** 编写一个简单的Go程序，编译为不同平台的可执行文件。</li>
      </ul>

      <ul>
        <li>*要求：**</li>
        <li>编写一个输出"Hello from [操作系统]"的程序</li>
        <li>使用runtime.GOOS获取操作系统信息</li>
        <li>分别编译为Linux、Windows和macOS版本</li>
      </ul>
      <p>## 1.7 练习答案</p>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '练习5：交叉编译',
  section: '0'
};
