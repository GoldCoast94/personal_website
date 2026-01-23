import React from 'react';

interface Props {
  className?: string;
}

export default function 模板文件({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">12.6.2 模板文件</h3>

      <ul>
        <li>*templates/layout.html:**</li>
      </ul>

      <pre className="code-block">
        <code className="language-html">{`<!DOCTYPE html>
<html>
<head>
    <title>{{.Title}}</title>
</head>
<body>
    {{template "content" .}}
</body>
</html>`}</code>
      </pre>

      <ul>
        <li>*templates/home.html:**</li>
      </ul>

      <pre className="code-block">
        <code className="language-html">{`{{define "content"}}
<h1>{{.Heading}}</h1>
<p>{{.Message}}</p>
{{end}}`}</code>
      </pre>

      <ul>
        <li>*main.go:**</li>
      </ul>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "html/template"
    "net/http"
)

var templates *template.Template

func init() {
    templates = template.Must(template.ParseGlob("templates/*.html"))
}

func homeHandler(w http.ResponseWriter, r *http.Request) {
    data := map[string]interface{}{
        "Title":   "Home Page",
        "Heading": "Welcome to Our Site",
        "Message": "This is the home page",
    }

    templates.ExecuteTemplate(w, "layout.html", data)
}

func main() {
    http.HandleFunc("/", homeHandler)
    http.ListenAndServe(":8080", nil)
}`}</code>
      </pre>
      <p>## 12.7 Session和Cookie</p>

    </div>
  );
}

export const metadata = {
  id: '12-6-2',
  title: '模板文件',
  section: '12.6.2'
};
