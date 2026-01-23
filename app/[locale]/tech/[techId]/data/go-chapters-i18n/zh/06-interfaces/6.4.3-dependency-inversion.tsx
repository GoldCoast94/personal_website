import React from 'react';

interface Props {
  className?: string;
}

export default function 依赖倒置原则({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">6.4.3 依赖倒置原则</h3>
      <p>高层模块不应该依赖低层模块，两者都应该依赖抽象。</p>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

// 抽象层：定义接口
type DataStore interface {
    Save(key string, value interface{}) error
    Load(key string) (interface{}, error)
}

// 低层模块：具体实现
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
    // 文件存储实现
}

func (f *FileStore) Save(key string, value interface{}) error {
    fmt.Printf("Saving to file: %s = %v\n", key, value)
    return nil
}

func (f *FileStore) Load(key string) (interface{}, error) {
    fmt.Printf("Loading from file: %s\n", key)
    return "file value", nil
}

// 高层模块：依赖抽象而非具体实现
type UserService struct {
    store DataStore  // 依赖接口
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
    // 使用内存存储
    memStore := NewMemoryStore()
    userService1 := NewUserService(memStore)

    userService1.SaveUser("1", "Alice")
    name, _ := userService1.GetUser("1")
    fmt.Println("User:", name)

    // 切换到文件存储（不需要修改UserService）
    fileStore := &FileStore{}
    userService2 := NewUserService(fileStore)

    userService2.SaveUser("2", "Bob")
    userService2.GetUser("2")
}`}</code>
      </pre>
      <p>## 6.5 接口的高级用法</p>

    </div>
  );
}

export const metadata = {
  id: '6-4-3',
  title: '依赖倒置原则',
  section: '6.4.3'
};
