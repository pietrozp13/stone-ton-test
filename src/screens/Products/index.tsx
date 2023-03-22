import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Button,
  FlatList,
} from 'react-native';

import {getProducts} from '../../services/api';

const Products = ({navigation}) => {
  const [products, setProducts] = useState();

  const handleGetData = async () => {
    const {products} = await getProducts();
    setProducts(products);
  };
  useEffect(() => {
    handleGetData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentWrapper}>
        <Button title="Carrinho" onPress={() => navigation.navigate('Cart')} />
        <FlatList
          data={products}
          keyExtractor={({id}) => `${id}`}
          renderItem={({item}) => (
            <View>
              <Text>{item.title}</Text>
              <Text>{item.price}</Text>
              <Button
                title="Go to Details"
                onPress={() =>
                  navigation.navigate('ProductDetails', {
                    title: item.title,
                    price: item.price,
                  })
                }
              />
            </View>
          )}
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
});
export default Products;
