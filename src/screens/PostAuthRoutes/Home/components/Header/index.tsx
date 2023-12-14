import React from 'react';
import {
  HeaderContainerStyled,
  InfoGroupStyled,
  ProfileImageStyled,
} from './styles';
import {MainText, SecondaryText} from '../../../../../components/Text';
import {User} from '../../../../../types/api/Session';
import {useTheme} from 'styled-components';
import {Pressable} from 'react-native';

interface OwnProps {
  currentUser: User;
  onPress: () => void;
}

const Header = (props: OwnProps) => {
  const currentTheme = useTheme();

  return (
    <Pressable onPress={props.onPress}>
      <HeaderContainerStyled>
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
            {props.currentUser.name[0]}
          </MainText>
        </ProfileImageStyled>
        <InfoGroupStyled>
          <SecondaryText style={{fontSize: 20, fontWeight: 'bold'}}>
            Olá, {props.currentUser.name.split(' ')[0]}
          </SecondaryText>
          {/* TODO: Get info from Backend */}
          <SecondaryText>Universidade Federal Fluminense</SecondaryText>
        </InfoGroupStyled>
      </HeaderContainerStyled>
    </Pressable>
  );
};

export default Header;
