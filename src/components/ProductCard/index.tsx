import React from 'react';
import {StyleSheet, View, Text, Button, Image} from 'react-native';

import {IProduct} from '../../types';

interface IProductCard {
  item: IProduct;
  onAdd?: () => void;
  onRemove?: () => void;
  onDetailes?: () => void;
  isSelectedCounter?: boolean | number;
}

const ProductCard: React.FC<IProductCard> = ({
  item,
  onAdd,
  onRemove,
  onDetailes,
  isSelectedCounter,
}) => {
  return (
    <View testID={`product-${item.id}`} style={styles.itemStyle}>
      <View style={styles.imageTextContainer}>
        <Image
          style={styles.image}
          source={{uri: item.images[0] || item.thumbnail}}
        />
        {/* <Text>{item.id}</Text> */}
        <View style={styles.textContainer}>
          <Text style={styles.titleStyle}>{item.title}</Text>
          <Text style={styles.priceStyle}>${item.price}</Text>
        </View>
      </View>
      <View style={styles.imageTextContainer}>
        <Button
          testID={`add-btn-product-${item.id}`}
          title={
            (isSelectedCounter && `+ ${String(isSelectedCounter)}`) || 'Add'
          }
          onPress={onAdd}
        />
        <Button
          testID={`remove-btn-product-${item.id}`}
          title="Remover"
          onPress={onRemove}
        />
        {onDetailes && (
          <Button
            testID={`details-btn-product-${item.id}`}
            title="Detalhes"
            onPress={onDetailes}
          />
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  itemStyle: {
    margin: 4,
    padding: 12,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  imageTextContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
    margin: 6,
  },
  titleStyle: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  priceStyle: {
    fontSize: 20,
    fontWeight: '300',
  },
  image: {height: 120, width: 120},
});
export default ProductCard;
