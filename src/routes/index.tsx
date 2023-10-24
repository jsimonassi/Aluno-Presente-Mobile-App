import {
  NavigationContainer,
  NavigationContainerRef,
  useNavigationContainerRef,
  DefaultTheme,
} from '@react-navigation/native';
import React, {useRef} from 'react';
import {MainRouter} from './MainRouter';
import {useTheme} from 'styled-components';

export const RouterContainer = () => {
  const navigationRef =
    useNavigationContainerRef<NavigationContainerRef<object>>();
  const routeNameRef = useRef<string | null>(null);

  const appTheme = useTheme();

  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: appTheme.palette.background,
        },
      }}
      ref={navigationRef}
      onReady={() => {
        routeNameRef.current = navigationRef.getCurrentRoute()?.name ?? null;
      }}
      onStateChange={async () => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = navigationRef.getCurrentRoute()?.name ?? null;

        if (
          currentRouteName !== null &&
          previousRouteName !== currentRouteName
        ) {
          routeNameRef.current = currentRouteName;
        }
      }}>
      <MainRouter />
    </NavigationContainer>
  );
};
