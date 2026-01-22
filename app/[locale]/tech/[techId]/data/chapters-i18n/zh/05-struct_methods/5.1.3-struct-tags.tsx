import React from 'react';

interface Props {
  className?: string;
}

export default function 结构体标签({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">5.1.3 结构体标签</h3>
      <p>结构体标签用于元数据，常用于JSON编解码、数据库映射等。</p>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "encoding/json"
    "fmt"
)

type User struct {
    ID       int    <code>json:"id"</code>
    Username string <code>json:"username"</code>
    Email    string <code>json:"email,omitempty"</code>  // omitempty表示空值时不输出
    Password string <code>json:"-"</code>                 // -表示不序列化
    Age      int    <code>json:"age,string"</code>        // 转换为字符串
}

func main() {
    user := User{
        ID:       1,
        Username: "alice",
        Email:    "alice@example.com",
        Password: "secret",
        Age:      30,
    }

    // 编码为JSON
    jsonData, err := json.Marshal(user)
    if err != nil {
        fmt.Println("Error:", err)
        return
    }
    fmt.Println(string(jsonData))

    // 解码JSON
    jsonStr := <code>{"id":2,"username":"bob","age":"25"}</code>
    var user2 User
    err = json.Unmarshal([]byte(jsonStr), &user2)
    if err != nil {
        fmt.Println("Error:", err)
        return
    }
    fmt.Printf("%+v\n", user2)
}`}</code>
      </pre>
      <p>## 5.2 方法</p>

    </div>
  );
}

export const metadata = {
  id: '5-1-3',
  title: '结构体标签',
  section: '5.1.3'
};
