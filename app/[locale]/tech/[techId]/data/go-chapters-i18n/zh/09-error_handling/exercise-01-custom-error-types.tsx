import React from 'react';

interface Props {
  className?: string;
}

export default function 答案2自定义错误类型({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 答案2：自定义错误类型</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "regexp"
)

type UsernameError struct {
    Username string
    Reason   string
}

func (e *UsernameError) Error() string {
    return fmt.Sprintf("invalid username '%s': %s", e.Username, e.Reason)
}

type EmailError struct {
    Email string
}

func (e *EmailError) Error() string {
    return fmt.Sprintf("invalid email format: %s", e.Email)
}

type DuplicateUserError struct {
    Username string
}

func (e *DuplicateUserError) Error() string {
    return fmt.Sprintf("username already exists: %s", e.Username)
}

var existingUsers = map[string]bool{"admin": true}

func registerUser(username, email, password string) error {
    // 检查用户名
    if len(username) < 3 {
        return &UsernameError{
            Username: username,
            Reason:   "must be at least 3 characters",
        }
    }

    if existingUsers[username] {
        return &DuplicateUserError{Username: username}
    }

    // 检查邮箱
    emailRegex := regexp.MustCompile(<code>^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$</code>)
    if !emailRegex.MatchString(email) {
        return &EmailError{Email: email}
    }

    // 注册成功
    existingUsers[username] = true
    fmt.Printf("User registered: %s (%s)\n", username, email)
    return nil
}

func main() {
    testCases := []struct {
        username string
        email    string
        password string
    }{
        {"ab", "user@example.com", "password"},
        {"admin", "admin@example.com", "password"},
        {"newuser", "invalid-email", "password"},
        {"newuser", "user@example.com", "password"},
    }

    for _, tc := range testCases {
        err := registerUser(tc.username, tc.email, tc.password)
        if err != nil {
            fmt.Printf("Error: %v\n", err)
        }
        fmt.Println()
    }
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '答案2：自定义错误类型',
  section: '0'
};
