import React from 'react';

interface Props {
  className?: string;
}

export default function 练习1实现json序列化接口({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 练习1：实现JSON序列化接口</h3>

      <ul>
        <li>*题目：** 创建一个序列化系统：</li>
        <li>定义<code>Serializer</code>接口，包含<code>Serialize()</code>和<code>Deserialize()</code>方法</li>
        <li>实现<code>JSONSerializer</code>和<code>XMLSerializer</code></li>
        <li>创建<code>Data</code>结构体，可以使用不同的序列化器</li>
        <li>测试序列化和反序列化</li>
      </ul>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '练习1：实现JSON序列化接口',
  section: '0'
};
