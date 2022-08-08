/* eslint-disable */
import {NavigatorScreenParams} from '@react-navigation/native';

export type BottomTabParamList = {
  HomeDrawer: NavigatorScreenParams<HomeDrawerParamList>;
  Notifications: undefined;
  Search: undefined;
  Settings: undefined;
  Profile: undefined;
};

export type SubjectsStackParamList = {
  Plan: undefined;
  Subject: {subjectId: number};
  SubjectWebView: {url: string};
  SubjectFullPost: {post?: string};
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
