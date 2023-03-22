import React, {useContext} from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';

import {useContextSelector} from 'use-context-selector';

import {CartContext} from '../../contexts/Cart';

const Cart = () => {
  const cart = useContextSelector(CartContext, state => state.cart);
  const total = useContextSelector(CartContext, state => state.total);
  console.log(total);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Carrinho</Text>
        <Text>total: {total}</Text>
        <Text>{JSON.stringify(cart)}</Text>
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
});
export default Cart;
