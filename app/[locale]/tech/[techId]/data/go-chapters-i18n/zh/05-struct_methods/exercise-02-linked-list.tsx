import React from 'react';

interface Props {
  className?: string;
}

export default function 练习5链表实现({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 练习5：链表实现</h3>

      <ul>
        <li>*题目：** 实现一个单链表：</li>
        <li>定义<code>Node</code>结构体，包含：值、下一个节点指针</li>
        <li>定义<code>LinkedList</code>结构体和方法：</li>
        <li><code>Append(value int)</code> - 在末尾添加节点</li>
        <li><code>Prepend(value int)</code> - 在开头添加节点</li>
        <li><code>Delete(value int)</code> - 删除指定值的节点</li>
        <li><code>Find(value int) bool</code> - 查找节点</li>
        <li><code>Length() int</code> - 返回长度</li>
        <li><code>Print()</code> - 打印链表</li>
      </ul>
      <p>## 5.7 练习答案</p>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '练习5：链表实现',
  section: '0'
};
