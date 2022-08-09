/* eslint-disable */
import {NavigatorScreenParams} from '@react-navigation/native';

export type BottomTabParamList = {
  HomeStack: NavigatorScreenParams<HomeStackParamList>;
  Notifications: undefined;
  Search: undefined;
  Settings: undefined;
  Profile: undefined;
};

export type HomeDrawerParamList = {
  NewIn: undefined;
  BestSellers: undefined;
  Food: undefined;
  Auto: undefined;
  Beauty: undefined;
  Wellness: undefined;
  Jewellery: undefined;
  Getaways: undefined;
  AllDeals: undefined;
};

export type HomeStackParamList = {
  HomeDrawer: NavigatorScreenParams<HomeDrawerParamList>;
  Product: {productId: number};
};
