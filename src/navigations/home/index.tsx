/* eslint-disable */
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ActivitiesScreen from '@Screens/drawer/Activities';
import AllDealsScreen from '@Screens/drawer/AllDeals';
import AutoScreen from '@Screens/drawer/Auto';
import BeautyScreen from '@Screens/drawer/Beauty';
import BestSellersScreen from '@Screens/drawer/BestSellers';
import FoodScreen from '@Screens/drawer/Food';
import GetawaysScreen from '@Screens/drawer/Getaways';
import JewelleryScreen from '@Screens/drawer/Jewellery';
import NewInScreen from '@Screens/drawer/NewIn';
import WellnessScreen from '@Screens/drawer/Wellness';
import Colors from '@GlobalStyle/Colors';
import {Image, View} from 'react-native';

const Drawer = createDrawerNavigator();

export default function HomeDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={({navigation}) => ({
        drawerStyle: {
          backgroundColor: Colors.primary400,
        },
        headerStyle: {
          backgroundColor: Colors.primary400,
        },
        headerTitle: '',
        headerLeft: () => (
          <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
            <Feather
              name="menu"
              style={{marginHorizontal: 12}}
              size={24}
              color={Colors.light}
              onPress={() => {
                navigation.openDrawer();
              }}
            />
            <Image
              source={require('../../assets/cobone-logo.png')}
              style={{
                width: 120,
                height: 90,
                resizeMode: 'contain',
              }}
            />
          </View>
        ),
        headerRight: () => (
          <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
            <Feather name="heart" size={24} color={Colors.light} />
            <Feather
              name="shopping-cart"
              style={{marginHorizontal: 12}}
              size={24}
              color={Colors.light}
            />
          </View>
        ),
      })}>
      <Drawer.Screen name="NewIn" component={NewInScreen} />
      <Drawer.Screen name="BestSellers" component={BestSellersScreen} />
      <Drawer.Screen name="Food" component={FoodScreen} />
      <Drawer.Screen name="Activities" component={ActivitiesScreen} />
      <Drawer.Screen name="Auto" component={AutoScreen} />
      <Drawer.Screen name="Beauty" component={BeautyScreen} />
      <Drawer.Screen name="Wellness" component={WellnessScreen} />
      <Drawer.Screen name="Jewellery" component={JewelleryScreen} />
      <Drawer.Screen name="Getaways" component={GetawaysScreen} />
      <Drawer.Screen name="AllDeals" component={AllDealsScreen} />
    </Drawer.Navigator>
  );
}
