import React from 'react';

interface Props {
  className?: string;
}

export default function 構造体タグ({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">5.1.3 構造体タグ</h3>
      <p>構造体タグはメタデータに使用され、JSONエンコード/デコード、データベースマッピングなどでよく使用されます。</p>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "encoding/json"
    "fmt"
)

type User struct {
    ID       int    <code>json:"id"</code>
    Username string <code>json:"username"</code>
    Email    string <code>json:"email,omitempty"</code>  // omitemptyは空値の場合出力しない
    Password string <code>json:"-"</code>                 // -はシリアライズしない
    Age      int    <code>json:"age,string"</code>        // 文字列に変換
}

func main() {
    user := User{
        ID:       1,
        Username: "alice",
        Email:    "alice@example.com",
        Password: "secret",
        Age:      30,
    }

    // JSONにエンコード
    jsonData, err := json.Marshal(user)
    if err != nil {
        fmt.Println("Error:", err)
        return
    }
    fmt.Println(string(jsonData))

    // JSONをデコード
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
      <p>## 5.2 メソッド</p>

    </div>
  );
}

export const metadata = {
  id: '5-1-3',
  title: '構造体タグ',
  section: '5.1.3'
};
