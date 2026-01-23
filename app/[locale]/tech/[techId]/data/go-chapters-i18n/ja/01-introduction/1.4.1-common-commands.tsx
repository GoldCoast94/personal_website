import React from 'react';

interface Props {
  className?: string;
}

export default function 一般的なコマンド({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">1.4.1 一般的なコマンド</h3>

      <pre className="code-block">
        <code className="language-bash">{`go run      # Goプログラムをコンパイルして実行
go build    # Goプログラムをコンパイル
go install  # Goプログラムをコンパイルしてインストール
go get      # パッケージと依存関係をダウンロードしてインストール
go mod      # モジュールのメンテナンス
go test     # テストを実行
go fmt      # コードをフォーマット
go vet      # コードのエラーをチェック
go doc      # ドキュメントを表示`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '1-4-1',
  title: '一般的なコマンド',
  section: '1.4.1'
};
