import React from 'react';

interface Props {
  className?: string;
}

export default function 解答3モックファイルシステムテスト({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 解答3：モックファイルシステムテスト</h3>

      <pre className="code-block">
        <code className="language-go">{`package file

import (
    "errors"
    "testing"
)

type FileSystem interface {
    ReadFile(path string) ([]byte, error)
    WriteFile(path string, data []byte) error
}

type MockFileSystem struct {
    files map[string][]byte
    err   error
}

func NewMockFS() *MockFileSystem {
    return &MockFileSystem{
        files: make(map[string][]byte),
    }
}

func (m *MockFileSystem) ReadFile(path string) ([]byte, error) {
    if m.err != nil {
        return nil, m.err
    }
    data, exists := m.files[path]
    if !exists {
        return nil, errors.New("file not found")
    }
    return data, nil
}

func (m *MockFileSystem) WriteFile(path string, data []byte) error {
    if m.err != nil {
        return m.err
    }
    m.files[path] = data
    return nil
}

type FileManager struct {
    fs FileSystem
}

func (fm *FileManager) CopyFile(src, dst string) error {
    data, err := fm.fs.ReadFile(src)
    if err != nil {
        return err
    }
    return fm.fs.WriteFile(dst, data)
}

func TestFileManager_CopyFile(t *testing.T) {
    mockFS := NewMockFS()
    mockFS.WriteFile("source.txt", []byte("content"))

    manager := &FileManager{fs: mockFS}

    err := manager.CopyFile("source.txt", "dest.txt")
    if err != nil {
        t.Fatalf("unexpected error: %v", err)
    }

    data, _ := mockFS.ReadFile("dest.txt")
    if string(data) != "content" {
        t.Errorf("got %s, want content", string(data))
    }
}`}</code>
      </pre>
      <p>## 本章のまとめ</p>
      <p>本章ではGo言語のテストを包括的に紹介しました：</p>

      <ul>
        <li>**テストの基本**：テストファイルの命名、基本的なテスト関数</li>
        <li>**テーブル駆動テスト**：複数のテストケースの整理と実行</li>
        <li>**テストヘルパー**：ヘルパー関数、Setup/Teardown</li>
        <li>**ベンチマーク**：パフォーマンステストと最適化</li>
        <li>**サンプルテスト**：実行可能なドキュメント</li>
        <li>**モックテスト**：インターフェースを使用した依存関係の分離</li>
        <li>**カバレッジ**：テストカバレッジの分析</li>
        <li>**HTTPテスト**：Webサービスのテスト</li>
        <li>**実践プロジェクト**：完全なサービステスト</li>
      </ul>
      <p>優れたテストは高品質なソフトウェアの保証です。</p>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '解答3：モックファイルシステムテスト',
  section: '0'
};
