/* eslint-disable */

import Colors from '@GlobalStyle/Colors';
import React from 'react';
import {View, Text} from 'react-native';

type Props = {
  price: number;
  percentage: number;
};

const DiscountLable = ({price, percentage}: Props) => {
  const discountPrice = price - (price * percentage) / 100;
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          backgroundColor: Colors.primary400,
          color: Colors.light,
          paddingHorizontal: 6,
          paddingVertical: 4,
          borderRadius: 12,
          marginEnd: 6,
        }}>
        {percentage}%
      </Text>
      <Text style={{textDecorationLine: 'line-through'}}>
        SAR {discountPrice.toFixed(2)}
      </Text>
    </View>
  );
};

export default DiscountLable;
