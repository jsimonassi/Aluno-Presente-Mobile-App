import React from 'react';
import {assets} from '../../assets';
import {Pressable} from 'react-native';
import {
  HeaderContainerStyled,
  HeaderIconStyled,
  HeaderTextStyled,
} from './styles';

interface PageTitleProps {
  title: string;
  onBackPress: () => void;
  showBackIcon?: boolean;
}

export const PageTitle = ({
  title,
  onBackPress,
  showBackIcon,
}: PageTitleProps) => {
  return (
    <HeaderContainerStyled>
      <Pressable onPress={onBackPress}>
        <HeaderIconStyled
          showBackIcon={showBackIcon}
          source={assets.general.backIcon}
        />
      </Pressable>
      <HeaderTextStyled>{title}</HeaderTextStyled>
      <HeaderIconStyled source={assets.general.backIcon} />
    </HeaderContainerStyled>
  );
};
