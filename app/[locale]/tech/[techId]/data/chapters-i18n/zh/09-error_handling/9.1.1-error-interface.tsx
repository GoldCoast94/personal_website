import React from 'react';

interface Props {
  className?: string;
}

export default function Error接口({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">9.1.1 error 接口</h3>
      <p>Go语言使用error接口来表示错误：</p>

      <pre className="code-block">
        <code className="language-go">{`type error interface {
    Error() string
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '9-1-1',
  title: 'error 接口',
  section: '9.1.1'
};
