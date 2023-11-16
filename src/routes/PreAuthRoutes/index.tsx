import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Login, LoginWebView} from '../../screens';
import {PreAuthRoutesParamList} from '../../types/app/route';

const {Navigator, Screen} = createStackNavigator<PreAuthRoutesParamList>();

export const PreAuthRoutes = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
        animationEnabled: true,
      }}>
      <Screen name="Login" component={Login} />
      <Screen name="LoginWebView" component={LoginWebView} />
    </Navigator>
  );
};
