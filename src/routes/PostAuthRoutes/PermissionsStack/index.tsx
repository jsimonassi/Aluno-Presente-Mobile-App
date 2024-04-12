import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {PermissionsStackParamList} from '../../../types/app/route';
import {
  CameraPermission,
  LocationPermission,
} from '../../../screens/PostAuthRoutes/Permissions';
import {usePermissionContext} from '../../../contexts/Permission';

const {Navigator, Screen} = createStackNavigator<PermissionsStackParamList>();

export const PermissionsStack = () => {
  const {getNextNavigationScreen, permissionsToRequest} =
    usePermissionContext();
  return (
    <Navigator
      initialRouteName={
        getNextNavigationScreen(permissionsToRequest) ?? 'CameraPermission'
      }
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name="CameraPermission" component={CameraPermission} />
      <Screen name="LocationPermission" component={LocationPermission} />
    </Navigator>
  );
};
