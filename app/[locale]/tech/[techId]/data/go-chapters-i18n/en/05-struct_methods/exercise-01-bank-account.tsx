import React from 'react';

interface Props {
  className?: string;
}

export default function Exercise2BankAccountSystem({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 Exercise 2: Bank Account System</h3>

      <ul>
        <li>**Problem:** Implement a simple bank account system:</li>
        <li>Define <code>Account</code> struct, including: account number, holder, balance (private fields)</li>
        <li>Implement methods:</li>
        <li><code>Deposit(amount float64) error</code> - Deposit</li>
        <li><code>Withdraw(amount float64) error</code> - Withdraw</li>
        <li><code>Transfer(to *Account, amount float64) error</code> - Transfer</li>
        <li><code>Balance() float64</code> - Check balance</li>
        <li>Implement <code>Transaction</code> struct to record transaction history</li>
        <li>Ensure amounts cannot be negative</li>
      </ul>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: 'Exercise 2: Bank Account System',
  section: '0'
};
