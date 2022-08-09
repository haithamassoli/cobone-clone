/* eslint-disable */

import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Feather from 'react-native-vector-icons/Feather';
import ProductsData from '@Src/data/Products';
import {Cart} from '@Types/Redux';
import {ProductsDataType} from '@Types/Data';
import Colors from '@GlobalStyle/Colors';
import ProductAmount from '@Components/ui/ProductAmount';
import {removeItem} from '@Redux/cartSlice';

type CartItem = ProductsDataType & {
  quantity: number;
};

const CartScreen = () => {
  const dispatch = useDispatch();
  // @ts-ignore
  const {cart} = useSelector(state => state.cart);
  const cartItems = cart.map((item: Cart) => {
    const product = ProductsData.find(product => product.id === item.id);
    return {
      ...product,
      quantity: item.quantity,
    };
  });
  console.log(cartItems);

  return (
    <>
      <View>
        <Text>Cart</Text>
      </View>
      <ScrollView>
        {cartItems.length > 0 &&
          cartItems.map((item: CartItem) => (
            <View
              key={item.id}
              style={{
                borderBottomColor: Colors.gray,
                borderBottomWidth: 1,
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}>
              <Image
                source={{uri: item.thumbnail}}
                style={{
                  width: 100,
                  height: 100,
                }}
              />
              <View
                style={{
                  flex: 1,
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 10,
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    color: Colors.dark,
                  }}>
                  {item.title}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <Feather
                    name="trash-2"
                    size={18}
                    color={Colors.gray}
                    style={{marginRight: 12}}
                    onPress={() => {
                      dispatch(removeItem(item.id));
                    }}
                  />
                  <View style={{marginHorizontal: 12}}>
                    <ProductAmount />
                  </View>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'bold',
                      color: Colors.dark,
                    }}>
                    {item.price} SAR
                  </Text>
                </View>
              </View>
            </View>
          ))}
      </ScrollView>
      {cartItems.length === 0 && (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            height: '100%',
          }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: Colors.dark,
              textAlign: 'center',
            }}>
            السلة فارغة
          </Text>
        </View>
      )}
    </>
  );
};

export default CartScreen;
