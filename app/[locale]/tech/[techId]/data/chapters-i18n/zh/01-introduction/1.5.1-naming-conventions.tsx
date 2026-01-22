import React from 'react';

interface Props {
  className?: string;
}

export default function 命名规范({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">1.5.1 命名规范</h3>

      <pre className="code-block">
        <code className="language-go">{`// 包名：小写，简短，有意义
package user

// 变量名：驼峰命名
var userName string
var userAge int

// 常量名：驼峰或全大写
const MaxSize = 100
const MAX_SIZE = 100

// 函数名：驼峰命名，首字母大写表示可导出
func GetUserName() string { }  // 可导出
func calculateAge() int { }     // 私有

// 类型名：驼峰命名
type UserInfo struct { }

// 接口名：以er结尾
type Reader interface { }
type Writer interface { }`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '1-5-1',
  title: '命名规范',
  section: '1.5.1'
};
