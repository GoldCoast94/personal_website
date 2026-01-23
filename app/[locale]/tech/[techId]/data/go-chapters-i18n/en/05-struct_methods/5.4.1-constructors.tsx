import React from 'react';

interface Props {
  className?: string;
}

export default function Constructors({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">5.4.1 Constructors</h3>
      <p>Go does not have constructors, typically functions starting with New are used to create objects.</p>

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

// Constructor function
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

// Getter methods
func (u *User) ID() int {
    return u.id
}

func (u *User) Username() string {
    return u.username
}

func (u *User) Email() string {
    return u.email
}

// Setter method
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
    // Create user
    user, err := NewUser(1, "alice", "alice@example.com")
    if err != nil {
        fmt.Println("Error:", err)
        return
    }

    fmt.Println(user)
    fmt.Println("ID:", user.ID())
    fmt.Println("Username:", user.Username())

    // Modify email
    user.SetEmail("alice.new@example.com")
    fmt.Println("Updated:", user)

    // Example of failed creation
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
  title: 'Constructors',
  section: '5.4.1'
};
