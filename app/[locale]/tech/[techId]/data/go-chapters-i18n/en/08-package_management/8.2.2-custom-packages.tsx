import React from 'react';

interface Props {
  className?: string;
}

export default function CreatingCustomPackages({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">8.2.2 Creating Custom Packages</h3>

      <ul>
        <li>*utils/string.go:**</li>
      </ul>

      <pre className="code-block">
        <code className="language-go">{`package utils

import "strings"

// Capitalize capitalizes first letter
func Capitalize(s string) string {
    if s == "" {
        return ""
    }
    return strings.ToUpper(s[:1]) + s[1:]
}

// Reverse reverses a string
func Reverse(s string) string {
    runes := []rune(s)
    for i, j := 0, len(runes)-1; i < j; i, j = i+1, j-1 {
        runes[i], runes[j] = runes[j], runes[i]
    }
    return string(runes)
}

// Private function
func helper() {
    // Only usable within the package
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
    // Using utils package
    fmt.Println(utils.Capitalize("hello"))
    fmt.Println(utils.Reverse("golang"))

    // Using services package
    service := services.NewUserService()
    user := service.CreateUser("john", "john@example.com")
    fmt.Printf("Created user: %+v\n", user)
}`}</code>
      </pre>
      <p>## 8.3 Go Modules</p>

    </div>
  );
}

export const metadata = {
  id: '8-2-2',
  title: 'Creating Custom Packages',
  section: '8.2.2'
};
