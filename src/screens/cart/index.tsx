/* eslint-disable */

import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  Pressable,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Feather from 'react-native-vector-icons/Feather';
import ProductsData from '@Src/data/Products';
import {Cart} from '@Types/Redux';
import {ProductsDataType} from '@Types/Data';
import Colors from '@GlobalStyle/Colors';
import ProductAmount from '@Components/ui/ProductAmount';
import {removeItem} from '@Redux/cartSlice';
import {StackScreenProps} from '@react-navigation/stack';
import {HomeStackParamList} from '@Types/Navigation';
import Button from '@Components/ui/Button';

type CartItem = ProductsDataType & {
  quantity: number;
};

type Props = StackScreenProps<HomeStackParamList, 'Cart'>;

const CartScreen = ({navigation}: Props) => {
  // @ts-ignore
  const {cart} = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const [cobone, setCobone] = useState('');

  const cartItems = cart.map((item: Cart) => {
    const product = ProductsData.find(product => product.id === item.id);
    return {
      ...product,
      quantity: item.quantity,
    };
  });

  return (
    <>
      <ScrollView style={{flex: 1, backgroundColor: Colors.light}}>
        {cartItems.length > 0 &&
          cartItems.map((item: CartItem, index: number) => (
            <View
              key={index}
              style={{
                borderBottomColor: Colors.gray,
                borderBottomWidth: 1,
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}>
              <Pressable
                onPress={() =>
                  navigation.navigate('Product', {productId: item.id})
                }>
                <Image
                  source={{uri: item.thumbnail}}
                  style={{
                    width: 100,
                    height: 100,
                  }}
                />
              </Pressable>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 10,
                }}>
                <Text
                  onPress={() =>
                    navigation.navigate('Product', {productId: item.id})
                  }
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
                    <ProductAmount quantity={item.quantity} id={item.id} />
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
      <View
        style={{
          borderTopWidth: 1,
          borderTopColor: Colors.dark,
          paddingHorizontal: 12,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: Colors.light,
          height: 40,
        }}>
        <TextInput
          placeholder="رمز الخصم"
          style={{
            backgroundColor: Colors.light,
            borderRadius: 12,
            width: '80%',
          }}
          value={cobone}
          onChangeText={setCobone}
        />
        <Pressable>
          <Text
            style={{
              fontSize: 12,
              borderRadius: 12,
              paddingTop: 6,
              paddingHorizontal: 12,
              color: Colors.light,
              backgroundColor:
                cobone.length > 0 ? Colors.primary700 : Colors.gray,
            }}>
            تطبيق
          </Text>
        </Pressable>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 12,
          backgroundColor: Colors.lightGray,
        }}>
        <Text
          style={{
            fontSize: 12,
            color: Colors.dark,
          }}>
          السعر الكلي
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: Colors.dark,
          }}>
          {cartItems.reduce(
            // @ts-ignore
            (acc, item) => acc + item.price * item.quantity,
            0,
          )}
          SAR
        </Text>
      </View>
      <Text
        style={{
          fontSize: 14,
          color: Colors.dark,
          textAlign: 'center',
          backgroundColor: Colors.lightGray,
        }}>
        تشمل أسعارنا ضريبة القيمة المضافة
      </Text>
      <Button
        color={Colors.secondary}
        // @ts-ignore
        style={{width: '70%', alignSelf: 'center'}}>
        <Text
          style={{
            fontSize: 16,
            color: Colors.light,
            textAlign: 'center',
          }}>
          التالي
        </Text>
      </Button>
    </>
  );
};

export default CartScreen;
