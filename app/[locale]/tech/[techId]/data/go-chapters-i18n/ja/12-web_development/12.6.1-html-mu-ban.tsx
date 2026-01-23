import React from 'react';

interface Props {
  className?: string;
}

export default function HTMLテンプレート({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">12.6.1 HTMLテンプレート</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "html/template"
    "net/http"
)

type PageData struct {
    Title   string
    Heading string
    Items   []string
}

func templateHandler(w http.ResponseWriter, r *http.Request) {
    tmpl := template.Must(template.New("page").Parse(\`
<!DOCTYPE html>
<html>
<head>
    <title>{{.Title}}</title>
</head>
<body>
    <h1>{{.Heading}}</h1>
    <ul>
    {{range .Items}}
        <li>{{.}}</li>
    {{end}}
    </ul>
</body>
</html>
    \`))

    data := PageData{
        Title:   "My Page",
        Heading: "Welcome",
        Items:   []string{"Item 1", "Item 2", "Item 3"},
    }

    tmpl.Execute(w, data)
}

func main() {
    http.HandleFunc("/", templateHandler)
    http.ListenAndServe(":8080", nil)
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '12-6-1',
  title: 'HTMLテンプレート',
  section: '12.6.1'
};
