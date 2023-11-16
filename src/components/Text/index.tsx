import React from 'react';
import {TextProps} from 'react-native';
import {SecondaryTextStyled, TextStyled} from './styles';

interface MainTextProps extends TextProps {
  children: React.ReactNode;
  title?: boolean;
}

export const MainText = (props: MainTextProps) => {
  return <TextStyled {...props}>{props.children}</TextStyled>;
};

export const SecondaryText = (props: TextProps) => {
  return <SecondaryTextStyled {...props}>{props.children}</SecondaryTextStyled>;
};
