import React from 'react';
import {ButtonTitle, PressableContainer} from './styles';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

interface OwnProps {
  text: string;
  onPress: () => void;
  type?: 'primary' | 'secondary';
}

export const MainButton = ({text, onPress, type = 'primary'}: OwnProps) => {
  return (
    <PressableContainer
      onPress={() => {
        ReactNativeHapticFeedback.trigger('impactLight', options);
        onPress();
      }}
      styleType={type}
      style={({pressed}) => ({
        opacity: pressed ? 0.9 : 1,
      })}>
      <ButtonTitle styleType={type}>{text}</ButtonTitle>
    </PressableContainer>
  );
};
