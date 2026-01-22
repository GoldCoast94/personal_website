import React from 'react';

interface Props {
  className?: string;
}

export default function 练习3认证系统({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 练习3：认证系统</h3>
      <p>实现用户注册、登录和JWT认证。</p>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '练习3：认证系统',
  section: '0'
};
