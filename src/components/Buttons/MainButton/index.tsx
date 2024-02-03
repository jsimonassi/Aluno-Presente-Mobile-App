import React from 'react';
import {ButtonTitle, PressableContainer} from './styles';
import {Helpers} from '../../../helpers';

interface OwnProps {
  text: string;
  onPress: () => void;
  type?: 'primary' | 'secondary';
  disabled?: boolean;
}

export const MainButton = ({
  text,
  onPress,
  type = 'primary',
  disabled = false,
}: OwnProps) => {
  return (
    <PressableContainer
      onPress={() => {
        if (disabled) {
          Helpers.Feedbacks.triggerFeedback('impactHeavy');
          return;
        }
        Helpers.Feedbacks.triggerFeedback('impactLight');
        onPress();
      }}
      styleType={type}
      style={({pressed}) => ({
        opacity: disabled ? 0.5 : pressed ? 0.9 : 1,
      })}>
      <ButtonTitle styleType={type}>{text}</ButtonTitle>
    </PressableContainer>
  );
};
