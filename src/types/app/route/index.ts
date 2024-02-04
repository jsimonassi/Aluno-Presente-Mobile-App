import {NavigatorScreenParams} from '@react-navigation/native';
import {StudyClass} from '../class';

export type PostAuthRoutesParamList = {
  MainTab: NavigatorScreenParams<MainTabParamList>;
  ProfileStack: NavigatorScreenParams<ProfileStackParamList>;
  StudyClassStack: NavigatorScreenParams<RegisterFrequencyStackParamList>;
  PermissionsStack: NavigatorScreenParams<PermissionsStackParamList>;
};

export type MainTabParamList = {
  Home: undefined;
  Notifications: undefined;
  NewClass: undefined;
  Profile: undefined;
};

export type RegisterFrequencyStackParamList = {
  AboutClass: {
    selectedClass: StudyClass;
  };
  RegisterFrequencyFlux: {
    selectedClass: StudyClass;
  };
};

export type ProfileStackParamList = {
  Profile: undefined;
};

export type PermissionsStackParamList = {
  CameraPermission: {
    standalone?: boolean;
  };
  LocationPermission: {
    standalone?: boolean;
  };
};

export type PreAuthRoutesParamList = {
  Login: undefined;
  LoginWebView: undefined;
};

export type LoaderRoutesParamList = {
  SplashLoader: undefined;
};
