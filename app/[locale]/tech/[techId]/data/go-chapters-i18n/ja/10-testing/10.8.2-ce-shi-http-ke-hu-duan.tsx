import React from 'react';

interface Props {
  className?: string;
}

export default function HTTPクライアントのテスト({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">10.8.2 HTTPクライアントのテスト</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "io"
    "net/http"
    "net/http/httptest"
    "testing"
)

func FetchURL(url string) (string, error) {
    resp, err := http.Get(url)
    if err != nil {
        return "", err
    }
    defer resp.Body.Close()

    body, err := io.ReadAll(resp.Body)
    if err != nil {
        return "", err
    }

    return string(body), nil
}

func TestFetchURL(t *testing.T) {
    // テストサーバーを作成
    server := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
        w.Write([]byte("Hello, Test!"))
    }))
    defer server.Close()

    // テスト
    content, err := FetchURL(server.URL)
    if err != nil {
        t.Fatalf("unexpected error: %v", err)
    }

    expected := "Hello, Test!"
    if content != expected {
        t.Errorf("got %s, want %s", content, expected)
    }
}`}</code>
      </pre>
      <p>## 10.9 実践：完全なユーザーサービステスト</p>

      <ul>
        <li>**user.go:**</li>
      </ul>

      <pre className="code-block">
        <code className="language-go">{`package user

import (
    "errors"
    "regexp"
)

type User struct {
    ID       int
    Username string
    Email    string
    Age      int
}

type Service struct {
    users  map[int]*User
    nextID int
}

func NewService() *Service {
    return &Service{
        users:  make(map[int]*User),
        nextID: 1,
    }
}

func (s *Service) Create(username, email string, age int) (*User, error) {
    if err := validateUsername(username); err != nil {
        return nil, err
    }

    if err := validateEmail(email); err != nil {
        return nil, err
    }

    if err := validateAge(age); err != nil {
        return nil, err
    }

    user := &User{
        ID:       s.nextID,
        Username: username,
        Email:    email,
        Age:      age,
    }
    s.nextID++
    s.users[user.ID] = user

    return user, nil
}

func (s *Service) Get(id int) (*User, error) {
    user, exists := s.users[id]
    if !exists {
        return nil, errors.New("user not found")
    }
    return user, nil
}

func (s *Service) Update(id int, username, email string, age int) error {
    user, err := s.Get(id)
    if err != nil {
        return err
    }

    if username != "" {
        if err := validateUsername(username); err != nil {
            return err
        }
        user.Username = username
    }

    if email != "" {
        if err := validateEmail(email); err != nil {
            return err
        }
        user.Email = email
    }

    if age > 0 {
        if err := validateAge(age); err != nil {
            return err
        }
        user.Age = age
    }

    return nil
}

func (s *Service) Delete(id int) error {
    if _, exists := s.users[id]; !exists {
        return errors.New("user not found")
    }
    delete(s.users, id)
    return nil
}

func validateUsername(username string) error {
    if len(username) < 3 {
        return errors.New("username too short")
    }
    if len(username) > 20 {
        return errors.New("username too long")
    }
    return nil
}

func validateEmail(email string) error {
    emailRegex := regexp.MustCompile(<code>^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$</code>)
    if !emailRegex.MatchString(email) {
        return errors.New("invalid email format")
    }
    return nil
}

func validateAge(age int) error {
    if age < 0 {
        return errors.New("age cannot be negative")
    }
    if age > 150 {
        return errors.New("age too large")
    }
    return nil
}`}</code>
      </pre>

      <ul>
        <li>**user_test.go:**</li>
      </ul>

      <pre className="code-block">
        <code className="language-go">{`package user

import (
    "testing"
)

func TestService_Create(t *testing.T) {
    tests := []struct {
        name      string
        username  string
        email     string
        age       int
        wantError bool
    }{
        {"valid user", "john", "john@example.com", 30, false},
        {"short username", "ab", "ab@example.com", 25, true},
        {"long username", "verylongusernamethatexceedslimit", "user@example.com", 25, true},
        {"invalid email", "john", "invalid-email", 30, true},
        {"negative age", "john", "john@example.com", -5, true},
        {"too old", "john", "john@example.com", 200, true},
    }

    for _, tt := range tests {
        t.Run(tt.name, func(t *testing.T) {
            service := NewService()
            user, err := service.Create(tt.username, tt.email, tt.age)

            if (err != nil) != tt.wantError {
                t.Errorf("Create() error = %v, wantError %v", err, tt.wantError)
                return
            }

            if !tt.wantError {
                if user == nil {
                    t.Error("expected user, got nil")
                }
                if user.Username != tt.username {
                    t.Errorf("username = %s, want %s", user.Username, tt.username)
                }
            }
        })
    }
}

func TestService_Get(t *testing.T) {
    service := NewService()
    created, _ := service.Create("john", "john@example.com", 30)

    t.Run("existing user", func(t *testing.T) {
        user, err := service.Get(created.ID)
        if err != nil {
            t.Fatalf("unexpected error: %v", err)
        }
        if user.ID != created.ID {
            t.Errorf("got ID %d, want %d", user.ID, created.ID)
        }
    })

    t.Run("non-existing user", func(t *testing.T) {
        _, err := service.Get(999)
        if err == nil {
            t.Error("expected error, got nil")
        }
    })
}

func TestService_Update(t *testing.T) {
    service := NewService()
    user, _ := service.Create("john", "john@example.com", 30)

    t.Run("update username", func(t *testing.T) {
        err := service.Update(user.ID, "johnny", "", 0)
        if err != nil {
            t.Fatalf("unexpected error: %v", err)
        }

        updated, _ := service.Get(user.ID)
        if updated.Username != "johnny" {
            t.Errorf("username = %s, want johnny", updated.Username)
        }
    })

    t.Run("update with invalid data", func(t *testing.T) {
        err := service.Update(user.ID, "ab", "", 0)
        if err == nil {
            t.Error("expected error, got nil")
        }
    })
}

func TestService_Delete(t *testing.T) {
    service := NewService()
    user, _ := service.Create("john", "john@example.com", 30)

    t.Run("delete existing user", func(t *testing.T) {
        err := service.Delete(user.ID)
        if err != nil {
            t.Fatalf("unexpected error: %v", err)
        }

        _, err = service.Get(user.ID)
        if err == nil {
            t.Error("user should be deleted")
        }
    })

    t.Run("delete non-existing user", func(t *testing.T) {
        err := service.Delete(999)
        if err == nil {
            t.Error("expected error, got nil")
        }
    })
}

func BenchmarkService_Create(b *testing.B) {
    service := NewService()
    for i := 0; i < b.N; i++ {
        service.Create("john", "john@example.com", 30)
    }
}`}</code>
      </pre>
      <p>## 10.10 練習問題</p>

    </div>
  );
}

export const metadata = {
  id: '10-8-2',
  title: 'HTTPクライアントのテスト',
  section: '10.8.2'
};
