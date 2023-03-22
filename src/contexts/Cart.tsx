import React, {useCallback, useState} from 'react';
import {createContext} from 'use-context-selector';

export const CartContext = createContext();

export const CartProvider = ({children}) => {
  const [cart, setCart] = useState([]);

  const total = useCallback(() => {
    // Total price X quant in the cart, for all products
    return cart.reduce((ack: number, {price, quant}) => ack + price * quant, 0);
  }, [cart])();

  const handleAddItemToCart = product => {
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

  const handleRemoveItemToCart = product => {
    setCart(prevState =>
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

    // setCartItems(prev =>
    //     prev.reduce((ack, item) => {
    //       if (item.id === id) {
    //         if (item.amount === 1) return ack;
    //         return [...ack, { ...item, amount: item.amount - 1 }];
    //       } else {
    //         return [...ack, item];
    //       }
    //     }, [] as CartItemType[])
    //   );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        handleAddItemToCart,
        handleRemoveItemToCart,
        total,
      }}>
      {children}
    </CartContext.Provider>
  );
};
