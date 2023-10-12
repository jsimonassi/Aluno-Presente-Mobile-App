import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Home} from '../../../screens';
import {CustomTabBar} from './CustomTabBar';
import {MainTabParamList} from '../../../types/app/route/PostAuthRoutes';

const {Navigator, Screen} = createBottomTabNavigator<MainTabParamList>();

export const MainTab = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={props => <CustomTabBar {...props} />}>
      <Screen name="Home" component={Home} />
    </Navigator>
  );
};
