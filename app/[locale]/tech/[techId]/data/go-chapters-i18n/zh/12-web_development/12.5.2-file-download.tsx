import React from 'react';

interface Props {
  className?: string;
}

export default function 文件下载({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">12.5.2 文件下载</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "net/http"
    "path/filepath"
)

func downloadHandler(w http.ResponseWriter, r *http.Request) {
    filename := r.URL.Query().Get("file")
    if filename == "" {
        http.Error(w, "File not specified", http.StatusBadRequest)
        return
    }

    filepath := filepath.Join("uploads", filename)

    w.Header().Set("Content-Disposition", "attachment; filename="+filename)
    w.Header().Set("Content-Type", "application/octet-stream")

    http.ServeFile(w, r, filepath)
}

func main() {
    http.HandleFunc("/download", downloadHandler)
    http.ListenAndServe(":8080", nil)
}`}</code>
      </pre>
      <p>## 12.6 模板引擎</p>

    </div>
  );
}

export const metadata = {
  id: '12-5-2',
  title: '文件下载',
  section: '12.5.2'
};
