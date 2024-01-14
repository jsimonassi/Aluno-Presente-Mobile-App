import {NavigatorScreenParams} from '@react-navigation/native';
import {StudyClass} from '../class';

export type PostAuthRoutesParamList = {
  MainTab: NavigatorScreenParams<MainTabParamList>;
  ProfileStack: NavigatorScreenParams<ProfileStackParamList>;
  StudyClassStack: NavigatorScreenParams<StudyClassStackParamList>;
};

export type MainTabParamList = {
  Home: undefined;
  Notifications: undefined;
  NewClass: undefined;
  Profile: undefined;
};

export type StudyClassStackParamList = {
  AboutClass: {
    selectedClass: StudyClass;
  };
};

export type ProfileStackParamList = {
  Profile: undefined;
};

export type PermissionsStackParamList = {
  CameraPermission: undefined;
  LocationPermission: undefined;
};

export type PreAuthRoutesParamList = {
  Login: undefined;
  LoginWebView: undefined;
};

export type LoaderRoutesParamList = {
  SplashLoader: undefined;
};
