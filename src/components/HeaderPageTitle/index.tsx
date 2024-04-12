import React from 'react';
import {HeaderContainerStyled, TitleText} from './styles';
interface HeaderPageTitleProps {
  pageTitle: string;
}

const HeaderPageTitle = ({pageTitle}: HeaderPageTitleProps) => {
  return (
    <HeaderContainerStyled>
      <TitleText>{pageTitle}</TitleText>
    </HeaderContainerStyled>
  );
};

export default HeaderPageTitle;
