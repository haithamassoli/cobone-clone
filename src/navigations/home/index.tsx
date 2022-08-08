/* eslint-disable */
import React from 'react';
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

const Drawer = createDrawerNavigator();

export default function HomeDrawer() {
  return (
    <Drawer.Navigator>
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
