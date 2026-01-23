import React from 'react';

interface Props {
  className?: string;
}

export default function SetupとTeardown({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">10.3.2 SetupとTeardown</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "os"
    "testing"
)

func TestMain(m *testing.M) {
    // テスト前の設定
    setup()

    // テスト実行
    code := m.Run()

    // テスト後のクリーンアップ
    teardown()

    os.Exit(code)
}

func setup() {
    // テスト環境の初期化
    println("Setup: preparing test environment")
}

func teardown() {
    // テスト環境のクリーンアップ
    println("Teardown: cleaning up test environment")
}

func TestExample(t *testing.T) {
    // 各テストのセットアップ
    t.Cleanup(func() {
        println("Cleaning up after TestExample")
    })

    // テストコード
    t.Log("Running TestExample")
}`}</code>
      </pre>
      <p>## 10.4 ベンチマーク</p>

    </div>
  );
}

export const metadata = {
  id: '10-3-2',
  title: 'SetupとTeardown',
  section: '10.3.2'
};
