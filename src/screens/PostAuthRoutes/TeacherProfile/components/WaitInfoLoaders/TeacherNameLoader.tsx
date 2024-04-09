import React from 'react';
import ContentLoader, {Rect, Circle} from 'react-content-loader/native';
import {useTheme} from 'styled-components/native';

export const TeacherNameLoader = () => {
  const {palette} = useTheme();

  return (
    <ContentLoader
      speed={2}
      width={200}
      height={100}
      style={{marginTop: 30}}
      viewBox="0 0 200 100"
      backgroundColor={palette.loaderPrimary}
      foregroundColor={palette.loaderSecondary}>
      <Rect x="8" y="57" rx="3" ry="3" width="178" height="16" />
      <Circle cx="96" cy="22" r="20" />
    </ContentLoader>
  );
};
