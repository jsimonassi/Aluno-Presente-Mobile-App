import React from 'react';
import {ButtonTitle, PressableContainer} from './styles';

interface OwnProps {
  text: string;
  onPress: () => void;
  type?: 'primary' | 'secondary';
}

export const MainButton = ({text, onPress, type = 'primary'}: OwnProps) => {
  return (
    <PressableContainer onPress={onPress} styleType={type}>
      <ButtonTitle styleType={type}>{text}</ButtonTitle>
    </PressableContainer>
  );
};
