import React, { useState, useReducer } from "react";
import { useTranslations } from 'next-intl';
import { Modal } from "./Modal";
import { CodeBlock } from "./CodeBlock";

const commonCardStyles =
  "relative bg-white/10 dark:bg-gray-800/10 backdrop-blur-xl p-6 rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between hover:scale-[1.02] group overflow-hidden";

const overlayStyles =
  "absolute inset-0 bg-white/30 dark:bg-white/20 backdrop-blur-sm transition-all duration-500 scale-150 group-hover:scale-0 bg-[url('/noise.svg')] bg-repeat rounded-lg";

const contentStyles = "relative z-10";

// 商品类型
type Product = {
  id: number;
  name: string;
  price: number;
};

// 购物车商品类型
type CartItem = Product & {
  quantity: number;
};

// 购物车状态类型
type CartState = {
  items: CartItem[];
  total: number;
};

// 购物车操作类型
type CartAction =
  | { type: "ADD_ITEM"; payload: Product }
  | { type: "REMOVE_ITEM"; payload: number }
  | { type: "UPDATE_QUANTITY"; payload: { id: number; quantity: number } };

// 购物车 reducer
const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
          total: state.total + action.payload.price,
        };
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
        total: state.total + action.payload.price,
      };
    }
    case "REMOVE_ITEM": {
      const item = state.items.find((item) => item.id === action.payload);
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
        total: state.total - (item ? item.price * item.quantity : 0),
      };
    }
    case "UPDATE_QUANTITY": {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (!item) return state;
      const quantityDiff = action.payload.quantity - item.quantity;
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
        total: state.total + item.price * quantityDiff,
      };
    }
    default:
      return state;
  }
};

export const ShoppingCart: React.FC = () => {
  const t = useTranslations('examples');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cart, dispatch] = useReducer(cartReducer, { items: [], total: 0 });

  // 示例商品数据
  const products: Product[] = [
    { id: 1, name: t('shoppingCart.product', { number: 1 }), price: 100 },
    { id: 2, name: t('shoppingCart.product', { number: 2 }), price: 200 },
    { id: 3, name: t('shoppingCart.product', { number: 3 }), price: 300 },
  ];

  const code = `// 购物车状态类型
type CartState = {
  items: CartItem[];
  total: number;
};

// 购物车操作类型
type CartAction =
  | { type: 'ADD_ITEM'; payload: Product }
  | { type: 'REMOVE_ITEM'; payload: number }
  | { type: 'UPDATE_QUANTITY'; payload: { id: number; quantity: number } };

// 购物车 reducer
const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItem = state.items.find(
        item => item.id === action.payload.id
      );
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
          total: state.total + action.payload.price,
        };
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
        total: state.total + action.payload.price,
      };
    }
    case 'REMOVE_ITEM': {
      const item = state.items.find(item => item.id === action.payload);
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
        total: state.total - (item ? item.price * item.quantity : 0),
      };
    }
    case 'UPDATE_QUANTITY': {
      const item = state.items.find(item => item.id === action.payload.id);
      if (!item) return state;
      const quantityDiff = action.payload.quantity - item.quantity;
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
        total: state.total + item.price * quantityDiff,
      };
    }
    default:
      return state;
  }
};`;

  return (
    <>
      <div className={commonCardStyles} onClick={() => setIsModalOpen(true)}>
        <div className={overlayStyles} />
        <div className={contentStyles}>
          <h3 className="text-lg font-semibold mb-4">{t('shoppingCart.title')}</h3>
          <div className="flex flex-col items-center gap-4">
            <p className="text-gray-600 dark:text-gray-300">{t('clickToView')}</p>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={t('shoppingCart.modalTitle')}
      >
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              {t('functionalDescription')}
            </h4>
            <p className="text-gray-600 dark:text-gray-300">
              {t('shoppingCart.description')}
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
              <div className="space-y-6">
                <div>
                  <h5 className="text-md font-medium text-gray-900 dark:text-white mb-3">
                    {t('shoppingCart.productList')}
                  </h5>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {products.map((product) => (
                      <div
                        key={product.id}
                        className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow"
                      >
                        <h6 className="font-medium text-gray-900 dark:text-white">
                          {product.name}
                        </h6>
                        <p className="text-gray-600 dark:text-gray-300">
                          ¥{product.price}
                        </p>
                        <button
                          onClick={() =>
                            dispatch({ type: "ADD_ITEM", payload: product })
                          }
                          className="mt-2 w-full px-3 py-1 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition-colors"
                        >
                          {t('shoppingCart.addToCart')}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h5 className="text-md font-medium text-gray-900 dark:text-white mb-3">
                    {t('shoppingCart.cart')}
                  </h5>
                  {cart.items.length === 0 ? (
                    <p className="text-gray-600 dark:text-gray-300">
                      {t('shoppingCart.emptyCart')}
                    </p>
                  ) : (
                    <div className="space-y-4">
                      {cart.items.map((item) => (
                        <div
                          key={item.id}
                          className="flex items-center justify-between bg-white dark:bg-gray-800 p-4 rounded-lg shadow"
                        >
                          <div>
                            <h6 className="font-medium text-gray-900 dark:text-white">
                              {item.name}
                            </h6>
                            <p className="text-gray-600 dark:text-gray-300">
                              ¥{item.price}
                            </p>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() =>
                                  dispatch({
                                    type: "UPDATE_QUANTITY",
                                    payload: {
                                      id: item.id,
                                      quantity: Math.max(0, item.quantity - 1),
                                    },
                                  })
                                }
                                className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                              >
                                -
                              </button>
                              <span className="text-gray-900 dark:text-white">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() =>
                                  dispatch({
                                    type: "UPDATE_QUANTITY",
                                    payload: {
                                      id: item.id,
                                      quantity: item.quantity + 1,
                                    },
                                  })
                                }
                                className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                              >
                                +
                              </button>
                            </div>
                            <button
                              onClick={() =>
                                dispatch({
                                  type: "REMOVE_ITEM",
                                  payload: item.id,
                                })
                              }
                              className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                            >
                              {t('todoList.delete')}
                            </button>
                          </div>
                        </div>
                      ))}
                      <div className="flex justify-between items-center bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                        <span className="font-medium text-gray-900 dark:text-white">
                          {t('shoppingCart.total')}
                        </span>
                        <span className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
                          ¥{cart.total}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              {t('keyPoints')}
            </h4>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
              <li>{t('shoppingCart.key1')}</li>
              <li>{t('shoppingCart.key2')}</li>
              <li>{t('shoppingCart.key3')}</li>
              <li>{t('shoppingCart.key4')}</li>
            </ul>
          </div>
        </div>
      </Modal>
    </>
  );
};
