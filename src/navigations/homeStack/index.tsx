/* eslint-disable */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Feather from 'react-native-vector-icons/Feather';
import ProductScreen from '@Screens/product';
import HomeDrawer from '../homeDrawer';
import SearchScreen from '@Screens/bottomTabs/Search';
import CartScreen from '@Screens/cart';
import Colors from '@GlobalStyle/Colors';
import {View} from 'react-native';
import {Text} from 'react-native';
import {Image} from 'react-native';
import {DrawerActions} from '@react-navigation/native';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={({navigation}) => ({
        headerShown: false,
        // header() {
        //   return (
        //     <>
        //       <View
        //         style={{
        //           position: 'absolute',
        //           flex: 1,
        //           flexDirection: 'row',
        //           justifyContent: 'space-between',
        //           alignItems: 'center',
        //           width: '100%',
        //           height: '100%',
        //           left: 0,
        //           right: 0,
        //           bottom: '-100%',
        //           backgroundColor: Colors.light,
        //           zIndex: 11,
        //         }}>
        //         <View
        //           style={{
        //             flex: 1,
        //             flexDirection: 'row',
        //             alignItems: 'center',
        //           }}>
        //           <Image
        //             source={require('../../assets/Flag_of_Saudi_Arabia.svg.webp')}
        //             style={{
        //               width: 30,
        //               height: 30,
        //               marginHorizontal: 12,
        //               resizeMode: 'contain',
        //             }}
        //           />
        //           <Text
        //             style={{
        //               fontSize: 14,
        //               fontWeight: 'bold',
        //             }}>
        //             بحث في الرياض
        //           </Text>
        //         </View>
        //         <Feather
        //           name="search"
        //           size={24}
        //           color={Colors.primary400}
        //           style={{
        //             marginHorizontal: 12,
        //           }}
        //         />
        //       </View>
        //       <View
        //         style={{
        //           flexDirection: 'row',
        //           justifyContent: 'space-between',
        //           alignItems: 'center',
        //           paddingHorizontal: 12,
        //           backgroundColor: Colors.primary400,
        //           height: 60,
        //         }}>
        //         <View
        //           style={{
        //             flexDirection: 'row',
        //             alignItems: 'center',
        //           }}>
        //           <Feather
        //             name="menu"
        //             size={24}
        //             color={Colors.light}
        //             onPress={() =>
        //               navigation.dispatch(DrawerActions.openDrawer())
        //             }
        //           />
        //           <Image
        //             source={require('../../assets/cobone-logo.png')}
        //             style={{
        //               width: 120,
        //               height: 90,
        //               resizeMode: 'contain',
        //               marginHorizontal: 12,
        //             }}
        //           />
        //         </View>
        //         <View
        //           style={{
        //             flexDirection: 'row',
        //             alignItems: 'center',
        //           }}>
        //           <Feather
        //             name="heart"
        //             size={24}
        //             style={{marginHorizontal: 12}}
        //             color={Colors.light}
        //           />
        //           <Feather
        //             name="shopping-cart"
        //             size={24}
        //             color={Colors.light}
        //             onPress={() => navigation.navigate('Cart')}
        //           />
        //         </View>
        //       </View>
        //     </>
        //   );
        // },
      })}
      // screenOptions={({navigation}) => ({
      //   headerRight: () => {
      //     return (
      //       <View
      //         style={{
      //           flex: 1,
      //           flexDirection: 'row',
      //           alignItems: 'center',
      //           paddingEnd: 10,
      //         }}>
      //         <Feather
      //           onPress={() => navigation.navigate('Search')}
      //           name="search"
      //           size={24}
      //           color={iconColor}
      //           style={{paddingStart: 10}}
      //         />
      //         {theme === 'light' ? (
      //           <Feather
      //             onPress={() => toggleTheme()}
      //             name="moon"
      //             size={24}
      //             color={iconColor}
      //           />
      //         ) : (
      //           <Feather
      //             onPress={() => toggleTheme()}
      //             name="sun"
      //             size={24}
      //             color={iconColor}
      //           />
      //         )}
      //       </View>
      //     );
      //   },
      // })}
      initialRouteName="HomeDrawer">
      <Stack.Screen
        options={{headerTitle: 'جديدنا'}}
        name="HomeDrawer"
        component={HomeDrawer}
      />
      <Stack.Screen name="Product" component={ProductScreen} />
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="Cart" component={CartScreen} />
    </Stack.Navigator>
  );
}
