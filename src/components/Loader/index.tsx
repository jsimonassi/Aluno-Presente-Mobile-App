import LottieView from 'lottie-react-native';
import React from 'react';

export const Loader = () => {
  return (
    <LottieView
      style={{width: 100, height: 100}}
      source={require('../../assets/lotties/loading.json')}
      autoPlay
      loop
      speed={3}
    />
  );
};
