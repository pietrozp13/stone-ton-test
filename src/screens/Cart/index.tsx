import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, Button} from 'react-native';

const Cart = () => {
  // const {title, price} = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View>
        {/* <Button title="Go back" onPress={() => navigation.goBack()} /> */}
        <Text>Carrinho</Text>
        {/* <Text>{price}</Text> */}
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
