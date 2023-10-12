import React from 'react';
import {TextProps} from 'react-native';
import {SecondaryTextStyled, TextStyled} from './styles';

export const MainText = (props: TextProps) => {
  return <TextStyled {...props}>{props.children}</TextStyled>;
};

export const SecondaryText = (props: TextProps) => {
  return <SecondaryTextStyled {...props}>{props.children}</SecondaryTextStyled>;
};
