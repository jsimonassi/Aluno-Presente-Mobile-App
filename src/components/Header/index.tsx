import React from 'react';
import {HeaderContainerStyled, InfoGroupStyled} from './styles';
import {SecondaryText} from '../Text';
import {Pressable} from 'react-native';
import {useSessionContext} from '../../contexts/Session';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {PostAuthRoutesParamList} from '../../types/app/route';
import {LetterProfileImage} from '../LetterProfileImage';
import {Helpers} from '../../helpers';

interface HeaderProps {
  welcomeStyle?: boolean;
}

const Header = ({welcomeStyle = true}: HeaderProps) => {
  const {currentSession} = useSessionContext();
  const navigator =
    useNavigation<StackNavigationProp<PostAuthRoutesParamList>>();

  return (
    <Pressable
      onPress={() => navigator.navigate('ProfileStack', {screen: 'Profile'})}>
      <HeaderContainerStyled>
        <LetterProfileImage name={currentSession?.currentUser.name ?? '-'} />
        <InfoGroupStyled>
          {welcomeStyle ? (
            <SecondaryText style={{fontSize: 20, fontWeight: 'bold'}}>
              Olá, {currentSession?.currentUser.name.split(' ')[0]}
            </SecondaryText>
          ) : (
            <SecondaryText style={{fontSize: 20, fontWeight: 'bold'}}>
              {Helpers.String.truncateString(
                currentSession?.currentUser.name ?? '',
                20,
              )}
            </SecondaryText>
          )}
          <SecondaryText>Universidade Federal Fluminense</SecondaryText>
        </InfoGroupStyled>
      </HeaderContainerStyled>
    </Pressable>
  );
};

export default Header;
