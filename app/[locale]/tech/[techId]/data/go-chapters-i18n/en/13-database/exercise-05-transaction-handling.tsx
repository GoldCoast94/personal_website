import React from 'react';

interface Props {
  className?: string;
}

export default function Exercise3TransactionProcessing({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 Exercise 3: Transaction Processing</h3>
      <p>Implement transaction processing for an order system (deduct inventory, create order, payment).</p>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: 'Exercise 3: Transaction Processing',
  section: '0'
};
