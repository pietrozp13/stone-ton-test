import {Alert} from 'react-native';

const handleErrorApi = (error: string) => {
  Alert.alert(
    'Erro',
    `erro na api, por favor tente novamente mais tarde. Erro: ${error}`,
    [{text: 'OK', onPress: () => console.log('OK Pressed')}],
  );
};

export const getProducts = async (onLoad: () => void) => {
  try {
    const response = await fetch('https://dummyjson.com/products');
    if (response?.status !== 200) {
      throw Error('API error');
    }
    const json = await response.json();
    return json.products;
  } catch (error) {
    console.error('API ERROR: FIND PRODUCTS =>', error);
    handleErrorApi('API error');
  } finally {
    onLoad();
  }
};
