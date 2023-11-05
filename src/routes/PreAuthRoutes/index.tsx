import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Login} from '../../screens';

const {Navigator, Screen} = createStackNavigator();

export const PreAuthRoutes = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
        animationEnabled: true,
      }}>
      <Screen name="Login" component={Login} />
    </Navigator>
  );
};
