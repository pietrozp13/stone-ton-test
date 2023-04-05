import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, FlatList} from 'react-native';

import {useContextSelector} from 'use-context-selector';
import {IProduct} from '../../types';

import {CartContext} from '../../contexts/Cart';

import ProductCardList from '../../components/ProductCard/ProductCardList';

const Cart = () => {
  const cart = useContextSelector(
    CartContext,
    state => state.cart,
  ) as IProduct[];

  const handleAddItemToCart = useContextSelector(
    CartContext,
    state => state.handleAddItemToCart,
  );

  const handleRemoveItemToCart = useContextSelector(
    CartContext,
    state => state.handleRemoveItemToCart,
  );
  const total = useContextSelector(CartContext, state => state.total) as number;

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1}}>
        <View style={styles.totalContainer}>
          <Text style={styles.priceText}>Total: ${total}</Text>
        </View>
        <FlatList
          data={cart}
          keyExtractor={({id}) => `${id}`}
          renderItem={({item}) => {
            const isOnCart = cart.find(cartItem => cartItem.id === item.id);
            return (
              <ProductCardList
                item={item}
                isSelectedCounter={isOnCart?.quant || false}
                onAdd={() => handleAddItemToCart(item)}
                onRemove={() => handleRemoveItemToCart(item)}
              />
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8e7e3',
  },
  contentWrapper: {
    padding: 20,
  },
  priceText: {
    color: '#444444',
    fontSize: 26,
    margin: 4,
  },
  totalContainer: {
    margin: 6,
    padding: 6,
    borderRadius: 6,
    backgroundColor: '#ffffff',
  },
});
export default Cart;
