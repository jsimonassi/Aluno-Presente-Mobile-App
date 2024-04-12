import React from 'react';
import {
  ButtonContainerStyled,
  ContainerStyled,
  ImageContainerStyled,
  ImageStyled,
  TipTextStyled,
  TitleContainerStyled,
  TitleStyled,
} from './styles';
import {MainButton} from '../../../../../components/Buttons';
import {assets} from '../../../../../assets';
import {RegisterFrequencyStep} from '../../../../../types/app/registerFrequencyStep';

interface ErrorInfoProps {
  onTryAgain: () => void;
  onGoToHome: () => void;
  errorType:
    | RegisterFrequencyStep.GENERIC_ERROR
    | RegisterFrequencyStep.GPS_ERROR;
}

export const ErrorInfo = ({
  errorType,
  onTryAgain,
  onGoToHome,
}: ErrorInfoProps) => {
  return (
    <ContainerStyled>
      <TitleContainerStyled
        type={
          errorType === RegisterFrequencyStep.GENERIC_ERROR ? 'small' : 'big'
        }>
        <TitleStyled>
          {errorType === RegisterFrequencyStep.GENERIC_ERROR
            ? 'Ocorreu um erro ao confirmar sua presença!'
            : 'Sua localização não pode ser confirmada!'}
        </TitleStyled>
        {errorType === RegisterFrequencyStep.GPS_ERROR && (
          <>
            <TipTextStyled> Possíveis soluções:</TipTextStyled>
            <TipTextStyled>
              - Verifique se você está próximo do local de aula definido pelo
              professor;
            </TipTextStyled>
            <TipTextStyled>
              - Verifique se a localização do seu dispositivo está ativada;
            </TipTextStyled>
            <TipTextStyled>
              - Verifique se as permissões de localização estão ativadas para o
              app
            </TipTextStyled>
          </>
        )}
      </TitleContainerStyled>
      <ImageContainerStyled>
        <ImageStyled source={assets.registerFrequency.registerFrequencyError} />
      </ImageContainerStyled>
      <ButtonContainerStyled>
        <MainButton text="Tentar novamente" onPress={onTryAgain} />
        <MainButton
          text="Início"
          onPress={onGoToHome}
          border
          type="secondary"
        />
      </ButtonContainerStyled>
    </ContainerStyled>
  );
};
