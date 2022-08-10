/* eslint-disable */

import React from 'react';
import {View, Text} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {useSelector} from 'react-redux';
import Colors from '@GlobalStyle/Colors';
import {useNavigation} from '@react-navigation/native';

type Props = {
  color?: string;
};

const CartIcon = ({color}: Props) => {
  // @ts-ignore
  const {cart} = useSelector(state => state.cart);
  const navigation = useNavigation();
  return (
    <View>
      {cart.length > 0 && (
        <View
          style={{
            position: 'absolute',
            top: -8,
            right: -6,
            width: 20,
            height: 20,
            zIndex: 10,
            borderRadius: 10,
            backgroundColor: Colors.gray,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: Colors.light,
              fontSize: 12,
              fontWeight: 'bold',
            }}>
            {cart.length}
          </Text>
        </View>
      )}
      <Feather
        name="shopping-cart"
        size={24}
        color={color ? color : Colors.light}
        // @ts-ignore
        onPress={() => navigation.navigate('Cart')}
      />
    </View>
  );
};

export default CartIcon;
