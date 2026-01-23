import React from 'react';

interface Props {
  className?: string;
}

export default function 環境変数の設定({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">1.2.2 環境変数の設定</h3>

      <pre className="code-block">
        <code className="language-bash">{`# Goのバージョンを確認
go version

# Go環境情報を確認
go env

# 重要な環境変数
export GOROOT=/usr/local/go           # Goインストールディレクトリ
export GOPATH=$HOME/go                # Goワークスペースディレクトリ
export PATH=$PATH:$GOROOT/bin:$GOPATH/bin

# Go 1.11+はGo Modulesを使用、有効化を推奨
export GO111MODULE=on
export GOPROXY=https://goproxy.cn,direct  # プロキシで高速化`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '1-2-2',
  title: '環境変数の設定',
  section: '1.2.2'
};
