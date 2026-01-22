import React from 'react';

interface Props {
  className?: string;
}

export default function プログラムの実行({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">1.3.2 プログラムの実行</h3>

      <pre className="code-block">
        <code className="language-bash">{`# 方法1：直接実行
go run hello.go

# 方法2：コンパイルしてから実行
go build hello.go
./hello

# 方法3：出力名を指定してコンパイル
go build -o myapp hello.go
./myapp`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '1-3-2',
  title: 'プログラムの実行',
  section: '1.3.2'
};
