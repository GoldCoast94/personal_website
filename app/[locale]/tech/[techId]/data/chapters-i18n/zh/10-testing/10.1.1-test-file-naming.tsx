import React from 'react';

interface Props {
  className?: string;
}

export default function 测试文件命名({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">10.1.1 测试文件命名</h3>
      <p>Go的测试文件必须以<code>_test.go</code>结尾：</p>

      <pre className="code-block">
        <code className="language-go">{`calculator.go       # 源代码
calculator_test.go  # 测试代码`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '10-1-1',
  title: '测试文件命名',
  section: '10.1.1'
};
