import React from 'react';

interface Props {
  className?: string;
}

export default function 练习2支付系统({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 练习2：支付系统</h3>

      <ul>
        <li>*题目：** 实现一个支付系统：</li>
        <li>定义<code>PaymentMethod</code>接口，包含<code>Pay(amount float64) error</code></li>
        <li>实现多种支付方式：CreditCard、PayPal、Alipay</li>
        <li>创建<code>Order</code>结构体，可以使用不同的支付方式</li>
        <li>实现支付验证和错误处理</li>
      </ul>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '练习2：支付系统',
  section: '0'
};
