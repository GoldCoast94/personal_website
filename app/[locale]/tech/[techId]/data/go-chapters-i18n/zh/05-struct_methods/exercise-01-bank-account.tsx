import React from 'react';

interface Props {
  className?: string;
}

export default function 练习2银行账户系统({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 练习2：银行账户系统</h3>

      <ul>
        <li>*题目：** 实现一个简单的银行账户系统：</li>
        <li>定义<code>Account</code>结构体，包含：账号、持有人、余额（私有字段）</li>
        <li>实现方法：</li>
        <li><code>Deposit(amount float64) error</code> - 存款</li>
        <li><code>Withdraw(amount float64) error</code> - 取款</li>
        <li><code>Transfer(to *Account, amount float64) error</code> - 转账</li>
        <li><code>Balance() float64</code> - 查询余额</li>
        <li>实现<code>Transaction</code>结构体记录交易历史</li>
        <li>确保金额不能为负数</li>
      </ul>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '练习2：银行账户系统',
  section: '0'
};
