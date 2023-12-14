import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Profile} from '../../../screens';
import {ProfileStackParamList} from '../../../types/app/route';

const {Navigator, Screen} = createStackNavigator<ProfileStackParamList>();

export const ProfileStack = () => {
  return (
    <Navigator>
      <Screen name="Profile" component={Profile} />
    </Navigator>
  );
};
