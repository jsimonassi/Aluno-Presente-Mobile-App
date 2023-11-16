/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, useWindowDimensions} from 'react-native';
import {interpolate} from 'react-native-reanimated';
import Carousel from 'react-native-reanimated-carousel';
import {ImageStyled} from './styles';
import {assets} from '../../../../../assets';

export const PresentationCarrousel = () => {
  const {width} = useWindowDimensions();

  const imageData = [
    assets.login.slide01,
    assets.login.slide02,
    assets.login.slide03,
    assets.login.slide04,
  ];

  const animationStyle = React.useCallback((value: number) => {
    'worklet';

    const zIndex = interpolate(value, [-1, 0, 1], [10, 20, 30]);
    const scale = interpolate(value, [-1, 0, 1], [1.25, 1, 0.25]);
    const opacity = interpolate(value, [-0.75, 0, 1], [0, 1, 0]);

    return {
      transform: [{scale}],
      zIndex,
      opacity,
    };
  }, []);

  return (
    <Carousel
      style={{
        width: width,
        height: 300,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      width={width}
      height={200}
      autoPlay
      loop
      enabled={false}
      scrollAnimationDuration={2000}
      data={imageData}
      customAnimation={animationStyle}
      renderItem={({index}) => (
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: width,
            height: 180,
          }}>
          <ImageStyled source={imageData[index]} resizeMode="contain" />
        </View>
      )}
    />
  );
};
