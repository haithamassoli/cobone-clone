/* eslint-disable */
import {StackScreenProps} from '@react-navigation/stack';
import ProductsData from '@Src/data/Products';
import {ProductsDataType} from '@Types/Data';
import {HomeStackParamList} from '@Types/Navigation';
import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import {View, Text, Pressable} from 'react-native';

type Props = StackScreenProps<HomeStackParamList, 'Product'>;

const ProductScreen = ({navigation, route}: Props) => {
  const [product, setProduct] = useState({} as ProductsDataType);
  useEffect(() => {
    const {productId} = route.params;
    const product = ProductsData.find(item => item.id === productId);
    if (product) setProduct(product);
  }, [route.params]);

  // go back to previous screen
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View>
      <Pressable onPress={goBack}>
        <Text>Back</Text>
      </Pressable>
      <Text>Product Screen - {product.id}</Text>
    </View>
  );
};

export default ProductScreen;
