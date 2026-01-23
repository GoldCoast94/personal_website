import React from 'react';

interface Props {
  className?: string;
}

export default function Exercise02JsonSerializationInterface({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 Exercise 2: JSON Serialization Interface</h3>

      <ul>
        <li>**Task:** Create a serialization system:</li>
        <li>Define <code>Serializer</code> interface, including <code>Serialize()</code> and <code>Deserialize()</code> methods</li>
        <li>Implement <code>JSONSerializer</code> and <code>XMLSerializer</code></li>
        <li>Create <code>Data</code> struct that can use different serializers</li>
        <li>Test serialization and deserialization</li>
      </ul>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: 'Exercise 2: JSON Serialization Interface',
  section: '0'
};
