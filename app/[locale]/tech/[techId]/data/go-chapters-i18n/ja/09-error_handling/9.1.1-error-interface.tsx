import React from 'react';

interface Props {
  className?: string;
}

export default function エラーインターフェース({ className }: Props) {
  return (
    <div className={`section-content \${className || ''}`}>
      <h3 className="section-title">9.1.1 error インターフェース</h3>
      <p>Goはerrorインターフェースを使用してエラーを表現します：</p>

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
  title: 'error インターフェース',
  section: '9.1.1'
};
