import React from 'react';

interface Props {
  className?: string;
}

export default function 文件上传({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">12.5.1 文件上传</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "io"
    "net/http"
    "os"
    "path/filepath"
)

func uploadHandler(w http.ResponseWriter, r *http.Request) {
    if r.Method == "GET" {
        // 显示上传表单
        html := \`
<!DOCTYPE html>
<html>
<head><title>File Upload</title></head>
<body>
    <form method="POST" enctype="multipart/form-data">
        <input type="file" name="file">
        <button type="submit">Upload</button>
    </form>
</body>
</html>
        \`
        fmt.Fprint(w, html)
        return
    }

    if r.Method == "POST" {
        // 解析表单（限制32MB）
        r.ParseMultipartForm(32 << 20)

        file, handler, err := r.FormFile("file")
        if err != nil {
            http.Error(w, err.Error(), http.StatusBadRequest)
            return
        }
        defer file.Close()

        // 创建上传目录
        os.MkdirAll("uploads", 0755)

        // 保存文件
        dst, err := os.Create(filepath.Join("uploads", handler.Filename))
        if err != nil {
            http.Error(w, err.Error(), http.StatusInternalServerError)
            return
        }
        defer dst.Close()

        _, err = io.Copy(dst, file)
        if err != nil {
            http.Error(w, err.Error(), http.StatusInternalServerError)
            return
        }

        fmt.Fprintf(w, "File uploaded successfully: %s", handler.Filename)
    }
}

func main() {
    http.HandleFunc("/upload", uploadHandler)
    http.ListenAndServe(":8080", nil)
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '12-5-1',
  title: '文件上传',
  section: '12.5.1'
};
