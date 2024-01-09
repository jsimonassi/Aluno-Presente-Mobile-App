import React from 'react';
import {
  CardContainerStyled,
  TitleStyled,
  SubtitleStyled,
  TitleContainerStyled,
} from './styles';

import 'moment/locale/pt-br';

export const CustomCalendar = () => {
  return (
    <CardContainerStyled>
      <TitleContainerStyled>
        <TitleStyled>Aulas</TitleStyled>
        <SubtitleStyled> Esta semana</SubtitleStyled>
      </TitleContainerStyled>
    </CardContainerStyled>
  );
};
