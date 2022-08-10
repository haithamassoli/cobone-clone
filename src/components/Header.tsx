/* eslint-disable */

import React from 'react';
import {View, Text, Image} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Colors from '@GlobalStyle/Colors';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import CartIcon from './CartIcon';

const Header = () => {
  const navigation = useNavigation();
  // @ts-ignore
  const {cart} = useSelector(state => state.cart);
  return (
    <>
      <View
        style={{
          position: 'absolute',
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          height: '100%',
          left: 0,
          right: 0,
          bottom: '-100%',
          backgroundColor: Colors.light,
          zIndex: 11,
        }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            source={require('../assets/Flag_of_Saudi_Arabia.svg.webp')}
            style={{
              width: 30,
              height: 30,
              marginHorizontal: 12,
              resizeMode: 'contain',
            }}
          />
          <Text
            style={{
              fontSize: 14,
              fontWeight: 'bold',
            }}>
            بحث في الرياض
          </Text>
        </View>
        <Feather
          name="search"
          size={24}
          color={Colors.primary400}
          style={{
            marginHorizontal: 12,
          }}
          // @ts-ignore
          onPress={() => navigation.navigate('Search')}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 12,
          backgroundColor: Colors.primary400,
          height: 60,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Feather
            name="menu"
            size={24}
            color={Colors.light}
            // @ts-ignore
            onPress={() => navigation.openDrawer()}
          />
          <Image
            source={require('../assets/cobone-logo.png')}
            style={{
              width: 120,
              height: 90,
              resizeMode: 'contain',
              marginHorizontal: 12,
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Feather
            name="heart"
            size={24}
            style={{marginHorizontal: 12}}
            color={Colors.light}
          />
          <CartIcon />
        </View>
      </View>
    </>
  );
};

export default Header;
