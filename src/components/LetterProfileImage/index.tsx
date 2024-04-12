import React from 'react';
import {useTheme} from 'styled-components/native';
import {MainText} from '../Text';
import {ProfileImageStyled} from './styles';

interface LetterProfileImageProps {
  name: string;
}

export const LetterProfileImage = ({name}: LetterProfileImageProps) => {
  const currentTheme = useTheme();

  return (
    <ProfileImageStyled>
      <MainText
        style={{
          fontSize: 40,
          fontWeight: 'normal',
          width: 60,
          height: 60,
          textAlign: 'center',
          textAlignVertical: 'center',
          color: currentTheme.palette.fontIconColor,
        }}>
        {name[0]}
      </MainText>
    </ProfileImageStyled>
  );
};
