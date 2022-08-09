/* eslint-disable */
import React from 'react';
import Colors from '@GlobalStyle/Colors';
import {createStackNavigator} from '@react-navigation/stack';

import {View} from 'react-native';
import NewInScreen from '@Screens/drawer/NewIn';
import ProductScreen from '@Screens/product';

const Stack = createStackNavigator();

export default function ProductNavigation() {
  return (
    <Stack.Navigator
      screenOptions={() => ({
        headerShown: false,
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
      initialRouteName="NewIn">
      <Stack.Screen
        options={{headerTitle: 'جديدنا'}}
        name="NewIn"
        component={NewInScreen}
      />
      <Stack.Screen name="Product" component={ProductScreen} />
    </Stack.Navigator>
  );
}
