/* eslint-disable */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import type {BottomTabParamList} from '@Types/Navigation';
import NotificationsScreen from '@Screens/bottomTabs/Notifications';
import SettingsScreen from '@Screens/bottomTabs/Settings';
import ProfileScreen from '@Screens/bottomTabs/Profile';
import Colors from '@GlobalStyle/Colors';
import HomeStack from '../homeStack';
import SearchScreen from '@Screens/bottomTabs/Search';

const BottomTabs = createBottomTabNavigator<BottomTabParamList>();

export default function Route() {
  return (
    <NavigationContainer>
      <BottomTabs.Navigator
        initialRouteName="HomeStack"
        screenOptions={() => ({
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            backgroundColor: Colors.primary400,
          },
          tabBarActiveTintColor: Colors.light,
          tabBarInactiveTintColor: Colors.light,
        })}>
        <BottomTabs.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            tabBarIcon: ({focused, color}) => (
              <Feather
                style={focused ? {paddingBottom: 8} : {}}
                name="home"
                size={24}
                color={color}
              />
            ),
          }}
        />
        <BottomTabs.Screen
          name="Notifications"
          component={NotificationsScreen}
          options={{
            tabBarIcon: ({focused, color}) => (
              <Feather
                style={focused ? {paddingBottom: 8} : {}}
                name="bell"
                size={24}
                color={color}
              />
            ),
          }}
        />
        <BottomTabs.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarButton: () => {
              return null;
            },
          }}
        />
        <BottomTabs.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarIcon: ({focused, color}) => (
              <Feather
                style={focused ? {paddingBottom: 8} : {}}
                name="settings"
                size={24}
                color={color}
              />
            ),
          }}
        />
        <BottomTabs.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({focused, color}) => (
              <Feather
                style={focused ? {paddingBottom: 8} : {}}
                name="user"
                size={24}
                color={color}
              />
            ),
          }}
        />
      </BottomTabs.Navigator>
    </NavigationContainer>
  );
}
