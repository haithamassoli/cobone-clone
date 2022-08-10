/* eslint-disable */

import React from 'react';
import {View, Pressable, StyleProp, PressableProps} from 'react-native';
import Colors from '@GlobalStyle/Colors';

type Props = {
  children: React.ReactNode;
  onPress?: () => void;
  color?: string;
  style?: StyleProp<PressableProps>;
};

const Button = ({onPress, color, children, style}: Props) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        {
          width: '100%',
          backgroundColor: color ? color : Colors.primary400,
          paddingVertical: 12,
          paddingHorizontal: 24,
          borderRadius: 12,
        },
        style,
      ]}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {children}
      </View>
    </Pressable>
  );
};

export default Button;
