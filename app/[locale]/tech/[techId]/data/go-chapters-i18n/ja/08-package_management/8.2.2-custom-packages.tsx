import React from 'react';

interface Props {
  className?: string;
}

export default function カスタムパッケージの作成({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">8.2.2 カスタムパッケージの作成</h3>

      <ul>
        <li>*utils/string.go:**</li>
      </ul>

      <pre className="code-block">
        <code className="language-go">{`package utils

import "strings"

// Capitalize 先頭文字を大文字にする
func Capitalize(s string) string {
    if s == "" {
        return ""
    }
    return strings.ToUpper(s[:1]) + s[1:]
}

// Reverse 文字列を反転する
func Reverse(s string) string {
    runes := []rune(s)
    for i, j := 0, len(runes)-1; i < j; i, j = i+1, j-1 {
        runes[i], runes[j] = runes[j], runes[i]
    }
    return string(runes)
}

// プライベート関数
func helper() {
    // パッケージ内でのみ使用可能
}`}</code>
      </pre>

      <ul>
        <li>*models/user.go:**</li>
      </ul>

      <pre className="code-block">
        <code className="language-go">{`package models

import "time"

type User struct {
    ID        int
    Username  string
    Email     string
    CreatedAt time.Time
}

func NewUser(username, email string) *User {
    return &User{
        Username:  username,
        Email:     email,
        CreatedAt: time.Now(),
    }
}

func (u *User) IsValid() bool {
    return u.Username != "" && u.Email != ""
}`}</code>
      </pre>

      <ul>
        <li>*services/userservice.go:**</li>
      </ul>

      <pre className="code-block">
        <code className="language-go">{`package services

import (
    "myproject/models"
    "myproject/utils"
)

type UserService struct {
    users map[int]*models.User
}

func NewUserService() *UserService {
    return &UserService{
        users: make(map[int]*models.User),
    }
}

func (s *UserService) CreateUser(username, email string) *models.User {
    user := models.NewUser(
        utils.Capitalize(username),
        email,
    )
    s.users[user.ID] = user
    return user
}`}</code>
      </pre>

      <ul>
        <li>*main.go:**</li>
      </ul>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "myproject/services"
    "myproject/utils"
)

func main() {
    // utilsパッケージの使用
    fmt.Println(utils.Capitalize("hello"))
    fmt.Println(utils.Reverse("golang"))

    // servicesパッケージの使用
    service := services.NewUserService()
    user := service.CreateUser("john", "john@example.com")
    fmt.Printf("Created user: %+v\n", user)
}`}</code>
      </pre>
      <p>## 8.3 Goモジュール</p>

    </div>
  );
}

export const metadata = {
  id: '8-2-2',
  title: 'カスタムパッケージの作成',
  section: '8.2.2'
};
