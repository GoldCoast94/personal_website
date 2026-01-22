import React from 'react';

interface Props {
  className?: string;
}

export default function 练习1并发下载器({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 练习1：并发下载器</h3>

      <ul>
        <li>*题目：** 实现一个并发文件下载器：</li>
        <li>创建<code>Downloader</code>结构体</li>
        <li>实现<code>Download(urls []string, maxConcurrent int)</code>方法</li>
        <li>使用worker pool模式限制并发数</li>
        <li>返回下载结果（成功/失败）和耗时</li>
        <li>实现超时控制</li>
      </ul>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '练习1：并发下载器',
  section: '0'
};
