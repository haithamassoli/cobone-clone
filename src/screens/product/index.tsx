/* eslint-disable */
import ImagesCarousel from '@Components/ImagesCarousel';
import DiscountLable from '@Components/ui/DiscountLable';
import ProductAmount from '@Components/ui/ProductAmount';
import Colors from '@GlobalStyle/Colors';
import {StackScreenProps} from '@react-navigation/stack';
import ProductsData from '@Src/data/Products';
import {ProductsDataType} from '@Types/Data';
import {HomeStackParamList} from '@Types/Navigation';
import React, {useLayoutEffect} from 'react';
import {useState, useEffect} from 'react';
import {View, Text, Pressable, ScrollView} from 'react-native';

type Props = StackScreenProps<HomeStackParamList, 'Product'>;

const ProductScreen = ({navigation, route}: Props) => {
  const [product, setProduct] = useState({} as ProductsDataType);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const {productId} = route.params;
    const product = ProductsData.find(item => item.id === productId);
    if (product) setProduct(product);
  }, [route.params]);

  // go back to previous screen
  const goBack = () => {
    navigation.goBack();
  };

  useLayoutEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: 'none',
      },
    });
  }, []);

  useEffect(() => {
    return () => {
      navigation.getParent()?.setOptions({
        tabBarStyle: {
          display: 'flex',
        },
      });
    };
  }, []);
  return (
    <>
      <ScrollView
        style={{
          backgroundColor: Colors.light,
        }}>
        <Pressable onPress={goBack}>
          <Text>Back</Text>
        </Pressable>
        <Text>{product.title}</Text>
        <Text>{product.description}</Text>
        {product.images && (
          <ImagesCarousel images={product.images} height={300} />
        )}
        <Text
          style={{
            color: Colors.dark,
            fontSize: 16,
            marginVertical: 12,
            marginStart: 24,
            textAlign: 'left',
          }}>
          {product.title}
        </Text>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 24,
          }}>
          <View>
            <Text
              style={{
                fontSize: 24,
                fontWeight: 'bold',
                color: Colors.dark,
              }}>
              العدد
            </Text>
            <ProductAmount />
          </View>
          <View>
            <Text
              style={{
                fontSize: 24,
                fontWeight: 'bold',
                color: Colors.dark,
              }}>
              SAR {product.price}
            </Text>
            {product.discountPercentage && (
              <DiscountLable
                price={product.price}
                percentage={product.discountPercentage}
              />
            )}
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          position: 'absolute',
          bottom: -50,
          width: '100%',
          zIndex: 100,
          backgroundColor: Colors.light,
          padding: 24,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text>footer</Text>
      </View>
    </>
  );
};

export default ProductScreen;
