import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {useTheme} from 'styled-components/native';

interface OwnProps {
  children: React.ReactNode;
}

export const GradientBackground = ({children}: OwnProps) => {
  const appTheme = useTheme();

  return (
    <LinearGradient
      colors={[
        appTheme.palette.gradientBgStart,
        appTheme.palette.gradientBgEnd,
      ]}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={{flex: 1, width: '100%'}}>
      {children}
    </LinearGradient>
  );
};
