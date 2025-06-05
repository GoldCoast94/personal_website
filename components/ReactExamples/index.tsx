import React from "react";
import { Counter } from "./Counter";
import { InputEffect } from "./InputEffect";
import { Timer } from "./Timer";
import { TodoList } from "./TodoList";
import { ThemeButton, ThemeProvider } from "./ThemeButton";
import { ShoppingCart } from "./ShoppingCart";

const ReactExamples: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          React Hooks 示例
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          这些示例展示了 React Hooks
          的基本用法和常见应用场景。每个示例都包含功能说明、代码实现和在线演示。
        </p>
      </div>
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl" />
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          <div className="h-[250px]">
            <Counter />
          </div>
          <div className="h-[250px]">
            <InputEffect />
          </div>
          <div className="h-[250px]">
            <Timer />
          </div>
          <div className="h-[250px]">
            <TodoList />
          </div>
          <div className="h-[250px] relative">
            <ThemeProvider>
              <ThemeButton />
            </ThemeProvider>
          </div>
          <div className="h-[250px]">
            <ShoppingCart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReactExamples;
