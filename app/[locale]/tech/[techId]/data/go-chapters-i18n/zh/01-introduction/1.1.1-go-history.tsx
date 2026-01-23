import React from 'react';

interface Props {
  className?: string;
}

export default function Go语言的历史({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">1.1.1 Go语言的历史</h3>
      <p>Go语言（又称Golang）由Google公司于2007年开始设计，2009年正式对外发布。主要设计者包括：
- Robert Griesemer
- Rob Pike
- Ken Thompson</p>

    </div>
  );
}

export const metadata = {
  id: '1-1-1',
  title: 'Go语言的历史',
  section: '1.1.1'
};
