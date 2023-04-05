import * as React from 'react';
import {Button, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Products from './Products';
import ProductDetails from './ProductDetails';
import Cart from './Cart';

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Products">
        <Stack.Screen
          name="Produtos"
          component={Products}
          options={({navigation, route}) => ({
            headerRight: props => (
              <Button
                onPress={() => navigation.navigate('Carrinho')}
                style={{backgroundColor: '#fff', fontSize: 20}}
                title="🛒"
              />
            ),
          })}
        />
        <Stack.Screen name="Detalhes" component={ProductDetails} />
        <Stack.Screen name="Carrinho" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
