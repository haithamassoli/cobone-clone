/* eslint-disable */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import type {BottomTabParamList} from '@Types/Navigation';
import HomeDrawer from '../home';
import NotificationsScreen from '@Screens/bottomTabs/Notifications';
// import SearchScreen from '@Screens/bottomTabs/Search';
import SettingsScreen from '@Screens/bottomTabs/Settings';
import ProfileScreen from '@Screens/bottomTabs/Profile';
import Colors from '@GlobalStyle/Colors';

const BottomTabs = createMaterialBottomTabNavigator<BottomTabParamList>();

export default function Route() {
  return (
    <NavigationContainer>
      <BottomTabs.Navigator
        initialRouteName="HomeDrawer"
        activeColor={Colors.light}
        inactiveColor={Colors.light}
        barStyle={{backgroundColor: Colors.primary400}}
        screenOptions={() => ({
          tabBarLabel: '',
        })}>
        <BottomTabs.Screen
          name="HomeDrawer"
          component={HomeDrawer}
          options={{
            tabBarIcon: ({color}) => (
              <Feather name="home" size={24} color={color} />
            ),
          }}
        />
        <BottomTabs.Screen
          name="Notifications"
          component={NotificationsScreen}
          options={{
            tabBarIcon: ({color}) => (
              <Feather name="bell" size={24} color={color} />
            ),
          }}
        />
        {/* <BottomTabs.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarIcon: () => <View style={{display: 'none'}} />,
            tabBarLabel: '',
            
            // tabBarButton: () => {
            //   return null;
            // },
          }}
        /> */}
        <BottomTabs.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarIcon: ({color}) => (
              <Feather name="settings" size={24} color={color} />
            ),
          }}
        />
        <BottomTabs.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({color}) => (
              <Feather name="user" size={24} color={color} />
            ),
          }}
        />
      </BottomTabs.Navigator>
    </NavigationContainer>
  );
}
