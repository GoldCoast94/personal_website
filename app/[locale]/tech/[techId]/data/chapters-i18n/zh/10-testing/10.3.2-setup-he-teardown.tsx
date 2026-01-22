import React from 'react';

interface Props {
  className?: string;
}

export default function Setup和teardown({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">10.3.2 Setup和Teardown</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "os"
    "testing"
)

func TestMain(m *testing.M) {
    // 测试前的设置
    setup()

    // 运行测试
    code := m.Run()

    // 测试后的清理
    teardown()

    os.Exit(code)
}

func setup() {
    // 初始化测试环境
    println("Setup: preparing test environment")
}

func teardown() {
    // 清理测试环境
    println("Teardown: cleaning up test environment")
}

func TestExample(t *testing.T) {
    // 每个测试的setup
    t.Cleanup(func() {
        println("Cleaning up after TestExample")
    })

    // 测试代码
    t.Log("Running TestExample")
}`}</code>
      </pre>
      <p>## 10.4 基准测试</p>

    </div>
  );
}

export const metadata = {
  id: '10-3-2',
  title: 'Setup和Teardown',
  section: '10.3.2'
};
