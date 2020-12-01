import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  useEffect,
  useMemo,
} from 'react';

import AsyncStorage from '@react-native-community/async-storage';

interface Product {
  id: string;
  name: string;
  price: number;
  score: number;
  image: string;
  quantity: number;
}

interface GameContext {
  products: Product[];
  addToCart(item: Omit<Product, 'quantity'>): void;
  addGame(id: string): void;
  decGame(id: string): void;
}

const GameContext = createContext<GameContext | null>(null);

const GameProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    (async () => {
      const product = await AsyncStorage.getItem('GamingStore');

      if (product) {
        setProducts([...JSON.parse(product)]);
      }
    })();
  }, []);

  const addToCart = useCallback(
    async product => {
      const productExists = products.find(
        productArray => productArray.id === product.id,
      );

      if (productExists) {
        const productPlus = products.map(productArray =>
          productArray.id === product.id
            ? {
                ...product,
                quantity: productArray.quantity + 1,
              }
            : productArray,
        );
        setProducts(productPlus);
      } else {
        setProducts([...products, { ...product, quantity: 1 }]);
      }

      await AsyncStorage.setItem('GamingStore', JSON.stringify(products));
    },
    [products],
  );

  const addGame = useCallback(
    async id => {
      const addProducts = products.map(product =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product,
      );

      setProducts(addProducts);

      await AsyncStorage.setItem('GamingStore', JSON.stringify(addProducts));
    },
    [products],
  );

  const decGame = useCallback(
    async id => {
      const decProducts = products.map(product =>
        product.id === id
          ? { ...product, quantity: product.quantity - 1 }
          : product,
      );

      setProducts(decProducts);

      await AsyncStorage.setItem('GamingStore', JSON.stringify(decProducts));
    },
    [products],
  );

  const value = useMemo(() => ({ addToCart, addGame, decGame, products }), [
    products,
    addToCart,
    addGame,
    decGame,
  ]);

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

function useStore(): GameContext {
  const context = useContext(GameContext);

  if (!context) {
    throw new Error(`useCart must be used within a CartProvider`);
  }

  return context;
}

export { GameProvider, useStore };
