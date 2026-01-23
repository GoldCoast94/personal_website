import React from 'react';

interface Props {
  className?: string;
}

export default function 练习3创建go模块({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 练习3：创建Go模块</h3>

      <ul>
        <li>*题目：** 创建一个名为"calculator"的Go模块，包含一个main.go文件。</li>
      </ul>

      <ul>
        <li>*要求：**</li>
        <li>使用go mod init初始化模块</li>
        <li>在main.go中输出 "Calculator v1.0"</li>
        <li>编译并运行程序</li>
      </ul>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '练习3：创建Go模块',
  section: '0'
};
