import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, View, FlatList} from 'react-native';
import {useContextSelector} from 'use-context-selector';

import {NaveProps} from '../../types';

import {CartContext} from '../../contexts/Cart';
import {getProducts} from '../../services/api';

import ProductCardList from '../../components/ProductCard/ProductCardList';

const Products = ({navigation}: NaveProps) => {
  const cart = useContextSelector(CartContext, state => state.cart);
  const handleAddItemToCart = useContextSelector(
    CartContext,
    state => state.handleAddItemToCart,
  );
  const handleRemoveItemToCart = useContextSelector(
    CartContext,
    state => state.handleRemoveItemToCart,
  );
  const [allProducts, setAllProducts] = useState();

  const handleGetData = async () => {
    const {products} = (await getProducts()) as any;
    setAllProducts(products);
  };
  useEffect(() => {
    handleGetData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentWrapper}>
        <FlatList
          data={allProducts}
          keyExtractor={({id}) => `${id}`}
          renderItem={({item}) => {
            const isOnCart = cart.find(cartItem => cartItem.id === item.id);
            return (
              <ProductCardList
                item={item}
                isSelectedCounter={isOnCart?.quant || false}
                onAdd={() => handleAddItemToCart(item)}
                onRemove={() => handleRemoveItemToCart(item)}
                onDetailes={() =>
                  navigation.navigate('Detalhes', {
                    title: item.title,
                    price: item.price,
                  })
                }
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
    marginHorizontal: 10,
    padding: 10,
  },
});
export default Products;
