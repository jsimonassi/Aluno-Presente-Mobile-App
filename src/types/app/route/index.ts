import {NavigatorScreenParams} from '@react-navigation/native';

export type PostAuthRoutesParamList = {
  MainTab: NavigatorScreenParams<MainTabParamList>;
  ProfileStack: NavigatorScreenParams<ProfileStackParamList>;
};

export type MainTabParamList = {
  Home: undefined;
  Notifications: undefined;
  NewClass: undefined;
  Profile: undefined;
};

export type ProfileStackParamList = {
  Profile: undefined;
};

export type PreAuthRoutesParamList = {
  Login: undefined;
  LoginWebView: undefined;
};

export type LoaderRoutesParamList = {
  SplashLoader: undefined;
};
