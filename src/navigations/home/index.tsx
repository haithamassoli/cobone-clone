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
        drawerItemStyle: {
          backgroundColor: Colors.lightGray,
          paddingVertical: 2,
          paddingHorizontal: 6,
          marginVertical: 6,
          marginHorizontal: 12,
          borderRadius: 10,
        },
        drawerLabelStyle: {
          fontSize: 16,
          fontWeight: 'bold',
        },
        drawerActiveTintColor: Colors.primary600,
        drawerIcon: ({color, size}) => (
          <Feather
            name="arrow-left"
            style={{
              position: 'absolute',
              right: 0,
            }}
            size={size}
            color={color}
          />
        ),
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
      <Drawer.Screen
        name="NewIn"
        options={{title: 'جديدنا'}}
        component={NewInScreen}
      />
      <Drawer.Screen
        name="BestSellers"
        options={{title: 'الأكثر مبيعا'}}
        component={BestSellersScreen}
      />
      <Drawer.Screen
        name="Food"
        options={{title: 'مطاعم'}}
        component={FoodScreen}
      />
      <Drawer.Screen
        name="Activities"
        options={{title: 'أنشطة'}}
        component={ActivitiesScreen}
      />
      <Drawer.Screen
        name="Auto"
        options={{title: 'سيارات'}}
        component={AutoScreen}
      />
      <Drawer.Screen
        name="Beauty"
        options={{
          title: 'جمال',
        }}
        component={BeautyScreen}
      />
      <Drawer.Screen
        name="Wellness"
        options={{title: 'صحة'}}
        component={WellnessScreen}
      />
      <Drawer.Screen
        name="Jewellery"
        options={{title: 'مجوهرات'}}
        component={JewelleryScreen}
      />
      <Drawer.Screen
        name="Getaways"
        options={{title: 'رحلات'}}
        component={GetawaysScreen}
      />
      <Drawer.Screen
        name="AllDeals"
        options={{title: 'جميع الصفقات'}}
        component={AllDealsScreen}
      />
    </Drawer.Navigator>
  );
}
