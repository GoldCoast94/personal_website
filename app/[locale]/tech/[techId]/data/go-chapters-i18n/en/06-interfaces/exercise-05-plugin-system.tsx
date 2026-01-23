import React from 'react';

interface Props {
  className?: string;
}

export default function Exercise05PluginSystem({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 Exercise 5: Plugin System</h3>

      <ul>
        <li>**Task:** Design a plugin system:</li>
        <li>Define <code>Plugin</code> interface, including <code>Name()</code>, <code>Version()</code>, <code>Execute()</code> methods</li>
        <li>Implement multiple plugins: LoggerPlugin, CachePlugin, MetricsPlugin</li>
        <li>Create <code>PluginManager</code> to manage plugin registration and execution</li>
        <li>Implement enable/disable functionality for plugins</li>
      </ul>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: 'Exercise 5: Plugin System',
  section: '0'
};
