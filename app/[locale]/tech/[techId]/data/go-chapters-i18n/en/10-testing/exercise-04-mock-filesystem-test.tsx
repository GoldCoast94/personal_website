import React from 'react';

interface Props {
  className?: string;
}

export default function Answer3MockFilesystemTest({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 Answer 3: Mock Filesystem Test</h3>

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
      <p>## Chapter Summary</p>
      <p>This chapter comprehensively introduced Go testing:</p>

      <ul>
        <li>**Testing basics**: Test file naming, basic test functions</li>
        <li>**Table-driven tests**: Organizing and running multiple test cases</li>
        <li>**Test helpers**: Helper functions, Setup/Teardown</li>
        <li>**Benchmarks**: Performance testing and optimization</li>
        <li>**Example tests**: Executable documentation</li>
        <li>**Mock testing**: Dependency isolation using interfaces</li>
        <li>**Coverage**: Test coverage analysis</li>
        <li>**HTTP testing**: Testing web services</li>
        <li>**Practice project**: Complete service testing</li>
      </ul>
      <p>Good testing is the guarantee of high-quality software.</p>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: 'Answer 3: Mock Filesystem Test',
  section: '0'
};
