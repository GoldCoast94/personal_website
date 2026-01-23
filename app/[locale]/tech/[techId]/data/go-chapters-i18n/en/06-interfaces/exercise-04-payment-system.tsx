import React from 'react';

interface Props {
  className?: string;
}

export default function Exercise04PaymentSystem({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 Exercise 4: Payment System</h3>

      <ul>
        <li>**Task:** Implement a payment system:</li>
        <li>Define <code>PaymentMethod</code> interface, including <code>Pay(amount float64) error</code></li>
        <li>Implement multiple payment methods: CreditCard, PayPal, Alipay</li>
        <li>Create <code>Order</code> struct that can use different payment methods</li>
        <li>Implement payment validation and error handling</li>
      </ul>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: 'Exercise 4: Payment System',
  section: '0'
};
