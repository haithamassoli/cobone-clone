/* eslint-disable */

import React from 'react';
import Colors from '@GlobalStyle/Colors';
import Feather from 'react-native-vector-icons/Feather';
import {View, Pressable, Text} from 'react-native';
import {decrementQuantity, incrementQuantity} from '@Redux/cartSlice';
import {useDispatch} from 'react-redux';

type InProduct = Props & {
  id?: never;
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
};

type InCart = Props & {
  id: number;
  setQuantity?: never;
};

type Props = {
  quantity: number;
};

const ProductAmount = ({id, quantity, setQuantity}: InProduct | InCart) => {
  const dispatch = useDispatch();
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <Pressable
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: 30,
          height: 30,
          borderRadius: 15,
          borderWidth: 1,
          borderColor: Colors.primary400,
          backgroundColor: Colors.lightGray,
        }}
        onPress={() => {
          if (id) {
            dispatch(decrementQuantity(id));
          } else {
            // @ts-ignore
            setQuantity(prev => (prev === 1 ? 1 : prev - 1));
          }
        }}>
        <Feather name="minus" size={18} color={Colors.primary400} />
      </Pressable>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          padding: 6,
        }}>
        <Text style={{color: 'black', fontSize: 22, textAlign: 'center'}}>
          {quantity}
        </Text>
      </View>
      <Pressable
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: 30,
          height: 30,
          borderWidth: 1,
          borderRadius: 15,
          borderColor: Colors.primary400,
          backgroundColor: Colors.lightGray,
        }}
        onPress={() => {
          if (id) {
            dispatch(incrementQuantity(id));
          } else {
            // @ts-ignore
            setQuantity(prev => prev + 1);
          }
        }}>
        <Feather name="plus" size={16} color={Colors.primary400} />
      </Pressable>
    </View>
  );
};

export default ProductAmount;
