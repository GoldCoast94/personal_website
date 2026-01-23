import React from 'react';

interface Props {
  className?: string;
}

export default function データモデルModelsusergo({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">15.1.3 データモデル (models/user.go)</h3>

      <pre className="code-block">
        <code className="language-go">{`package models

import "time"

type User struct {
    ID        int       <code>json:"id"</code>
    Username  string    <code>json:"username"</code>
    Email     string    <code>json:"email"</code>
    Password  string    <code>json:"-"</code>
    CreatedAt time.Time <code>json:"created_at"</code>
    UpdatedAt time.Time <code>json:"updated_at"</code>
}

type RegisterRequest struct {
    Username string <code>json:"username"</code>
    Email    string <code>json:"email"</code>
    Password string <code>json:"password"</code>
}

type LoginRequest struct {
    Email    string <code>json:"email"</code>
    Password string <code>json:"password"</code>
}

type LoginResponse struct {
    Token string <code>json:"token"</code>
    User  *User  <code>json:"user"</code>
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '15-1-3',
  title: 'データモデル (models/user.go)',
  section: '15.1.3'
};
