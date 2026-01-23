import React from 'react';

interface Props {
  className?: string;
}

export default function 練習問題04決済システム({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 練習問題4：決済システム</h3>

      <ul>
        <li>**課題:** 決済システムを実装：</li>
        <li><code>PaymentMethod</code>インターフェースを定義、<code>Pay(amount float64) error</code>を含む</li>
        <li>複数の決済方法を実装：CreditCard、PayPal、Alipay</li>
        <li>異なる決済方法を使用できる<code>Order</code>構造体を作成</li>
        <li>決済検証とエラー処理を実装</li>
      </ul>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '練習問題4：決済システム',
  section: '0'
};
