import React from 'react';

interface Props {
  className?: string;
}

export default function 练习3答案({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 练习3答案</h3>

      <pre className="code-block">
        <code className="language-bash">{`# 步骤1：创建项目目录
mkdir calculator
cd calculator

# 步骤2：初始化模块
go mod init calculator

# 步骤3：创建main.go
cat > main.go << 'EOF'
package main

import "fmt"

func main() {
    fmt.Println("Calculator v1.0")
    fmt.Println("Ready to calculate!")
}
EOF

# 步骤4：运行程序
go run main.go

# 步骤5：编译程序
go build
./calculator`}</code>
      </pre>

      <ul>
        <li>*main.go内容：**</li>
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
  title: '练习3答案',
  section: '0'
};
