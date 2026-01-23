import React from 'react';

interface Props {
  className?: string;
}

export default function インターフェースを使用したテスト({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">10.6.1 インターフェースを使用したテスト</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

// インターフェースの定義
type Database interface {
    Get(key string) (string, error)
    Set(key, value string) error
}

// 実際の実装
type RealDB struct{}

func (db *RealDB) Get(key string) (string, error) {
    // 実際のデータベース操作
    return "", nil
}

func (db *RealDB) Set(key, value string) error {
    // 実際のデータベース操作
    return nil
}

// ビジネスロジック
type UserService struct {
    db Database
}

func (s *UserService) GetUserName(id string) (string, error) {
    return s.db.Get("user:" + id)
}`}</code>
      </pre>

      <ul>
        <li>**テストコード:**</li>
      </ul>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "errors"
    "testing"
)

// モック実装
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
    // モックを作成
    mockDB := NewMockDB()
    mockDB.Set("user:1", "Alice")

    // モックを使用してテスト
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
      <p>## 10.7 テストカバレッジ</p>

    </div>
  );
}

export const metadata = {
  id: '10-6-1',
  title: 'インターフェースを使用したテスト',
  section: '10.6.1'
};
