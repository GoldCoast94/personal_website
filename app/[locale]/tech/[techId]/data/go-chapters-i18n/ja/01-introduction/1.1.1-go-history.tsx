import React from 'react';

interface Props {
  className?: string;
}

export default function Go言語の歴史({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">1.1.1 Go言語の歴史</h3>
      <p>Go言語（Golangとも呼ばれる）は、Googleが2007年に設計を開始し、2009年に正式に公開されました。主な設計者は以下の通りです：
- Robert Griesemer
- Rob Pike
- Ken Thompson</p>

      <p>Goは、特に並行性、スケーラビリティ、使いやすさの分野において、現代のソフトウェア開発の課題に対処するために作成されました。</p>

      <h4>主要なマイルストーン</h4>
      <ul>
        <li><strong>2007年</strong>: Googleで設計作業が開始</li>
        <li><strong>2009年11月</strong>: オープンソースプロジェクトとして発表</li>
        <li><strong>2012年3月</strong>: 安定したAPIを持つGo 1.0がリリース</li>
        <li><strong>現在</strong>: Goは定期的なリリースで進化を続けています</li>
      </ul>

      <h4>設計哲学</h4>
      <p>Goはいくつかの重要な原則を念頭に置いて設計されました：</p>
      <ul>
        <li><strong>シンプルさ</strong>: 学習しやすく、読みやすい</li>
        <li><strong>効率性</strong>: 高速なコンパイルと実行</li>
        <li><strong>安全性</strong>: 強い型付けとメモリ安全性</li>
        <li><strong>並行性</strong>: 並行プログラミングの組み込みサポート</li>
      </ul>
    </div>
  );
}

export const metadata = {
  id: '1-1-1',
  title: 'Go言語の歴史',
  section: '1.1.1'
};
