import React from 'react';
import {
  ButtonContainerStyled,
  ContainerStyled,
  ImageContainerStyled,
  ImageStyled,
  TitleContainerStyled,
  TitleStyled,
} from './styles';
import {MainButton} from '../../../../../components/Buttons';
import {assets} from '../../../../../assets';

interface ErrorInfoProps {
  onGoToHome: () => void;
}

export const SuccessInfo = ({onGoToHome}: ErrorInfoProps) => {
  return (
    <ContainerStyled>
      <TitleContainerStyled>
        <TitleStyled>Presença confirmada!</TitleStyled>
      </TitleContainerStyled>
      <ImageContainerStyled>
        <ImageStyled source={assets.registerFrequency.successInfoImage} />
      </ImageContainerStyled>
      <ButtonContainerStyled>
        <MainButton text="Início" onPress={onGoToHome} />
      </ButtonContainerStyled>
    </ContainerStyled>
  );
};
