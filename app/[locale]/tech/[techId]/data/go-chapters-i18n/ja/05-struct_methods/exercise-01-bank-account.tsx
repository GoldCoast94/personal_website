import React from 'react';

interface Props {
  className?: string;
}

export default function 練習2銀行口座システム({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 練習2：銀行口座システム</h3>

      <ul>
        <li>**問題：** シンプルな銀行口座システムを実装する：</li>
        <li><code>Account</code>構造体を定義し、以下を含める：口座番号、口座名義人、残高（プライベートフィールド）</li>
        <li>メソッドを実装する：</li>
        <li><code>Deposit(amount float64) error</code> - 入金</li>
        <li><code>Withdraw(amount float64) error</code> - 出金</li>
        <li><code>Transfer(to *Account, amount float64) error</code> - 振込</li>
        <li><code>Balance() float64</code> - 残高照会</li>
        <li><code>Transaction</code>構造体を実装して取引履歴を記録</li>
        <li>金額が負にならないことを保証する</li>
      </ul>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '練習2：銀行口座システム',
  section: '0'
};
