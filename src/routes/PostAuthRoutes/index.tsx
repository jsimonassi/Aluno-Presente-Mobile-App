import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {MainTab} from './MainTab';
import {PostAuthRoutesParamList} from '../../types/app/route';
import {ProfileStack} from './ProfileStack';
import {RegisterFrequencyStack} from './RegisterFrequencyStack';
import {PermissionsStack} from './PermissionsStack';

const {Navigator, Screen} = createStackNavigator<PostAuthRoutesParamList>();

export const PostAuthRoutes = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
        animationEnabled: true,
      }}
      initialRouteName={'MainTab'}>
      <Screen name="MainTab" component={MainTab} />
      <Screen name="ProfileStack" component={ProfileStack} />
      <Screen name="StudyClassStack" component={RegisterFrequencyStack} />
      <Screen name="PermissionsStack" component={PermissionsStack} />
    </Navigator>
  );
};
