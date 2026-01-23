import React from 'react';

interface Props {
  className?: string;
}

export default function 处理表单数据({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">12.2.3 处理表单数据</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "html/template"
    "net/http"
)

func formHandler(w http.ResponseWriter, r *http.Request) {
    if r.Method == "GET" {
        // 显示表单
        tmpl := template.Must(template.New("form").Parse(\`
<!DOCTYPE html>
<html>
<head><title>Form Example</title></head>
<body>
    <form method="POST">
        <label>Name: <input type="text" name="name"></label><br>
        <label>Email: <input type="email" name="email"></label><br>
        <label>Message: <textarea name="message"></textarea></label><br>
        <button type="submit">Submit</button>
    </form>
</body>
</html>
        \`))
        tmpl.Execute(w, nil)
        return
    }

    if r.Method == "POST" {
        // 解析表单
        r.ParseForm()

        name := r.FormValue("name")
        email := r.FormValue("email")
        message := r.FormValue("message")

        fmt.Fprintf(w, "Name: %s\n", name)
        fmt.Fprintf(w, "Email: %s\n", email)
        fmt.Fprintf(w, "Message: %s\n", message)
    }
}

func main() {
    http.HandleFunc("/form", formHandler)
    http.ListenAndServe(":8080", nil)
}`}</code>
      </pre>
      <p>## 12.3 JSON API</p>

    </div>
  );
}

export const metadata = {
  id: '12-2-3',
  title: '处理表单数据',
  section: '12.2.3'
};
