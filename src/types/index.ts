import {NativeStackScreenProps} from '@react-navigation/native-stack';

export interface IProduct {
  id: number;
  title: string;
  price: number;
  quant: number;
  images: [string];
  thumbnail: string;
}
export type CartContextType = {
  cart: IProduct[];
  total: number;
  handleAddItemToCart: (product: IProduct) => void;
  handleRemoveItemToCart: (product: IProduct) => void;
};

type RootStackParamList = {
  Products: undefined;
  ProductDetails: undefined;
  Cart: undefined;
};

export type NaveProps = NativeStackScreenProps<RootStackParamList, 'Products'>;
