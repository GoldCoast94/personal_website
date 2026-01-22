import React from 'react';

interface Props {
  className?: string;
}

export default function 练习3插件系统({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 练习3：插件系统</h3>

      <ul>
        <li>*题目：** 设计一个插件系统：</li>
        <li>定义<code>Plugin</code>接口，包含<code>Name()</code>、<code>Version()</code>、<code>Execute()</code>方法</li>
        <li>实现多个插件：LoggerPlugin、CachePlugin、MetricsPlugin</li>
        <li>创建<code>PluginManager</code>管理插件的注册和执行</li>
        <li>实现插件的启用/禁用功能</li>
      </ul>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '练习3：插件系统',
  section: '0'
};
