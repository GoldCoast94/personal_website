import React from 'react';

interface Props {
  className?: string;
}

export default function 练习1环境验证({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 练习1：环境验证</h3>

      <ul>
        <li>*题目：** 验证Go环境是否正确安装，并输出Go版本信息。</li>
      </ul>

      <ul>
        <li>*要求：**</li>
        <li>使用命令行查看Go版本</li>
        <li>查看GOPATH和GOROOT环境变量</li>
        <li>查看Go代理设置</li>
      </ul>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '练习1：环境验证',
  section: '0'
};
