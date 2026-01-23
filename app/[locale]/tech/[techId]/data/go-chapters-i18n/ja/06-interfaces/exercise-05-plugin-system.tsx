import React from 'react';

interface Props {
  className?: string;
}

export default function 練習問題05プラグインシステム({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 練習問題5：プラグインシステム</h3>

      <ul>
        <li>**課題:** プラグインシステムを設計：</li>
        <li><code>Plugin</code>インターフェースを定義、<code>Name()</code>、<code>Version()</code>、<code>Execute()</code>メソッドを含む</li>
        <li>複数のプラグインを実装：LoggerPlugin、CachePlugin、MetricsPlugin</li>
        <li>プラグインの登録と実行を管理する<code>PluginManager</code>を作成</li>
        <li>プラグインの有効化/無効化機能を実装</li>
      </ul>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '練習問題5：プラグインシステム',
  section: '0'
};
