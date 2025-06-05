import React from "react";

interface CodeBlockProps {
  code: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ code }) => (
  <pre className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto">
    <code className="text-sm text-gray-800 dark:text-gray-200">{code}</code>
  </pre>
);
