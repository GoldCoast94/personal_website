import React from 'react';

interface Props {
  className?: string;
}

export default function StructTags({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">5.1.3 Struct Tags</h3>
      <p>Struct tags are used for metadata, commonly used in JSON encoding/decoding, database mapping, etc.</p>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "encoding/json"
    "fmt"
)

type User struct {
    ID       int    <code>json:"id"</code>
    Username string <code>json:"username"</code>
    Email    string <code>json:"email,omitempty"</code>  // omitempty means no output if empty
    Password string <code>json:"-"</code>                 // - means no serialization
    Age      int    <code>json:"age,string"</code>        // Convert to string
}

func main() {
    user := User{
        ID:       1,
        Username: "alice",
        Email:    "alice@example.com",
        Password: "secret",
        Age:      30,
    }

    // Encode to JSON
    jsonData, err := json.Marshal(user)
    if err != nil {
        fmt.Println("Error:", err)
        return
    }
    fmt.Println(string(jsonData))

    // Decode JSON
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
      <p>## 5.2 Methods</p>

    </div>
  );
}

export const metadata = {
  id: '5-1-3',
  title: 'Struct Tags',
  section: '5.1.3'
};
