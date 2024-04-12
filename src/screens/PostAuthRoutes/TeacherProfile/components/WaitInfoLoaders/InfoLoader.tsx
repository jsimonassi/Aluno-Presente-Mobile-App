import React from 'react';
import ContentLoader, {Rect} from 'react-content-loader/native';
import {useTheme} from 'styled-components/native';

export const InfoLoader = () => {
  const {palette} = useTheme();

  return (
    <ContentLoader
      speed={2}
      width={300}
      height={90}
      viewBox="0 0 300 90"
      style={{marginTop: 20, marginLeft: 20}}
      backgroundColor={palette.surface1}
      foregroundColor={palette.surface2}>
      <Rect x="0" y="0" rx="3" ry="3" width="150" height="11" />
      <Rect x="18" y="52" rx="3" ry="3" width="304" height="11" />
      <Rect x="18" y="23" rx="3" ry="3" width="304" height="24" />
    </ContentLoader>
  );
};
