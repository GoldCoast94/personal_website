import React from 'react';

interface Props {
  className?: string;
}

export default function 练习4websocket聊天({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 练习4：WebSocket聊天</h3>
      <p>创建一个实时聊天应用。</p>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '练习4：WebSocket聊天',
  section: '0'
};
