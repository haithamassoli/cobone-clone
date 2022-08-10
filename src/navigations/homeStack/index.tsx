/* eslint-disable */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProductScreen from '@Screens/product';
import HomeDrawer from '../homeDrawer';
import SearchScreen from '@Screens/bottomTabs/Search';
import CartScreen from '@Screens/cart';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={() => ({
        headerShown: false,
      })}
      initialRouteName="HomeDrawer">
      <Stack.Screen name="HomeDrawer" component={HomeDrawer} />
      <Stack.Screen name="Product" component={ProductScreen} />
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: 'عربة التسوق',
          headerTitleStyle: {
            fontSize: 18,
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center',
        }}
        name="Cart"
        component={CartScreen}
      />
    </Stack.Navigator>
  );
}
