import React from 'react';

interface Props {
  className?: string;
}

export default function DependencyInversion({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">6.4.3 Dependency Inversion</h3>
      <p>High-level modules should not depend on low-level modules. Both should depend on abstractions.</p>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

// Abstraction layer: define interface
type DataStore interface {
    Save(key string, value interface{}) error
    Load(key string) (interface{}, error)
}

// Low-level module: concrete implementation
type MemoryStore struct {
    data map[string]interface{}
}

func NewMemoryStore() *MemoryStore {
    return &MemoryStore{
        data: make(map[string]interface{}),
    }
}

func (m *MemoryStore) Save(key string, value interface{}) error {
    m.data[key] = value
    return nil
}

func (m *MemoryStore) Load(key string) (interface{}, error) {
    if val, ok := m.data[key]; ok {
        return val, nil
    }
    return nil, fmt.Errorf("key not found: %s", key)
}

type FileStore struct {
    // File storage implementation
}

func (f *FileStore) Save(key string, value interface{}) error {
    fmt.Printf("Saving to file: %s = %v\n", key, value)
    return nil
}

func (f *FileStore) Load(key string) (interface{}, error) {
    fmt.Printf("Loading from file: %s\n", key)
    return "file value", nil
}

// High-level module: depends on abstraction rather than concrete implementation
type UserService struct {
    store DataStore  // Depends on interface
}

func NewUserService(store DataStore) *UserService {
    return &UserService{store: store}
}

func (s *UserService) SaveUser(id string, name string) error {
    return s.store.Save(id, name)
}

func (s *UserService) GetUser(id string) (string, error) {
    val, err := s.store.Load(id)
    if err != nil {
        return "", err
    }
    return val.(string), nil
}

func main() {
    // Using memory storage
    memStore := NewMemoryStore()
    userService1 := NewUserService(memStore)

    userService1.SaveUser("1", "Alice")
    name, _ := userService1.GetUser("1")
    fmt.Println("User:", name)

    // Switching to file storage (no need to modify UserService)
    fileStore := &FileStore{}
    userService2 := NewUserService(fileStore)

    userService2.SaveUser("2", "Bob")
    userService2.GetUser("2")
}`}</code>
      </pre>

      <p>## 6.5 Advanced Interface Usage</p>

    </div>
  );
}

export const metadata = {
  id: '6-4-3',
  title: 'Dependency Inversion',
  section: '6.4.3'
};
