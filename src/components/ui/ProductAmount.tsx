/* eslint-disable */

import React, {useState} from 'react';
import Colors from '@GlobalStyle/Colors';
import Feather from 'react-native-vector-icons/Feather';
import {View, Pressable, Text, TextInput} from 'react-native';

const ProductAmount = () => {
  const [number, onChangeNumber] = useState('1');
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
          if (+number !== 1) {
            onChangeNumber((+number - 1).toString());
          }
        }}>
        <Feather name="minus" size={18} color={Colors.primary400} />
      </Pressable>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TextInput
          keyboardType="number-pad"
          onChangeText={onChangeNumber}
          value={number}
          maxLength={2}
          style={{color: 'black', fontSize: 22, textAlign: 'center'}}
        />
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
          onChangeNumber((+number + 1).toString());
        }}>
        <Feather name="plus" size={16} color={Colors.primary400} />
      </Pressable>
    </View>
  );
};

export default ProductAmount;
