import {Pressable} from 'react-native';
import styled from 'styled-components/native';

interface ButtonProps {
  styleType: 'primary' | 'secondary';
}

export const PressableContainer = styled(Pressable)<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({theme, styleType: type}) =>
    type === 'primary'
      ? theme.palette.primaryColor
      : theme.palette.fontIconBackgroundColor};
  border-radius: 32px;
  height: 50px;
  width: 100%;
`;

export const ButtonTitle = styled.Text<ButtonProps>`
  color: ${({theme, styleType}) =>
    styleType === 'primary'
      ? theme.palette.fontIconBackgroundColor
      : theme.palette.primaryColor};
  font-weight: bold;
  font-size: 16px;
  font-family: 'Nunito-Bold';
`;
