/* eslint-disable */
import React, {useLayoutEffect, useState, useEffect} from 'react';
import {View, Text, Pressable, ScrollView} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import ImagesCarousel from '@Components/ImagesCarousel';
import DiscountLable from '@Components/ui/DiscountLable';
import ProductAmount from '@Components/ui/ProductAmount';
import Colors from '@GlobalStyle/Colors';
import {StackScreenProps} from '@react-navigation/stack';
import ProductsData from '@Src/data/Products';
import {ProductsDataType} from '@Types/Data';
import {HomeStackParamList} from '@Types/Navigation';
import {addToCart} from '@Redux/cartSlice';
import {useDispatch} from 'react-redux';

type Props = StackScreenProps<HomeStackParamList, 'Product'>;

const ProductScreen = ({navigation, route}: Props) => {
  const [product, setProduct] = useState({} as ProductsDataType);
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();
  useEffect(() => {
    const {productId} = route.params;
    const product = ProductsData.find(item => item.id === productId);
    if (product) setProduct(product);
  }, [route.params]);

  const goBack = () => {
    navigation.goBack();
  };
  const addToCartBtn = () => {
    dispatch(addToCart({id: product.id, quantity}));
    navigation.navigate('Cart');
  };

  useLayoutEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: 'none',
      },
    });
    return () => {
      navigation.getParent()?.setOptions({
        tabBarStyle: {
          display: 'flex',
          backgroundColor: Colors.primary400,
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
            {product.id && (
              <ProductAmount quantity={quantity} setQuantity={setQuantity} />
            )}
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
      <Pressable
        onPress={addToCartBtn}
        style={{
          width: '100%',
          backgroundColor: Colors.primary400,
          paddingVertical: 12,
          paddingHorizontal: 24,
          borderRadius: 12,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Feather name="shopping-cart" size={24} color={Colors.light} />
          <Text style={{color: Colors.light, fontSize: 18, fontWeight: 'bold'}}>
            أضف إلى السلة
          </Text>
        </View>
      </Pressable>
    </>
  );
};

export default ProductScreen;
