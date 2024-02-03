import React from 'react';
import {
  BodyInfosContainerStyled,
  ContainerStyled,
  FooterContainerStyled,
  HeaderContainerStyled,
  HeaderIconStyled,
  HeaderTextStyled,
  TipImageStyled,
  TipTextStyled,
} from './styles';
import {Pressable} from 'react-native';
import {assets} from '../../../../../assets';
import {MainButton} from '../../../../../components/Buttons';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {useTheme} from 'styled-components/native';
import {Helpers} from '../../../../../helpers';
import {useRegisterFrequencyContext} from '../../../../../contexts/RegisterFrequency';

interface QrCodeTipsProps {
  onBackPress: () => void;
  onStartPress: () => void;
}

export const QrCodeTips = ({onBackPress, onStartPress}: QrCodeTipsProps) => {
  const currentTheme = useTheme();
  const {saveTipConfig} = useRegisterFrequencyContext();

  return (
    <ContainerStyled>
      <HeaderContainerStyled>
        <Pressable onPress={onBackPress}>
          <HeaderIconStyled showBackIcon source={assets.general.backIcon} />
        </Pressable>
        <HeaderTextStyled>Faça a leitura do QrCode</HeaderTextStyled>
        <HeaderIconStyled source={assets.general.backIcon} />
      </HeaderContainerStyled>
      <BodyInfosContainerStyled>
        <TipImageStyled source={assets.registerFrequency.qrCodeTip} />
        <TipTextStyled>
          Faça a leitura do QRCode disponibilizado pelo seu professor para
          validar sua presença
        </TipTextStyled>
        <BouncyCheckbox
          size={23}
          fillColor={currentTheme.palette.surface3}
          unfillColor={currentTheme.palette.surface1}
          text="Não mostrar novamente"
          textStyle={{
            fontSize: 14,
            color: currentTheme.typography.p.color,
            marginLeft: -10,
            textDecorationLine: 'none',
          }}
          onPress={(isChecked: boolean) => {
            saveTipConfig(isChecked);
            Helpers.Feedbacks.triggerFeedback('impactLight');
          }}
        />
      </BodyInfosContainerStyled>
      <FooterContainerStyled>
        <MainButton onPress={onStartPress} text="Iniciar" type="secondary" />
      </FooterContainerStyled>
    </ContainerStyled>
  );
};
