import React from 'react';

interface Props {
  className?: string;
}

export default function GoSumFile({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">8.3.4 go.sum File</h3>

      <pre className="code-block">
        <code className="language-go">{`github.com/gin-gonic/gin v1.9.1 h1:4idEAncQnU5cB7BeOkPtxjfCSye0AAm1R0RVIqJ+Jmg=
github.com/gin-gonic/gin v1.9.1/go.mod h1:hPrL7YrpYKXt5YId3A/Tnip5kqbEAP+KLuI3SUcPTeU=`}</code>
      </pre>
      <p>## 8.4 Dependency Management Best Practices</p>

    </div>
  );
}

export const metadata = {
  id: '8-3-4',
  title: 'go.sum File',
  section: '8.3.4'
};
