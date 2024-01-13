import React from 'react';
import {
  HeaderContainerStyled,
  InfoGroupStyled,
  ProfileImageStyled,
} from './styles';
import {MainText, SecondaryText} from '../../../../../components/Text';
import {useTheme} from 'styled-components';
import {Pressable} from 'react-native';
import {useSessionContext} from '../../../../../contexts/Session';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {PostAuthRoutesParamList} from '../../../../../types/app/route';

const Header = () => {
  const currentTheme = useTheme();
  const {currentSession} = useSessionContext();
  const navigator =
    useNavigation<StackNavigationProp<PostAuthRoutesParamList>>();

  return (
    <Pressable
      onPress={() => navigator.navigate('ProfileStack', {screen: 'Profile'})}>
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
            {currentSession?.currentUser.name[0]}
          </MainText>
        </ProfileImageStyled>
        <InfoGroupStyled>
          <SecondaryText style={{fontSize: 20, fontWeight: 'bold'}}>
            Olá, {currentSession?.currentUser.name.split(' ')[0]}
          </SecondaryText>
          {/* TODO: Get info from Backend */}
          <SecondaryText>Universidade Federal Fluminense</SecondaryText>
        </InfoGroupStyled>
      </HeaderContainerStyled>
    </Pressable>
  );
};

export default Header;
