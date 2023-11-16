import {NavigatorScreenParams} from '@react-navigation/native';

export type PostAuthRoutesParamList = {
  MainTab: NavigatorScreenParams<MainTabParamList>;
  HomeStack: NavigatorScreenParams<HomeStackParamList>;
};

export type MainTabParamList = {
  Home: undefined;
  Notifications: undefined;
  NewClass: undefined;
  Profile: undefined;
};

export type HomeStackParamList = {};

export type PreAuthRoutesParamList = {
  Login: undefined;
  LoginWebView: undefined;
};

export type LoaderRoutesParamList = {
  SplashLoader: undefined;
};
