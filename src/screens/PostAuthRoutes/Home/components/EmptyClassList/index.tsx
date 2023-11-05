import React from 'react';
import {EmptyClassListContainerStyled, LogoImageStyled} from './styles';
import {MainText} from '../../../../../components/Text';
import {assets} from '../../../../../assets';

const EmptyClassList = () => {
  return (
    <EmptyClassListContainerStyled>
      <LogoImageStyled source={assets.home.noData} />
      <MainText style={{fontSize: 20, fontWeight: 'bold'}} title>
        Nenhuma disciplina encontrada!
      </MainText>
      <MainText style={{fontSize: 14, textAlign: 'center'}}>
        Use o código da disciplina para acessar sua turma ou importe suas turmas
        do classroom
      </MainText>
    </EmptyClassListContainerStyled>
  );
};

export default EmptyClassList;
