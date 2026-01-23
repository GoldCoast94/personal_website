import React from 'react';

interface Props {
  className?: string;
}

export default function FileUpload({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">12.5.1 File Upload</h3>

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
        // Display upload form
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
        // Parse form (limit 32MB)
        r.ParseMultipartForm(32 << 20)

        file, handler, err := r.FormFile("file")
        if err != nil {
            http.Error(w, err.Error(), http.StatusBadRequest)
            return
        }
        defer file.Close()

        // Create upload directory
        os.MkdirAll("uploads", 0755)

        // Save file
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
  title: 'File Upload',
  section: '12.5.1'
};
