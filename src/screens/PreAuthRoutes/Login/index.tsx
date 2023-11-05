/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {MainText} from '../../../components/Text';
import {GradientBackground} from '../../../components/Background';
import {Container} from './styles';
import {View} from 'react-native';
import {MainButton} from '../../../components/Buttons';
import {Constants} from '../../../constants';
import {useTheme} from 'styled-components/native';
import {PresentationCarrousel} from './components/PresentationCarrousel';

export const Login = () => {
  const appTheme = useTheme();

  return (
    <GradientBackground>
      <Container>
        <View>
          <PresentationCarrousel />
          <MainText
            style={{
              color: appTheme.palette.fontIconBackgroundColor,
              fontSize: 18,
              textAlign: 'center',
              marginHorizontal: 80,
            }}>
            {Constants.MESSAGES.LOGIN_MESSAGES.PRESENTATION}
          </MainText>
        </View>
        <MainButton text="Iniciar" onPress={() => null} type="secondary" />
      </Container>
    </GradientBackground>
  );
};
