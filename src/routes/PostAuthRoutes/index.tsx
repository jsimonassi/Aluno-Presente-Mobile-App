import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {MainTab} from './MainTab';
import {PostAuthRoutesParamList} from '../../types/app/route/PostAuthRoutes';

const {Navigator, Screen} = createStackNavigator<PostAuthRoutesParamList>();

export const PostAuthRoutes = () => {
  //   const permissionStore = usePermissionContext();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
        animationEnabled: true,
      }}
      initialRouteName={'MainTab'}>
      <Screen name="MainTab" component={MainTab} />

      {/* <Screen name="HomeStack" component={HomeStack} />
      <Screen name="ProfileStack" component={ProfileStack} /> */}
    </Navigator>
  );
};
