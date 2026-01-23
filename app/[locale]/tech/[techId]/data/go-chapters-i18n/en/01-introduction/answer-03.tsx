import React from 'react';

interface Props {
  className?: string;
}

export default function Exercise3Answer({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 Exercise 3 Answer</h3>

      <pre className="code-block">
        <code className="language-bash">{`# Step 1: Create project directory
mkdir calculator
cd calculator

# Step 2: Initialize module
go mod init calculator

# Step 3: Create main.go
cat > main.go << 'EOF'
package main

import "fmt"

func main() {
    fmt.Println("Calculator v1.0")
    fmt.Println("Ready to calculate!")
}
EOF

# Step 4: Run the program
go run main.go

# Step 5: Compile the program
go build
./calculator`}</code>
      </pre>

      <ul>
        <li>**main.go content:**</li>
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
  title: 'Exercise 3 Answer',
  section: '0'
};
