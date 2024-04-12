import React from 'react';
import ContentLoader, {Rect, Circle} from 'react-content-loader/native';
import {useTheme} from 'styled-components/native';

export const DetailedFrequencyLoader = () => {
  const {palette} = useTheme();

  return (
    <ContentLoader
      speed={2}
      width={400}
      height={250}
      viewBox="0 0 400 250"
      backgroundColor={palette.surface1}
      foregroundColor={palette.surface2}>
      <Circle cx="26" cy="178" r="8" />
      <Rect x="40" y="175" rx="5" ry="5" width="280" height="10" />
      <Circle cx="26" cy="208" r="8" />
      <Rect x="40" y="205" rx="5" ry="5" width="280" height="10" />
      <Circle cx="26" cy="238" r="8" />
      <Rect x="40" y="235" rx="5" ry="5" width="280" height="10" />
      <Rect x="18" y="26" rx="0" ry="0" width="300" height="134" />
      <Rect x="7" y="0" rx="0" ry="0" width="139" height="14" />
    </ContentLoader>
  );
};
