import React, { useState } from "react";
import { useTranslations } from 'next-intl';
import { Modal } from "./Modal";
import { CodeBlock } from "./CodeBlock";

const commonCardStyles =
  "relative bg-white/10 dark:bg-gray-800/10 backdrop-blur-xl p-6 rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between hover:scale-[1.02] group overflow-hidden";

const overlayStyles =
  "absolute inset-0 bg-white/30 dark:bg-white/20 backdrop-blur-sm transition-all duration-500 scale-150 group-hover:scale-0 bg-[url('/noise.svg')] bg-repeat rounded-lg";

const contentStyles = "relative z-10";

export const TodoList: React.FC = () => {
  const t = useTranslations('examples');
  const [todos, setTodos] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, input.trim()]);
      setInput("");
    }
  };

  const removeTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const code = `const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, input.trim()]);
      setInput('');
    }
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && addTodo()}
      />
      <button onClick={addTodo}>添加</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => removeTodo(index)}>删除</button>
          </li>
        ))}
      </ul>
    </div>
  );
};`;

  return (
    <>
      <div className={commonCardStyles} onClick={() => setIsModalOpen(true)}>
        <div className={overlayStyles} />
        <div className={contentStyles}>
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
            {t('todoList.title')}
          </h3>
          <div className="flex flex-col items-center gap-4">
            <p className="text-gray-600 dark:text-gray-300">{t('clickToView')}</p>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={t('todoList.modalTitle')}
      >
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              {t('functionalDescription')}
            </h4>
            <p className="text-gray-600 dark:text-gray-300">
              {t('todoList.description')}
            </p>
          </div>
          <div>
            <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              {t('codeImplementation')}
            </h4>
            <CodeBlock code={code} />
          </div>
          <div>
            <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              {t('liveDemo')}
            </h4>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <div className="flex flex-col gap-4">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) =>
                      e.key === "Enter" && addTodo()
                    }
                    className="flex-1 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600"
                    placeholder={t('todoList.placeholder')}
                  />
                  <button
                    onClick={addTodo}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                  >
                    {t('todoList.add')}
                  </button>
                </div>
                <ul className="space-y-2">
                  {todos.map((todo, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-between p-2 bg-white dark:bg-gray-800 rounded text-gray-900 dark:text-white"
                    >
                      <span>{todo}</span>
                      <button
                        onClick={() => removeTodo(index)}
                        className="text-red-500 hover:text-red-600 transition-colors"
                      >
                        {t('todoList.delete')}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              {t('keyPoints')}
            </h4>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
              <li>{t('todoList.key1')}</li>
              <li>{t('todoList.key2')}</li>
              <li>{t('todoList.key3')}</li>
              <li>{t('todoList.key4')}</li>
            </ul>
          </div>
        </div>
      </Modal>
    </>
  );
};
