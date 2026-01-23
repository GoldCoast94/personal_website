import React from 'react';

interface Props {
  className?: string;
}

export default function テストファイル命名({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">10.1.1 テストファイル命名</h3>
      <p>Goのテストファイルは<code>_test.go</code>で終わる必要があります:</p>

      <pre className="code-block">
        <code className="language-go">{`calculator.go       # ソースコード
calculator_test.go  # テストコード`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '10-1-1',
  title: 'テストファイル命名',
  section: '10.1.1'
};
