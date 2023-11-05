import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Home, NewClass, Notifications, Profile} from '../../../screens';
import {CustomTabBar} from './CustomTabBar';
import {MainTabParamList} from '../../../types/app/route';

const {Navigator, Screen} = createBottomTabNavigator<MainTabParamList>();

export const MainTab = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={props => <CustomTabBar {...props} />}>
      <Screen name="Home" component={Home} />
      <Screen name="Notifications" component={Notifications} />
      <Screen name="NewClass" component={NewClass} />
      <Screen name="Profile" component={Profile} />
    </Navigator>
  );
};
