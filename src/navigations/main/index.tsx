/* eslint-disable */
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import type {BottomTabParamList} from '@Types/Navigation';
import HomeDrawer from '../home';

const BottomTabs = createBottomTabNavigator<BottomTabParamList>();

export default function Route() {
  return (
    <NavigationContainer>
      <BottomTabs.Navigator>
        <BottomTabs.Screen
          name="HomeDrawer"
          component={HomeDrawer}
          options={{
            tabBarIcon: ({color}) => (
              <Feather name="home" size={24} color={color} />
            ),
            headerShown: false,
            tabBarLabel: 'الرئيسية',
          }}
        />
        <BottomTabs.Screen
          name="Notifications"
          component={HomeDrawer}
          options={{
            tabBarIcon: ({color}) => (
              <Feather name="home" size={24} color={color} />
            ),
            headerShown: false,
            tabBarLabel: 'الرئيسية',
          }}
        />
        <BottomTabs.Screen
          name="Search"
          component={HomeDrawer}
          options={{
            tabBarIcon: ({color}) => (
              <Feather name="home" size={24} color={color} />
            ),
            headerShown: false,
            tabBarLabel: 'الرئيسية',
          }}
        />
        <BottomTabs.Screen
          name="Settings"
          component={HomeDrawer}
          options={{
            tabBarIcon: ({color}) => (
              <Feather name="home" size={24} color={color} />
            ),
            headerShown: false,
            tabBarLabel: 'الرئيسية',
          }}
        />
        <BottomTabs.Screen
          name="Profile"
          component={HomeDrawer}
          options={{
            tabBarIcon: ({color}) => (
              <Feather name="home" size={24} color={color} />
            ),
            headerShown: false,
            tabBarLabel: 'الرئيسية',
          }}
        />
      </BottomTabs.Navigator>
    </NavigationContainer>
  );
}
