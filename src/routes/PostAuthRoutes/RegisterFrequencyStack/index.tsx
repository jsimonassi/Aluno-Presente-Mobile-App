import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {AboutClass, RegisterFrequencyFlux} from '../../../screens';
import {RegisterFrequencyStackParamList} from '../../../types/app/route';

const {Navigator, Screen} =
  createStackNavigator<RegisterFrequencyStackParamList>();

export const RegisterFrequencyStack = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name="AboutClass" component={AboutClass} />
      <Screen name="RegisterFrequencyFlux" component={RegisterFrequencyFlux} />
    </Navigator>
  );
};
