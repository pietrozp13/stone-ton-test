import React, {useCallback, useState} from 'react';
import {createContext} from 'use-context-selector';

import {CartContextType, IProduct} from '../types';

const inicialValue = {
  cart: [],
  handleAddItemToCart: () => {},
  handleRemoveItemToCart: () => {},
  total: 0,
};

export const CartContext = createContext<CartContextType>(inicialValue);

export const CartProvider: React.FC<React.ReactNode> = ({children}) => {
  const [cart, setCart] = useState<IProduct[]>([]);

  const total = useCallback(() => {
    // Total price X quant in the cart, for all products
    return cart.reduce((ack: number, {price, quant}) => ack + price * quant, 0);
  }, [cart])();

  const handleAddItemToCart = (product: IProduct) => {
    setCart(prevState => {
      const isProductInCart = prevState.find(
        currentProduct => currentProduct.id === product.id,
      );
      if (isProductInCart) {
        return prevState.map(item =>
          item.id === product.id ? {...item, quant: item.quant + 1} : item,
        );
      }
      return [...prevState, {...product, quant: 1}];
    });
  };

  const handleRemoveItemToCart = (product: IProduct) => {
    setCart((prevState: IProduct[]) =>
      prevState.reduce((accumulator, currentProduct) => {
        const {id, quant} = currentProduct;
        if (product.id === id) {
          if (quant === 1) {
            return accumulator;
          }
          return [...accumulator, {...currentProduct, quant: quant - 1}];
        } else {
          return [...accumulator, currentProduct];
        }
      }, []),
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        handleAddItemToCart,
        handleRemoveItemToCart,
        total,
      }}>
      {children}
    </CartContext.Provider>
  );
};
