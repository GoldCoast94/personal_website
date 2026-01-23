import React from 'react';

interface Props {
  className?: string;
}

export default function 練習3解答({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 練習3解答</h3>

      <pre className="code-block">
        <code className="language-bash">{`# ステップ1：プロジェクトディレクトリを作成
mkdir calculator
cd calculator

# ステップ2：モジュールを初期化
go mod init calculator

# ステップ3：main.goを作成
cat > main.go << 'EOF'
package main

import "fmt"

func main() {
    fmt.Println("Calculator v1.0")
    fmt.Println("Ready to calculate!")
}
EOF

# ステップ4：プログラムを実行
go run main.go

# ステップ5：プログラムをコンパイル
go build
./calculator`}</code>
      </pre>

      <ul>
        <li>**main.goの内容：**</li>
      </ul>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

func main() {
    fmt.Println("Calculator v1.0")
    fmt.Println("Ready to calculate!")
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '練習3解答',
  section: '0'
};
