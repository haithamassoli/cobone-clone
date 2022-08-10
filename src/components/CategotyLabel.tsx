/* eslint-disable */

import {View, Text} from 'react-native';
import React from 'react';
import Colors from '@GlobalStyle/Colors';

type Props = {
  category: string;
};

const CategotyLabel = ({category}: Props) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <Text
        style={{
          fontSize: 18,
          fontWeight: 'bold',
          marginStart: 12,
          marginVertical: 12,
          textAlign: 'left',
        }}>
        {category}
      </Text>
      <Text
        style={{
          fontSize: 12,
          backgroundColor: '#f6f6f6',
          paddingHorizontal: 4,
          paddingVertical: 2,
          borderRadius: 6,
          marginEnd: 12,
          color: Colors.dark,
        }}>
        شاهد الكل
      </Text>
    </View>
  );
};

export default CategotyLabel;
