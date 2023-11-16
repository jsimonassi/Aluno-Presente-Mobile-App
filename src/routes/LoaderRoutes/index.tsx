import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SplashLoader} from '../../screens';
import {LoaderRoutesParamList} from '../../types/app/route';

const {Navigator, Screen} = createStackNavigator<LoaderRoutesParamList>();

export const LoaderRoutes = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
        animationEnabled: true,
      }}>
      <Screen name="SplashLoader" component={SplashLoader} />
    </Navigator>
  );
};
