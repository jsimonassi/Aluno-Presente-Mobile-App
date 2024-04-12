import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {GenericWebview, Logout, Profile} from '../../../screens';
import {ProfileStackParamList} from '../../../types/app/route';

const {Navigator, Screen} = createStackNavigator<ProfileStackParamList>();

export const ProfileStack = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name="Profile" component={Profile} />
      <Screen name="GenericWebView" component={GenericWebview} />
      <Screen name="Logout" component={Logout} />
    </Navigator>
  );
};
