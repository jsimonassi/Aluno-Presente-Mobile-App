import React from 'react';
import {ButtonTitle, PressableContainer} from './styles';
import {Helpers} from '../../../helpers';
import {ActivityIndicator} from 'react-native';
import {useTheme} from 'styled-components/native';

interface OwnProps {
  text: string;
  onPress: () => void;
  type?: 'primary' | 'secondary';
  disabled?: boolean;
  border?: boolean;
  loading?: boolean;
}

export const MainButton = ({
  text,
  onPress,
  type = 'primary',
  disabled = false,
  border = false,
  loading = true,
}: OwnProps) => {
  const theme = useTheme();

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
      border={border}
      styleType={type}
      style={({pressed}) => ({
        opacity: disabled ? 0.5 : pressed ? 0.9 : 1,
      })}>
      <ButtonTitle styleType={type} border={border}>
        {text}
      </ButtonTitle>
      {loading && (
        <ActivityIndicator
          size="small"
          style={{marginLeft: 4}}
          color={
            type === 'secondary'
              ? theme.palette.primaryColor
              : theme.palette.fontIconBackgroundColor
          }
        />
      )}
    </PressableContainer>
  );
};
