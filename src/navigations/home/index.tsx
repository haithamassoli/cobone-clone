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
import WellnessScreen from '@Screens/drawer/Wellness';
import Colors from '@GlobalStyle/Colors';
import {Image, Text, View} from 'react-native';
import ProductNavigation from '../product';

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
        header() {
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
                    source={require('../../assets/Flag_of_Saudi_Arabia.svg.webp')}
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
                    onPress={() => navigation.openDrawer()}
                  />
                  <Image
                    source={require('../../assets/cobone-logo.png')}
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
                  <Feather
                    name="shopping-cart"
                    size={24}
                    color={Colors.light}
                    onPress={() => navigation.navigate('Cart')}
                  />
                </View>
              </View>
            </>
          );
        },
        // headerLeft: () => (
        //   <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
        //     <Feather
        //       name="menu"
        //       style={{marginHorizontal: 12}}
        //       size={24}
        //       color={Colors.light}
        //       onPress={() => {
        //         navigation.openDrawer();
        //       }}
        //     />
        //     <Image
        //       source={require('../../assets/cobone-logo.png')}
        //       style={{
        //         width: 120,
        //         height: 90,
        //         resizeMode: 'contain',
        //       }}
        //     />
        //   </View>
        // ),
        // headerRight: () => (
        //   <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
        //     <Feather name="heart" size={24} color={Colors.light} />
        //     <Feather
        //       name="shopping-cart"
        //       style={{marginHorizontal: 12}}
        //       size={24}
        //       color={Colors.light}
        //     />
        //   </View>
        // ),
      })}>
      <Drawer.Screen
        name="ProductNavigation"
        options={{title: 'جديدنا'}}
        component={ProductNavigation}
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
