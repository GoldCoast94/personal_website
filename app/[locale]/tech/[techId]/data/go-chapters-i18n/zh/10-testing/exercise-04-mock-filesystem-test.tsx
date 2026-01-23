import React from 'react';

interface Props {
  className?: string;
}

export default function 答案3mock文件系统测试({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 答案3：Mock文件系统测试</h3>

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
      <p>## 本章小结</p>
      <p>本章全面介绍了Go语言的测试：</p>

      <ul>
        <li>**测试基础**：测试文件命名、基本测试函数</li>
        <li>**表格驱动测试**：组织和运行多个测试用例</li>
        <li>**测试辅助**：Helper函数、Setup/Teardown</li>
        <li>**基准测试**：性能测试和优化</li>
        <li>**示例测试**：可执行的文档</li>
        <li>**Mock测试**：使用接口进行依赖隔离</li>
        <li>**覆盖率**：测试覆盖率分析</li>
        <li>**HTTP测试**：测试Web服务</li>
        <li>**实战项目**：完整的服务测试</li>
      </ul>
      <p>良好的测试是高质量软件的保证。</p>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '答案3：Mock文件系统测试',
  section: '0'
};
