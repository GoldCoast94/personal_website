import React from 'react';

interface Props {
  className?: string;
}

export default function 练习2目录同步({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 练习2：目录同步</h3>
      <p>编写一个程序，同步两个目录的内容。</p>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '练习2：目录同步',
  section: '0'
};
