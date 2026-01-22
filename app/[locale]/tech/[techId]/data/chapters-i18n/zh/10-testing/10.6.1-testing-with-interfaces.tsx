import React from 'react';

interface Props {
  className?: string;
}

export default function 使用接口进行测试({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">10.6.1 使用接口进行测试</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

// 定义接口
type Database interface {
    Get(key string) (string, error)
    Set(key, value string) error
}

// 真实实现
type RealDB struct{}

func (db *RealDB) Get(key string) (string, error) {
    // 实际数据库操作
    return "", nil
}

func (db *RealDB) Set(key, value string) error {
    // 实际数据库操作
    return nil
}

// 业务逻辑
type UserService struct {
    db Database
}

func (s *UserService) GetUserName(id string) (string, error) {
    return s.db.Get("user:" + id)
}`}</code>
      </pre>

      <ul>
        <li>*测试代码:**</li>
      </ul>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "errors"
    "testing"
)

// Mock实现
type MockDB struct {
    data map[string]string
    err  error
}

func NewMockDB() *MockDB {
    return &MockDB{
        data: make(map[string]string),
    }
}

func (m *MockDB) Get(key string) (string, error) {
    if m.err != nil {
        return "", m.err
    }
    return m.data[key], nil
}

func (m *MockDB) Set(key, value string) error {
    if m.err != nil {
        return m.err
    }
    m.data[key] = value
    return nil
}

func TestUserService_GetUserName(t *testing.T) {
    // 创建mock
    mockDB := NewMockDB()
    mockDB.Set("user:1", "Alice")

    // 使用mock进行测试
    service := &UserService{db: mockDB}
    name, err := service.GetUserName("1")

    if err != nil {
        t.Fatalf("unexpected error: %v", err)
    }

    if name != "Alice" {
        t.Errorf("got %s, want Alice", name)
    }
}

func TestUserService_GetUserNameError(t *testing.T) {
    mockDB := NewMockDB()
    mockDB.err = errors.New("database error")

    service := &UserService{db: mockDB}
    _, err := service.GetUserName("1")

    if err == nil {
        t.Error("expected error, got nil")
    }
}`}</code>
      </pre>
      <p>## 10.7 测试覆盖率</p>

    </div>
  );
}

export const metadata = {
  id: '10-6-1',
  title: '使用接口进行测试',
  section: '10.6.1'
};
