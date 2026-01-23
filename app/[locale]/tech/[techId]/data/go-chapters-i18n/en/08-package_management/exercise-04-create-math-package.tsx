import React from 'react';

interface Props {
  className?: string;
}

export default function ExerciseCreateMathPackage({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 Exercise 1: Create Math Package</h3>
      <p>Create a math package containing basic mathematical operation functions (addition, subtraction, multiplication, division, power, square root, etc.).</p>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: 'Exercise 1: Create Math Package',
  section: '0'
};
