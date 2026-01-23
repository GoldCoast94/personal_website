import React from 'react';

interface Props {
  className?: string;
}

export default function Answer01({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 Answer 1</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "errors"
)

// Database interface
type Database interface {
    Connect() error
    Close() error
    Query(sql string) ([]map[string]interface{}, error)
    Execute(sql string) error
}

// MockDB for testing
type MockDB struct {
    connected bool
    data      map[string][]map[string]interface{}
}

func NewMockDB() *MockDB {
    return &MockDB{
        data: make(map[string][]map[string]interface{}),
    }
}

func (m *MockDB) Connect() error {
    m.connected = true
    fmt.Println("MockDB: Connected")
    return nil
}

func (m *MockDB) Close() error {
    m.connected = false
    fmt.Println("MockDB: Closed")
    return nil
}

func (m *MockDB) Query(sql string) ([]map[string]interface{}, error) {
    if !m.connected {
        return nil, errors.New("database not connected")
    }
    fmt.Printf("MockDB: Querying: %s\n", sql)
    if result, ok := m.data[sql]; ok {
        return result, nil
    }
    return []map[string]interface{}{}, nil
}

func (m *MockDB) Execute(sql string) error {
    if !m.connected {
        return errors.New("database not connected")
    }
    fmt.Printf("MockDB: Executing: %s\n", sql)
    return nil
}

// UserRepository
type UserRepository struct {
    db Database
}

func NewUserRepository(db Database) *UserRepository {
    return &UserRepository{db: db}
}

func (r *UserRepository) CreateUser(name string, email string) error {
    sql := fmt.Sprintf("INSERT INTO users (name, email) VALUES ('%s', '%s')", name, email)
    return r.db.Execute(sql)
}

func (r *UserRepository) GetUserByEmail(email string) (map[string]interface{}, error) {
    sql := fmt.Sprintf("SELECT * FROM users WHERE email='%s'", email)
    results, err := r.db.Query(sql)
    if err != nil {
        return nil, err
    }
    if len(results) > 0 {
        return results[0], nil
    }
    return nil, errors.New("user not found")
}

func main() {
    // Create mock database
    db := NewMockDB()
    db.Connect()
    defer db.Close()

    // Create repository with dependency injection
    repo := NewUserRepository(db)

    // Test operations
    err := repo.CreateUser("Alice", "alice@example.com")
    if err != nil {
        fmt.Println("Error:", err)
    }

    err = repo.CreateUser("Bob", "bob@example.com")
    if err != nil {
        fmt.Println("Error:", err)
    }

    // Simulate query result
    db.data["SELECT * FROM users WHERE email='alice@example.com'"] = []map[string]interface{}{
        {"id": 1, "name": "Alice", "email": "alice@example.com"},
    }

    user, err := repo.GetUserByEmail("alice@example.com")
    if err != nil {
        fmt.Println("Error:", err)
    } else {
        fmt.Printf("Found user: %v\n", user)
    }
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: 'Answer 1',
  section: '0'
};
