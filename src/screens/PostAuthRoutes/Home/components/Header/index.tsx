import React from 'react';
import {
  HeaderContainerStyled,
  InfoGroupStyled,
  ProfileImageStyled,
} from './styles';
import {assets} from '../../../../../assets';
import {User} from '../../../../../types/api/User';
import {SecondaryText} from '../../../../../components/Text';

interface OwnProps {
  currentUser: User;
}

const Header = (props: OwnProps) => {
  return (
    <HeaderContainerStyled>
      <ProfileImageStyled source={assets.home.profileDisabled} />
      <InfoGroupStyled>
        <SecondaryText style={{fontSize: 20, fontWeight: 'bold'}}>
          Olá, {props.currentUser.name.split(' ')[0]}
        </SecondaryText>
        <SecondaryText>{props.currentUser.school}</SecondaryText>
      </InfoGroupStyled>
    </HeaderContainerStyled>
  );
};

export default Header;
