/* eslint-disable */

import Colors from '@GlobalStyle/Colors';
import React from 'react';
import {View, Text} from 'react-native';

type Props = {
  price: number;
  percentage: number;
  withPrice?: boolean;
};

const DiscountLable = ({price, percentage, withPrice}: Props) => {
  const discountPrice = price - (price * percentage) / 100;
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {withPrice && (
        <Text
          style={{
            fontWeight: 'bold',
          }}>
          {price} SAR
        </Text>
      )}
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
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{textDecorationLine: 'line-through'}}>
          {discountPrice.toFixed(2)}
        </Text>
      </View>
    </View>
  );
};

export default DiscountLable;
