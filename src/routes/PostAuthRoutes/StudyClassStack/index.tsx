import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {AboutClass} from '../../../screens';
import {StudyClassStackParamList} from '../../../types/app/route';

const {Navigator, Screen} = createStackNavigator<StudyClassStackParamList>();

export const StudyClassStack = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name="AboutClass" component={AboutClass} />
    </Navigator>
  );
};
