import React from 'react';

interface Props {
  className?: string;
}

export default function 构造函数({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">5.4.1 构造函数</h3>
      <p>Go没有构造函数，通常使用New开头的函数来创建对象。</p>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "errors"
    "fmt"
)

type User struct {
    id       int
    username string
    email    string
}

// 构造函数
func NewUser(id int, username, email string) (*User, error) {
    if username == "" {
        return nil, errors.New("username cannot be empty")
    }

    if email == "" {
        return nil, errors.New("email cannot be empty")
    }

    return &User{
        id:       id,
        username: username,
        email:    email,
    }, nil
}

// Getter方法
func (u *User) ID() int {
    return u.id
}

func (u *User) Username() string {
    return u.username
}

func (u *User) Email() string {
    return u.email
}

// Setter方法
func (u *User) SetEmail(email string) error {
    if email == "" {
        return errors.New("email cannot be empty")
    }
    u.email = email
    return nil
}

func (u *User) String() string {
    return fmt.Sprintf("User{id: %d, username: %s, email: %s}",
        u.id, u.username, u.email)
}

func main() {
    // 创建用户
    user, err := NewUser(1, "alice", "alice@example.com")
    if err != nil {
        fmt.Println("Error:", err)
        return
    }

    fmt.Println(user)
    fmt.Println("ID:", user.ID())
    fmt.Println("Username:", user.Username())

    // 修改邮箱
    user.SetEmail("alice.new@example.com")
    fmt.Println("Updated:", user)

    // 创建失败的例子
    _, err = NewUser(2, "", "bob@example.com")
    if err != nil {
        fmt.Println("Error:", err)
    }
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '5-4-1',
  title: '构造函数',
  section: '5.4.1'
};
