import React from 'react';

interface Props {
  className?: string;
}

export default function 练习3事务处理({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 练习3：事务处理</h3>
      <p>实现订单系统的事务处理（扣库存、创建订单、支付）。</p>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '练习3：事务处理',
  section: '0'
};
