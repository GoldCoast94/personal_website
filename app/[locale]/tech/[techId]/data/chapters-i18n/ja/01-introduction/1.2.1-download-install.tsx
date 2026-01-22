import React from 'react';

interface Props {
  className?: string;
}

export default function ダウンロードとインストール({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">1.2.1 ダウンロードとインストール</h3>

      <ul>
        <li>公式サイトにアクセス：https://golang.org/dl/ （中国からは https://golang.google.cn/dl/）</li>
        <li>対応するOSのインストーラーをダウンロード</li>
        <li>インストールウィザードに従ってインストールを完了</li>
      </ul>

      <ul>
        <li>**macOS**</li>
      </ul>

      <pre className="code-block">
        <code className="language-bash">{`# Homebrewを使用してインストール
brew install go`}</code>
      </pre>

      <ul>
        <li>**Linux**</li>
      </ul>

      <pre className="code-block">
        <code className="language-bash">{`# ダウンロードして解凍
wget https://golang.org/dl/go1.21.0.linux-amd64.tar.gz
sudo tar -C /usr/local -xzf go1.21.0.linux-amd64.tar.gz

# 環境変数を設定
echo 'export PATH=$PATH:/usr/local/go/bin' >> ~/.bashrc
source ~/.bashrc`}</code>
      </pre>

      <ul>
        <li>**Windows**</li>
        <li>MSIインストーラーをダウンロードし、ダブルクリックでインストール</li>
      </ul>

    </div>
  );
}

export const metadata = {
  id: '1-2-1',
  title: 'ダウンロードとインストール',
  section: '1.2.1'
};
